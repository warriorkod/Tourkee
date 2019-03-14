import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CustomerService} from '../../../services/customer.service';


@Component({
  selector: 'app-accueil',
  encapsulation : ViewEncapsulation.None,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loadScript('../assets/js/active.js');
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

  logout(){
    return this.customerService.logoutUser();
  }
}
