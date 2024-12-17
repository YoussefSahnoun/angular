
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit{
 myFavoriteColor="red";
 @Input() filsproperty!: string ;
 
 @Output() sendrequest=new EventEmitter;
 ngOnInit(): void {

 }
 sendevent(): void {
  this.sendrequest.emit(this.myFavoriteColor);

 }
}