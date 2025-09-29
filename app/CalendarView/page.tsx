"use client";
import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'devextreme/dist/css/dx.light.css';
import tasks from '../ToDoList/page.tsx';
import 'react-calendar/dist/Calendar.css'; // default styling

export default function Page() {
    const [date, setDate] = useState(new Date());
    const views = ['day', 'week', 'agenda'];

    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                </ul>
            </nav>            
            <h2>Selected Date: {date.toDateString()}</h2>
            <Calendar onChange={setDate} value={date} />
            <Scheduler views={views} currentView="day"></Scheduler>
        </div>
    )
}