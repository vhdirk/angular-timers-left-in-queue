import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  getVar(): Observable<string> {
    return of('Hello');
  }

  getOtherVar(): Observable<string> {
    return of('ehlo');
  }
}
