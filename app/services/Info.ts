import {siteInfo} from '../data/siteInfo';

export class Info {
  get site(){
      return this._site;
	  }

  private _site;

  constructor() {
    this._site = siteInfo;
  }
}

