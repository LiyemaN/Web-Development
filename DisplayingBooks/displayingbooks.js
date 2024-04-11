
// Display the ISBN number, author and title for all books.
var DisplayAll = function(books) {
    for(var i = 0; i < books.length; i++) {
        console.log("ISBN: " + books[i].isbn + ", Author: " + books[i].author + ", Title: " + books[i].title);
    }
}

// Display all books with a particular year.
var displayByYear = function(books, year) {
    for(var i = 0; i < books.length; i++) {
        if(books[i].year === year) {
            console.log("ISBN: " + books[i].isbn + ", Author: " + books[i].author + ", Title: " + books[i].title);
        }
    }
}

// Calculate the total value of books in a given year.
var totalForYear = function(books, year = 2000) {
    var total = 0;
    var found = false;
    for(var i = 0; i < books.length; i++) {
        if(books[i].year === year) {
            total += books[i].price;
            found = true;
        }
    }
    if(found) {
        console.log("Total value of books for the year " + year + ": " + total);
    } else {
        console.log("No books were found for that year.");
    }
}

var books = [
    {
        isbn: 111111,
        title:'Lorem',
        author:'ipsum',
        year:2020,
        read:true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price:999,  
    },
    {
        isbn: 222222,
        title:'dolor',
        author:'ipsum',
        year:2000,
        read:false,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price:99,  
    },
    {
        isbn: 333333,
        title:'ipsum',
        author:'dolor',
        year:2013,
        read:true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price:111,  
    },
    {
        isbn: 444444,
        title:'consectetur',
        author:'adipisicing',
        year:2010,
        read:false,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price:10,  
    },
    {
        isbn: 555555,
        title:'dolor',
        author:'sit',
        year:2010,
        read:true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price:999,  
    },
    {
        isbn: 666666,
        title:'amet',
        author:'consectetur',
        year:2010,
        read:true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price:999,  
    },
    {
        isbn: 777777,
        title:'adipisicing',
        author:'elit',
        year:2010,
        read:true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price:599,  
    },
    {
        isbn: 888888,
        title:'Cum',
        author:'suscipit',
        year:2016,
        read:true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price:799,  
    },
] 
DisplayAll(books); 
displayByYear(books, 2005); 
totalForYear(books, 2005); 
