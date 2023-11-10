import { books } from './book-list.js'

/*1 Hur många böcker finns det i affären?*/
console.log ('Fråga 1.')
console.log ('Hur många böcker finns det i affären?')
console.log('Det finns ' + books.length + ' böcker i affären.')
console.log ( )


/*2 Skriv ut namnen på alla böcker. (Skapa först en lista som bara innehåller namnen.*/
console.log ('Fråga 2.')
console.log ('Följande böcker finns i afären:')
let titles = books.map(book => book.title);
console.log(titles);
console.log ( )


/* 3 Skriv ut namn och pris för alla böcker av typen "Fantasy".*/
console.log ('Fråga 3.')
console.log('Följande Fantasy-böcker finns tillgängliga i vår butik:')
for (let i=0; i < books.length; i++){
	if ( books[i].genre.includes("Fantasy"))
	console.log(books[i].title, books[i].price)
} 
console.log ( )


/* 4 Skriv ut namn och genre för alla klassiker, dystopier och mysterieböcker.*/  
console.log ('Fråga 4.')
console.log('Följande är namn och genre för alla: klassiker, dystopier och mysterieböcker:');
for (let i = 0; i < books.length; i++) {
    if (books[i].genre === "Classic" || books[i].genre === "Dystopian" || books[i].genre === "Mystery") {
        console.log(books[i].title +'/', books[i].genre);
    }
}
console.log( )


// 5 Skriv ut namn och pris för alla böcker som kostar över $10.
console.log ('Fråga 5.')
console.log("Dessa böcker kostar mer än $10: ");
for (let i=0; i < books.length; i++){
	if ( books[i].price > 10)
	console.log(books[i].title, books[i].price)
} 
console.log ( )


// 6 Hur mycket är hela bokinnehavet värt? (Vad är det totala priset, om man skulle sälja alla böcker?)
console.log ('Fråga 6.')
let pris = books.map(price => price.price)
let enpris = 0 
// for (let i=0; i < pris.length; i++) {
// 	enpris += pris[i]
// 	console.log(enpris)
// }
pris.forEach(number => {
	enpris += number
})
let prisavrund = enpris.toFixed(2)
console.log("Totala summan för alla våra böcker(avrundat till två decimaler): ", Number(prisavrund));
console.log ( )


// 7 Vilka böcker är sammanlagt värda mest, dystopian eller mystery?
console.log ('Fråga 7.')
let dystopianTotalPrice = books
  .filter(book => book.genre.includes("Dystopian"))
  .reduce((total, book) => total + book.price, 0);

let mysteryTotalPrice = books
  .filter(book => book.genre.includes("Mystery"))
  .reduce((total, book) => total + book.price, 0);

function compare() {
  if (mysteryTotalPrice > dystopianTotalPrice) {
    console.log("Mystery kategorin är värd mer än dystopian");
  } else {
    console.log("Dystopian kategorin är värd mer än Mystery");
  }
}

compare();
console.log ( )


// 8 Skriv ut namnen på alla böcker i bokstavsordning.
console.log ('Fråga 8.')
console.log("Böckernas titlar i bokstasordning: ")
console.log(titles.sort())
console.log ( )


// 9 Vilken bok finns det en dubblett av? 
console.log ('Fråga 9.')
let dubblett =[]
for (let i=0; i < titles.length; i++){
	let x = titles[i] 
	if( titles.slice(i + 1).some(x => x === titles[i])) {
		dubblett.push(x)
	}

}
console.log("Det finns en dublett av: ", dubblett);
console.log ( )


// 10 Vilka författare har ett namn som består av mer än 2 ord? Ta inte med författare som har punkter i sina namn.
console.log ('Fråga 10.')
let authors = books.map(author => author.author)
let flerA = []

for(let i=0; i < authors.length; i++){
	let mellanA = authors[i].split(" ")
	if(mellanA.length > 2 && !mellanA.some(word => word.includes(".") )){
	flerA.push(authors[i])}
}
console.log(flerA, "har mer än två mellanslag i sig ");
console.log ( )


// 11 Skriv ut namnen på alla författare i bokstavsordning. Sortera efter författarens efternamn.
console.log ('Fråga 11.')

// let lastname = []

// for (let i=0; i < authors.length; i++){
// 	let mellanA = authors[i].split(" ")
// 	let lastnames = mellanA.slice(-1)
// 	lastname = lastname.concat(lastnames)
// }
// console.log(lastname.sort())

// coden nedaför(till fråga 12) är tagen från AI utan ändringar från oss, Vi la in den då vi förstår och har denna kommentaren för att vara ärliga i att vi ej pillat på den själva.
function sortAuthorsByLastName(a, b) {
    const lastNameA = a.author.split(' ')[1]; 
    const lastNameB = b.author.split(' ')[1]; 

  
    if (lastNameA < lastNameB) {
        return -1;
    }
    if (lastNameA > lastNameB) {
        return 1;
    }
    return 0;
}

const sortedBooks = books.sort(sortAuthorsByLastName);

sortedBooks.forEach(book => {
    const authorName = book.author;
    console.log(authorName);
});


/*12 Skriv ut namnen på alla böcker vars titel inte börjar med "The".*/
console.log ('Fråga 12.')
console.log('Följande böcker börjar inte med "The"' )
let filerTitle = titles.filter(function(element) {
    return !element.startsWith("The");
  });
  
  console.log(filerTitle);
  console.log ( )


/*13 Skriv ut böckernas titel, sorterat efter titelns längd, i stigande ordning.*/
console.log ('Fråga 13.')
console.log('Böckernas titel, sorterat efter titelns längd, i stigande ordning.' )
titles.sort(function(a, b) {
    return a.length - b.length;
  });
  
  console.log(titles);
  console.log ( )


/*14 Skriv färdigt funktionen, som ska kunna lägga till en ny bok sist i listan.*/
console.log ('Fråga 14.')

function addBook(list, title, author, genre, price) {

  /*Hittar det högsta befintliga ID:et i listan då id: 13 inte finns så kan vi inte använda 'id: list.length + 1,' då skulle nästa bok få id 25.*/
  const maxId = Math.max(...list.map(book => book.id), 0);
  
  const newBook = {
    id: maxId + 1,
    title,
    author,
    genre,
    price,
  };

  list.push(newBook);

  list.sort((a, b) => a.id - b.id);

  return list;
  }
  
  addBook(books, "New Book", "Author Name", "Genre", 9.99);
  console.log(books);
