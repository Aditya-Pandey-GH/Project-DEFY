import StudyCard from './StudyCard';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

function WeeklySchedule({ plan, onPlanUpdated, selectedDay, onDaySelect }) {
  const schedule = plan?.schedule || [];
  const scheduleMap = new Map(schedule.map(day => [day.day, day]));

  const getSubjectColor = (subject) => {
    const colors = {
      'DSA': 'from-blue-500 to-blue-600',
      'Web Development': 'from-green-500 to-green-600',
      'Android Development': 'from-purple-500 to-purple-600',
      'AI-ML': 'from-pink-500 to-pink-600',
    };
    return colors[subject] || 'from-gray-500 to-gray-600';
  };

  const getSubjectBadgeColor = (subject) => {
    const colors = {
      'DSA': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Web Development': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Android Development': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'AI-ML': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    };
    return colors[subject] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-dark-100">Weekly Schedule</h2>
        <div className="text-sm text-dark-400">
          {plan?.weeklyHours || 0} hours/week
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {daysOfWeek.map((day) => {
          const daySchedule = scheduleMap.get(day) || { day, studyBlocks: [], totalMinutes: 0 };
          const isSelected = selectedDay === day;
          const dayMinutes = daySchedule.totalMinutes || daySchedule.studyBlocks?.reduce((sum, b) => sum + b.duration, 0) || 0;
          const dayHours = Math.round(dayMinutes / 60 * 10) / 10;

          return (
            <div
              key={day}
              className={`glass rounded-xl p-4 border-2 transition-all ${
                isSelected
                  ? 'border-primary-500 shadow-glow'
                  : 'border-dark-700 hover:border-dark-600'
              }`}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-dark-200">{day.slice(0, 3)}</h3>
                  <span className="text-xs text-dark-500">{dayHours}h</span>
                </div>
                <div className="h-1 bg-dark-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-600 to-primary-500 transition-all"
                    style={{ width: `${Math.min((dayMinutes / (plan?.weeklyHours * 60 || 1)) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-3 min-h-[200px]">
                {daySchedule.studyBlocks && daySchedule.studyBlocks.length > 0 ? (
                  daySchedule.studyBlocks.map((block, index) => (
                    <StudyCard
                      key={index}
                      block={block}
                      day={day}
                      blockIndex={index}
                      planId={plan._id || plan.id}
                      onPlanUpdated={onPlanUpdated}
                      subjectColor={getSubjectColor(block.subject)}
                      subjectBadgeColor={getSubjectBadgeColor(block.subject)}
                      onDaySelect={onDaySelect}
                    />
                  ))
                ) : (
                  <div className="text-center py-8 text-dark-500 text-sm">
                    No study blocks
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeeklySchedule;
