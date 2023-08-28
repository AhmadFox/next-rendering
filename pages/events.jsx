import React, { useState } from 'react';

import EventCard from "@/components/event/EventCard";
import Section from "@/components/ui/Section";

const Events = ({ eventList }) => {

  const [eventListFilter, setEventListFilter] = useState(eventList);

  const fetchSportEvent = async () => {
    const res = await fetch(`https://next-server-two.vercel.app/eventts?category=sport`);
    const data = await res.json();
    setEventListFilter(data)

  }

  return (
    <Section styled={'py-7'}>
        <button onClick={fetchSportEvent} className="py-3 px-6 rounded-sm bg-cyan-400 text-slate-800 hover:bg-cyan-300 text-sm font-semibold mb-6 ease-in-out duration-300">Sport</button>
        <div className="grid grid-cols-12 md:grid-cols-4 xl:grid-cols-3 gap-2 md:gap-4 xl:gap-6">
          {
            eventListFilter.map((event) => (
                <EventCard event={event}  />
            ))
          }
        </div>
    </Section>
  )
}

export default Events;

export async function getServerSideProps() {
    const res = await fetch(`https://next-server-two.vercel.app/eventts`);
    const data = await res.json();

    return {
        props: {
            eventList: data
        }
    }
}
