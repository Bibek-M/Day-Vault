import React, { useState } from "react";
import {JournalDot , TodoDot ,AllDot ,DiaryDot} from "./CompletedDots"
const WEEKDAYS: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Calendar(): React.JSX.Element {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const year: number = currentDate.getFullYear();
  const month: number = currentDate.getMonth();

  // 1. Get total days in the active month (e.g., 28, 30, 31)
  const daysInMonth: number = new Date(year, month + 1, 0).getDate();

  // 2. Find the weekday index of the first day (0 = Sunday, 6 = Saturday)
  const firstDayIndex: number = new Date(year, month, 1).getDay();

  // 3. Navigation Controls
  const handlePrevMonth = (): void => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = (): void => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day: number): void => {
    setSelectedDate(new Date(year, month, day));
  };

  // 4. Helper Matchers
  const isToday = (day: number): boolean => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };

  const isSelected = (day: number): boolean => {
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  return (
    <div className="mx-auto my-auto max-w-120 rounded-xl border border-slate-200 p-6 shadow-xl dark:border-slate-800 bg-[#EBE7DF] text-black">
      {/* Calendar Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-slate-800">
          {MONTHS[month]} {year}
        </h2>
        <button
          onClick={handlePrevMonth}
          className="rounded-lg border border-black font-extrabold text-2xl px-3 py-1.5 text-black hover:bg-slate-100 active:scale-95 dark:border-slate-70 dark:hover:bg-amber-300"
        >
          {"<"}
        </button>
        <button
          onClick={handleNextMonth}
          className="rounded-lg border border-black font-extrabold text-2xl px-3 py-1.5 text-black hover:bg-slate-100 active:scale-95 dark:border-slate-70 dark:hover:bg-amber-300"
        >
          {">"}
        </button>
      </div>

      {/* Weekday Labels Layout */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="pb-3 text-xs font-bold uppercase tracking-wider text-black"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Days Interactive Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Fill early weekday gaps */}
        {Array.from({ length: firstDayIndex }).map((_, index) => (
          <div
            key={`empty-${index}`}
            className="aspect-square bg-transparent"
          />
        ))}

        {/* Generate interactive month buttons */}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const dayNum = index + 1;
          const currentIsSelected = isSelected(dayNum);
          const currentIsToday = isToday(dayNum);

          return (
            <button
              key={dayNum}
              onClick={() => handleDateClick(dayNum)}
              className={`flex flex-col border p-0 m-0 border-gray-400 aspect-square items-center justify-center rounded text-sm font-medium transition-all active:scale-90
                ${
                  currentIsSelected
                    ? "bg-amber-300 text-black font-bold shadow-md shadow-blue-500/20"
                    : "hover:bg-slate-10 text-black dark:hover:bg-amber-300"
                }
                ${
                  currentIsToday && !currentIsSelected
                    ? "ring-2 ring-white bg-purple-400 ring-offset-2 font-bold text-black dark:ring-offset-slate-900 scale-110"
                    : ""
                }
              `}
            >
              <div className="flex items-center gap-1">
                <AllDot />
                {dayNum}
              </div>
              <div className="flex mt-1 gap-1">
                <TodoDot />
                <DiaryDot />
                <JournalDot />
              </div>
            </button>
          );
        })}
      </div>

      {/* Output Value Display */}
      <div className="mt-6 border-t pt-4 font-semibold flex items-center justify-evenly gap-2">
        <div className="font-semibold flex items-center gap-2">
          <JournalDot /> Journal
        </div>
        <div className="font-semibold flex items-center gap-2">
          <TodoDot /> Todo
        </div>
        <div className="font-semibold flex items-center gap-2">
          <DiaryDot/> Diary
        </div>
        <div className="font-semibold flex items-center gap-2">
          <AllDot /> All Completed
        </div>
      </div>
    </div>
  );
}