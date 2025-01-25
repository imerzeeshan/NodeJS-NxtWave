const { addDays } = require('date-fns')

const addDay = days => {
    const newDate = addDays(new Date(2020, 7, 22), days)

    // console.log(`${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`);

    return `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
}

module.exports = addDay