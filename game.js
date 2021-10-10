const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: `Hello world! my name is Lemon Boy. You have clicked on a very special link to me, because this is my first ever JavaScript game! 

    This is a STORY ADVENTURE GAME, so don't play if your not in the mood of doing a lot of reading. This is a game about me, Lemon Boy, and how I navigate my life  in our chronically burdening society. I hope you can help me find some meaning in my life as you play.
    
  
    Tips: Press F11 to go into fullscreen for the full immersive experience. Turn on Lo-fi music while you play. Refresh the page to restart, but I recommend playing the game out until you reach an ending 😄
    
    Enjoy the time you're about to spend with me 💛
    `,
    options: [
      {
        text: `Start`,
        setState: { blueGoo: true },
        nextText: 2
      },
      /*
      // DELETE THIS FOR ONLY 1 OPTION  
      {
        text: '"Hey Lemon Crap. Why are you so atrocious at league? You wasted your life to this game and yet still failed to go pro at the end of it. I would call you cancer, but at least cancer can get kills. Please uninstall."',
        nextText: 2
      }

     */
      // DELETE THIS FOR ONLY 1 OPTION

    ]
  },
  {
    id: 2,
    text: `In life, we are given lemons. That's just part of what life is. And lemons suck, they suggest sourness and difficulty. They are anxiety-inducing. They are the result of disappointment and failure.

    Cole Bennett, founder of "Lyrical Lemonade," once gave a Ted Talk about being a glass half full kind of guy. This idea of optimism vs pessimism really resonated with me. We all go through hardships, and are given two options in the face of adversity. So my first question to you is:
    
    When life gives you lemons, what do you do?`,
    options: [
      {
        text: 'Make lemonade',
        // requiredState: (currentState) => currentState.blueGoo,
        // setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      // {
      // text: 'Try chuck it back',
      // requiredState: (currentState) => currentState.blueGoo,
      // setState: { blueGoo: false, shield: true },
      // nextText: 3
      // },
      {
        text: 'Try chuck it back',
        nextText: 4
      }
    ]
  },
  {
    id: 3,
    text: `OKAYYY! 😊 I knew you'd make lemonade. I love lemonade. And soju. OMG and I also love Gong Cha. Most notably White pearl & Ai-Yu Special or Honey Lemon drink (0% ice and 0% sugar, of course). Maybe next time I see you on campus... you can buy me some bubble tea? HAHA JK! unless...?`,
    options: [
      // {
      //   text: 'Explore the castle',
      //   nextText: 4
      // },
      {
        text: 'Same, I also like Gong Cha',
        nextText: 5
      },
      {
        text: 'I also get 0% sugar 0% ice',
        nextText: 5
      }
    ]
  },
  {
    id: 4,
    text: `"If life gives you lemons, don't make lemonade! Make life take the lemons back. Get mad! I don't want your damn lemons. What the hell am I suppose to do with these? Demand to see life's manager?! Make life rue the day it thought it could give me lemons!"
    
    you scream at Lemon Boy and squirt the lemon juices into his eyes.
    (UNFINISHED TREE)
    `,
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: `Yo that's lit HAHA.

    (Lemon Boy looks nervous. Because of his introverted nature, he isn't the best at carrying on conversations.)`,
    options: [
      {
        text: '[Compliment Lemon Boy]',
        nextText: 6
      },
      {
        text: '[Insult Lemon Boy]',
        nextText: 10
      }
    ]
  },
  {
    id: 6,
    text: 'Yeah what?',
    options: [
      {
        text: `You're really good at League of Legends`,
        nextText: 7
      },
      {
        text: `You're really down to earth`,
        nextText: 8
      }
    ]
  },
  {
    id: 7,
    text: `Lemon Boy does not seem amused. He has heard this a million times before, and he doesn't like being associated with such a peasant game.

    He likes to believe he is so much more than a video game (He is not)`,
    options: [
      {
        text: 'The Gong Cha you mentioned before, Want to go on a date?',
        nextText: 9
        //UNFINISHED TREE
      },
      // {
      //   text: 'Attack it with your sword',
      //   requiredState: (currentState) => currentState.sword,
      //   nextText: 9
      // },
      // {
      //   text: 'Hide behind your shield',
      //   requiredState: (currentState) => currentState.shield,
      //   nextText: 10
      // },
      // {
      //   text: 'Throw the blue goo at it',
      //   requiredState: (currentState) => currentState.blueGoo,
      //   nextText: 11
      // }
    ]
  },
  {
    id: 8,
    text: `Well what did you expect? I'm a bloody lemon. Haha. It's not like I grew on trees. Wait, was I suppose to? Crap. I hope you can still accept me for who I am despite being a weed lemon 😕`,
    options: [
      {
        text: 'I still accept you ❤️. Want to go on a date?',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: '[UNFINISHED TREE]',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: `Lmao... Are you sure you want to insult me?`,
    options: [
      {
        text: 'No, I take it back',
        nextText: 5
      },
      {
        text: `[Insult him confirmed]`,
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: `Lmao... Are you sure you want to insult me?`,
    options: [
      {
        text: `Hey Lemon Crap. Why are you so atrocious at league? You wasted your life to this game and yet still failed to go pro at the end of it. I would call you cancer, but at least cancer can get kills. Please uninstall.`,
        nextText: 12
      },
      {
        text: `You are really boring. I could talk to a wall and it would have more personality than you, Lemon Boy. You're kind of like Rapunzel except instead of letting down your hair you let down everyone in your life. Don't let me see your ugly yellow face `,
        nextText: 12
      },
    ]
  },
  {
    id: 12,
    text: `What did you say to me you clown ass little bich? Wanna fight? I have played League for 8 years, online insults don't hurt me.

    Lemon Boy pauses, before responding in a bitter tone. He looks into your eyes.
    
    For the vast majority of people, I don't need them in my life. I'm cold. I cut off people extremely easily. I have hurt close friends in the past because of this, even my best friend for a while. However, this isn't the case with you. I need you. You're important to me, you bring value into my life, and you make me a better person. I'm hurt you have said this.`,
    options: [
      {
        text: `We still homies aye?`,
        nextText: 13
      },
      {
        text: `Nah shame G. I'm going to tell people you called me a clown ass little bich who wants me dead HAHA`,
        nextText: 14
      }
    ]
  },
  {
    id: 13,
    text: `When I was a younger lemon, I used to hold grudges. I used to act sour and resentful to people who did me the slightest wrong. It was my innate lemon nature to feel this way. I've definitely learnt to forgive others now.
    //bad text. change this later`,
    options: [{
      text: `Restart`,
      nextText: -1
    }

    ]
  },
  {
    id: 14,
    text: `You spread these words all across the nation. Then the branches and roots asked Lemon Boy, “Are these accusations true?”

    Lemon Boy does not answer. He replies a story about the past and identity. The branches and roots were infuriated by Lemon Boy's accusation, and they shook their fists at him in rage. Then they put their hands over their ears and began shouting. They rushed at him and dragged him out of the city and began to stone him.
   
   You watch as Lemon Boy gets stoned. He's motionless. You can't tell if he's helpless or simply just steadfast. He glances at you before staring into the sky, and you notice a placid grin on his face.
   
   ENDING ONE: Acts of the Apostles 7`,
    options: [
      {
        text: 'Restart',
        nextText: -1
      }]
  }

]

startGame()