/**
 * daysBetween - Function to calculate the number of days between the given date and the current date.
 *
 * This function takes a date string as input, converts it to a `Date` object, and calculates the
 * difference in days between the input date and the current date. The result is rounded up and returned.
 * 
 */
function daysBetween(dateString) {
    // Parse the input date string to a Date object
    const givenDate = new Date(dateString);
    
    // Get the current date
    const currentDate = new Date();
    
    // Calculate the difference in time (in milliseconds)
    const timeDifference = Math.abs(currentDate - givenDate);
    
    // Convert the time difference from milliseconds to days
    const differenceInDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    
    return differenceInDays - 1;
}
export default daysBetween
