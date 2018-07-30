module.exports = function(req, res) {

  const quotes = [
    [
      "Jules Winnfield: You ever read the Bible, Brett?",
      "Brett: Yes!",
      "Jules Winnfield: There's a passage that I got memorized, seems appropiate for this situation: Ezekiel 25,17. \"The path of the righteous man is beset of all sides by the iniquities of the selfish and the tyranny of evil me. Blessed is he who, in the name of the charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon thee."
    ],
    [
      "Pumpkin: (pulls out a gun) Everyone stay cool. This is a robbery!",
      "Pumpkin: [pulls out a gun] Everyone stay cool. This is a robbery!",
      "Honey Bunny: (pulls out a gun) ANYONE OF YOU FUCKING PRICKS MOVE AND I'LL EXECUTE EVERY LAST FUCKING ONE OF YOU"
    ],
    ["Jules Winnfield: Say \"What\" again. Say it one more god damn time! I dare you! I double dare you mother fucker!"],
    ["Vincent Vega: God damn that's a pretty fucking good milkshake."],
    [
      "Vincent Vega: Would you give a man a foot massage?",
      "Jules Winnfield: Fuck you",
      "Jules Winnfield: Fuck you.",
      "Vincent Vega: Because I could use a foot massage.",
      "Jules Winnfield: look I'm starting to get a little pissed off here."
    ],
    ["Vincent Vega: They call it a \"Royale with Cheese.\""],
    [
      "Honey Bunny: [about to rob a diner] I love you, Pumpkin.",
      "Pumpkin: I love you, Honey Bunny.",
      "Pumpkin: [Standing up with a gun] All right, everybody be cool, this is a robbery!",
      "Honey Bunny: Any of you fucking pricks move, and I'll execute every motherfucking last one of ya!"
    ],
    ["Jules Winnfield: Jules: [Jules shoots the man on the couch] I'm sorry, did I break your concentration? I didn't mean to do that. Please, continue, you were saying something about best intentions. What's the matter? Oh, you were finished! Well, allow me to retort. What does Marsellus Wallace look like? Brett: What? Jules: What country are you from? Brett: What? What? Wh - ? Jules: \"What\" ain't no country I've ever heard of. They speak English in What? Brett: What? Jules: English, motherfucker, do you speak it? Brett: Yes! Yes! Jules: Then you know what I'm sayin'! Brett: Yes! Jules: Describe what Marsellus Wallace looks like! Brett: What? Jules: Say 'what' again. Say 'what' again, I dare you, I double dare you motherfucker, say what one more Goddamn time!"],
    ["Jules Winnfield: English, motherfucker, do you speak it?!"],
    ["The Wolf: That's thirty minutes away. I'll be there in ten."]
  ];
  const randomBetween1And9 = Math.floor((Math.random() * 10));

  res.json(JSON.stringify(quotes[randomBetween1And9]));
}
