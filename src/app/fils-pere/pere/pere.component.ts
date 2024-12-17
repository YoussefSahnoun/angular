import { Component } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent {

  
  title = 'ex5angular';
  fatherColor='lightblue';
  favcolor!: string;
  processreq(newcolor: string): void{
   this.favcolor= newcolor ;
  }

}
