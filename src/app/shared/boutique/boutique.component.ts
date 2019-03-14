import { Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../services/customer.service";
import {ApiService} from "../../../services/api.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  adresseServer: any;
  nom: any;
  allCollection: any;
  collection = [];
  categorie: any;
  panier = [];
  model = {
    "quantite": 1,
    "model" :{}
  };


  constructor(private customerService: CustomerService, private api: ApiService,   private route: ActivatedRoute) { }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  logout(){
    return this.customerService.logoutUser();
  }

    getPanier(){
        this.panier = this.api.getPanier();
    }

    ngOnInit() {
        this.api.currentPanier.subscribe(panier => {
            this.panier = panier;
        });
      this.adresseServer = this.api.adresseServer;
      // this.loadScript('../assets/js/map-active.js');
      this.route.params.subscribe(params => {
        this.nom = params['nom'];
      });
      this.api.getCollection().subscribe(posts => {
        this.allCollection = posts;
        console.log(this.allCollection);
        if (this.nom){
          for (let collection of this.allCollection) {
              if (collection.nom === this.nom ) {
                  for (let col of collection.models) {
                      this.collection.push(col);
                  }
              }

              console.log(this.collection);
          }
        }else {
            this.nom = "Toutes les collections";
            for (let collection of this.allCollection) {
                for (let col of collection.models) {
                  this.collection.push(col);

                }
            }
            console.log(this.collection);
        }
      });
      this.api.getCategorie().subscribe(posts => {
        this.categorie = posts;
        });

  }

  ajouterPanier(model){
      this.model.model=model;
      this.panier.push(this.model);
      this.api.ChangePanier(this.panier);
      window.location.reload();

  }


}
