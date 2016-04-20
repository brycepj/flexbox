declare var _: any;

import {Injectable} from 'angular2/core';
import {CSSDefaults} from './CSSDefaults';
import {FlexItem} from '../models/FlexItem';

var displayDefaults = {
  view: 'settings',
  state: 'fixed',
  lorem: 5
};

@Injectable()
export class FlexItemFactory {
  // eventually validate with a validate method
  public displayDefaults: any;
  constructor(private _cssDefaults: CSSDefaults) {
    this.displayDefaults = displayDefaults;
  }

  create(styles?, display?) {
    let styleDefaults = styles || this._cssDefaults.getitem();
    let displayDefaults = display || this.displayDefaults;
    return new FlexItem(styleDefaults, displayDefaults);
  }

  setDefault(cfg) {
    _.assign(this.displayDefaults, cfg);
  }
}

