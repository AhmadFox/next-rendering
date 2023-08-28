import React from 'react'

const EventCard = ({ event }) => {
  return (
    <div className="bg-slate-800 px-4 py-6 rounded-md flex flex-col gap-y-3 justify-between">
        <div className="">
            <div className="flex justify-between items-center">
                <p className="text-xl font-bold line-clamp-1 mb-4">{event.title}</p>
                <span className="px-4 rounded-full bg-slate-300 py-2 text-xs text-slate-700 font-bold flex items-center">{event.category}</span>
            </div>
            <p className="text-slate-300 text-sm line-clamp-3 mb-3">{event.discription}</p>
            <p className="text-sm line-clamp-3 text-cyan-600">{event.date}</p>
        </div>
        <button className="py-2 px-6 rounded-sm bg-cyan-600 hover:bg-cyan-500 text-slate-800 ease-in-out duration-300">Book Now</button>
    </div>
  )
}

export default EventCard
