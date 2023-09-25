
const dateToday = function() {
    const date = new Date() ;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return `Today is ${days[date.getDay()]} the ${date.getDate()} of ${months[date.getMonth()]} ${date.getFullYear()}`
}
console.log(dateToday());