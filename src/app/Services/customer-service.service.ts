import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'authorization': 'my-auth-token'
    })
  }
  
  private REST_API_SERVER = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  public getCustomers(){
    const url = `${this.REST_API_SERVER}/data`;
    return this.httpClient
    .get<any>(url, this.httpOptions);
  }
}
