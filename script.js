import { books } from './book-list.js'
// Fråga 1.
console.log ('Hur många böcker finns det i affären?')
console.log('Det finns ' + books.length + ' böcker i affären.')
console.log ( )


/*2 Skriv ut namnen på alla böcker. (Skapa först en lista som bara innehåller namnen.)
*/
console.log('Detta samtliga titlar på böckerna:' )

// Hämta titlarna från böckerna och lagra dem i en separat lista
let titles = books.map(book => book.title);
console.log(titles);
console.log( )


/* 3 Skriv ut namn och pris för alla böcker av typen "Fantasy".*/
console.log('Följande Fantasy-böcker finns tillgängliga i vår butik:')
for (let i=0; i < books.length; i++){
	if ( books[i].genre.includes("Fantasy"))
	console.log(books[i].title, books[i].price)
} 
console.log( )


/* 4 Skriv ut namn och genre för alla klassiker, dystopier och mysterieböcker.*/  

console.log('Följande är namn och genre för alla: klassiker, dystopier och mysterieböcker:');
for (let i = 0; i < books.length; i++) {
    if (books[i].genre === "Classic" || books[i].genre === "Dystopian" || books[i].genre === "Mystery") {
        console.log(books[i].title +'/', books[i].genre);
    }
}
console.log( )


