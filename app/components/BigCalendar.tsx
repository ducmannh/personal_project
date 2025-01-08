"use client";
import React from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = React.useState<View>(Views.WEEK);
  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week", "day"]}
        view={view}
        style={{ height: 1500 }}
        onView={handleOnChangeView}
      />
    </div>
  );
};

export default BigCalendar;
