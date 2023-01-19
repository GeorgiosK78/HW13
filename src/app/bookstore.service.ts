import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor(private _http:HttpClient) { }
  
  getBooksFromServer():Observable<any> {
   return this._http.get<any>("http://localhost:8081/bookStore")
  }
  
   addBookToServer(book: any):Observable<any> {
    return this._http.post<any>("http://localhost:8081/bookStore", book);
  }
  
 deleteBookFromServer(id: number): Observable<any> {
    return this._http.delete<any>(`http://localhost:8081/bookStore/${id}`);
  }
  
   getOldestAndLatestBooks(): Observable<Book[]> {
    return this._http.get<Book[]>("http://localhost:8081/bookStore/oldest-latest-book");

}
}
