import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {StrategyService} from './strategy.service';

const DATA_URL = "https://docs.google.com/spreadsheets/d/1Oy9fiRqmDQgLbTSjMyiYWXZU4kImesa6fqyJVnUbeMg/edit?usp=sharing";

@Component({
  selector: 'add-strategy',
  template: `
    <div>
      <p>
        Once your strategy is approved it will appear here.
        You can also view a <a href="${DATA_URL}" target="_blank">list of all submissions</a>
      </p>
      <form (submit)="addStrategy()">
        <div class="form-group">
          <label>Strategy</label>
          <textarea class="form-control" [(ngModel)]="strategy.strategy" name="strategy">
          </textarea>
          <p class="text-danger" *ngIf="strategy.strategy?.length > 140">
            Maximum 140 characters
          </p>
        </div>
        <div class="form-group">
          <label>Author</label>
          <input class="form-control" [(ngModel)]="strategy.author" name="author">
        </div>
        <div class="form-group">
          <label>Link</label>
          <input class="form-control" [(ngModel)]="strategy.link" name="link">
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
      <div *ngIf="error" class="alert alert-danger">
        {{ error }}
      </div>
      <div *ngIf="success" class="alert alert-success">
        Thanks!
      </div>
    </div>
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
export class AddStrategyComponent {
  strategy:any = {};
  success:boolean;
  error:string;
  constructor(private strategies:StrategyService) {}

  addStrategy() {
    this.error = this.success = null;
    this.strategies.addStrategy(this.strategy)
      .then(success => {
        console.log('added', success);
        this.success = true;
      } ,e => {
        this.error = e.error || e.message || e;
      });
  }
}
