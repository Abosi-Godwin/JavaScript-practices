// Exercise 1

/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

const getActualLikes = names => {

  if (names.length === 1) {
    return `${[...names]} likes this`;
  } else if (names.length === 2) {

    return `${names[0]} and ${names[1]} like this`;

  } else if (names.length === 3) {

    return `${names[0]}, ${names[1]} and ${names[2]} like this`;

  } else {

    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;

  }

}

const likes = names => {

  const res = names.length === 0 ? "no one likes this" : getActualLikes(names);

  return res;

}

//console.log(likes(["Margret", "Alex", "Jacob", "Mark", "Max", "Godwin"]));


//Exercise 2 => Sentence Smash
/* 
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/
// Example
/*
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

// solution.......

const smash = word => word.join(" ").trim();

//console.log(smash(['hello', 'world', 'this', 'is', 'great']))

