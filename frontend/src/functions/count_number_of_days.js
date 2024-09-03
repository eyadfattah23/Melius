function countNumberOfDays(date) {
  if (date === null)
  {
    return null
  }
    const givenDate = new Date(date);
    const currentDate = new Date();
  
    const timeDifference = currentDate - givenDate;
  
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysDifference;
  }
export default countNumberOfDays