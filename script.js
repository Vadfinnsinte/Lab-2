import { books } from './book-list.js'
// Fråga 1.
console.log(books.length)
/*2 Skriv ut namnen på alla böcker. (Skapa först en lista som bara innehåller namnen.)
*/

// Hämta titlarna från böckerna och lagra dem i en separat lista
let titles = books.map(book => book.title);
console.log(titles);


/* 3 Skriv ut namn och pris för alla böcker av typen "Fantasy".*/

for (let i=0; i < books.length; i++){
	if ( i === "genre" && "genre" === "fantasy")
	console.log(books.price)
}
  