import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:3000/api/mensagem';

  constructor(private http: HttpClient) {}

  getMensagem(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  enviarMensagem(texto: string): Observable<any> {
    return this.http.post(this.baseUrl, { texto });
  }
}
