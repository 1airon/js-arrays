// BEGIN (write your solution here)
export const getWeekends = (weekends) => {
    switch(weekends) {
        case 'long':
            return ['saturday', 'sunday'];
        case 'short':
            return ['sat', 'sun'];
        default:
            return ['saturday', 'sunday'];
    }
}
// END
