module.exports = function(req, res) {

  const quotes = [
    "All this wine nonsense! You get all these wine people, don't you? Wine this, wine that. Let's have a bit of red, let's have a bit of white. Ooh, that’s a snazzy bouquet. Oh, this smells of, I don't know, basil. Sometimes you just want to say, sod all this wine, just give me a pint of... mineral water.",
    "I'd just like to fly a helicopter all around Norfolk. You know, swoop down over a field. Scare a donkey so that it falls into a river. Hover over one of those annoying families that go on holidays on bikes. And shout at them \"get out of the area!\" and watch them panic!",
    "Sunday Bloody Sunday. What a great song. It really encapsulates the frustration of a Sunday, doesn't it?",
    "Jet from Gladiators to host a millennium barn dance at Yeovil aerodrome. Properly policed. It must not, repeat not, turn into an all-night rave.",
    "Wings? They’re only the band The Beatles could've been!",
    "I find it amazing how many people still think the petrol cap on a Ford Focus is offside rear.",
    "Quick tip for yourself: if you’re ever doing an after-dinner speech, you say \"My Lords, Ladies and Gentlemen, sorry I'm late, I just popped to the toilet. And while I was there, I saw some graffiti and it said 'I used to be indecisive, but now I'm not so sure.' Straight away you’ve got them by the jaffas.",
    "If you see a lovely field with a family having a picnic, and a nice pond in it, you fill in the pond with concrete, you plough the family into the soil, you blow up the tree, and use the leaves to make a dress for your wife who is also your brother.",
    "Swallow. A detective series based in Norwich. Swallow is a detective who tackles vandalism. Bit of a Maverick, not afraid to break the law if he thinks it’s necessary – he’s not a criminal – but he will, perhaps, travel at 80 miles an hour on the motorway if, for example he wants to get somewhere quickly.",
    "This chemical toilet is a Saniflow 33, now this little babe can cope with anything, and I mean anything. Earlier on I put in a pound of mashed up Dundee cake, let's take a look... not a trace! Peace of mind I'm sure, especially if you have elderly relatives on board."
  ];
  const randomBetween1And9 = Math.floor((Math.random() * 10));

  res.json(JSON.stringify(quotes[randomBetween1And9]));
}
