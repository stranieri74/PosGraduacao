import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  mensagem = '';
  resposta = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getMensagem().subscribe((data:any) => this.mensagem = data.mensagem);
  }

  enviar() {
    this.api.enviarMensagem(this.mensagem).subscribe((resp:any) => {
      this.resposta = 'Servidor respondeu: ' + resp.recebido;
    });
  }
}
