const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    const cats = pets.cats.all();
    const dogs = pets.dogs.all();
    return { cats, dogs };
  },

  getDog() {
    const dog = pets.dogs.show();
    return dog;
  },

  getCat() {
    const cat = pets.cats.show();
    return cat;
  },

  dequeue(type) {
    let dqPet;
    // Remove a pet from the queue.
    if (type === 'cat') {
      dqPet = pets.cats.dequeue();
      pets.cats.enqueue(dqPet);
    } else if (type === 'dog') {
      dqPet = pets.dogs.dequeue();
      pets.dogs.enqueue(dqPet);
    } else {
      return;
    }
  },
};
