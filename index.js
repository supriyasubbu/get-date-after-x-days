let addDays = require("date-fns/addDays");
let days = (d) => {
  let date = addDays(new Date(2020, 7, 22), d);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
module.exports = days;
