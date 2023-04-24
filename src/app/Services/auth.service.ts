import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string="https://localhost:7007/"
  constructor(private http : HttpClient) { }

  signUp(userObj: any){
    return this.http.post<any>('https://localhost:7007'+ '/api/User/Register', userObj)
  }

  login(loginObj :any){
    return this.http.post<any>('https://localhost:7007'+ '/api/User/Authenticate', loginObj)
  }
}

