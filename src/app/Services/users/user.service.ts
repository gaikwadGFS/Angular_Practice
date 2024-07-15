import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL:string="https://jsonplaceholder.typicode.com/";
  
  constructor(private http:HttpClient) { }

    getFullYear():Number{
      const year = new Date();
      const currentYear = year.getFullYear();
      return currentYear;
    }

    getAllUsers():Observable<any>{
     return this.http.get(this.apiURL+"users");
    }

    createUser(object:any):Observable<any>{
      return this.http.post(this.apiURL+"users",object);
    }
   
}
