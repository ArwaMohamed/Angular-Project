import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }
  login(user:user ):Observable<any>{
   return this.httpclient.post<any>(environment.baseUrl+'user/login',user)
  }
}


interface user{
  email:string;
  password:string;
}