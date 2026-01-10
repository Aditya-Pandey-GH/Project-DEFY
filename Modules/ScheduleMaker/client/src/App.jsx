import { useState, useEffect } from "react";
import PathSelection from "./pages/PathSelection";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./components/Chatbot";
import { getPlan } from "./api/api";

function App() {
  const [currentPlan, setCurrentPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if there's a saved plan ID in localStorage
    const savedPlanId = localStorage.getItem("currentPlanId");
    if (savedPlanId) {
      loadPlan(savedPlanId);
    }
  }, []);

  const loadPlan = async (planId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getPlan(planId);
      if (response.success && response.plan) {
        setCurrentPlan(response.plan);
        localStorage.setItem("currentPlanId", planId);
      }
    } catch (err) {
      setError(err.error || "Failed to load plan");
      localStorage.removeItem("currentPlanId");
    } finally {
      setLoading(false);
    }
  };

  const handlePlanCreated = (plan) => {
    setCurrentPlan(plan);
    localStorage.setItem("currentPlanId", plan._id || plan.id);
    setError(null);
  };

  const handlePlanUpdated = (plan) => {
    setCurrentPlan(plan);
    localStorage.setItem("currentPlanId", plan._id || plan.id);
  };

  const handleCreateNew = () => {
    setCurrentPlan(null);
    localStorage.removeItem("currentPlanId");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-dark-300">Loading your plan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 relative">
      {error && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-900/90 border-2 border-red-700 text-red-200 px-6 py-3 rounded-lg shadow-glow-lg z-[100000] max-w-md">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <div className="flex-1">
              <p className="font-semibold">{error}</p>
              <button
                onClick={() => setError(null)}
                className="text-sm underline hover:text-red-100 mt-1"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {!currentPlan ? (
        <PathSelection onPlanCreated={handlePlanCreated} />
      ) : (
        <>
          <Dashboard
            plan={currentPlan}
            onPlanUpdated={handlePlanUpdated}
            onCreateNew={handleCreateNew}
          />
          <Chatbot plan={currentPlan} onPlanUpdated={handlePlanUpdated} />
        </>
      )}
    </div>
  );
}

export default App;
