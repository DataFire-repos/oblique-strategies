import { Injectable }     from '@angular/core';
import { Http }     from '@angular/http';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'https://oblique-strategies.prod.with-datafire.io';

@Injectable()
export class StrategyService {
  strategies = [];

  constructor(private http:Http) {
    this.getStrategies();
  }

  getStrategies() {
    console.log('geting');
    return this.http.get(BASE_URL + '/strategies')
      .toPromise()
      .then(data => data.json())
      .then(strats => this.strategies = strats)
      .then(_ => console.log('got', this.strategies));
  }

  getRandomStrategy() {
    if (!this.strategies.length) {
      console.log('waiting...');
      return new Promise(resolve => setTimeout(resolve, 100))
        .then(_ => this.getRandomStrategy())
    }
    let idx = Math.floor(Math.random() * this.strategies.length);
    console.log('idx', idx);
    return Promise.resolve(this.strategies[idx]);
  }
}
