import { Component, ViewChild } from '@angular/core';
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
    <div class="row mid-page">
      <div class="col-xs-12 col-md-8 col-md-offset-2">
        <div class="strategy-area">
          <strategy *ngIf="strategy" [strategy]="addStrategyComponent?.strategy || strategy"></strategy>
        </div>
        <div class="text-center">
          <a class="btn btn-lg btn-primary" (click)="newStrategy()">Try another</a>
          <a class="btn btn-lg btn-default" [class.active]="showSubmit"
              (click)="showSubmit = !showSubmit">Submit a strategy</a>
        </div>
        <add-strategy #addStrategyComponent *ngIf="showSubmit"></add-strategy>
      </div>
      <div class="col-xs-12 footer">
        <a class="btn btn-link" href="https://datafire.io">
          <i class="fa fa-lightbulb-o"></i>
          Hosted on DataFire
        </a>
        <a class="btn btn-link" href="https://github.com/DataFire-repos/oblique-strategies">
          <i class="fa fa-github"></i>
          Fork on GitHub
        </a>
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
      width: 100%;
      top: 30%;
      min-height: 70%;
      padding-bottom: 100px;
    }
    .footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 20px;
      text-align: center;
    }
    .footer .btn-link i {
      margin-right: 8px;
    }

    .strategy-area {
      height: 150px;
    }

    add-strategy {
      display:block;
      margin-top: 50px;
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
  @ViewChild('addStrategyComponent') addStrategyComponent;
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
