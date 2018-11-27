import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DadosService } from './dados.service';
import { DadosDTO } from './dados./dadosdto';

@Component({
  selector: 'app-dados-client',
  templateUrl: './dados-client.component.html',
  styleUrls: ['./dados-client.component.css']
})
export class DadosClientComponent implements OnInit {

  constructor(
    private router: Router, 
    private dadosService: DadosService, 
    private dadosdto: DadosDTO
    ) { }

  ngOnInit() {
    this.dadosService.carregardadosClient().subscribe((retorno: DadosDTO) => {
      this.dadosdto = retorno;
      console.log("dadosClient-dto", retorno);
    });
  }

}
