import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard } from '../services/auth.guard';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ApiService} from '../services/api.service';
import {CustomerService} from '../services/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {GalleryComponent} from "./layout/gallery/gallery.component";
import {LayoutModule} from "./layout/layout.module";
import { PresentationComponent } from './presentation/presentation.component';
import { PourquoiComponent } from './pourquoi/pourquoi.component';

import { ShabillertoorkeeComponent } from './shabillertoorkee/shabillertoorkee.component';
import { PipeTransform, Pipe } from '@angular/core';
import { CallbackPipe } from '../pipes/call-back-pipe.pipe';
import {SharedModule} from "./shared/shared.module";
import {ContactComponent} from "./shared/contact/contact.component";
import {AuthComponent} from "./shared/auth/auth.component";
import {any} from "codelyzer/util/function";
import {BoutiqueComponent} from "./shared/boutique/boutique.component";
import {DetailsProduitComponent} from "./shared/details-produit/details-produit.component";
import { HistoriqueComponent } from './shared/historique/historique.component';





const appRoutes: Routes = [
  { path: 'auth',  component: AuthComponent },
    { path: 'contact', component: ContactComponent },
    {path: 'presentation', component: PresentationComponent },
    // { path: 'touteslescollections', component: BoutiqueComponent },
    {path: 'shabillertoorkee', component: ShabillertoorkeeComponent},
    { path: 'shop', component: BoutiqueComponent, canActivate: [AuthGuard]},
    // { path: 'contact', component: ContactComponent},
    { path: 'shop/:nom', component: BoutiqueComponent, canActivate: [AuthGuard]},
    { path: 'historique', component: HistoriqueComponent},
    {path: 'detail/:model', component: DetailsProduitComponent, canActivate: [AuthGuard]},
    // {path: 'auth/contact', component: ContactComponent},
    // {path: 'auth/collection', component: GalleryComponent},
    //  {path: 'auth/collection/contact', component: ContactComponent},
  { path: 'layout',  loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: 'auth',
    pathMatch: 'prefix'
  },

    { path: '**',
        redirectTo: 'auth',
        pathMatch: 'prefix'
    },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    exports : [RouterModule],
    declarations: [AppComponent, PresentationComponent, PourquoiComponent, ShabillertoorkeeComponent, CallbackPipe],
    imports: [
        BrowserModule,
      CommonModule,
        SharedModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      HttpModule,
    RouterModule.forRoot(
        appRoutes,
        // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthGuard, ApiService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
