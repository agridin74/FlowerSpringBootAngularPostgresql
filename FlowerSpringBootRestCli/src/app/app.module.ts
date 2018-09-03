import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateFlowerComponent } from './create-flower/create-flower.component';
import { FlowerDetailsComponent } from './flower-details/flower-details.component';
import { FlowersListComponent } from './flowers-list/flowers-list.component';
import { SearchFlowersComponent } from './search-flowers/search-flowers.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateFlowerComponent,
    FlowerDetailsComponent,
    FlowersListComponent,
    SearchFlowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
