import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  show = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    // this.loadScript('../assets/js/map-active.js');
    this.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyAwuyLRa1uKNtbgx6xAJVmWy-zADgegA2s');

    if (!this.customerService.isLogged()){
      this.show = true;
    }
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
