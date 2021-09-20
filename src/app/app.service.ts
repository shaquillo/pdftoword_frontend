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

    private baseServiceUrl = 'http://localhost:8000/';

    gethtmlfrompdf(filename: String): Observable<Blob> {
        const body = {filename: filename}

        return this.http.post(this.baseServiceUrl + 'pdf2htmlEX/', body, { responseType: 'blob', headers: headers}).pipe(
          tap(_ => console.log('Converting pdf to html')),
          catchError(this.handleError<Blob>('gethtmlfrompdf'))
        );
    }

    saveEditedHtml(file : File): Observable<Blob> {
        const formData: FormData = new FormData();
        formData.append('html', file, file.name);

        return this.http.post(this.baseServiceUrl + 'saveEditedHtml/', formData, { responseType: 'blob' }).pipe(
          tap(_ => console.log('Converting pdf to html')),
          catchError(this.handleError<Blob>('gethtmlfrompdf'))
        );
    }

    saveEditedPdf(file : File): Observable<Blob> {
        const formData: FormData = new FormData();
        formData.append('pdf', file, file.name);

        return this.http.post(this.baseServiceUrl + 'saveEditedPdf/', formData, { responseType: 'blob' }).pipe(
          tap(_ => console.log('Saving edited pdf')),
          catchError(this.handleError<Blob>('gethtmlfrompdf'))
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
