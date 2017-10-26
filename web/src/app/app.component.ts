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
    <div class="mid-page">
      <div class="row">
        <div class="col-xs-12 col-md-8 col-md-offset-2">
          <div class="strategy-area">
            <strategy *ngIf="strategy" [strategy]="addStrategyComponent?.strategy || strategy"></strategy>
          </div>
          <div class="text-center buttons">
            <a class="btn btn-lg btn-primary" (click)="newStrategy()">Try another</a>
            <p class="visible-xs"></p>
            <a class="btn btn-lg btn-default" [class.active]="showSubmit"
                (click)="showSubmit = !showSubmit">Submit a strategy</a>
          </div>
          <add-strategy #addStrategyComponent *ngIf="showSubmit"></add-strategy>
        </div>
      </div>
    </div>
    <div class="footer">
      <a class="btn btn-link" href="https://datafire.io" target="_blank">
        <i class="fa fa-lightbulb-o"></i>
        Hosted on DataFire
      </a>
      <a class="btn btn-link" href="https://github.com/DataFire-repos/oblique-strategies" target="_blank">
        <i class="fa fa-github"></i>
        Fork on GitHub
      </a>
    </div>
  </div>
  `,
  styles: [`
    .container {
      min-height: 100%;
      position: relative;
      padding-bottom: 100px;
    }
    .intro {
      margin-bottom: 150px;
    }
    .mid-page {
      width: 100%;
      padding-bottom: 100px;
    }
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 20px;
      text-align: center;
    }
    .footer .btn-link {
      font-size: 18px;
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
    .buttons .btn {
      min-width: 200px;
    }
    @media(min-width: 762px) {
      .btn-primary {
        margin-right: 15px;
      }
    }
    @media(max-width: 761px) {
      .btn-primary {
        margin-bottom: 15px;
      }
    }
  `]
})
export class AppComponent {
  @ViewChild('addStrategyComponent') addStrategyComponent;
  strategy:any;
  showSubmit:boolean;

  constructor(private strategies:StrategyService) {
    this.newStrategy();
  }

  newStrategy() {
    this.strategy = null;
    this.strategies.getRandomStrategy()
      .then(strat => this.strategy = strat);
  }
}
