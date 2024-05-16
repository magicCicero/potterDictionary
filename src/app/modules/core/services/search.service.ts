import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private inputValueSubject = new Subject<string>();

  public setInputValue(value: string) {
    this.inputValueSubject.next(value);
  }

  public getInputValue(): Observable<string> {
    return this.inputValueSubject.asObservable();
  }
}
