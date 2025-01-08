import Announcement from "@/app/components/Announcement";
import BigCalendar from "@/app/components/BigCalendar";
import EventCalendar from "@/app/components/EventCalendar";
import React from "react";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold mb-3">Schedule B4</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default StudentPage;
