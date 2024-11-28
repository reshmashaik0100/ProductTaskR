import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Models/Users';
import { Products } from '../Models/Products';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _urlu : string = "http://localhost:8679/api/UserAPI/";
  _urlp : string = "http://localhost:8679/api/ProductAPI/";
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  UserByEmailAndPassword(Email:string,Password:string):Observable<Users>{
    return this.http.get<Users>(this._urlu+"UserByEmailAndPassword?Email="+Email+
    "&Password="+Password);
  }
  // UpdateProduct(prod:Products):Observable<string>{
  //   return this.http.put<string>(this._urlp+"UpdateProduct",prod,this.httpOptions);
  // }
  // DeleteProduct(pId:number):Observable<string>{
  //   return this.http.delete<string>(this._urlp+"DeleteProduct?productId="+pId,this.httpOptions);
  // }
  // InsertProduct(prod:Products):Observable<string>{
  //   return this.http.post<string>(this._urlp+"InsertProduct",prod,this.httpOptions);
  // }
  AllProducts():Observable<Products[]>{
    return this.http.get<Products[]>(this._urlp+"AllProducts")
  }
}
