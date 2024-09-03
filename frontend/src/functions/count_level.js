const countLevel = (days) => {
    if (days >= 365) return 6;
    if (days > 90) return 5;
    if (days > 60) return 4;
    if (days > 30) return 3;
    if (days > 15) return 2;
    if (days > 7) return 1;
    if (days > 3) return 0;
    else return null
}
export default countLevel