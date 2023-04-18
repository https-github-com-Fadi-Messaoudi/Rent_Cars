import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
   prod: any ={}
   searchterm:string=""
  constructor(private http: HttpClient) {}
  
  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5002/api/product/');
  
  } ;
  getdataSerched():Observable<any[]>{
    return this.http.get<any[]>('api/search?query='+this.searchterm)
  }
  postToDatabase(data: any) {
    return this.http.post('http://localhost:5002/api/product/add', data);
  };
  deleteFromdb(id:number){
    return this.http.delete(`http://localhost:5002/api/rent/delete/${id}`)
  };
  UpdateFromdb(data:any){
    return this.http.put(`http://localhost:5002/api/rent/update/${this.prod.id}` , data)
};
  setId(prod:any){
    return this.prod=prod
  };
  getProd(){
    return this.prod
  }
 setSearchterm(query:string){
  return this.searchterm=query
 }

}
