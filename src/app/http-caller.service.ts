import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCallerService {

  constructor(private http: HttpClient) { }

  generate_task(){
    return this.http.get("http://127.0.0.1:8000/task/")
  }
}
