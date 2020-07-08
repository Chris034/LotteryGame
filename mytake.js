// inspiration/assests/help from https://www.youtube.com/watch?v=lhNdUVh3qCc
document.addEventListener('DOMContentLoaded', ()=> {

  // card options

  const cardArray = [
    

    {
      name: 'fries',
      img: 'images/fries.png',
      score: 0
    },
    {
      name: 'fries',
      img: 'images/fries.png',
      score: 0
    },
    {
      name: 'fries',
      img: 'images/fries.png',
      score: 0
    },
    {
      name: 'fries',
      img: 'images/fries.png',
      score: 0
    },
    {
      name: 'fries',
      img: 'images/fries.png',
      score: 0
    },    
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
      score: 1
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
      score: 1
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
      score: 1
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
      score: 1
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
      score: 2
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
      score: 2
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
      score: 2
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
      score: 2
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
      score: 2
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
      score: 3
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
      score: 3
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
      score: 3
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
      score: 3
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
      score: 3
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
      score: 5
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
      score: 5
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
      score: 5
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
      score: 5
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
      score: 5
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
      score: 10
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
      score: 10
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
      score: 10
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
      score: 10
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  

  const grid = document.querySelector('.grid')


  var cardsChosen = {}
  var cardsChosenId = []
  lengthOfMatches = 3
  const cardsWon = []
  const resultDisplay = document.querySelector('#result')
  const cashLeft = document.querySelector('#cash')
  var cash = 10

  buyButton = document.querySelector('#buyTicket')
  buyButton.addEventListener("click", addTicket)


  function createBoard() {
    for (let i=0; i<cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.className += 'card'
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
      cashLeft.textContent = cash;

    }
    for (let j=0; j<cardArray.length; j++) {
      cardsChosen[cardArray[j].name] = 0
    }
  }




  //flip your card
  function flipCard() {
    this.removeEventListener('click', flipCard)
    cardsChosenId.push(this.getAttribute('data-id'))


    this.setAttribute('src', cardArray[this.getAttribute('data-id')].img)
    setTimeout(checkForOutcome, 10)
  }

  function checkForOutcome() {

    console.log(cardsChosenId)
    lastId = cardArray[cardsChosenId].name
    cardsChosen[lastId] += 1
    for(var key in cardsChosen) {
      if (cardsChosen[key] >= lengthOfMatches) {
        resultDisplay.textContent = "Congrats your found " + lengthOfMatches + " in a row! Your Prize is " + cardArray[cardsChosenId].score
        document.getElementById("result").style.visibility = 'visible'
        setTimeout(removeListeners, 10)
        cash = cash + cardArray[cardsChosenId].score
        cashLeft.textContent = cash;
      }
    }
    cardsChosenId = []
  }

  function removeListeners() {
    for (let i=0; i<cardArray.length; i++) {
      var cards = document.querySelectorAll('img')
      cards[i].removeEventListener('click', flipCard)
    }
  }
  
  function addTicket() {
    if (cash > 2) {
      cash = cash - 2
      cashLeft.textContent = cash;
      wipeBoard()

    } else {
      alert('your broke, better stop playing')
    }
  }


  function wipeBoard(){
    for (let i=0; i<cardArray.length; i++) {
      var cards = document.querySelectorAll('img')
      cards[i].setAttribute('src', 'images/blank.png')
      cards[i].addEventListener('click', flipCard)
      cardArray.sort(() => 0.5 - Math.random())
    }
    for (let j=0; j<cardArray.length; j++) {
      cardsChosen[cardArray[j].name] = 0
    }
  }
  createBoard()
  //console.log(cardSrc = document.querySelector('.card').querySelector('data-id', this.data-id))

})