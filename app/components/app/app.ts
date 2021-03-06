import {Component} from 'angular2/core';
import {NgIf} from 'angular2/common';
import {FlexContainerCmp} from '../flexContainer.component';
import {FlexContainer } from '../../services/FlexContainer';
import {Info} from '../../services/Info';

@Component({
  selector: 'flexboxapp',
  template: `
    <div *ngIf='!flexContainer.list.length' class="masthead">
      <h1 class="mh-logo">{{siteTitle}}</h1>
      <p class="mh-desc">{{siteDesc}}</p>

      <div class="mh-cond-content">
        <h2 class="mh-desc">{{siteStepsTitle}}</h2>
        <ul>
          <li *ngFor="#step of siteSteps">
            {{ step }}
          </li>
        </ul>
        <p class="mh-warning">{{warning}}</p>
        <p>{{lastUpdated}}</p>
        <a href="https://twitter.com/share" class="twitter-share-button" data-via="_devbryce" 
					data-size="large">Tweet</a>
        <script>!function(d,s,id){
					var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?
					'http':'https';if(!d.getElementById(id)){js=d.createElement(s);
					js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
					fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
				</script>
      </div>
    </div>
    <flex-container id="flexbox-app" class="flex-container-wrap"></flex-container>
  `,
  directives: [FlexContainerCmp, NgIf]
})

export class AppCmp {
  public siteTitle: string;
  public siteDesc: string;
  public siteStepsTitle: string;
  public siteSteps: any[];
  public lastUpdated: Date;
  public warning: string;
  public listLength: number;

  constructor(private flexContainer: FlexContainer) {
    this.setup();
  }

  setup() {
    this.setupSiteInfo();
  }

  setupSiteInfo() {
    var info = new Info().site;
    this.siteDesc = info.desc;
    this.siteTitle = info.title;
    this.siteSteps = info.steps;
    this.siteStepsTitle = info.stepsTitle;
    this.lastUpdated = info.lastUpdated;
    this.warning = info.warning;
  }


}
