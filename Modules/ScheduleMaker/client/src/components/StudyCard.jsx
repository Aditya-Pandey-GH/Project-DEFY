import { useState } from "react";
import MCQModal from "./MCQModal";
import { markBlockComplete } from "../api/api";

function StudyCard({
  block,
  day,
  blockIndex,
  planId,
  onPlanUpdated,
  subjectColor,
  subjectBadgeColor,
  onDaySelect,
}) {
  const [showMCQ, setShowMCQ] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleProveClick = () => {
    if (block.completed) return;
    onDaySelect(day);
    setShowMCQ(true);
  };

  const handleMCQComplete = async (passed) => {
    try {
      setLoading(true);
      const response = await markBlockComplete(planId, day, blockIndex, passed);

      if (response.success && response.plan) {
        onPlanUpdated(response.plan);
      }

      setShowMCQ(false);
    } catch (error) {
      console.error("Error marking block complete:", error);
      alert("Failed to update. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatDuration = (minutes) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  return (
    <>
      <div
        className={`bg-gradient-to-br ${subjectColor} rounded-lg p-4 border border-white/10 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
          block.completed ? "opacity-60" : ""
        }`}
        onClick={handleProveClick}
      >
        <div className="flex items-start justify-between mb-2">
          <span
            className={`px-2 py-1 rounded text-xs font-semibold border ${subjectBadgeColor}`}
          >
            {block.subject}
          </span>
          {block.completed && <span className="text-green-300 text-lg">✓</span>}
        </div>

        <h4 className="text-white font-semibold text-sm mb-2 line-clamp-2">
          {block.topic}
        </h4>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/20">
          <span className="text-white/80 text-xs">
            {formatDuration(block.duration)}
          </span>
          {!block.completed && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleProveClick();
              }}
              className="text-xs px-3 py-1 bg-white/20 hover:bg-white/30 text-white rounded transition-all font-medium"
            >
              Practice
            </button>
          )}
        </div>
      </div>

      {showMCQ && (
        <MCQModal
          topic={block.topic}
          subject={block.subject}
          onComplete={handleMCQComplete}
          onClose={() => setShowMCQ(false)}
          loading={loading}
        />
      )}
    </>
  );
}

export default StudyCard;
