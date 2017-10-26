import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddStrategyComponent } from './strategy/add-strategy.component';
import { StrategyComponent } from './strategy/strategy.component';
import { StrategyService } from './strategy/strategy.service';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    StrategyComponent,
    AddStrategyComponent,
  ],
  providers: [
    StrategyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
