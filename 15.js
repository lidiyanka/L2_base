function howManyTimes(time1,time2){
  const start = new Date(time1);
  const end = new Date(time2);
  let count = 0;

  function strikes(date) {
    const hours = date.getHours() % 12 || 12; 
    const minutes = date.getMinutes();
    if (minutes === 0) return hours; 
    if (minutes === 30) return 1;  
    return 0;                       

  for (let time = start.getTime(); time < end.getTime(); time += 1000) {
    const current = new Date(time);
    if (current.getSeconds() === 0 && strikes(current) > 0) {
      count += strikes(current);
    }
  }

  return count;
}


console.log(howManyTimes("2016-08-14 12:00:00","2016-08-14 12:00:01")); // 1
console.log(howManyTimes("2016-08-14 12:00:00","2016-08-14 12:00:11")); // 11
console.log(howManyTimes("2016-08-14 12:00:00","2016-08-14 12:01:00")); // 12
console.log(howManyTimes("2016-08-14 12:00:00","2016-08-14 12:30:00")); // 12
console.log(howManyTimes("2016-08-14 12:00:00","2016-08-14 12:31:00")); // 13
console.log(howManyTimes("2016-08-14 12:00:00","2016-08-14 13:01:00")); // 14
