const motivationWords =
  "Abundant,Achieving,Active,Admirable,Adorable,Adventurous,Admired,Affluent,Agreeable,Alert,Aligned,Alive,Amazing,Appealing,Appreciate,Artistic,Astounding,Astute,Attentive,Attractive,Auspicious,Authentic,Awake,Aware,Beaming,Beautiful,Best,Blessed,Bliss,Bold,Bright,Brilliant,Brisk,Buoyant,Calm,Capable,Centered,Certain,Charming,Cheerful,Clear,Clever,Competent,Complete,Confident,Connected,Conscious,Considerate,Convenient,Courage,Creative,Daring,Dazzling,Delicious,Delightful,Desirable,Determined,Diligent,Discerning,Discover,Dynamic,Eager,Easy,Efficient,Effortless,Elegant,Eloquent,Energetic,Endless,Enhancing,Engaging,Enormous,Enterprising,Enthusiastic,Enticing,Excellent,Exceptional,Exciting,Experienced,Exquisite,Fabulous,Fair,Far-Sighted,Fascinating,Fine,Flattering,Flourishing,Fortunate,Free,Friendly,Fulfilled,Fun,Generous,Genuine,Gifted,Glorious,Glowing,Good,Good-Looking,Gorgeous,Graceful,Gracious,Grand,Great,Handsome,Happy,Hardy,Harmonious,Healed,Healthy,Helpful,Honest,Humorous,Ideal,Imaginative,Impressive,Industrious,Ingenious,Innovative,Inspired,Intelligent,Interested,Intuitive,Inventive,Invincible,Inviting,Irresistible,Joyous,Judicious,Keen,Kind,Knowing,Limitless,Lively,Loving,Lucky,Luminous,Magical,Magnificent,Marvelous,Masterful,Mighty,Miraculous,Motivated,Natural,Neat,Nice,Nurturing,Noble,Optimistic,Outstanding,Passionate,Peaceful,Perfect,Persevering,Persistent,Playful,Pleasing,Plentiful,Positive,Powerful,Precious,Prepared,Productive,Profound,Prompt,Prosperous,Proud,Qualified,Quick,Radiant,Reasonable,Refined,Refreshing,Relaxing,Reliable,Remarkable,Resolute,Resourceful,Respected,Rewarding,Robust,Safe,Satisfied,Secure,Seductive,Sensational,Sensible,Sensitive,Serene,Sharing,Skillful,Smart,Smashing,Smooth,Sparkling,Spiritual,Splendid,Strong,Stunning,Successful,Superb,Swift,Talented,Tenacious,Terrific,Thankful,Thrilling,Thriving,Timely,Trusting,Truthful,Ultimate,Unique,Valiant,Valuable,Versatile,Vibrant,Victorious,Vigorous,Vivacious,Vivid,Warm,Wealthy,Well,Whole,Wise,Wonderful,Worthy,Young,Youthful,Zeal,Zest";
