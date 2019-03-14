import {Injectable} from '@angular/core';
import { Router} from '@angular/router';


const TOKEN = 'TOKEN';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    constructor(private _router: Router){}


    setToken(token: string): void {
        localStorage.setItem(TOKEN, token);
    }

    isLogged() {
        return localStorage.getItem(TOKEN) != null;
    }

    logoutUser(){
        localStorage.removeItem(TOKEN);
        this._router.navigate(['/auth']);

    }

}