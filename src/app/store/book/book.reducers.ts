import { createReducer,on } from "@ngrx/store";

// import { IBook } from "src/app/interfaces/book.interface";
import * as fromBooks from './index';
import { Action } from "@ngrx/store";
import { IBookState } from "./book.model";


export const initialBooksState: IBookState = {
    books: [],
    isLoading: false
}


const reducer = createReducer<IBookState> (
    initialBooksState,
    on(fromBooks.getBooks, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(fromBooks.getBooksSuccess, (state, {books}) => {
        return {
            ...state,
            isLoading: false,
            books
        }
    }),
    on(fromBooks.createBook, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(fromBooks.createBookSuccess, (state, {book}) => {
        return {
            ...state,
            isLoading: false,
            book
        }
    }),
    on(fromBooks.updateBook, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(fromBooks.updateBookSuccess, (state, {book}) => {
        return {
            ...state,
            books: state.books.map((b) => b.id === book.id ? book : b),
            isLoading: false,
        }
    }),
    on(fromBooks.deleteBook, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(fromBooks.deleteBookSuccess, (state, { book}) => {
        return {
            ...state,
            isLoading: false,
            books: state.books.filter((b) => b.id !== book.id)
        }
    })

)


export function booksReducer(state = initialBooksState, actions: Action): IBookState {
    return reducer(state, actions)
}