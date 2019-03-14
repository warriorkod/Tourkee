import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {
    name: any;
    adresseServer: any;
    allCollection: any;
    model = {};
    panier = [];
    modele = {
        "quantite": 1,
        "model" :{}
    };
  constructor(  private route: ActivatedRoute,  private api: ApiService) {

  }

  ngOnInit() {
      this.api.currentPanier.subscribe(panier => {
          this.panier = panier;
      });
      this.adresseServer = this.api.adresseServer;
      this.route.params.subscribe(params => {
          this.name = params['model'];
          console.log(this.name);
      });
      this.api.getCollModel().subscribe(posts => {
          this.allCollection = posts;
          console.log(this.allCollection);
          for (let collection of this.allCollection) {
              if (collection.nom === this.name ) {
                  this.model = collection;
              }
          }
          console.log(this.model);

      });
  }
    ajouterPanier(){
      this.modele.model=this.model;
        this.panier.push(this.modele);
        this.api.ChangePanier(this.panier);
    }

}
