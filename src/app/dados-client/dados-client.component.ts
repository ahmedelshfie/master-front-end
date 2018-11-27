import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
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
    private activatedRoute: ActivatedRoute,
    private dadosService: DadosClientService, 
    private clientsdto: ClientDTO
    ) { }

  ngOnInit() {
    this.dadosService
      .buscarDadosClient(
        this.activatedRoute.snapshot.params["idClient"] // idclient as param for each client 
          ? this.activatedRoute.snapshot.params["idClient"]
          : ""
      )
      .subscribe((retorno: clientsdto) => {
        this.clientsdto = retorno;
        console.log("dadsosDTO", retorno);
      });
  }
  }

}
