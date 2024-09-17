/**
 * formatDate - Formats a timestamp into a DD/MM/YYYY string.
 *
 * This function takes a timestamp, converts it into a JavaScript Date object, 
 * and returns the date formatted as a string in the format `DD/MM/YYYY`.
 */
function formatDate(timestamp) {
    const date = new Date(timestamp);
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}
export default formatDate