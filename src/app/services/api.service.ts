import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl = "https://origamicode.com.mx/NORMALIZATIONSERVICE/api/LoadAddress/ZipCode/03020";

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
  
}
