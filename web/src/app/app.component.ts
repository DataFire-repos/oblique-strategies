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
              Oblique Strategies
            </a>
            by Brian Eno and Peter Schmidt
          </p>
        </div>
      </div>
    </div>
    <div class="row mid-page text-center">
      <div class="col-xs-12 col-md-8 col-md-offset-2">
        <strategy *ngIf="strategy" [strategy]="strategy"></strategy>
        <a class="btn btn-lg btn-primary">Let's see another</a>
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
      display: block;
      position: absolute;
      top: 30%;
      width: 100%;
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
