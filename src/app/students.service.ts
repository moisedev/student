import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }


  public StudentList(){

    return  this.http.get(environment.api_url + 'student/insert');
  }
}
