import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import { FilterPipe} from "../../../pipes/filter.pipe";
@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
    panier = [];
    adresseServer;
    caractere = [];
  constructor( private api: ApiService) { }

  ngOnInit() {
      this.adresseServer = this.api.adresseServer;
      this.api.currentPanier.subscribe(panier => {
          this.panier = panier;
      });
      this.insertName();
      console.log(this.caractere);
  }

  insertName(){
      for (let item of this.panier ) {
          this.caractere.push(item.model.nom);
      }
  }

}
