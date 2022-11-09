import {
  cleanTab,
  addClass,
  addContainer,
  addText
} from "./index.js"

export function activateTabThree() {
  cleanTab()
  addContainer(".main-text", "triangle triangle-right")
  addClass(".tab-three", "active");

  addContainer(".main-text", "hours")
  addClass(".hours", "hours")

  createWeeklySchedule();

}

function createWeeklySchedule() {

  let weeklySchedule = {
    "Sunday": "8am - 2pm",
    "Monday": "5am - 4pm",
    "Tuesday": "5am - 4pm",
    "Wednesday": "5am - 4pm",
    "Thursday": "5am - 4pm",
    "Friday": "5am - 6pm",
    "Saturday": "5am - 4pm",
  }

  Object.keys(weeklySchedule).forEach(day => {
    let currentDay = day.toLowerCase()

    // create "<div class="day sunday"></div>"
    addContainer(".hours", `day ${currentDay}`)

    // create two divs inside the previous one, named "day-name" and day-hours
    addContainer(`.${currentDay}`, "day-name")
    addContainer(`.${currentDay}`, "day-hours") 

    addText(day, "day-name", `.${currentDay}`)
    addText(weeklySchedule[day], "day-hours", `.${currentDay}`) 


  });
}