function booksReducer() {
  return [
    {
      id: 1,
      title: 'Javascript: The Good Parts',
      description: 'Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.',
      author: 'Douglas Crockford',
      price: 19.30,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/5166ztxOm9L.jpg'
    },
    {
      id: 2,
      title: 'Eloquent JavaScript: A Modern Introduction to Programming',
      description: 'Eloquent JavaScript, 2nd Edition dives deep into the JavaScript language to show you how to write beautiful, effective code. Author Marijn Haverbeke immerses you in example code from the start, while exercises and full-chapter projects give you hands-on experience with writing your own programs.',
      author: 'Marijn Haverbeke',
      price: 20.48,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/51zFTdNilAL.jpg'
    },
    {
      id: 3,
      title: 'Professional JavaScript for Web Developers',
      description: 'This book provides a developer–level introduction along with more advanced and useful features of JavaScript.',
      author: 'Nicholas C. Zakas',
      price: 23.39,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/518NO3X1X2L._SX394_BO1,204,203,200_.jpg'
    },
    {
      id: 4,
      title: 'Eloquent Ruby',
      description: 'Olsen draws on years of experience internalizing the Ruby culture and teaching Ruby to other programmers. He guides you to the "Ah Ha!" moments when it suddenly becomes clear why Ruby works the way it does, and how you can take advantage of this language’s elegance and expressiveness.',
      author: 'Russ Olsen',
      price: 30.99,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/414gR4dCXiL.jpg'
    }
  ];
}

export default booksReducer;
