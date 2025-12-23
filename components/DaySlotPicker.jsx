"use client";

export default function DaySlotPicker({ onSelect }) {
  const totalDays = 28; // 4 Wochen
  const days = [];
  let currentDate = new Date();

  while (days.length < totalDays) {
    if (currentDate.getDay() !== 0) { // Sonntage überspringen
      days.push(new Date(currentDate));
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa"];

  return (
    <div>
      {/* Wochentage Header */}
      <div className="grid grid-cols-6 gap-2 mb-2 text-center font-bold">
        {weekdays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Tage Grid */}
      <div className="grid grid-cols-6 gap-2">
        {days.map((day) => {
          const isToday = day.toDateString() === new Date().toDateString();
          return (
            <button
              key={day.toISOString()}
              onClick={() => onSelect(day)}
              className={`
                p-2 rounded text-center text-sm
                border border-zinc-700
                hover:bg-zinc-500 hover:text-black transition
                ${isToday ? "bg-green-400 text-black font-bold" : ""}
              `}
            >
              <div className="text-lg">{day.getDate()}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
