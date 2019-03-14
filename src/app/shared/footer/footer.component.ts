import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    show;
  constructor( private customer : CustomerService,) { }

  ngOnInit() {
      this.show = this.customer.isLogged();
  }

}
