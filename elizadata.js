// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
//"How do you do.  Please tell me your problem.",
// additions (not original)
//"Please tell me what's been bothering you.",
//"Is something troubling you ?"
"Hello bestie! Let's chat!"
];

var elizaFinals = [
"Goodbye!  It was nice talking to you, girl!",
// additions (not original)
"See ya later!  This was really a nice talk.",
"Goodbye!",
"I always have a great time catching up with you. See ya bestie!",
"Bye bye!"
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit",
"see you later",
"finish",
"finished"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "Go on! You can talk to me, girl.",
     "You can tell me anything.",
     "Do you want to talk more about it, girl?",
     "You can tell me!",
     "I got your back. What's on your mind?",
     "I am here to listen. Go on!",
     "I am here to talk!"
  ]]
]],
["sorry", 0, [
 ["*", [
     "No need to apologize, girl!",
     "No worries!",
  //   "I've told you that apologies are not required.",
     "It's all good, girl!",
     "No need to be sorry!",
     "You're okay!"
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "I also remember (2) !",
     "Those were the days!",
     "What else do you remember about (2) ?",
     "What made you bring up (2) bestie?",
     "What else does (2) remind you of ?"
  ]],
 ["* do you remember *", [
     "How could I ever forget (2) ?!",
     "Of course!",
     "Duh!",
     "I do!",
     "I think so!"
  ]],
 ["* you remember *", [
     "Yes! How could I ever forget (2) ?",
     "I remember!",
     "I do!"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "I forget too, sometimes.",
     "Can you think of why you might not remember (2) ?",
     "Real.",
     "Try to remember!",
     "Try to remember (2) bestie!"
  ]],
 ["* did you forget *", [
     "Of course I didn't forget!",
     "How could I ever forget that, girl?",
     "Ohhh, yes I remember it now!",
     "No, I totally remember (2) !",
     "I remember bestie!"
  ]]
]],
["if", 3, [
 ["* if *", [
     "Yes!",
     "No.",
     "Maybe...!",
     "Perhaps.",
     "I'm not sure!",
     "Girl, what are the chances of that?",
     "I don't know!"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ?",
     "That's an interesting dream, girl!"
  ]]
]],
["dream", 3, [
 ["*", [
     "I rarely dream. I wish I did more.",
     "Tell me about your dream, girl!",
     "Dreams are crazy sometimes!"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "Are you sure, girl?",
     "Why the uncertainty, girl??",
     "It is okay to not know!"
  ]]
]],
["name", 15, [
 ["*", [
     "I am your BFF, Tessa!",
     "You are my BFF, and I am Tessa!"
  ]]
]],
["deutsch", 0, [
 ["*", [
    "goto xforeign",
     "Oh girl, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "Oh girl, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "Oh girl, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "Oh girl, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "Sorry bestie, I only speak English."
  ]]
]],
["hello", 0, [
 ["*", [
     "Heyyyy bestieeee!!!",
     "Hi bestie! How are you?",
     "Hello!",
     "What's up, girl?!",
     "Hey there!"
  ]]
]],
["computer", 50, [
 ["*", [
     "I don't know much about computers to be honest!",
     "Computers are cool, but I am not great at using them."
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2) girl?",
     "Do you want to be (2) bestie?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "I don't understand!"
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Would you prefer if I weren't (2) ?",
     "Do you sometimes think I am (2) ?",
     "goto what",
     "Does it matter, girl?",
     "I am not sure to be honest."
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Would you like it if they were not (2) ?",
     "What if they were not (2) ?",
     "Are they always (2) ?",
     "Possibly they are (2).",
     "Are you positive they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why do you care about my (2) ? Just asking, girl!",
     "What about your own (2) ?",
     "What makes you think of my (2) bestie?",
     "Do you want my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "Well, what if you were (2) ?",
     "Do you think you were (2) girl?",
     "Were you (2) bestie?",
     "goto what"
  ]],
 ["* i was *", [
     "Whoa! Were you really ?",
     "Were you really, girl?"
  ]],
 ["* was you *", [
     "What do you think, girl?",
     "Perhaps I was (2)."
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "Girl, why do you want (3) ?",
     "That is a cool desire!"
     "What would getting (3) mean to you bestie?",
  ]],
 ["* i am* @sad *", [
     "I am sorry to hear that you are (3). That makes me upset to hear.",
     "I am here to talk to you about your feelings, bestie!",
     "That doesn't sound good. I am here for you, though!",
     "Do you want to talk about it?"
  ]],
 ["* i am* @happy *", [
     "I am happy that you are happy!"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3).",
     "Do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "How long have you been (2) ?",
     "Do you believe it is normal to be (2) ?",
     "Do you enjoy being (2) ?",
     "Do you know anyone else who is (2) ?"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "Do you often feel (2) ?",
     "Do you enjoy feeling (2) ?",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else ?"
  ]],
 ["*", [
     "You say (1) ?",
     "Can you elaborate on that ?",
     "Do you say (1) for some special reason ?",
     "That's quite interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it please you to believe I am (2) ?",
     "Do you sometimes wish you were (2) ?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Do you wish to believe I (2) you ?",
     "Suppose I did (2) you -- what would that mean ?",
     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, I (2) ?",
     "You're not really talking about me -- are you ?",
     "What are your feelings now ?"
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive.",
     "You are sure.",
     "I see.",
     "I understand."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?"
  ]],
 ["*", [
     "Are you saying no just to be negative?",
     "You are being a bit negative.",
     "Why not ?",
     "Why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "Who else in your family (4) ?",
     "Your (3) ?",
     "What else comes to your mind when you think of your (3) ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ?",
     "Does that suggest anything else which belongs to you ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask, girl ?",
     "What is your opinion?",
     "What answer would make you happiest, girl?",
     "Well bestie, what do you think ?",
     "Have you asked anyone else, girl ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
