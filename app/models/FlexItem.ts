declare var _: any;

import {wordbank} from '../data/wordbank';

export class FlexItem {
  public styles: any;
  public settings: any;
  public text: string;
  public date: any;
  public lorem: string;
  private wordBank: string[];

  constructor(styleDefaults, displayDefaults, template?) {
    this.wordBank = wordbank;
    this.styles = styleDefaults;
    this.settings = {
      loremCount: displayDefaults.lorem,
      state: displayDefaults.state,
      view: displayDefaults.view
    };
    this.lorem = displayDefaults.content || this.generateLorem(this.settings.loremCount);

    if (!template) {
      this.setStylesByState();
    }
  }

  generateLorem(count) {
    let self = this;
    var min = 0;
    var max = this.wordBank.length;
    var loremStore = [];
    _.times(count, function() {
      var randomIdx = Math.floor(Math.random() * (max - min + 1)) + min;
      loremStore.push(self.wordBank[randomIdx]);
      self.wordBank.splice(randomIdx, 1);
      max--;
    });
    return loremStore.join(' ');
  }

  setStylesByState() {
    // TODO: This belongs in FlexItem.ts
    this.settings.state === 'fixed' ? this.makeMeFixed() : this.makeMeFlexy();
  }

  makeMeFixed() {
    let defaultsFixed = {
      'flexGrow': null,
      'flexShrink': null,
      'flexBasis': null,
      width: this.styles.width || '300px'
    };
    _.assign(this.styles, defaultsFixed);
  }

  makeMeFlexy() {
    let defaultsFlexy = {
      flexGrow: '1',
      flexShrink: '0',
      flexBasis: '200px',
      width: null
    };
    _.assign(this.styles, defaultsFlexy);
  }
}



