import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {BrokersComponent} from "./brokers/brokers.component";
import {ParamsComponent} from "./params/params.component";
import {StocksComponent} from "./stocks/stocks.component";
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';



const appRoutes: Routes = [
    {path: '', component: StocksComponent},
    {path: 'stocks', component: StocksComponent},
    {path: 'brokers', component: BrokersComponent},
    {path: 'params', component: ParamsComponent}
];

@NgModule({
  declarations: [
    AppComponent, BrokersComponent, ParamsComponent, StocksComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
