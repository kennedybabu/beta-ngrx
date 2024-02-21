import { createAction, props } from "@ngrx/store";
import { IBook } from "../../interfaces/book.interface";


const prefix= '[Books]'

//get books
export const getBooks = createAction(`${prefix} Get Books`)
export const getBooksSuccess = createAction(`${getBooks.type} Success`,props<{books: IBook[]}>())


//create a book
export const createBook = createAction(`${prefix} Create Book`, props<{book: IBook}>())
export const createBookSuccess = createAction(`${createBook.type} Success`, props<{book:IBook}>())


//update a book
export const updateBook = createAction(`${prefix} Update Book`, props<{book:IBook}>())
export const updateBookSuccess = createAction(`${updateBook.type} Success`, props<{book:IBook}>())


//delete a book
export const deleteBook = createAction(`${prefix} Delete`, props<{book: IBook}>())
export const deleteBookSuccess = createAction(`${deleteBook.type} SUccess`, props<{book:IBook}>())

