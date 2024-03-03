import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componenetes.',
      autoria: 'Angular',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Passo informações para o componente filho.',
      autoria: 'Componente pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input().',
      autoria: 'Componente filho',
      modelo: 'modelo1'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
