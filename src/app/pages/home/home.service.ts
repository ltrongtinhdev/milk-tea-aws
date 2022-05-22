import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { IFind } from './product';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  protected api = environment.URL_ENDPOINT;
  constructor(private http: HttpClient) {}

  getAllProduct(param: any):Observable<any> {
    const body: IFind = {
      ...param,
      dataSource: environment.DATA_SOURCE,
      database: environment.DATABASE,
      collection: 'client'
    }
    return this.http.post<any>(this.api + 'action/find',body).pipe(catchError(this.handleError))
  }

  getProducs():Observable<any> {
    return this.http.get(environment.API + 'products/').pipe(catchError(this.handleError))
  }

  addProduct(body: any):Observable<any> {
    return this.http.post(environment.API + 'products/add', body).pipe(catchError(this.handleError))
  }

  updateProduct(body: any):Observable<any> {
    return this.http.post(environment.API + 'products/update', body).pipe(catchError(this.handleError))
  }

  deleteProduct(body: any):Observable<any> {
    return this.http.post(environment.API + 'products/delete', body).pipe(catchError(this.handleError))
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
