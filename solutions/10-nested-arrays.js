// BEGIN
const getSuperSeriesWinner = (scores) => {
    let canadaWins = 0;
    let ussrWins = 0;
  
    for (let i = 0; i < scores.length; i++) {
      const game = scores[i];
      const canadaScore = game[0];
      const ussrScore = game[1];
  
      if (canadaScore > ussrScore) {
        canadaWins++;
      } else if (canadaScore < ussrScore) {
        ussrWins++;
      }
    }
  
    if (canadaWins > ussrWins) {
      return 'canada';
    } else if (canadaWins < ussrWins) {
      return 'ussr';
    } else {
      return null;
    }
  }  

  export default getSuperSeriesWinner;
// END