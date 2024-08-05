import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  
  apiURL:string = "http://localhost:3000/users";

  constructor(
    private http:HttpClient
  ) { }

    getFullYear():Number{
      const year = new Date();
      const currentYear = year.getFullYear();
      return currentYear;
    }

    getAllUsers():Observable<any>{
     return this.http.get(this.apiURL);
    }

    createUser(object:any):Observable<any>{
      return this.http.post(this.apiURL,object);
    }

    getUserById(id: number){
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }

    updateUser(record: any): Observable<any> {
      return this.http.put<any>(`${this.apiURL}/${record.id}`, record);
    }
   
    deleteUser(id: number){
      return this.http.delete(`${this.apiURL}/${id}`)
    }
}
