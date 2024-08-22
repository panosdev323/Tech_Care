export const currentMonth = () => {
    const now = new Date();
    const options = { month: 'long' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const currentMonth = formatter.format(now);
    return currentMonth;
}