import { selectBookIsLoading } from './store/book/book.selectors';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './interfaces/book.interface';
import { Store, select } from '@ngrx/store';
import * as fromBooks from "./store/book/index"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'trio';
  books$!: Observable<IBook[]>
  isLoading$!: Observable<boolean>

  constructor(private readonly store:Store){}


  ngOnInit(): void {
     this.initDispatch()
     this.initSubscriptions() 
  }

  onCreateBook(name: string): void {
    this.store.dispatch(fromBooks.createBook({
      book: {
        id: Math.random(),
        name
      }
    }))

    this.initDispatch()
    // this.initSubscriptions() 
  }


  onUpdateBook(book: IBook): void{
    this.store.dispatch(fromBooks.updateBook({ book }))
  }


  onDeleteBook(book: IBook): void {
    this.store.dispatch(fromBooks.deleteBook({ book }))
  }

  private initDispatch(): void {
    this.store.dispatch(fromBooks.getBooks())
  }


  private initSubscriptions(): void {
    this.books$ = this.store.pipe(select(fromBooks.selectBookList))
    this.isLoading$ = this.store.pipe(select(fromBooks.selectBookIsLoading))
  }
  
}
