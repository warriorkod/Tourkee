import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

import { AccueilComponent } from './accueil/accueil.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ShabillerComponent } from './shabiller/shabiller.component';
import { BoutiqueComponent } from '../shared/boutique/boutique.component';
import { LayoutComponent } from './layout.component';
import {CommonModule} from "@angular/common";
import {AppModule} from "../app.module";
import { FormsModule } from '@angular/forms';
import {DetailsProduitComponent} from "../shared/details-produit/details-produit.component";
import {SharedModule} from "../shared/shared.module";
import {ContactComponent} from "../shared/contact/contact.component";






const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '',
        redirectTo: 'shop',
        pathMatch: 'full'
      },
      // {path: 'accueil', component: AccueilComponent},
      // {path: 'contact', component: ContactComponent},
      // {path: 'gallery', component: GalleryComponent},
      // {path: 'shabiller', component: ShabillerComponent},
      // {path: 'shop', component: BoutiqueComponent},
        { path: 'shop', component: BoutiqueComponent},
        // { path: 'contact', component: ContactComponent},
        { path: 'shop/:nom', component: BoutiqueComponent},
        {path: 'detail/:model', component: DetailsProduitComponent}
      ]
  }

];

@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      FormsModule,
    RouterModule.forChild(
        layoutRoutes
    ),
  ],
  exports: [RouterModule],
  declarations: [
    // ContactComponent,
    // AccueilComponent,
    // GalleryComponent,
    // ShabillerComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
