import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }
  baseUrl="http://localhost:8082/users";
  


  getAllUsers(){
    return this.httpClient.get(this.baseUrl);
  }

  addUser(postObject){
    return this.httpClient.post(this.baseUrl,postObject);
  }

  validateUser(postObject){
    return this.httpClient.post(this.baseUrl+"/login",postObject);
  }


  deleteUser(id){
    return this.httpClient.delete(this.baseUrl+"/"+id);
 }
}
