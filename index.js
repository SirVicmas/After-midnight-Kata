//Write a function that takes a negative or positive integer, which represents the number of minutes before (-) or after (+) Sunday midnight, and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.


// This function calculates and returns the day and time for a given number of minutes 'n' since the start of the week.
function dayAndTime(n) {
    // Array to represent days of the week.
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Constants for the number of minutes in a day and a week.
    const minsInDay = 24 * 60;
    const minsInWeek = 7 * minsInDay;
    
    // Ensure 'n' is within a valid range for a week by wrapping it if necessary.
    while (n < 0){
        n += minsInWeek;
    } 
    
    while (n >= minsInWeek) {
        n -= minsInWeek;
    }
    
    // Calculate the day and time components from 'n'.
    const dayIndex = Math.floor(n/minsInDay);  // Determine the day index.
    const timeMinutes = n - (dayIndex * minsInDay);  // Calculate remaining minutes of the day.
    const hours = Math.floor(timeMinutes/60);  // Calculate hours from remaining minutes.
    const minutesOfDay = timeMinutes - (hours * 60);  // Calculate minutes from remaining minutes.
    
    // Get the corresponding day name from the 'daysOfWeek' array.
    const day = daysOfWeek[dayIndex];
    
    // Format the time using the helper function 'formatTime'.
    const time = formatTime(hours, minutesOfDay);
    
    // Combine the day and time and return the result.
    return `${day} ${time}`;
}

// Helper function to format hours and minutes as 'hh:mm'.
function formatTime(hours, minutes){
    // Ensure single-digit hours and minutes are formatted with leading zeros.
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    // Combine formatted hours and minutes and return the result.
    return `${formattedHours}:${formattedMinutes}`;
}
