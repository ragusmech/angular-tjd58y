import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class formServices {
  
  private baseUrl = 'https://apioms.viasz.in/api/Login/SendOTP';
  constructor(private http: HttpClient) { 
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  // tslint:disable-next-line: typedef
  private buildTargetUrl(url) {
   let  targetUrl = this.baseUrl + url;
    return targetUrl;
  }
 public submitProduct(postData) {
    let apiUrl = this.buildTargetUrl("submitForm");
    return this.http.post<any>(apiUrl, JSON.stringify(postData), this.httpOptions);
  }
 public submitOtp(postData) {
    let apiUrl = this.buildTargetUrl("");
    return this.http.post<any>(apiUrl, JSON.stringify(postData), this.httpOptions);
  }
}
