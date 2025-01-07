import Announcement from "@/app/components/Announcement";
import EventCalendar from "@/app/components/EventCalendar";
import UserCard from "@/app/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3">
        {/* User Card */}
        <div className="flex gap-4 justify-between flex-wrap"> 
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parent" />
          <UserCard type="Staff" />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default AdminPage;
