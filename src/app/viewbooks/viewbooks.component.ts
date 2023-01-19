import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookstoreService } from '../bookstore.service';
import { Book } from '../book'

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit{
  books: Array<Book> =[];
  
  constructor(private _service: BookstoreService,private _route:Router) {}
  
  ngOnInit(): void{
  
   this.getbooks();
  
  }
  
  getbooks(){
    this._service.getBooksFromServer().subscribe(
             data => this.books = data,
    )
  }
  
  RedirectToAddBook(){
    this._route.navigate(['/addbook'])
  }
  
 
deleteBook(id: number) {
    this._service.deleteBookFromServer(id).subscribe(res => {
        this.getbooks(); // To refresh the books list after delete
    }, err => {
        console.log(err);
    });
}
  
 navigateToOldestLatest() {
    this._route.navigate(['/oldestlatest']);
}

}
