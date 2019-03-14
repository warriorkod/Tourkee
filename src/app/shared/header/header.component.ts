import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {CustomerService} from "../../../services/customer.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categorie:any;
  adresseServer;
  panier = [];
  show;
    email: any;
    password: any;
    client = {

        "idClient":0,
        "nom":"",
        "prenom":"",
        "mail":"",
        "telephone":"",
        "dateCreation":"",
        "compte" : {
            "login" : "tata",
            "mdp" : "mdp"
        }
    };
    // @Output () valueChange =  new  EventEmitter ();

  constructor(private api: ApiService, private customer : CustomerService, private router: Router) {
}
  ngOnInit() {
      this.show = this.customer.isLogged();
      this.adresseServer = this.api.adresseServer;
      this.api.currentPanier.subscribe(panier => {
          this.panier = panier;
          console.log(this.panier);
      });
    // this.loadScript('../assets/js/active.js');
    // this.loadScript('../assets/assets/popper/popper.min.js');
    // this.loadScript('../assets/assets/tether/tether.min.js');
    // this.loadScript('../assets/assets/bootstrap/js/bootstrap.min.js');
    // this.loadScript('../assets/assets/smoothscroll/smooth-scroll.js');
    // this.loadScript('../assets/assets/bootstrapcarouselswipe/bootstrap-carousel-swipe.js');
    // this.loadScript('../assets/assets/vimeoplayer/jquery.mb.vimeo_player.js');
    // this.loadScript('../assets/assets/masonry/masonry.pkgd.min.js');
    // this.loadScript('../assets/assets/imagesloaded/imagesloaded.pkgd.min.js');
    // this.loadScript('../assets/assets/theme/js/script.js');
    // this.loadScript('../assets/assets/gallery/player.min.js');
    // this.loadScript('../assets/assets/gallery/script.js');
    // this.loadScript('../assets/assets/slidervideo/script.js');

    this.api.getCategorie().subscribe(posts => {
      this.categorie = posts;
      console.log(this.categorie);
    });
  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
    deleteItem(model){
        for (let i=0;i<this.panier.length;i++){
            if(this.panier[i] == model){
                this.panier.splice(i,1);
            }
        }
        this.api.setPanier(this.panier);
    }

    changeInput(model){
        for (let i=0;i<this.panier.length;i++){
            if(this.panier[i] == model){
                this.panier[i] = model;
            }
        }
        this.api.setPanier(this.panier);
        console.log(this.panier);
    }

    login(value) {
        console.log(value);
        this.email = value.email0;
        this.password = value.password0;
        this.api.login(
            this.email,
            this.password
        ).subscribe(
            r => {
                if (r.login) {
                    this.customer.setToken(r.login);
                    // window.location.reload();
                    this.router.navigateByUrl('/layout');
                    window.location.reload();
                }
            },
            r => {
                alert(r.error);
            });
    }
    register(value){
        this.client.nom = value.nom;
        this.client.prenom = value.prenom;
        this.client.telephone = value.tel;
        this.client.mail = value.email1;
        this.client.dateCreation = value.date;
        this.client.compte.login = value.email1;
        this.client.compte.mdp = value.password1;
        this.api.register(this.client);
        this.router.navigateByUrl('/auth');


    }

    logout(){
        this.api.clear();
        window.location.reload();
        return this.customer.logoutUser();


    }

    // valueChanged (){
    //     this.valueChange.emit();
    // }

    validate(){
        this.router.navigateByUrl('/historique');
        window.location.reload();

    }


}
