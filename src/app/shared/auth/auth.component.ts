import   { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {CustomerService} from '../../../services/customer.service';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    show;


  constructor(private api: ApiService, private customer: CustomerService) {
 }



  ngOnInit() {
      this.show = this.customer.isLogged();
    //   this.loadScript('../assets/js/active.js');
    // this.loadScript('../assets/js/login-register.js');
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

}
