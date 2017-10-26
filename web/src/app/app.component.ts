import { Component, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {StrategyService} from './strategy/strategy.service';
import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
 } from '@angular/animations';

const ANIMATION_DURATION = 100;

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="intro text-center">
          <h1>Oblique Strategies for Programmers</h1>
          <p>
            Random tips for building, debugging, and overcoming creative blocks.
          </p>
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
            <strategy *ngIf="strategy" [strategy]="addStrategyComponent?.strategy || strategy" [@newStrategy]="animate"></strategy>
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

    strategy {
      display: block;
      margin-bottom: 18px;
    }
    add-strategy {
      display: block;
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
  `],
    animations: [
        trigger('newStrategy', [
            state('inactive', style({
                transform: 'scale(1)',
            })),
            state('active', style({
                transform: 'scale(1.1)',
            })),
            transition('* => active', animate(ANIMATION_DURATION + 'ms ease-in')),
            transition('active => inactive', animate(ANIMATION_DURATION + 'ms ease-out'))
        ]),
    ]
})
export class AppComponent {
  @ViewChild('addStrategyComponent') addStrategyComponent;
  animate:string='inactive';
  strategy:any;
  showSubmit:boolean;

  constructor(private strategies:StrategyService) {
    this.newStrategy();
  }

  newStrategy() {
    this.animate = 'active';
    setTimeout(() => this.animate = 'inactive', ANIMATION_DURATION);
    let current = this.strategy;
    this.strategy = null;
    this.strategies.getRandomStrategy(current)
      .then(strat => this.strategy = strat);
  }
}
