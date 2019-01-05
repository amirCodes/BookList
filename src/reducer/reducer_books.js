function booksReducer() {
  return [
    {
      id: 1,
      title: 'Taming the State in React',
      description: ' The bigger idea was to write a book which gives learners a consistent way to study the topic state management. I had the feeling that there exist way too many, partly inconsistent or outdated, tutorials around these topics and it is hard for learners to choose from so many opportunities. I thought, one well structured book should help newcomers to get started easily in the topic of state management with React\'s local state, Redux and MobX. Afterward, everyone should be on one well set level to build his/her own applications with Redux or MobX',
      author: 'Robin Wieruch',
      status: true,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/41kOK9WQ-7L.jpg'
    },
    {
      id: 2,
      title: 'JavaScript: The Good Parts',
      description: 'Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.\n' +
        '\n' +
        'Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables.\n' +
        '\n' +
        'When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including:\n' +
        '\n' +
        'Syntax\n' +
        'Objects\n' +
        'Functions\n' +
        'Inheritance\n' +
        'Arrays\n' +
        'Regular expressions\n' +
        'Methods\n' +
        'Style\n' +
        'Beautiful features\n' +
        'The real beauty? As you move ahead with the subset of JavaScript that this book presents, you\'ll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book.\n' +
        '\n' +
        'With JavaScript: The Good Parts, you\'ll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you\'re managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.',
      author: 'Douglas Crockford',
      status: true,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      id: 3,
      title: 'Educated',
      description: 'An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family ' +
        'and goes on to earn a PhD from Cambridge University\n' +
        '\n' +
        '“Beautiful and propulsive . . . Despite the singularity of [Tara Westover’s] childhood, ' +
        'the questions her book poses are universal: How much of ourselves should we give to those we ' +
        'love? And how much must we betray them to grow up?”—Vogue\n' +
        '\n' +
        'Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first ' +
        'time she set foot in a classroom. Her family was so isolated from mainstream society that ' +
        'there was no one to ensure the children received an education, and no one to intervene when one ' +
        'of Tara’s older brothers became violent. When another brother got himself into college, Tara decided ' +
        'to try a new kind of life. Her quest for knowledge transformed her, taking her over oceans and across' +
        ' continents, to Harvard and to Cambridge University. Only then would she wonder if she’d traveled too far,' +
        ' if there was still a way home.',
      author: 'Tara Westover',
      status: true,
      cover: 'http://t3.gstatic.com/images?q=tbn:ANd9GcScZt-0lsE0rsi-dKRz22iAtfiF4CmCwfmJjJajD-pr9CEmsfS6'
    },
    {
      id: 4,
      title: 'The Largesse of the Sea Maiden',
      description: 'Twenty-five years after Jesus’ Son, a haunting new collection of short stories on mortality and transcendence, from National Book Award winner and two-time Pulitzer Prize finalist Denis Johnson\n' +
        '\n' +
        'NATIONAL BESTSELLER • NAMED ONE OF THE TEN BEST BOOKS OF THE YEAR BY Dwight Garner, The New York Times • Maureen Corrigan, NPR’s Fresh Air • Chicago Tribune • Newsday • New York • Vulture • AV Club • Publishers Weekly',
      author: 'Denis Johnson',
      status: true,
      cover: 'https://images.penguinrandomhouse.com/cover/9780812988659'
    }
  ];
}

export default booksReducer;
