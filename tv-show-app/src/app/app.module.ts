import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { ShowService } from './show/show.service'; // added automatically
import { HttpClientModule} from '@angular/common/http'; // add manually

@NgModule({
  declarations: [
    AppComponent,
    ShowResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShowService], // auto import
  bootstrap: [AppComponent]
})
export class AppModule { }
