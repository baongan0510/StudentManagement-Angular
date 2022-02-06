import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'authorization': 'my-auth-token'
    })
  }
  private REST_API_SERVER = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  public getStudents(){
    const url = `${this.REST_API_SERVER}/data`;
    return this.httpClient
    .get<any>(url, this.httpOptions);
  }

  public deleteStudent(id: number){
    const url = `${this.REST_API_SERVER}/data/`+id;
    return this.httpClient
    .delete<any>(url, this.httpOptions);
  }

  public getCities(){
    const url = `${this.REST_API_SERVER}/cities`;
    return this.httpClient
    .get<any>(url, this.httpOptions);
  }

  public addNewStudent(data: Student){
    const url = `${this.REST_API_SERVER}/data`;
    return this.httpClient
    .post<any>(url, data, this.httpOptions)
  }

  public updateStudent(data: Student){
    const url = `${this.REST_API_SERVER}/data/` + data.id;
    return this.httpClient
    .put<any>(url, data, this.httpOptions)
  }
  
}
