import { createFeatureSelector, createSelector } from "@ngrx/store";


import { IBook } from "src/app/interfaces/book.interface";
import { IBookState } from "./book.model";


export const selectBookState = createFeatureSelector<IBookState>('book')
export const selectBookList = createSelector(selectBookState, (state) => state.books)
export const selectBookIsLoading = createSelector(selectBookState, (state) => state.isLoading)

