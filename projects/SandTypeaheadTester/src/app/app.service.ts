import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
public apiRoot = 'https://restcountries.eu/rest/v2/';
  constructor(private _http: HttpClient) {}

  handlError(error) {
    return throwError(error.error.message);
  }
  populateData(keyword): Observable <any> {
      return this._http.get<any>(this.apiRoot + 'name/' + keyword).pipe(catchError(this.handlError));
  }

  allData(): Observable <any> {
    return this._http.get<any>(this.apiRoot + 'all').pipe(catchError(this.handlError));
}
}
