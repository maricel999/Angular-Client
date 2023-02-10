import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pageable } from '../core/model/page/Pageable';
import { Loan } from './model/Loan';
import { LoanPage } from './model/LoanPage';
import { LOAN_DATA } from './model/mock-loans';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient,
    private datePipe: DatePipe) { }

  getLoans(pageable: Pageable, gameId?: number, clientId?: number, date?: Date):Observable<LoanPage>{
    return this.http.post<LoanPage>(this.composeFindUrl(gameId, clientId, date), {pageable:pageable});
  }

  saveLoan(loan: Loan): Observable<void>{
    return this.http.put<void>('http://localhost:8080/loan', loan);
  }

  deleteLoan(idLoan: number): Observable<void>{
    return this.http.delete<void>('http://localhost:8080/loan/' + idLoan);
  }

  private composeFindUrl(gameId?: number, clientId?: number, date?: Date): string{
    let params = '';

    if(gameId != null){
      params += 'gameId='+ gameId;
    }

    if(clientId != null){
      if (params != '') params += "&";
      params += 'clientId=' + clientId;
    }

    if(date!= null){
      if (params != '') params += "&";
      const dateFormat = this.datePipe.transform(date, 'yyyy-MM-dd');
      params += 'date=' + dateFormat;
    }

    let url = 'http://localhost:8080/loan';

    if (params == '') return url;
    else return url + '?' + params;
  }

}
