// Create our IpsumGenerator function
var IpsumGenerator = function(){};

// Master method that gets called to generate the ipsum based on a set
// of words and a desired word count.
IpsumGenerator.prototype.generateIpsum = function(words, paragraphsCount) {
  this.wordList = [];
  this.sentences = [];
  this.paragraphs = [];
  this.generateWordlist(words, paragraphsCount);
  //this.generateSentencesFromWordlist();
  this.generateParagraphsFromSentences();

  // Return the Nietzsche Ipsum
  ipsum = '';
  this.paragraphs.forEach(function(paragraph) {
    ipsum += paragraph.join(' ');
    ipsum += "<br><br>";
  });

  return ipsum;
};

// Creates an array n elements long, where n = paragraphsCount
// Each element is a random word from the set of paragraphs given by the user
IpsumGenerator.prototype.generateWordlist = function(words, paragraphsCount) {
  var wordArray = words.split('/');
  for (i=0; i < paragraphsCount; i++) {
    var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    this.wordList.push(randomWord);
  }
};

// Split the wordList into sentences that are between 5 and 15 words long
IpsumGenerator.prototype.generateSentencesFromWordlist = function() {
  var cursor = 0;
  while (cursor <= this.wordList.length) {
    var sentence = [];
    var sentenceLength = Math.floor((Math.random() * 10) + 5);
    for (var i = 0; i < sentenceLength; i++) {
      var word = this.wordList[i + cursor];
      if (word !== undefined) {
        sentence.push(word);
      }
    }
    this.sentences.push(sentence);
    cursor += sentenceLength;
  }
};

// Split the sentences into paragraphs that are between 2 and 8 sentences long
// Also format the sentences to be capitalized and end with a period
IpsumGenerator.prototype.generateParagraphsFromSentences = function() {
  var cursor = 0;
  while (cursor <= this.sentences.length) {
    var paragraph = [];
    var paragraphLength = Math.floor((Math.random() * 6) + 2);
    for (var i = 0; i < paragraphLength; i++) {
      var sentence = this.sentences[i + cursor];
      if (sentence !== undefined) {
        sentence = sentence.join(' ') + '.';
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        sentence[0] = sentence[0].toUpperCase();
        paragraph.push(sentence);
      }
    }
    this.paragraphs.push(paragraph);
    cursor += paragraphLength;
  }

};

// Instantiate the ipsum generator, set up our string, and generate the nietzsche ipsum!
ipsumGen = new IpsumGenerator();
nietzscheWords += 'The Great Man... is colder, harder, less hesitating, and without fear of "opinion"; he lacks the virtues that accompany respect and "respectability", and altogether everything that is the "virtue of the herd". If he cannot lead, he goes alone... He knows he is incommunicable: he finds it tasteless to be familiar... When not speaking to himself, he wears a mask. There is a solitude within him that is inaccessible to praise or blame./'
nietzscheWords += 'One must shed the bad taste of wanting to agree with many. "Good" is no longer good when one\'s neighbor mouths it. And how should there be a "common good"! The term contradicts itself: whatever can be common always has little value. In the end it must be as it is and always has been: great things remain for the great, abysses for the profound, nuances and shudders for the refined, and, in brief, all that is rare for the rare./'
nietzscheWords += 'Of all that is written, I love only what a person hath written with his blood. Write with blood, and thou wilt find that blood is spirit. It is no easy task to understand unfamiliar blood; I hate the reading idlers. He who knoweth the reader, doeth nothing more for the reader. Another century of readers--and spirit itself will stink. Every one being allowed to learn to read, ruineth in the long run not only writing but also thinking. Once spirit was God, then it became man, and now it even becometh populace. He that writeth in blood and proverbs doth not want to be read, but learnt by heart. In the mountains the shortest way is from peak to peak, but for that route thou must have long legs. Proverbs should be peaks, and those spoken to should be big and tall. The atmosphere rare and pure, danger near and the spirit full of a joyful wickedness: thus are things well matched. I want to have goblins about me, for I am courageous. The courage which scareth away ghosts, createth for itself goblins--it wanteth to laugh./'
nietzscheWords += 'You desire to LIVE "according to Nature"? Oh, you noble Stoics, what fraud of words! Imagine to yourselves a being like Nature, boundlessly extravagant, boundlessly indifferent, without purpose or consideration, without pity or justice, at once fruitful and barren and uncertain: imagine to yourselves INDIFFERENCE as a power—how COULD you live in accordance with such indifference? To live—is not that just endeavouring to be otherwise than this Nature? Is not living valuing, preferring, being unjust, being limited, endeavouring to be different? And granted that your imperative, "living according to Nature," means actually the same as "living according to life"—how could you do DIFFERENTLY? Why should you make a principle out of what you yourselves are, and must be? In reality, however, it is quite otherwise with you: while you pretend to read with rapture the canon of your law in Nature, you want something quite the contrary, you extraordinary stage-players and self-deluders! In your pride you wish to dictate your morals and ideals to Nature, to Nature herself, and to incorporate them therein; you insist that it shall be Nature "according to the Stoa," and would like everything to be made after your own image, as a vast, eternal glorification and generalism of Stoicism! With all your love for truth, you have forced yourselves so long, so persistently, and with such hypnotic rigidity to see Nature FALSELY, that is to say, Stoically, that you are no longer able to see it otherwise—and to crown all, some unfathomable superciliousness gives you the Bedlamite hope that BECAUSE you are able to tyrannize over yourselves—Stoicism is self-tyranny—Nature will also allow herself to be tyrannized over: is not the Stoic a PART of Nature?... But this is an old and everlasting story: what happened in old times with the Stoics still happens today, as soon as ever a philosophy begins to believe in itself. It always creates the world in its own image; it cannot do otherwise; philosophy is this tyrannical impulse itself, the most spiritual Will to Power, the will to "creation of the world," the will to the causa prima./'
nietzscheWords += 'It has gradually become clear to me what every great philosophy up till now has consisted of – namely, the confession of its originator, and a species of involuntary and unconscious autobiography; and moreover that the moral (or immoral) purpose in every philosophy has constituted the true vital germ out of which the entire plant has always grown./'
nietzscheWords += 'For this is how things are: the diminution and leveling of European man constitutes our greatest danger, for the sight of him makes us weary.—We can see nothing today that wants to grow greater, we suspect that things will continue to go down, down, to become thinner, more good-natured, more prudent, more comfortable, more mediocre, more indifferent, more Chinese, more Christian—there is no doubt that man is getting "better" all the time./'

// Generate the ipsum on click
$(function(){

  var generateIpsum = function () {
    ipsum = ipsumGen.generateIpsum(nietzscheWords, $('#num').val());
    ipsum = '<span class="dropcap">' + ipsum.charAt(0) + '</span>' + ipsum.slice(1);
    $('.ipsum-container').html(ipsum);
    $('.ipsum-container').addClass('show');
    $('html, body').animate({
        scrollTop: $(".ipsum-container").offset().top
    }, 600).addClass('show-social-buttons');
  };

  $('#generate').on('click', generateIpsum);
  $('#generate').on('tapstart', generateIpsum);

});

