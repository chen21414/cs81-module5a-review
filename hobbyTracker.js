// This array stores one week of hobby sessions.
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// This function calculates the total number of minutes spent on all hobbies.
function totalTime(log) {
  // reduce() goes through each session and adds the minutes to the total (sum).
  // The 0 at the end means the total starts at zero.
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// This function returns a list of hobbies without duplicates.
function uniqueHobbies(log) {
  // map() creates a new array contains only the hobby names.
  const names = log.map(entry => entry.hobby);

  // Set removes duplicates, and [...] turns it back into an array.
  return [...new Set(names)];
}

// This function finds hobby sessions that are longer than the given minutes (minMinutes).
function longSessions(log, minMinutes) {
  // filter() filter out minutes which are greater than minMinutes.
  return log.filter(entry => entry.minutes > minMinutes);
}

// This function counts how many sessions match a specific mood.
function countMood(log, moodType) {
  // filter() goes through every object in the log array.
  // entry represents one object at a time.
  // entry.mood === moodType checks if that object's mood matches the mood we're looking for.
  // .length counts how many objects are in the filtered array.
  return log.filter(entry => entry.mood === moodType).length;
}


console.log("Total time spent:", totalTime(hobbyLog), "minutes");

console.log("Unique hobbies:", uniqueHobbies(hobbyLog));

console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));

console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

console.log("Focused sessions:", countMood(hobbyLog, "focused"));

// Suggestion for improvement:
// Make totalTime's reduce's parameter "sum" to "total" for eaiser reading and understanding in English.