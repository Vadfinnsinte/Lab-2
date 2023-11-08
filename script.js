import { books } from './book-list.js'
// Fråga 1.
console.log ('Hur många böcker finns det i affären?')
console.log('Det finns ' + books.length + ' böcker i affären.')
console.log ( )


/*2 Skriv ut namnen på alla böcker. (Skapa först en lista som bara innehåller namnen.)
*/

// Hämta titlarna från böckerna och lagra dem i en separat lista
let titles = books.map(book => book.title);
console.log(titles);


/* 3 Skriv ut namn och pris för alla böcker av typen "Fantasy".*/
console.log('Följande Fantasy-böcker finns tillgängliga i vår butik:')
for (let i=0; i < books.length; i++){
	if ( books[i].genre.includes("Fantasy"))
	console.log(books[i].title, books[i].price)
} 
// 5 Skriv ut namn och pris för alla böcker som kostar över $10.
console.log("Dessa böcker kostar mer än $10");
for (let i=0; i < books.length; i++){
	if ( books[i].price > 10)
	console.log(books[i].title, books[i].price)
} 