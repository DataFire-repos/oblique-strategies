import { Injectable }     from '@angular/core';
import { Http, Headers }     from '@angular/http';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'https://oblique-strategies.prod.with-datafire.io';

@Injectable()
export class StrategyService {
  strategies = [];

  constructor(private http:Http) {
    this.getStrategies();
  }

  getStrategies() {
    return this.http.get(BASE_URL + '/strategies')
      .toPromise()
      .then(data => data.json())
      .then(strats => this.strategies = strats)
  }

  getRandomStrategy(strategyToAvoid=null) {
    if (!this.strategies.length) {
      return new Promise(resolve => setTimeout(resolve, 100))
        .then(_ => this.getRandomStrategy())
    }
    let idx = Math.floor(Math.random() * this.strategies.length);
    let strat = this.strategies[idx];
    if (strat === strategyToAvoid) {
      return this.getRandomStrategy(strategyToAvoid);
    }
    return Promise.resolve(strat);
  }

  addStrategy(strategy) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(BASE_URL + '/strategies', JSON.stringify(strategy), {headers})
      .toPromise()
      .then(data => data.json())
      .catch(e => {
        if (e.json) e = e.json();
        throw e;
      })
  }
}
