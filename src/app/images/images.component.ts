import { Component, OnInit } from '@angular/core';
import { Observable, of} from 'rxjs';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  imageObservable: Observable<string>=of('');
    
    listeImages = [ 
      'im1.jpg', 
      'im2.jpg',
      'im3.jpg',
      'im4.jpg'];
    currentImage: string='';

    constructor() { }

    ngOnInit(){
      this.imageObservable = new Observable(
        (observer) => {
          let i = 0;
          setInterval(
            () => {
              if (i === this.listeImages.length) {
                i = 0;
              }
              observer.next(this.listeImages[i++]);
            }, 1000);
        }
      );
      this.imageObservable.subscribe( 
        (result) => {
          this.currentImage = result;
        }
      ); 
    }
}

