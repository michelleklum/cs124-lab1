import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const initialData = [
  {
    id: 1,
    listName: "Calls and Texts",
    listIcon: "phone",
    listTasks: [
      {
        id: 2,
        taskName: "Call Mom",
        taskDate: "03/11/2022",
        taskTime: "17:00",
        taskNotes: "",
        taskStatus: false,
      },
      {
        id: 3,
        taskName: "Move doctor's appointment",
        taskDate: "03/12/2022",
        taskTime: "10:00",
        taskNotes: "Reschedule to Saturday",
        taskStatus: false,
      },
      {
        id: 4,
        taskName: "Text John",
        taskDate: "03/15/2022",
        taskTime: "19:00",
        taskNotes: "",
        taskStatus: false,
      },
      {
        id: 5,
        taskName: "Text sister about Girl Scout cookies",
        taskDate: "03/17/2022",
        taskTime: "14:00",
        taskNotes: "Order Thin Mints",
        taskStatus: false,
      },
      {
        id: 6,
        taskName: "Call tax agent",
        taskDate: "03/19/2022",
        taskTime: "14:00",
        taskNotes: "",
        taskStatus: false,
      },
      {
        id: 7,
        taskName: "Call dentist for appointment",
        taskDate: "03/21/2022",
        taskTime: "11:00",
        taskNotes: "",
        taskStatus: false,
      },
      {
        id: 8,
        taskName: "Wish Grandma happy birthday",
        taskDate: "03/22/2022",
        taskTime: "13:00",
        taskNotes: "",
        taskStatus: false,
      },
    ],
  },
  {
    id: 9,
    listName: "Errands",
    listIcon: "carrot",
    listTasks: [
      {
        id: 10,
        taskName: "Buy eggs",
        taskDate: "03/09/2022",
        taskTime: "13:00",
        taskNotes: "Need 2 dozen",
        taskStatus: false,
      },
      {
        id: 11,
        taskName: "Return library books",
        taskDate: "03/11/2022",
        taskTime: "15:00",
        taskNotes: "",
        taskStatus: false,
      },
      {
        id: 12,
        taskName: "Pick up Whole Foods grocery order",
        taskDate: "03/12/2022",
        taskTime: "16:00",
        taskNotes: "",
        taskStatus: false,
      },
    ],
  },
  {
    id: 13,
    listName: "Shopping",
    listIcon: "shopping-basket",
    listTasks: [
    ],
  },
  {
    id: 14,
    listName: "Homework",
    listIcon: "book",
    listTasks: [
      {
        id: 15,
        taskName: "CS 124 Lab ahh",
        taskDate: "03/11/2022",
        taskTime: "15:00",
        taskNotes: "We got this!",
        taskStatus: false,
      },
    ],
  },
  {
    id: 16,
    listName: "Birthday Gifts",
    listIcon: "gifts",
    listTasks: [
    ],
  },
  {
    id: 17,
    listName: "Goals",
    listIcon: "seedling",
    listTasks: [
    ],
  },
    {
    id: 18,
    listName: "Events",
    listIcon: "list-alt",
    listTasks: [
    ],
  },
  {
    id: 19,
    listName: "Travel",
    listIcon: "globe-africa",
    listTasks: [
    ],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App initialData={initialData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
