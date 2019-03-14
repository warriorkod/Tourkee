import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-gallery',
  encapsulation : ViewEncapsulation.None,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  show = true;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {

    this.loadScript('../assets/assets/popper/popper.min.js');
    this.loadScript('../assets/assets/tether/tether.min.js');
    this.loadScript('../assets/assets/bootstrap/js/bootstrap.min.js');
    this.loadScript('../assets/assets/smoothscroll/smooth-scroll.js');
    this.loadScript('../assets/assets/bootstrapcarouselswipe/bootstrap-carousel-swipe.js');
    this.loadScript('../assets/assets/vimeoplayer/jquery.mb.vimeo_player.js');
    this.loadScript('../assets/assets/masonry/masonry.pkgd.min.js');
    this.loadScript('../assets/assets/imagesloaded/imagesloaded.pkgd.min.js');
    this.loadScript('../assets/assets/theme/js/script.js');
    this.loadScript('../assets/assets/gallery/player.min.js');
    this.loadScript('../assets/assets/gallery/script.js');
    this.loadScript('../assets/assets/slidervideo/script.js');
    if (this.customerService.isLogged()){
      this.show = false;
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


}
