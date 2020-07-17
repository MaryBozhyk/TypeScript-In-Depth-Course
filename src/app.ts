import { ReferenceItem, RefBook, UniversityLibrarian, Shelf} from './classes';
import { purge, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults, getAllBooks, logFirstAvailable, logBookTitles, getBookTitlesByCategory, getBookAuthorByIndex, calcTotalPages, createCustomerID, getBookByID, сheckoutBooks, getTitles, bookTitleTransform, printBook, getBookProp } from './functions';
import { Book, Magazine, Logger, Author, Librarian } from './interfaces';
import { Category } from './enums';
import { BookRequiredFields, UpdatedBook, СreateCustomerFunctionType, PersonBook } from './types';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


//====================================================
// Task 02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(1));

// console.log(calcTotalPages());

//Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id} - ${name}`;
// console.log(idGenerator('Ann', 20));
// idGenerator = createCustomerID;

// Task 03.02
// createCustomer('Ann');
// createCustomer('Ann', 30);
// createCustomer('Ann', 30, 'Kyiv');

// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// console.log(getBookByID(1));

// const myBooks: string[] = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 03.03
// const checkedOutBooks: string[] = getTitles(2, false);
// console.log(checkedOutBooks);

// Task 03.04
// console.log(bookTitleTransform('Title'));
// console.log(bookTitleTransform(1)); //we receive Error because value must be a string

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: reason => console.log(`Damaged: ${reason}`)
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02
// const logDamage: Logger = reason => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished: 3
// }

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical literature',
//     assistCustomer: custName => console.log(`Assist ${custName}`)
// }

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript'
//     }      
// }

// console.log(offer.magasine?.title);
// console.log(offer.book?.getTitle?.());

// Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged')); //undefined as we haven't name of the function
// console.log(getBookProp(getAllBooks()[0], 'isbn')); // In this case we receive error

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem('Large Title', 2020);
// ref.printItem();
// ref.publisher = 'Super publisher';
// console.log(ref);
// console.log(ref.publisher);

// Task 05.02
// const refBook: RefBook = new RefBook('Large Title', 2020, 3);
// console.log(refBook);
// refBook.printItem();

// Task 05.03
// const refBook: Encyclopedia = new Encyclopedia('Large Title', 2020, 3);
// console.log(refBook);
// refBook.printCitation();

//Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = "Anna";
// console.log(favoriteLibrarian)
// favoriteLibrarian.assistCustomer('Boris');

// Task 05.05
// const personBook: PersonBook = {
//     id: 1,
//     name: 'Anna',
//     email: 'anna@example.com',
//     title: 'Not title',
//     author: 'Anna',
//     available: false,
//     category: Category.CSS
// }
// console.log(personBook);

// interface A {
//     name: string;
// }

// interface B {
//     name: string;
// }

// type AB = A & B;

// const a: AB = {
//     name: 'Anna'
// }

// type F1 = () => number;
// type F2 = () => string;
// type F3 = F1 | F2;

// const f: F3 = () => 1;

// Task 06.03
// const refBook: RefBook = new RefBook('Large Title', 2020, 3);
// console.log(refBook);
// refBook.printItem();

// Task 06.05
// const flag = true;

// if (flag) {
//     import('./classes')
//     .then(module =>{
//         const reader = new module.Reader();
//         reader.name = 'Anna';
//         console.log(reader);
//     })
//     .catch(err => console.log(err))
// } 

// Task 07.01
// const inventory: Array<Book> = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ]
// console.log(purge(inventory));
// const result = purge<number>([1, 2, 3]);
// console.log(result);

// Task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Array<Magazine> = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// Task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// Task 07.04
// const a: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     markDamaged: null,
//     pages: 200,
//     title: 'No name'
// }

// const Book: UpdatedBook = {
//     author: 'Anna',
//     id: 1
// }

// const params: Parameters<СreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

// Task 08.01, 08.02
// const lib = new UniversityLibrarian();
// console.log(lib);
// lib.name = 'Anna';
// lib['printLibrarian']();
// lib.assistFaculty = null;
// lib.teachCommunity = null;

// Task 08.04
// const enc = new RefBook('No title', 2020, 3);
// enc.printItem();

// Task 08.05
// const lib = new UniversityLibrarian();
// lib.name = 'Anna';
// lib.assistCustomer('Boris');
// console.log(lib);

// Task 08.07
// const enc =  new RefBook('No title', 2020, 3);
// enc.copies = -10;

// Task 09.01
// console.log('start')
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('finish')

// Task 09.02
// console.log('start')
// getBooksByCategoryPromise(Category.JavaScript)
// .then(titles => {
//     console.log(titles)
//     return Promise.resolve(titles.length)
// })
// .then(numberOfBooks => console.log(numberOfBooks))
// .catch(reason => console.log(reason))
// .finally(() => console.log('End'))
// console.log('finish')

// Task 09.03
// console.log('start')
// logSearchResults(Category.JavaScript)
// .catch(reason => console.log(reason))
// console.log('finish')
// console.log('start')
// logSearchResults(Category.Software)
// .catch(reason => console.log(reason))
// console.log('finish')