const motivationA = motivationWords.split(",");
export const motivationArray = motivationA.filter(word => {
  let splitWord = word.split("");
  return splitWord.length < 9;
});
export const phrases = [
  "Absence makes the heart grow fonder.",
  "When it rains, it drains.",
  "The squeaky mouse gets the cheese.",
  "Actions speak louder than words.",
  "After the feast comes the reckoning.",
  "All that glitters is not gold.",
  "An apple a day keeps the doctor away.",
  "The apple does not fall far from the tree.",
  "Bad news travels fast.",
  "Barking dogs seldom bite.",
  "Beauty is in the eyes of the beholder.",
  "Beggars can't be choosers.",
  "The best things in life are free.",
  "Better a live coward than a dead hero.",
  "Better late than never.",
  "Better safe than sorry.",
  "The bigger they are, the harder they fall.",
  "A bird in the hand is worth two in the bush.",
  "Birds of a feather flock together.",
  "Blood is thicker than water.",
  "Charity begins at home.",
  "Clothes don't make the man.",
  "Curiosity killed the cat.",
  "Do as I say, not as I do.",
  "Don't bite off more than you can chew.",
  "Don't bite the hand that feeds you.",
  "Don't count your chickens before they're hatched.",
  "Don't cry over spilled milk.",
  "Don't judge a book by its cover.",
  "Don't judge a man until you've walked in his boots.",
  "Don't look a gift horse in the mouth.",
  "Don't put all your eggs in one basket.",
  "Don't put off for tomorrow what you can do today.",
  "Don't put the cart before the horse.",
  "Familiarity breeds contempt.",
  "The first step is always the hardest.",
  "A fool and his money are soon parted.",
  "Forewarned is forearmed.",
  "A friend in need is a friend indeed.",
  "A friend who shares is a friend who cares.",
  "Good things come in small packages.",
  "The grass is always greener on the other side of the fence.",
  "Haste makes waste.",
  "He who hesitates is lost.",
  "He who laughs last, laughs best.",
  "Hindsight is better than foresight.",
  "If at first you don't succeed, try, try again.",
  "If you can't beat them, join them.",
  "If you can't stand the heat, get out of the kitchen.",
  "Imitation is the sincerest form of flattery.",
  "In unity there is strength.",
  "It never rains but it pours.",
  "It takes two to tango.",
  "Leave well enough alone.",
  "A leopard can't change its spots.",
  "Lightning never strikes twice in the same place.",
  "Look before you leap.",
  "Love is blind.",
  "Love makes the world go round.",
  "Make hay while the sun shines.",
  "Man does not live by bread alone.",
  "A man is known by the company he keeps.",
  "Might makes right.",
  "Misery loves company.",
  "Money does not grow on trees.",
  "Necessity is the mother of invention.",
  "No news is good news.",
  "No pain, no gain.",
  "Nothing hurts like the truth.",
  "Nothing ventured, nothing gained.",
  "Old habits die hard.",
  "One good turn deserves another.",
  "One man's gravy is another man's poison.",
  "One swallow does not a summer make.",
  "The pen is mightier than the sword.",
  "Possession is nine-tenths of the law.",
  "Practice makes perfect.",
  "The proof of the pudding is in the eating.",
  "The road to hell is paved with good intentions.",
  "Rome wasn't built in a day.",
  "The spirit is willing, but the flesh is weak.",
  "The squeaky wheel gets the grease.",
  "Strike while the iron is hot.",
  "While the cats away the mice play.",
  "Spare the rod and spoil the child.",
  "There is no honor among thieves.",
  "There is more than one way to skin a cat.",
  "There is no fool like an old fool.",
  "There is no place like home.",
  "Too many chiefs, not enough Indians.",
  "Too many cooks spoil the broth.",
  "Two heads are better than one.",
  "Two's company, but three's a crowd.",
  "Variety is the spice of life.",
  "The way to a man's heart is through his stomach.",
  "When in Rome, do as the Romans do.",
  "When the cat's away, the mice play.",
  "Where there is smoke, there is fire.",
  "You can lead a horse to water, but you can't make him drink.",
  "You can't have your cake and eat it too.",
  "You can't teach an old dog new tricks.",
  "You have to take the good with the bad.",
  "You reap what you sow.",
  "You're never too old to learn.",
  "The beef is beef.",
  "The beef gets beef.",
  "The beef not beef.",
  "The beef do beef.",
  "The beef can't beef.",
  "The beef to beef.",
  "The beef makes beef.",
  "A cat has nine lives.",
  "Every cloud has a silver lining.",
  "Every dog has its day.",
  "Every man has his price.",
  "A friend to everybody is a friend to nobody.",
  "A hair on the head is worth two in the brush.",
  "A stitch in time saves nine.",
  "All work and no play makes Jack a dull boy.",
  "The early bird gets the worm.",
  "The second mouse gets the cheese.",
  "Early to bed, early to rise, makes you healthy, wealthy and wise.",
  "Haste makes waste.",
  "All's fair in love and war.",
  "An eye for an eye and a tooth for a tooth.",
  "Ask and you shall receive.",
  "Ask no questions and hear no lies.",
  "Better to have loved and lost, than to have never loved at all.",
  "Divide and conquer.",
  "In one ear and out the other.",
  "Laugh and the world laughs with you. Cry and you cry alone.",
  "Say what you mean and mean what you say.",
  "Sticks and stones may break my bones but words will never hurt me.",
  "His bark is louder than his bite.",
  "His eyes are bigger than his belly.",
  "Those who don't learn from history are doomed to repeat it.",
  "You are what you eat.",
  "Rules are made to be broken.",
  "The bigger they are the harder they fall."
];
