import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreServicesService {

  constructor(private http: HttpClient) { }

  getCountryList():Observable<any>{
    return this.http.get("https://www.universal-tutorial.com/api/countries");
  }
}
