import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiURL = environment.courseUrl;
  constructor(private http:HttpClient ) { }
  getCourses(){
    return this.http.get(`${this.apiURL}`);
  }
}
