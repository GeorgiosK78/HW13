import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../bookstore.service';
import { Book } from '../book'
import { Router } from '@angular/router';

@Component({
  selector: 'app-oldestlatest',
  templateUrl: './oldestlatest.component.html',
  styleUrls: ['./oldestlatest.component.css']
})
export class OldestlatestComponent implements OnInit {
   
  oldestBook: Book;
  latestBook: Book;

  constructor(private bookstoreService: BookstoreService,private _route:Router) {
    this.oldestBook = new Book();
    this.latestBook = new Book();
  }

  ngOnInit() {
    this.bookstoreService.getOldestAndLatestBooks().subscribe(books => {
      this.oldestBook = books[0];
      this.latestBook = books[1];
    });
  }

  navigateToViewbooks(){
  this._route.navigate(['/viewbooks']);
  }
}

