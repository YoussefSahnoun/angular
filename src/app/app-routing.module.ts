import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangecolorComponent } from './color-change/changecolor/changecolor.component';
import { CarteComponent } from './form/form/carte.component';
import { PereComponent } from './fils-pere/pere/pere.component';
import { CvComponent } from './cv-embauche/cv/cv.component';
import { MiniwordComponent } from './mini-word/miniword/miniword.component';
import { RainbowComponent } from './rainbow/rainbow/rainbow.component';
import { DetailComponent } from './cv-embauche/detail/detail.component';
import { CdDetailComponent } from './cv-embauche/cv-detail/cv-detail.component';
import { LoginComponent } from './login/login.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: "color-change/:color", component:  ChangecolorComponent},
  { path: 'color-change', redirectTo: 'ex1/red' },
  { path: "color-change", component:  ChangecolorComponent},
  { path: "form", component:  CarteComponent},
  { path: "fils-pere", component: PereComponent },
  { path: "cv-embauche", component: CvComponent },
  { path: "cv-embauche/:id", component: CdDetailComponent},
  { path: "mini-word", component: MiniwordComponent },
  { path: "rainbow", component: RainbowComponent },
  { path: "login", component: LoginComponent },
  { path: "images", component: ImagesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
