import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StrategyComponent } from './strategy/strategy.component';
import { StrategyService } from './strategy/strategy.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StrategyComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
  ],
  providers: [
    StrategyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
