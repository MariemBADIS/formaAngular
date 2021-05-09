import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cvCompany/cv/cv.component';
import { ListCvComponent } from './cvCompany/list-cv/list-cv.component';
import { ItemCvComponent } from './cvCompany/item-cv/item-cv.component';
import { DetailCvComponent } from './cvCompany/detail-cv/detail-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighLightDirective } from './directive/high-light.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './cvCompany/default-image.pipe';
import {PremierService} from './premier.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent,
    GrandChildComponent,
    ColorComponent,
    FilsComponent,
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HighLightDirective,
    RainbowDirective,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PremierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
