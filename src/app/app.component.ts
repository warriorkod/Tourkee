import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    this.loadScript('../assets/js/jquery/jquery-2.2.4.min.js');
    this.loadScript('../assets/js/popper.min.js');
    this.loadScript('../assets/js/bootstrap.min.js');
    this.loadScript('../assets/js/plugins.js');
    this.loadScript('../assets/js/classy-nav.min.js');
    this.loadScript('../assets/js/login-register.js');
    this.loadScript('../assets/js/active.js');
  }
    // displayCounter(){
    //     this.ngOnInit();
    // }

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
