function getDayName(dateString) {
    let dayName;
    // Write your code here
    let daynumber = new Date(dateString).getDay();
    if (daynumber === 0) { dayName = 'Sunday'; }
    if (daynumber === 1) { dayName = 'Monday'; }
    if (daynumber === 2) { dayName = 'Tuesday'; }
    if (daynumber === 3) { dayName = 'Wednesday'; }
    if (daynumber === 4) { dayName = 'Thursday'; }
    if (daynumber === 5) { dayName = 'Friday'; }
    if (daynumber === 6) { dayName = 'Saturday'; }

    return dayName;
}

/*    console.log("date: " + date);
    console.log("date.getDate(): " + date.getDate());
    console.log("date.getDay(): " + date.getDay());
    console.log("date.getFullYear(): " + date.getFullYear());
    console.log("date.getHours(): " + date.getHours());
    console.log("date.getMilliseconds(): " + date.getMilliseconds());
    console.log("date.getMinutes(): " + date.getMinutes());
    console.log("date.getMonth(): " + date.getMonth());
    console.log("date.getSeconds(): " + date.getSeconds());
    console.log("date.getTime(): " + date.getTime());
    console.log("date.getYear(): " + date.getYear());
    console.log("date.toDateString(): " + date.toDateString());

SEE: https://www.hackerrank.com/challenges/js10-date/topics/javascript-dates
    */
