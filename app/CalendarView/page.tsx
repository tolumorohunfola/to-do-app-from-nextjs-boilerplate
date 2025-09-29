"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
// import tasks from '../ToDoList/page.tsx';
import "react-calendar/dist/Calendar.css"; // default styling

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyApp() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default function Page() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <nav>
        <ul className="nav">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
      {/* <h2>Selected Date: {value.toString()}</h2> */}
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
