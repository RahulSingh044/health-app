'use client';
import React from 'react'
import { formatDate, DateSelectArg, EventClickArg, EventApi } from "@fullcalendar/core"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

function calendar() {
  return (
    <div className='px-12 mt-8 w-full text-blue-500'>
    <FullCalendar 
    height={"85vh"}
    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
     headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek'
    }}
    initialView='dayGridMonth'
    editable={true}
    selectable={true}
    /></div>
  )
}

export default calendar