"use client";
import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // default styling

export default function Page() {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                </ul>
            </nav>            
            <h2>Selected Date: {date.toDateString()}</h2>
            <Calendar onChange={setDate} value={date} />
        </div>
    )
}