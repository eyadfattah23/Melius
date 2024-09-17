/**
 * countLevel - Determines the user's level based on the number of days.
 * 
 * This function takes a number of days as input and returns a corresponding level 
 * based on predefined thresholds. The levels range from -1 to 6, where each level 
 * represents a different stage of progress, with -1 indicating that the progress 
 * is below the minimum threshold (3 days).
 */
const countLevel = (days) => {
    if (days >= 365) return 6;
    if (days > 90) return 5;
    if (days > 60) return 4;
    if (days > 30) return 3;
    if (days > 15) return 2;
    if (days > 7) return 1;
    if (days > 3) return 0;
    else return -1
}
export default countLevel