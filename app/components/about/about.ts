import {Component} from 'angular2/core';

@Component({
  selector: 'about',
  templateUrl: './components/about/about.html'
})
export class AboutCmp {
  public shit;
  constructor() {
    this.shit = 'donkey';
  }
}
