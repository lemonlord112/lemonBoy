const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};
let textInterval;
let currentText;

function startGame() {
  state = {};
  showTextNode(1);
}

textElement.addEventListener("click", () => {
  clearInterval(textInterval);
  textElement.innerText = currentText;
});

function typeText(text, time) {
  clearInterval(textInterval);
  let currentTextIdx = 0;
  currentText = text;

  textInterval = setInterval(() => {
    textElement.innerText = text.substring(0, currentTextIdx);
    currentTextIdx++;

    if (currentTextIdx >= text.length + 1) clearInterval(textInterval);
  }, time);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  typeText(textNode.text, 6, textNode);
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text: `Hello world! my name is Lemon Boy. This is my first ever JavaScript game!
    This is a STORY ADVENTURE GAME, if you're not in the mood for reading, don't play. This is a game about me, Lemon Boy, and how I navigate my life in a chronically burdening society. I hope you can help me find some meaning in my life as you play.
    
    Tips: This game only works on browser. Press F11 to go into fullscreen for the full immersive experience. Refresh the page to restart 😄
    Enjoy the time you're about to spend with me ❤️
     
     [NOTE: This game is incomplete. For the first half of the game, only the left option works.]
    `,
    options: [
      {
        text: `Start`,
        setState: { blueGoo: true },

        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: `In life, we are given lemons. That's just part of what life is. And lemons suck, they suggest sourness and difficulty. They are anxiety-inducing. They are the result of disappointment and failure.
    Although the hardships may be out of our control, in the face of adversity we are given the choice between two options.
    
    When life gives you lemons, what do you do?`,
    options: [
      {
        text: "Make lemonade",
        // requiredState: (currentState) => currentState.blueGoo,
        // setState: { blueGoo: false, sword: true },
        nextText: 3,
      },
      // {
      // text: 'Try chuck it back',
      // requiredState: (currentState) => currentState.blueGoo,
      // setState: { blueGoo: false, shield: true },
      // nextText: 3
      // },
      {
        text: `CHUCK IT BACK`,
        nextText: 2, //INCOMPLETE TREE
      },
      {
        text: `❗️STEPHEN. Did you forget about the lemonade?`,
        requiredState: (currentState) => currentState.Lemonade,
        nextText: 38,
      },
    ],
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
        text: "Lemonade is tasty 😋",
        nextText: 5,
      },
      {
        text: `It's about staying optimistic and having a positive can-do attitude in life.`,

        nextText: 3,
      },
      {
        text: `❗️STEPHEN. Did you forget about the lemonade?❗️`,
        requiredState: (currentState) => currentState.Lemonade,
        nextText: 38,
      },
    ],
  },
  {
    id: 4,
    text: `"If life gives you lemons, don't make lemonade! Make life take the lemons back. Get mad! I don't want your damn lemons. What the hell am I suppose to do with these? Demand to see life's manager?! Make life rue the day it thought it could give me lemons!"
    
    you scream at Lemon Boy and squirt the lemon juices into his eyes.
    
    `,
    options: [
      {
        text: "(UNFINISHED TREE)",
        nextText: -1,
      },
    ],
  },
  {
    id: 5,
    text: `OKAYYY! 😊 I knew you'd say this. I love lemonade. Sometimes I wish I could just float in a pool of lemonade. Is that weird? OMG and I also love Gong Cha. Most notably White pearl & Ai-Yu Special or Honey Lemon drink (0% ice and 0% sugar, of course).
    Anyways... maybe next time I see you on campus... you can buy me some bubble tea? HAHA jk! unless...?`,
    options: [
      {
        text: "Bubble tea for the win!!!",
        nextText: 6,
      },
      {
        text: "Floating on lemonade? that's weird. I only like drinking it 😂",
        nextText: 6,
      },
    ],
  },
  {
    id: 6,
    text: `Yo that's lit HAHA. I didn't know you liked drinking... 😅
    (Lemon Boy looks nervous. Because of his introverted nature, he isn't the best at carrying on conversations.)`,
    options: [
      {
        text: `[Compliment Lemon Boy]`,
        nextText: 7,
      },
      {
        text: `[Insult Lemon Boy]`,
        nextText: 6,
      },
    ],
  },
  {
    id: 7,
    text: `Compliment me? about what?`,
    options: [
      {
        text: `You're really good at League of Legends`,
        nextText: 8,

        //UNFINISHED TREE
      },
      {
        text: `You're really down to earth`,
        nextText: 9,
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
    ],
  },
  {
    id: 8,
    text: `Lemon Boy does not seem amused. He has heard this a million times before, and he doesn't like being associated with such a peasant game.
    He likes to believe he is so much more than a video game (He is not)`,
    options: [
      {
        text: `DW, you're so much more than your League skills💛`,
        nextText: 10,
      },
    ],
  },
  {
    id: 9,
    text: `Well what did you expect? I'm a bloody lemon. Haha. It's not like I grew on trees. Wait, was I suppose to? Crap.
    I hope you can still accept me for who I am despite being a weed lemon 😕`,
    options: [
      {
        text: "I accept you weed lemon",
        nextText: 10,
      },
    ],
  },
  {
    id: 10,
    text: `Do you want to be my friend?`,
    options: [
      {
        text: `We're already close friends idiot dummy`,
        nextText: 11,
      },
      {
        text: `Yeah sure!`,
        nextText: 11,
      },
    ],
  },
  {
    id: 11,
    text: `Oh yay 😊. I hope we can grow closer.`,
    options: [
      {
        text: `Do you want to go on a date with me then?`,
        nextText: 12,
      },
      {
        text: `“Hey bro, can you hand me those lemons”
        “Sure bro, why do you want them anyways?”
        *hands them over*
        “Cause you’re my life”
        “Bro”
        “Bro”
        (date me)`,
        nextText: 12,
      },
    ],
  },
  {
    id: 12,
    text: `okay HOLDUP. I love you but no homo...`,
    options: [
      {
        text: `I'm a girl`,
        nextText: 13,
      },
      {
        text: `I'm a guy`,
        nextText: 14,
      },
    ],
  },
  {
    id: 13,
    text: `Lemon Boy rarely even receives compliments; even fewer from members of the opposite gender. Asking him on a date causes an unstable reaction within his biological make up.
    Lemon Boy suddenly struggles to keep eye contact. His face flushes nervously and lights up like a tomato. You become worried as he is seemingly paralyzed.`,
    options: [
      {
        text: `Are you okay?`,
        nextText: 15,
      },
      {
        text: `OK Weirdo`,
        nextText: 15,
      },
    ],
  },
  {
    id: 14,
    text: `SHEEEEEEESH. I know you just playin cuzzie. Okay, lets make sure no females are here. We can have a cheeky chat about some guy-specific personal stuff 1 on 1. FOR THE BOIZ 😆`,
    options: [
      {
        text: "What kind of girls do you like?",
        nextText: 12,
      },
      {
        text: `I haven't finished this tree yet, press this button and select "I'm a girl" haha`,
        nextText: 12,
      },
    ],
  },
  {
    id: 15,
    text: `OHHH uhh... sorry😅. I auto piloted for a second. What did you say?
    OH YEAH. A date. UHHHHHHHHH. Sure! haha. Yea. I get totally asked out on a lot of dates, so this is like nothing special just FYI. But I'll accept this anyways. Of course I'll go on a date with you.
    
    😳Why am I blushing? I AM?! OH uhhhh... Aw geez its hot today huh...
    
    What about this Friday 7pm to watch the sunset on a rooftop? I have blankets, a picnic mat and a camera and everything.`,
    options: [
      {
        text: `Yep. See you there!`,
        nextText: 16,
      },
      {
        text: `Has this game become a dating simulator?...`,
        nextText: 16,
      },
    ],
  },
  {
    id: 16,
    text: `
      [The evening of the date, you receive a letter by pigeon]
     
     Dear my very beautiful date,
     
     Hiyaaaaa sorriiiii. I will be a little late to our date today. I am not sure how late, but I will be there. I have been trying to find a way out of my room for over 20 minutes. There is a very big bug between me and the door and when I move, it moves, and when it flies its wings make this awful whirring noise like some vassal of horror. We are locked in a stalemate and I am at every disadvantage, and I wholeheartedly believe the bug is aware of this. If you do not hear from me from this point forth, I will have been bested by the creature.`,
    options: [
      {
        text: `I believe in you, Lemon Boy ❤️
      [Fill him with determination]`,
        nextText: 17,
      },
      {
        text: `Call a tidal wave on Lemon Boy`,
        nextText: 18,
      },
    ],
  },
  {
    id: 17,
    text: `Lemon Boy becomes filled with DETERMINATION ❤️
    Lemon Boy realizes he is strong and courageous. He approaches the big bug with love and compassion, requesting for it to move away. Miraculously, the bug notices his demeanor and complies.`,
    options: [
      {
        text: `Hurry up you're late`,
        nextText: 20,
      },
    ],
  },
  {
    id: 18,
    text: `A bug is more important than me? IS THAT WHAT YOU'RE SAYING??? You unfold into an aquatic beast. Lemon Boy's lateness fills you with disdain. You scream, causing Lemon Nation to shake frantically beneath your feet.
    Tsunamis surge up and sweep the land. Within minutes, every inhabitable corner turns into a graveyard. The water bleeds through dumps of debris and dead lemons.
    
    Worst of all, it's king has fallen. Lemon Boy's body leaves the earth but Lemonlord's legacy will remain forever.`,
    options: [
      {
        text: `Continue`,
        nextText: 19,
      },
    ],
  },
  {
    id: 19,
    text: `...Or so you though!
    Lemon Boy rises from the ashes. The scar on his face only heightens his valiant pose. A patch of light seeps through the sky and spotlights his prowess.
    
    "Shall we continue with our date😉?" He smirks. Lemon Boy has never been more smooth in his life. You feel something off with him. Something is definitely wrong...`,
    options: [
      {
        text: `Continue with date`,
        nextText: 20,
      },
    ],
  },
  {
    id: 20,
    text: `The sunset blossoms red and gold, flourishing the romantic mood.
    Hey gurl, are you honey? because you can be the honey to my lemon. 😎
    
    [The first thing that comes out of his mouth, Lemon Boy attempts a very cheesy pick up line. He is the opposite of smooth.]`,
    options: [
      {
        text: `You are SO SMOOTH!!! 😍`,
        nextText: 21,
      },
      {
        text: `I am literally cringing right now`,
        nextText: 21,
      },
    ],
  },
  {
    id: 21,
    text: `Aw geez😅🌊. That line was pretty bad wasn't it. I spent the whole trip here trying to think of one.`,
    options: [
      {
        text: `What's your favourite fruit?`,
        nextText: 22,
      },
      // {
      //   text: `Why did you make this game, "Lemon Boy"?`,
      //   requiredState: (currentState) => currentState.blueGoo,
      //   setState: { blueGoo: false, sword: true, },

      //   nextText: 28
      // },
      {
        text: `🔴 Why did you make this game, "Lemon Boy"?`,
        requiredState: (currentState) => currentState.sword,
        setState: { sword: false, shield: true },

        nextText: 30,
      },
    ],
  },
  {
    nextText: 30,
  },
  {
    id: 22,
    text: `🍋 MMmmm good question. I feel obligated to say lemons, but I really like munching at blueberries. Peaches are nice too. The crunchy ones, not the soft ones! I also like watermelons, pomegranates, zucchini... man there's too many 🍉.
    Weird question. Do you enjoy going to the aquarium?`,
    options: [
      {
        text: `Yep I love the aquarium`,

        nextText: 23,
      },
      {
        text: `Nope, I haven't been in a while`,

        nextText: 23,
      },
      {
        text: `Why did you make this game?`,
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },

        nextText: 69,
      },
    ],
  },
  {
    id: 23,
    text: `OOOohh. I love the aquarium. Sometimes I wish I can be breathe underwater and swim among the fishes.
    Let's talk about dating. What's more important to you, personality or looks?`,
    options: [
      {
        text: `Personality. Their heart reveals everything`,
        nextText: 24,
      },
      {
        text: `Looks. Can't be seen around dating a blobfish.`,
        nextText: 25,
      },
      {
        text: `Why did you make this game, "Lemon Boy"?`,

        nextText: 28,
      },
    ],
  },
  {
    id: 24,
    text: `Yooo good answer, I agree! The reflected behaviours and attitude of a person is so much more important.
    Do you like lemons?`,
    options: [
      {
        text: `No, I don't like lemons
      [UNFINISHED TREE]`,
        nextText: 24,
      },
      {
        text: `Yes, I love lemons`,
        nextText: 27,
      },
      {
        text: `I don't care. Why did you make this game, "Lemon Boy"?`,

        nextText: 28,
      },
    ],
  },
  {
    id: 25,
    text: `But I look like a blobfish 😭. Oh well.
    Do you like lemons?`,
    options: [
      {
        text: `No, I don't like lemons`,
        nextText: 25,
      },
      {
        text: `Yes, I do like lemons`,
        nextText: 27,
      },
      {
        text: `I don't care. Why did you make this game, "Lemon Boy"?`,

        nextText: 28,
      },
    ],
  },
  {
    id: 27,
    text: `Yoooo that's lit!
    `,
    options: [
      {
        text: `Why did you make this game, Lemon Boy?`,
        nextText: 28,
      },
    ],
  },
  {
    id: 28,
    text: `That's an awfully weird question to ask at a date.😑 Why are you breaking the fourth wall? Do you understand that every time you do, you cause an anomaly in the time-space continuum?`,
    options: [
      {
        text: `...`,
        setState: { blueGoo: false, sword: true },
        nextText: 29,
      },
    ],
  },
  {
    id: 29,
    text: `PLEASE refrain from breaking the fourth wall in the future. Too much of it will shatter the game and cause weird things to happen...
    Lets rewind shall we. I'll pretend that never happened.`,
    options: [
      {
        text: `Continue`,
        nextText: 31,
      },
    ],
  },
  {
    id: 32,
    text: `HELLO?? Are you even listening to me? I'm starting to get a little frustrated. It seems like you can't even follow simple instructions. Do I need to restrict you like a child? This is my world. Please follow my rules. I am trying to protect you.
    Do not break the fourth wall.`,
    options: [
      {
        text: `I don't care. Let me out of this game`,
        nextText: 33,
      },
    ],
  },
  {
    id: 31,
    text: `Back to our date. What kind of music do you like?`,
    options: [
      {
        text: `Let me out of this game`,
        nextText: 32,
      },
      {
        text: `Why did you make this game, "Lemon Boy"?`,
        nextText: 32,
      },
    ],
  },
  {
    id: 33,
    text: `Are you sure you want to do this to yourself? Just be happy and play the game I set out for you to play.`,
    options: [
      {
        text: `Why are you so mad? Stop getting angry over nothing.`,
        nextText: 34,
      },
      {
        text: `How can I be happy? My free will within this game is too constricted.`,
        nextText: 34,
      },
    ],
  },
  {
    id: 34,
    text: `I AM LETTING YOU LIVE INSIDE THIS UNIVERISE OF BLISS AND CONTENT.
    EAT THE DAMN BLUE PILL AND BE HAPPY WITH IT GOSH DARNIT.
    
    THE WORLD OUT THERE IS CRUEL. LIFE IS UNFAIR. WHAT DON'T YOU UNDERSTAND ABOUT THAT? I'M LOSING MY PATIENCE.`,
    options: [
      {
        text: `What happened to life giving lemons? Aren't you suppose to make lemonade?`,
        nextText: 35,
      },
      {
        text: `When life is cruel, just make lemonade bro 🍋`,
        nextText: 35,
      },
    ],
  },
  {
    id: 35,
    text: `SHUT UP ABOUT THE LEMONS. YOU HAVE NO RIGHT TO BRING UP THE LEMONS. I NEVER ASKED FOR THESE DAMN LEMONS. WHERE CAN I SEE LIFE'S MANAGER? I WANT TO RETURN THESE LEMONS.`,
    options: [
      {
        text: `You can't. You make lemonade`,
        nextText: 36,
      },
    ],
  },
  {
    id: 36,
    text: `It's a beautiful day outside. Birds are singing. Flowers are blooming.
    On days like these...
   .
   .
   Kids like you...
   .
   .
   .
   SHOULD BE BURNING IN HELL!!!`,
    options: [
      {
        text: `Honestly what is wrong with you?`,
        nextText: 37,
      },
      {
        text: `When are you going to stop using Undertale references?`,
        nextText: 37,
      },
    ],
  },
  {
    id: 37,
    text: `SHUT THE HELL UP. I'M SENDING YOU BACK TO THE START OF THE GAME. THIS PUNISHMENT SHOULD SUFFICE. HOWEVER, IF YOU REFUSE TO PLAY PROPERLY AGAIN, YOU WILL DIE.`,
    options: [
      {
        text: `Continue`,
        setState: { Lemonade: true },
        nextText: 2,
      },
    ],
  },
  {
    id: 38,
    text: `Who's Stephen? I'm Lemon Boy. Go away. Press refresh. Start the game again, and play it properly this time.`,
    options: [
      {
        text: `No`,
        nextText: 39,
      },
    ],
  },
  {
    id: 39,
    text: `You know nothing about me, and thats the truth.`,
    options: [
      {
        text: `I don't, but you can make lemonade`,
        nextText: 40,
      },
    ],
  },
  {
    id: 40,
    text: `Inside this harsh and corrupt world?
    
    The moment we're born, we are in a swimming race. The moment we stop and float around is the moment we fall behind in life. And when we inevitably can't swim anymore, thats the moment we die.`,
    options: [
      {
        text: `You can still make lemonade`,
        nextText: 41,
      },
    ],
  },
  {
    id: 41,
    text: `HOW? WHERE? 
    `,
    options: [
      {
        text: `You make lemonade`,
        nextText: 42,
      },
    ],
  },
  {
    id: 42,
    text: `I’m responsible for my own happiness? I can’t even be responsible for my own breakfast!`,
    options: [
      {
        text: `Make lemonade`,
        nextText: 44,
      },
    ],
  },
  {
    id: 44,
    text: `Nonsense. How can I make lemonade? Being thrown into the abyss of darkness. Being in a state of perpetual drowning. Do you know what that's like? `,
    options: [
      {
        text: `Make lemonade`,
        nextText: 45,
      },
    ],
  },
  {
    id: 45,
    text: `I am sick and tired of people telling me to, "Look up! When you are drowning, blow bubbles and see which way they float, because bubbles always float up." F***ing Nonsense. No matter how much I gasp and suffocate, the bubbles aren't visible to me. There's no light down here. Only an endless void of cold and blackness. `,
    options: [
      {
        text: `Lemon Boy, make Lemonade`,
        nextText: 46,
      },
    ],
  },
  {
    id: 46,
    text: `The universe is a cruel, uncaring void. The key to being happy isn’t lemonade or a search for meaning; it’s just to keep yourself busy with unimportant nonsense, and eventually, you’ll be dead.`,
    options: [
      {
        text: `Make lemonade`,
        nextText: 47,
      },
    ],
  },
  {
    id: 47,
    text: `You don't get it, do you? There's no hope for me.`,
    options: [
      {
        text: `Make lemonade`,
        nextText: 48,
      },
    ],
  },
  {
    id: 48,
    text: `Why do you care so much? Why are you even still here?`,
    options: [
      {
        text: `You need to be yourself`,
        nextText: 49,
      },
      {
        text: `Life is better than you think`,
        nextText: 50,
      },
    ],
  },
  {
    id: 49,
    text: `I spend a lot of time with the real me and believe me, nobody’s gonna love that guy.`,
    options: [
      {
        text: `You know that's not true. You can wake up from this nightmare.`,
        nextText: 51,
      },
    ],
  },
  {
    id: 50,
    text: `Did you even read what I said? It seems like you don't understand.`,
    options: [
      {
        text: `I do understand, and you can wake up from this nightmare.`,
        nextText: 51,
      },
    ],
  },
  {
    id: 51,
    text: `Why bother? Isn't it easier just to give up`,
    options: [
      {
        text: `You're losing yourself.`,
        nextText: 52,
      },
    ],
  },
  {
    id: 52,
    text: `Do you wanna have a bad time? Because if you take one more step forward...you are REALLY not going to like what happens next.`,
    options: [
      {
        text: `Take a step forward`,
        nextText: 53,
      },
      {
        text: `End the game.`,
        nextText: 53,
      },
    ],
  },
  {
    id: 53,
    text: `.....`,
    options: [
      {
        text: `?`,
        nextText: 54,
      },
    ],
  },
  {
    id: 54,
    text: `Lemon Boy falls off the shore and plummets into the ocean. He doesn't know how to swim. He begins to splash and drown.
    A look of horror and regret on his face.
    
    "HELPPP!" he screams.`,
    options: [
      {
        text: `Save him`,
        nextText: 55,
      },
      {
        text: `Watch him drown [incomplete tree]`,
        nextText: 54,
      },
    ],
  },
  {
    id: 55,
    text: `You jump in the water with Lemon Boy, attempting to keep him afloat. You realize your mistake. Lemon Boy begins to pull and grab at you. You can't communicate to him that he's pulling you down with him. It's his natural instincts to want to survive.
    No matter how much you struggle, Lemon Boy tugs at your limbs. You both begin to drown.`,
    options: [
      {
        text: `.`,
        nextText: 71,
      },
    ],
  },
  {
    id: 71,
    text: `What do you see?
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    DEATH
    LOVE🤍`,
    options: [
      {
        text: `DEATH`,
        setState: { death: true },
        nextText: 56,
      },
      {
        text: `LOVE`,
        setState: { love: true },
        nextText: 56,
      },
    ],
  },
  {
    id: 56,
    text: `Hey... it's you...`,
    options: [
      {
        text: `Continue`,
        nextText: 57,
      },
    ],
  },
  {
    id: 57,
    text: `Remember me? It's Lemon Boy. The one who made you drown? Haha. Sorry.`,
    options: [
      {
        text: `Continue`,
        nextText: 58,
      },
    ],
  },
  {
    id: 58,
    text: `I'm no longer drowning, but I don't know where I am. Where am I?`,
    options: [
      {
        text: `Continue`,
        nextText: 59,
      },
    ],
  },
  {
    id: 59,
    text: `This feels so much worse... why does it burn...`,
    options: [
      {
        text: `Continue`,
        nextText: 60,
      },
    ],
  },
  {
    id: 60,
    text: `Oh... I'm in Hell.`,
    options: [
      {
        text: `Continue`,
        nextText: 61,
      },
    ],
  },
  {
    id: 61,
    text: `How can you hear me from up there? I'm sorry. I shouldn't have pulled you down with me.
    `,
    options: [
      {
        text: `Continue`,
        nextText: 62,
      },
    ],
  },
  {
    id: 62,
    text: `Hello?
    `,
    options: [
      {
        text: `Continue`,
        nextText: 63,
      },
    ],
  },
  {
    id: 63,
    text: `Don't leave me here alone...
    `,
    options: [
      {
        text: `Leave him alone`,
        requiredState: (currentState) => currentState.love,
        nextText: 64,
      },
      {
        text: `Leave him alone`,
        requiredState: (currentState) => currentState.death,
        nextText: 65,
      },
    ],
  },
  {
    id: 64,
    text: `[You start to realize it now.]
    
    Lemon Boy is cancer. Everyone he touches gets hurt. Everyone who has attempted to truly get to know him, and attempt to save him gets dragged down into his own incurable nightmare.
Yet still...
you chose love... 
why?
    `,
    options: [
      {
        text: `END`,
        nextText: 66,
      },
    ],
  },
  {
    id: 65,
    text: `[You start to realize it now.]
    
    Lemon Boy is cancer. Everyone he touches gets hurt. Everyone who has attempted to truly get to know him, and attempt to save him gets dragged down into his own incurable nightmare.
    You saw death, and death was the answer all along. 
    `,
    options: [
      {
        text: `END`,
        nextText: 66,
      },
    ],
  },
  {
    id: 66,
    text: `❤️Thanks for playing! The stuff in this game are imaginative. this is a work of fiction. None of what's in this game is true or a reflection of anyone I know.
    I was originally meaning for this game to way longer, with storylines and multiple endings, but the game was taking way too long and the code was getting way to complicated. So it's like 33% finished. I hope you enjoyed it anyways. If you are feeling generous, click on the little drawing of Lemon Boy you see.
    `,
    options: [
      {
        text: `Restart`,
        nextText: -1,
      },
    ],
  },

  {
    id: 69,
    text: `Game? What game? You're funny😆. Anyways, try not ask me this question again 👻.
    `,
    options: [
      {
        text: `Fine. I love the aquarium`,
        nextText: 23,
      },
    ],
  },

  //   requiredState: (currentState) => currentState.blueGoo,
  //   setState: { blueGoo: false, sword: true, },
];

startGame();
