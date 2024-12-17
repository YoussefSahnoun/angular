import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv-embauche/cv/cv.component';
import { ListeComponent } from './cv-embauche/liste/liste.component';
import { ItemComponent } from './cv-embauche/item/item.component';
import { DetailComponent } from './cv-embauche/detail/detail.component';
import { RainbowDirective } from './rainbow.directive';
import { DefaultImagePipe } from './default-image.pipe';
import { MiniwordComponent } from './mini-word/miniword/miniword.component';
import { ChangecolorComponent } from './color-change/changecolor/changecolor.component';
import { PereComponent } from './fils-pere/pere/pere.component';
import { FilsComponent } from './fils-pere/fils/fils.component';
import { CarteComponent } from './form/form/carte.component';
import { RainbowComponent } from './rainbow/rainbow/rainbow.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EmbaucheComponent } from './cv-embauche/embauche/embauche.component'; 
import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger,state,style,animate,transition}from '@angular/animations';
import { CdDetailComponent } from './cv-embauche/cv-detail/cv-detail.component';
import { LoginComponent } from './login/login.component';
import { ImagesComponent } from './images/images.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    DefaultImagePipe ,
    AppComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    RainbowDirective,
    MiniwordComponent,
    ChangecolorComponent,
    PereComponent,
    FilsComponent,
    CarteComponent,
    RainbowComponent,
    NavbarComponent,
    EmbaucheComponent,
    CdDetailComponent,
    LoginComponent,
    ImagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass: "toast-top-center"  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
