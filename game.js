const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
let textInterval
let currentText

function startGame() {
  state = {}
  showTextNode(1)
}

textElement.addEventListener("click", () => {
  clearInterval(textInterval);
  textElement.innerText = currentText
})

function typeText(text, time) {
  clearInterval(textInterval);
  let currentTextIdx = 0;
  currentText = text;

  textInterval = setInterval(() => {
    textElement.innerText = text.substring(0, currentTextIdx);
    currentTextIdx++;

    if (currentTextIdx >= text.length + 1) clearInterval(textInterval);
  }, time)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  typeText(textNode.text, 6, textNode);
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
    text: `Hello world! my name is Lemon Boy. This is my first ever JavaScript game!

    This is a STORY ADVENTURE GAME, if you're not in the mood for reading, don't play. This is a game about me, Lemon Boy, and how I navigate my life in a chronically burdening society. I hope you can help me find some meaning in my life as you play.
    
    
    Tips: Put on some Studio Ghibli music while you play. Press F11 to go into fullscreen for the full immersive experience. Refresh the page to restart 😄
    
     Enjoy the time you're about to spend with me ❤️
    `,
    options: [
      {
        text: `Start`,
        setState: { blueGoo: true },

        nextText: 2
      },
    ]
  },
  {
    id: 2,
    text: `In life, we are given lemons. That's just part of what life is. And lemons suck, they suggest sourness and difficulty. They are anxiety-inducing. They are the result of disappointment and failure.

    Although the hardships may be out of our control, in the face of adversity we are given the choice between two options.
    
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
        text: 'CHUCK IT BACK',
        nextText: 4
      }
    ]
  },
  {
    id: 3,
    text: `Interesting... can you tell me why?`,
    options: [
      // {
      //   text: 'Explore the castle',
      //   nextText: 4
      // },
      {
        text: 'Lemonade is tasty 😋',
        nextText: 5
      },
      {
        text: `It's about staying optimistic and having a positive can-do attitude in life.`,

        nextText: 3
      }
    ]
  },
  {
    id: 4,
    text: `"If life gives you lemons, don't make lemonade! Make life take the lemons back. Get mad! I don't want your damn lemons. What the hell am I suppose to do with these? Demand to see life's manager?! Make life rue the day it thought it could give me lemons!"
    
    you scream at Lemon Boy and squirt the lemon juices into his eyes.
    
    `,
    options: [
      {
        text: '(UNFINISHED TREE)',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: `OKAYYY! 😊 I knew you'd say this. I love lemonade. Sometimes I wish I could just float in a pool of lemonade. Is that weird? OMG and I also love Gong Cha. Most notably White pearl & Ai-Yu Special or Honey Lemon drink (0% ice and 0% sugar, of course).

    Anyways... maybe next time I see you on campus... you can buy me some bubble tea? HAHA jk! unless...?`,
    options: [
      {
        text: 'Bubble tea for the win!!!',
        nextText: 6
      },
      {
        text: 'I like drinking lemonade not floating on it',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: `Yo that's lit HAHA. I didn't know you liked drinking... 😅

    (Lemon Boy looks nervous. Because of his introverted nature, he isn't the best at carrying on conversations.)`,
    options: [
      {
        text: `[Compliment Lemon Boy]`,
        nextText: 7
      },
      {
        text: `[Insult Lemon Boy]`,
        // nextText: 8
      }
    ]
  },
  {
    id: 7,
    text: `Yeah what?`,
    options: [
      {
        text: `You're really good at League of Legends`,
        nextText: 8

        //UNFINISHED TREE
      },
      {
        text: `You're really down to earth`,
        nextText: 9
      }
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
    text: `Lemon Boy does not seem amused. He has heard this a million times before, and he doesn't like being associated with such a peasant game.

    He likes to believe he is so much more than a video game (He is not)`,
    options: [
      {
        text: `DW, you're so much more than your League skills💛`,
        nextText: 10
      }
    ]
  },
  {
    id: 9,
    text: `Well what did you expect? I'm a bloody lemon. Haha. It's not like I grew on trees. Wait, was I suppose to? Crap.

    I hope you can still accept me for who I am despite being a weed lemon 😕`,
    options: [
      {
        text: 'Weed lemon is a cute name',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: `Just wondering, how well do you know me BTW?`,
    options: [
      {
        text: `I'd say we're pretty close`,
        nextText: 11
      },
      {
        text: `We vibe but ain't close`,
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: `I see😊. I really value relationships so I hope we can grow even closer.`,
    options: [
      {
        text: `Do you want to go on a date with me then?`,
        nextText: 12
      },
      {
        text: `“Hey bro, can you hand me those lemons”
        “Sure bro, why do you want them anyways?”
        *hands them over*
        “Cause you’re my life”
        “Bro”
        “Bro”
        (date me)`,
        nextText: 12
      },
    ]
  },
  {
    id: 12,
    text: `okay HOLDUP. I love you but no homo...`,
    options: [
      {
        text: `I'm a girl`,
        nextText: 13
      },
      {
        text: `I'm a guy`,
        nextText: 14
      }
    ]
  },
  {
    id: 13,
    text: `Lemon Boy rarely even receives compliments; even fewer from members of the opposite gender. Asking him on a date causes an unstable reaction within his biological make up.

    Lemon Boy suddenly struggles to keep eye contact. His face flushes nervously and lights up like a tomato. You become worried as he is seemingly paralyzed.`,
    options: [{
      text: `Are you okay?`,
      nextText: 15
    },
    {
      text: `OK Weirdo`,
      nextText: 15
    }

    ]
  },
  {
    id: 14,
    text: `SHEEEEEEESH. I know you just playin cuzzie. Okay, lets make sure no females are here. We can have a cheeky chat about some guy-specific personal stuff 1 on 1. FOR THE BOIZ 😆`,
    options: [
      {
        text: 'What kind of girls do you like?',
        // nextText: -1
      },
      {
        text: `I haven't finished this tree yet, press this button and select "I'm a girl" haha`,
        nextText: 12
      }
    ]
  },
  {
    id: 15,
    text: `OHHH uhh... sorry😅. I auto piloted for a second. What did you say?

    OH YEAH. A date. UHHHHHHHHH. Sure! haha. Yea. I get totally asked out on a lot of dates, so this is like nothing special just FYI. But I'll accept this anyways. Of course I'll go on a date with you.
    
    😳Why am I blushing? I AM?! OH uhhhh... Aw geez its hot today huh...
    
    What about this Friday 7pm to watch the sunset on a rooftop? I have blankets, a picnic mat and a camera and everything.`,
    options: [{
      text: `Yep. See you there!`,
      nextText: 16
    },
    {
      text: `Has this game become a dating simulator?...`,
      nextText: 16
    }

    ]
  },
  {
    id: 16,
    text: `
      [The evening of the date, you receive a letter by pigeon]
     
     Dear my very beautiful date,
     
     Hiyaaaaa sorriiiii. I will be a little late to our date today. I am not sure how late, but I will be there. I have been trying to find a way out of my room for over 20 minutes. There is a very big bug between me and the door and when I move, it moves, and when it flies its wings make this awful whirring noise like some vassal of horror. We are locked in a stalemate and I am at every disadvantage, and I wholeheartedly believe the bug is aware of this. If you do not hear from me from this point forth, I will have been bested by the creature.`,
    options: [{
      text: `I believe in you, Lemon Boy ❤️
      [Fill him with determination]`,
      nextText: 17
    },
    {
      text: `Call a tidal wave on Lemon Boy`,
      nextText: 18
    }

    ]
  }, {
    id: 17,
    text: `Lemon Boy becomes filled with DETERMINATION ❤️


    Lemon Boy realizes he is strong and courageous. He approaches the big bug with love and compassion, requesting for it to move away. Miraculously, the bug notices his demeanor and complies.`,
    options: [{
      text: `Hurry up you're late`,
      nextText: 20
    },
    ]
  }, {
    id: 18,
    text: `A bug is more important than me? IS THAT WHAT YOU'RE SAYING??? You unfold into an aquatic beast. Lemon Boy's lateness fills you with disdain. You scream, causing Lemon Nation to shake frantically beneath your feet.

    Tsunamis surge up and sweep the land. Within minutes, every inhabitable corner turns into a graveyard. The water bleeds through dumps of debris and dead lemons.
    
    Worst of all, it's king has fallen. Lemon Boy's body leaves the earth but Lemonlord's legacy will remain forever.`,
    options: [{
      text: `Continue`,
      nextText: 19
    },
    ]
  }, {
    id: 19,
    text: `...Or so you though!

    Lemon Boy rises from the ashes. The scar on his face only heightens his valiant pose. A patch of light seeps through the sky and spotlights his prowess.
    
    "Shall we continue with our date😉?" He smirks. Lemon Boy has never been more smooth in his life. You feel something off with him. Something is definitely wrong...`,
    options: [{
      text: `Continue with date`,
      nextText: 20
    },
    ]
  }, {
    id: 20,
    text: `The sunset blossoms red and gold, flourishing the romantic mood.

    Hey gurl, are you honey? because you can be the honey to my lemon. 😎
    
    [The first thing that comes out of his mouth, Lemon Boy attempts a very cheesy pick up line. He is the opposite of smooth.]`,
    options: [{
      text: `You are SO SMOOTH!!! 😍`,
      nextText: 21
    },
    {
      text: `I am literally cringing right now`,
      nextText: 21
    }

    ]
  }, {
    id: 21,
    text: `Aw geez😅. That was pretty bad wasn't it. I spent the whole trip here trying to think of one.`,
    options: [{
      text: `What's your favourite fruit?`,
      nextText: 22
    },
    {
      text: `Why did you make this game, "Lemon Boy"?`,
      requiredState: (currentState) => currentState.blueGoo,
      setState: { blueGoo: false, sword: true },


      nextText: 28
    }, {
      text: `Why did you make this game, "Lemon Boy"??`,
      requiredState: (currentState) => currentState.sword,
      setState: { sword: false, shield: true },

      nextText: 30
    },

    ]
  },
  {


    nextText: 30
  }, {
    id: 22,
    text: `MMmmm good question. I feel like a traitor if I don't say lemons, but I really like munching at blueberries. Peaches are nice too. The crunchy ones, not the soft ones! I also like watermelons, pomegranates, zucchini... man there's too many.

    Do you enjoy swimming? Haha`,
    options: [{
      text: `Yep I love swimming`,
      nextText: 23
    },
    {
      text: `Nope I don't swim`,
      nextText: 23
    }

    ]
  }, {
    id: 23,
    text: `What?! We can't be friends anymore😤.

    What about dating? What's more important to you, personality or looks?`,
    options: [{
      text: `Personality. Their heart reveals everything`,
      nextText: 24
    },
    {
      text: `Looks. Can't be seen around dating a blobfish.`,
      nextText: 25
    },

    ]
  }, {
    id: 24,
    text: `Yooo good answer, I agree! The reflected behaviours and attitude of a person is so much more important.

    By the way, Are you a Christian?`,
    options: [{
      text: `No, I'm not a Christian`,
      nextText: 24
    },
    {
      text: `Yes, I'm a Christian`,
      nextText: 27
    }, {
      text: `I don't care. Why did you make this game, "Lemon Boy"?`,
      requiredState: (currentState) => currentState.shield,
      nextText: 32

    }

    ]
  },
  {
    id: 25,
    text: `But I look like a blobfish 😭. Oh well.

    I've always wondered, are you a Christian?`,
    options: [{
      text: `No, I'm not a Christian`,
      // nextText: 26
    },
    {
      text: `Yes, I'm a Christian`,
      nextText: 27
    }

    ]
  }, {
    id: 27,
    text: `Yoooo that's lit!

    Same. My Christian faith is something I've been trying to take more seriously this year, especially growing up as a long time atheist. Being a Christian is a pretty big struggle aye😅? I still have my doubts, I'm sinning far too often, I struggle to wake up on Sundays let alone bring my ass to church, and I question God when I feel like I get hurt undeservingly. But seeing the sacrifices my Christian brothers go through and their high level of faith honestly lights me up.
    
    That was a bit of a rant. Anyways, if you want, click on the little drawing and it'll take you to where you can partner with me on a mission trip. Any amount is good, but no pressure though! only if you have surplus resources. If you do, I highly appreciate it 💛

    Anyways, this tree line is unfinished, so Imma take you back so you press "Why did you make this game." and press it twice ok?
    `,
    options: [{
      text: `Continue`,
      nextText: 21
    },
    ]
  },
  {
    id: 28,
    text: `That's an awfully weird question to ask at a date.😑 Why are you breaking the fourth wall? Do you understand that every time you do, you cause an anomaly in the time-space continuum?`,
    options: [{
      text: `Continue`,
      setState: { blueGoo: false, sword: true },
      nextText: 29

    },
    ]
  }, {
    id: 29,
    text: `PLEASE refrain from breaking the fourth wall in the future. Too much of it will shatter the game and cause weird things to happen...

    Lets rewind shall we. I'll pretend that never happened.`,
    options: [{
      text: `Continue`,
      nextText: 21
    },
    ]
  }, {
    id: 30,
    text: `HELLO?? Are you even listening to me? I'm starting to get a little frustrated. It seems like you can't even follow simple instructions. Do I need to restrict you like a child? This is my world. Please follow my rules. Please believe me when I say this, I am trying to protect you.

    Do not break the fourth wall.`,
    options: [{
      text: `Continue`,
      nextText: 31

    },
    ]
  }, {
    id: 31,
    text: `Now, back to our date.

    Personality or looks. Which is more important?`,
    options: [
      {
        text: `Personality`,
        nextText: 24

      }, {
        text: `Looks`,
        nextText: 25

      },
    ]
  }, {
    id: 32,
    text: `adadadadadadadadadad`,
    options: [
      {
        text: `Personality`,
        nextText: 24

      }, {
        text: `Looks`,
        nextText: 25

      },
    ]
  },
]

startGame()