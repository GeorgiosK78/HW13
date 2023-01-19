import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookstoreService } from '../bookstore.service';
import { Book } from '../book'

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit{

 book = {
    name: '',
    author: '',
    dateyear: '',
    price: ''
  };

  constructor(private bookService: BookstoreService,  private router: Router) { }

  ngOnInit() {
  }

  addbookFormSubmit() {
    this.bookService.addBookToServer(this.book).subscribe(res => {
      console.log(res);
      this.router.navigate(['/viewbooks']);
    }, err => {
      console.log(err);
    });
  }
}
