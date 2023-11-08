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
console.log("Dessa böcker kostar mer än $10: ");
for (let i=0; i < books.length; i++){
	if ( books[i].price > 10)
	console.log(books[i].title, books[i].price)
} 
// 6 Hur mycket är hela bokinnehavet värt? (Vad är det totala priset, om man skulle sälja alla böcker?)

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

// 7 Vilka böcker är sammanlagt värda mest, dystopian eller mystery?
let dystopian = []
let mystery = []
for (let i=0; i < books.length; i++){
	if ( books[i].genre.includes("Dystopian")){
		dystopian = books.map(book => book.price);
	}
	else if ( books[i].genre.includes("Mystery")){
		mystery = books.map(book => book.price);
	}
}
let prisdystopian = 0
let prismystery = 0

dystopian.forEach(number => {	
	prisdystopian += number
})

mystery.forEach(number => {	
	prismystery += number
})
function compare() {
	if (prismystery > prisdystopian) {
	console.log("Mystery kategorian är värd mer än dystopian");
	}
	else {
	console.log("Dystopian kategorian är värd mer än Mystery");
	}
}
compare()

// 8 Skriv ut namnen på alla böcker i bokstavsordning.
console.log("Böckernas titlar i bokstasordning: ")
console.log(titles.sort())

// 9 Vilken bok finns det en dubblett av? 
let dubblett =[]
for (let i=0; i < titles.length; i++){
	let x = titles[i] 
	if( titles.slice(i + 1).some(x => x === titles[i])) {
		dubblett.push(x)
	}

}
console.log("Det finns en dublett av: ", dubblett);

// 10 Vilka författare har ett namn som består av mer än 2 ord? Ta inte med författare som har punkter i sina namn.

let authors = books.map(author => author.author)
let flerA = []

for(let i=0; i < authors.length; i++){
	let mellanA = authors[i].split(" ")
	if(mellanA.length > 2 && !mellanA.some(word => word.includes(".") )){
	flerA.push(authors[i])}
}
console.log(flerA, "har mer än två mellanslag i sig ");


// 11 Skriv ut namnen på alla författare i bokstavsordning. Sortera efter författarens efternamn.

let lastname = []
for (let i=0; i < authors.length; i++){
	let mellanA = authors[i].split(" ")
	let lastnames = mellanA.slice(1, authors.length)
	// lastname = lastname.concat(lastnames)
	lastname.push(lastnames)
}
console.log(lastname)