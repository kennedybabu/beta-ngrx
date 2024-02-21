import { IBook } from "src/app/interfaces/book.interface";


export interface IBookState {
    books: IBook[],
    isLoading: boolean
}