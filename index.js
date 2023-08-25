//Write a function that takes a negative or positive integer, which represents the number of minutes before (-) or after (+) Sunday midnight, and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.



function dayAndTime(n) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const minsInDay = 24 * 60;
    const minsInWeek = 7 * minsInDay
    
    while (n < 0){
      n += minsInWeek
    } 
    
    while (n >= minsInWeek) {
      n -= minsInWeek
    }
  
   //calculate day and time
  const dayIndex = Math.floor(n/minsInDay);
  const timeMinutes = n  - (dayIndex * minsInDay);
  const hours = Math.floor(timeMinutes/60);
  const minutesOfDay = timeMinutes - (hours * 60)
  
  //format and return the result
  const day = daysOfWeek[dayIndex]
  const time = formatTime(hours, minutesOfDay)
  
    
    return `${day} ${time}`
}

function formatTime(hours, minutes){
  //format hours and minutes as 'hh:mm'
  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMins = minutes < 10 ? '0' + minutes : minutes;

  return `${formattedHours}:${formattedMins}`
}