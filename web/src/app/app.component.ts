import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {StrategyService} from './strategy/strategy.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="intro text-center">
          <h1>Oblique Strategies for Programmers</h1>
          <p>
            Inspired by
            <a taget="_blank" href="https://en.wikipedia.org/wiki/Oblique_Strategies">
              Oblique Strategies</a>,
            from Brian Eno and Peter Schmidt
          </p>
        </div>
      </div>
    </div>
    <div class="row mid-page text-center">
      <div class="col-xs-12 col-md-8 col-md-offset-2">
        <div class="strategy-area">
          <strategy *ngIf="strategy" [strategy]="strategy"></strategy>
        </div>
        <a class="btn btn-lg btn-primary" (click)="newStrategy()">Try another</a>
        <a class="btn btn-lg btn-default">Submit a strategy</a>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .container {
      height: 100%;
      position: relative;
    }
    .mid-page {
      position: absolute;
      top: 30%;
      width: 100%;
    }

    .strategy-area {
      height: 150px;
    }

    strategy {
      display: block;
    }
    .btn {
      min-width: 200px;
    }
    .btn-primary {
      margin-right: 15px;
    }
  `]
})
export class AppComponent {
  strategy:any;

  constructor(private strategies:StrategyService) {
    this.newStrategy();
  }

  newStrategy() {
    this.strategy = null;
    this.strategies.getRandomStrategy()
      .then(strat => this.strategy = strat);
  }
}
