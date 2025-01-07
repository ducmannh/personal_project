import React from 'react'

const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur.",
    },
  ];

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Announcements</h1>
        <span className='text-xs text-gray-400'>View All</span>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div className="p-4 rounded-md bg-colorSkyLight" key={event.id}>
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{event.title}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">{event.time}</span>
            </div>
            <p className="mt-1 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Announcement