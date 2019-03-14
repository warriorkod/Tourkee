import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  {LoginResultModel} from '../modeles/login-result-model';
import  {BehaviorSubject} from 'rxjs/BehaviorSubject';




                                                                                                                                                                                                                                                                                                            @Injectable({
                                                                                                                                                                                                                                                                                                              providedIn: 'root'
})
export class ApiService {
  adresse = 'http://192.168.1.124:8080/';
  // adresseServer = 'http://192.168.1.105:8080/';
  adresseServer = "http://ns3066895.ip-79-137-64.eu:8080/tourqee-1.0/";
  PANIER = new BehaviorSubject<any>(this.getPanier()) ;
  PANIERBIS;
  currentPanier = this.PANIER.asObservable();
  constructor(public http: HttpClient) {                                                                                                    
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

  ChangePanier(panier){
    this.PANIER.next(panier);
    this.setPanier(panier);
  }

  setPanier(panier){
    // this.panier = panier;
      localStorage.setItem(this.PANIERBIS,JSON.stringify(panier));

  }

  getPanier(){
    // return this.panier;
      if ( JSON.parse(localStorage.getItem(this.PANIERBIS)))
         return JSON.parse(localStorage.getItem(this.PANIERBIS))
      else return [];

  }

  clear(){
      localStorage.removeItem(this.PANIERBIS);
  }

  login(email: string, password: string) {
    return this.http.post<LoginResultModel>(this.adresseServer+'connexionClient', {
      'login': email,
      'mdp': password
    });
  }
  register(value) {
    return this.http.post(this.adresseServer+'saveClient', value).subscribe(
        (res)=>{
          // console.log('success');
          alert('Client enregistré avec succés !');
        },
        err=>{
          console.log(" Error..");
        }
    );
    ;
  }
  getCategorie() {
    return this.http.get(this.adresseServer+'getAllCategorie').map(res => res);
  }
  getCollection() {
    return this.http.get(this.adresseServer+'getAllCollectionDetails').map(res => res);
  }
    getCollModel() {
        return this.http.get(this.adresseServer+'getAllModel').map(res => res);
    }
}