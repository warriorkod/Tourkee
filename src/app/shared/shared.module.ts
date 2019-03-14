import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ContactComponent} from "./contact/contact.component";
import {FormsModule} from "@angular/forms";
import {AuthComponent} from "./auth/auth.component";
import { RouterModule, Routes } from '@angular/router';
import {BoutiqueComponent} from "./boutique/boutique.component";
import {DetailsProduitComponent} from "./details-produit/details-produit.component";
import {HistoriqueComponent} from "./historique/historique.component";
import {AuthGuard} from "../../services/auth.guard";
import {ApiService} from "../../services/api.service";
import {CustomerService} from "../../services/customer.service";
import {FilterPipe} from "../../pipes/filter.pipe";



const appRoutes: Routes = [];
@NgModule({
    exports: [HeaderComponent,FooterComponent,ContactComponent,AuthComponent,BoutiqueComponent, DetailsProduitComponent,HistoriqueComponent],
  imports: [
    CommonModule,
      FormsModule,
      RouterModule,

  ],
  declarations: [   FilterPipe,SharedComponent,HeaderComponent,FooterComponent,ContactComponent,AuthComponent,BoutiqueComponent,DetailsProduitComponent,HistoriqueComponent]
})
export class SharedModule { }
