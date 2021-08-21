import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

const headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "*/*");


@Injectable()
export class AppService {
    constructor(private http: HttpClient){}

    private serviceUrl = 'http://localhost:8000/pdftoword/';

    getWordDoc(filename: String): Observable<Blob>{
        const body = {filename: filename}

        return this.http.post(this.serviceUrl, body, { responseType: 'blob', headers: headers}).pipe(
          tap(_ => console.log('Converting pdf to word')),
          catchError(this.handleError<Blob>('getWordDoc'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
        
            console.error(error); // log to console instead
        
            console.log(`${operation} failed: ${error.message}`);
        
            return of(result as T);
        };
    }

}
