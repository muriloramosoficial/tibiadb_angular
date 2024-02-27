import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // URL da API

  // método para buscar todos os usuários
  getUsuarios(): Observable<any> {
    return this.http.get(this.apiUrl); // usa o método get do HttpClient
  }
}
