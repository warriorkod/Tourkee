import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shabiller',
  encapsulation : ViewEncapsulation.None,
  templateUrl: './shabiller.component.html',
  styleUrls: ['./shabiller.component.css']
})
export class ShabillerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.loadScript('../assets/js/active.js');
    this.loadScript('../assets/js/jquery.steps.js');
    this.loadScript('../assets/js/main.js');
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
