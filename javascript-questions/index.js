const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  let marvelArray = [];
  heroes.map((hero) => {
    if (hero.publisher === 'Marvel Comics') {
      marvelArray.push(hero);
    }
  });
  return marvelArray;
};

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  heroes.map((hero) => {
    hero.characters = hero.characters.split(', ');
  });
  return heroes;
};

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  result = heroes.reduce((a, c) => {
    a[c.publisher] = a[c.publisher] || [];
    a[c.publisher].push(c);
    return a;
  }, {});
  return result;
};

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  let result = [];
  heroes.map((hero) => {
    if (hero.publisher === 'DC Comics') {
      //no need to convert characters string to array because of question 2
      if (hero.characters.length > 1) {
        result.push(hero);
      }
    }
  });
  return result;
};

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
};
