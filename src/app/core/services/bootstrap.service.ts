import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BootstrapService {
  initialize(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(1);
      observer.complete();
    });
  }
}
