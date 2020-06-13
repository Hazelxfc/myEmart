import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { take, retry, tap } from 'rxjs/operators';

const baseUrl = 'http://localhost:9004/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8',
    'Response-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*.*',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  addHeader(key, value): void {
    let httpHeaders = httpOptions.headers;
    httpHeaders = httpHeaders.append(key, value);
    httpOptions.headers = httpHeaders;
  }

  combineHeaders(newHeaders: HttpHeaders): void {
    let httpHeaders = httpOptions.headers;
    for (const key of newHeaders.keys()) {
      if (!httpHeaders.has(key) && newHeaders.get(key) !== 'need-delete') {
        httpHeaders = httpHeaders.append(key, newHeaders.get(key));
      } else {
        if (newHeaders.get(key) === 'need-delete') {
          httpHeaders = httpHeaders.delete(key);
        } else {
          httpHeaders = httpHeaders.set(key, newHeaders.get(key));
        }
      }
    }
    httpOptions.headers = httpHeaders;
  }
 /**
  * GET method for all the api call
  * @param url -
  * @param data  -
  * @param showLoading -
  */
  get<T>(url: string, showLoading = true): Observable<T | any> {
    if (showLoading) {
      // this.coreUiService.showLoadingContent();
    }

    return this.http.get<T>(baseUrl + url, httpOptions)
      .pipe(
        take(1),
        retry(1),
        tap(
          result => {
          },
          err => {
          }
        )

      );
  }
 /**
  * POST method for all the api call
  * @param url -
  * @param data - data to be posted
  * @param showLoading -
  */
  post<T>(url: string, data: object, showLoading = true): Observable<T | any> {
    if (showLoading) {
      // this.coreUiService.showLoadingContent();
    }
    return this.http.post<T>(baseUrl + url, data, httpOptions).pipe(
      tap(
        result => {
          // this.coreUiService.hideLoadingContent();
        },
        err => {
          // this.coreUiService.hideLoadingContent();
        }
      )
    );
  }
 /**
  * Handle Http operation that failed.
  * @param operation- name of the operation that failed
  * @param result- optional value to return as the observable result
  */
  private handleError<T>(operation: string, result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {

      if (error.error && error.error.message) {
        console.error(error.error.message);
      } else {
        console.error('Can Not Load Data For', operation);
      }

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }


}

