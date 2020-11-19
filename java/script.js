///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////CARDS
//////////////////////////////////////////////////////////////////////////////////////////

const threeFour = [
  'https://static.wikia.nocookie.net/megamitensei/images/8/84/P4G-FoolArcana.png/revision/latest?cb=20131103161956',
  'https://static.wikia.nocookie.net/megamitensei/images/c/ca/Magician.png/revision/latest?cb=20080716203618',
  'https://static.wikia.nocookie.net/megamitensei/images/b/bc/Priestess.png/revision/latest?cb=20080716203638',
  'https://static.wikia.nocookie.net/megamitensei/images/6/63/Empress-0.png/revision/latest?cb=20160404201807',
  'https://static.wikia.nocookie.net/megamitensei/images/e/e6/Emperor-0.png/revision/latest?cb=20160404201848',
  'https://static.wikia.nocookie.net/megamitensei/images/f/f6/Hierophant-0.png/revision/latest?cb=20160404201947',
  'https://static.wikia.nocookie.net/megamitensei/images/a/a5/Lovers-0.png/revision/latest?cb=20160404202019',
  'https://static.wikia.nocookie.net/megamitensei/images/1/15/Chariot-0.png/revision/latest?cb=20160404202048',
  'https://static.wikia.nocookie.net/megamitensei/images/8/83/Justice-0.png/revision/latest?cb=20160404202153',
  'https://static.wikia.nocookie.net/megamitensei/images/a/ab/Hermit-0.png/revision/latest?cb=20160404202218',
  'https://static.wikia.nocookie.net/megamitensei/images/f/f3/Fortune-0.png/revision/latest?cb=20160404202245',
  'https://static.wikia.nocookie.net/megamitensei/images/b/b0/Strength-0.png/revision/latest?cb=20160404202121',
  'https://static.wikia.nocookie.net/megamitensei/images/2/2f/Hanged_Man.png/revision/latest?cb=20160404202318',
  'https://static.wikia.nocookie.net/megamitensei/images/d/df/Death-0.png/revision/latest?cb=20160404202413',
  'https://static.wikia.nocookie.net/megamitensei/images/2/2d/Temperance-0.png/revision/latest?cb=20160404202449',
  'https://static.wikia.nocookie.net/megamitensei/images/4/4b/Devil-0.png/revision/latest?cb=20160404202521',
  'https://static.wikia.nocookie.net/megamitensei/images/1/1f/Tower-0.png/revision/latest?cb=20160404202557',
  'https://static.wikia.nocookie.net/megamitensei/images/1/15/Star-0.png/revision/latest?cb=20160404202628',
  'https://static.wikia.nocookie.net/megamitensei/images/c/ce/Moon-0.png/revision/latest?cb=20160404202708',
  'https://static.wikia.nocookie.net/megamitensei/images/f/ff/Sun-0.png/revision/latest?cb=20160404202738',
  'https://static.wikia.nocookie.net/megamitensei/images/b/b0/Judgement.png/revision/latest?cb=20160404202809'
]


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////CARD GENERATOR
/////////////////////////////////////////////////////////////////////////////////////////

const pullthreeFour = () => {
  var i;
  for (i=0; i<3; i++) {
    let paper = threeFour[Math.floor(Math.random()*threeFour.length)];
    console.log(paper);
    const $paper = $("<img>");
    $paper.attr("src", paper);
    $(".future").append($paper)
    $paper.addClass("luck")
  }

}

////////////////////////////////////////////////////////////////////////
//////////////////SHOW CARDS
///////////////////////////////////////////////////////////////////////

$(() => {
  const $past = $("<div>")
  $past.text("Reveal fates")
  $past.attr("id", card)
  $(".card").append($past);
  $past.on('click', (event) => {
    pullthreeFour();
    $(event.currentTarget).toggle()
  });

})
