unction bingo(ticket, win){
  let miniWins = 0;
  for (let item of ticket) {
    let str = item[0];
    let num = item[1];
    for (let ch of str) {
      if (ch.charCodeAt(0) === num) {
        miniWins++;
        break; 
      }
    }
  }
  return miniWins >= win ? 'Winner!' : 'Loser!';
}
