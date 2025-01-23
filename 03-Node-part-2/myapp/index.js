const {addDays} = require('date-fns');

const newAddedDays = addDays(new Date(2024,11,31), 20);

console.log(newAddedDays);
