import { Injectable } from '@angular/core';
import { PaginationData } from '../types/pagination-data';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationDataService {
  private paginationDataSubject = new Subject<PaginationData>();

  public setPaginationData(data: PaginationData) {
    this.paginationDataSubject.next(data);
  }

  public getPaginationData(): Observable<PaginationData> {
    return this.paginationDataSubject.asObservable();
  }
}
