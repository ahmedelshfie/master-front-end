import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosClientService } from './dados-client.component.service';
import { ClientDTO } from './../dto/ClientDTO';

@Component({
  selector: 'app-dados-client',
  templateUrl: './dados-client.component.html',
  styleUrls: ['./dados-client.component.css']
})
export class DadosClientComponent implements OnInit {

  constructor(
    private router: Router, 
    private dadosService: DadosClientService, 
    private clientsdto: ClientDTO
    ) { }

  ngOnInit() {
    this.dadosService.carregardadosClient().subscribe((retorno: ClientDTO) => {
      this.clientsdto = retorno;
      console.log("dadosClient-dto", retorno);
    });
  }

}
