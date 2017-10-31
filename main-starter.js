/*jshint esversion: 6 */

// multi-dimentional array
let top_movies = [
  ["The Shawshank Redemption", 1994, "Drama"],
  ["The Godfather", 1972, "Crime"],
  ["The Godfather: Part II", 1974, "Crime"],
  ["The Dark Knight", 2008, "Action"],
  ["12 Angry Men", 1957, "Drama"]
];

// write a for loop to output movie names
for (let i = 0; i < top_movies.length; i++){
  console.log(top_movies[i][0] + ", " + top_movies[i][1] + ", " + top_movies[i][2]);
}




// use Iterator and Arrow function
// to loop over the array to out names with *** prefix
top_movies.forEach(movie => console.log("***" + movie));



// Use Iterator and Arrow functions, .filter()
// to output the name and genre of movies after 1990
let movie_list = top_movies.filter(movie => movie.slice(1, 2) >= 1990);
for(let i=0; i < movie_list.length; i++){
  console.log(">>>" + movie_list[i][0] + ", " + movie_list[i][2]);
}



// change genre category for either "Crime" or "Drame"
// to "Crime, Drama" using .map() and output the result
// see https://www.w3schools.com/jsref/jsref_map.asp
top_movies.forEach(movie => {let genre = movie.map
  (function genre2 (movie){
    if (movie === "Crime"){
      return "Crime, Drama";
    } else if (movie === "Drama"){
      return "Crime, Drama"
    } else {
      return movie;
    }
  });
  console.log("### " + genre[0] + ", " + genre[2]);
});





// add code to calculate the number of years to become a millinaire
// with initial deposit of 10000 and 0.06 interest rate
let initialDeposit = 10000;
let numberOfYears = 0;
while (initialDeposit < 1000000){
  initialDeposit += initialDeposit * .06;
  numberOfYears += 1;
}
console.log("You will be a millionaire in " + numberOfYears + " years!");

// add player objects and output results according to lecture slides
let player_1 = {
  name: "Stephen Curry",
  dob: "March 14, 1988",
  height: 1.91,
  weight: 86,
  shoot(){
    return "3-pointer";
  },
  info(){
    return '${this.name} is ${this.height}m and ${this.weight}kg.';
  }
}

let player_2 = {
  name: "Lebron James",
  dob: "December 30,1984",
  height: 2.03,
  weight: 118,
  shoot(){
    return "dunk";
  },
  info(){
    return `${this.name} is ${this.height}m and ${this.weight}kg.`;
  }
};

console.log(player_1.name);
console.log(player_2["name"]);
console.log(player_2.weight - player_1.weight);
console.log(player_1.shoot());
console.log(player_2.shoot());
console.log(player_2.info());
player_2.draft_year = 2003;
console.log(player_2.draft_year);
