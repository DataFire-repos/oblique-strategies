import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'strategy',
  template: `
    <p class="strategy">{{strategy.strategy}}</p>
    <p class="citation">
      <a *ngIf="strategy.link" target="_blank" [href]="strategy.link">
        {{strategy.author}}
      </a>
      <span *ngIf="!strategy.link">
        {{strategy.author}}
      </span>
    </p>
  `,
  styles: [`
    .strategy, .citation {
      text-align: center;
    }

    .strategy {
      font-weight: bold;
      font-size: 22px;
    }

    .citation {
      font-style: italic;
    }
  `]
})
export class StrategyComponent {
  @Input() strategy:any;

  constructor() {}
}
