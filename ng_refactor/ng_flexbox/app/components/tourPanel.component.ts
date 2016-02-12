import {Component} from 'angular2/core';
import {NgFor, NgIf} from 'angular2/common';
import {TourData, TourMessage} from '../services/tourData';
import {IndexDisplay} from '../utils/pipes';
import {FlexContainer} from '../services/FlexContainer';
import {PatternBuilder} from "../services/PatternBuilder";

@Component({
	selector: 'tour-panel',
	template: `
    <div>
      <span class="mb-title">tour</span>
      <span class="mb-progress">{{currentIdx | IndexDisplay }} / {{lastIdx | IndexDisplay}}</span>
      <p class="mb-content">{{currentMessage.text}}</p>
      <div class="mb-actions" *ngIf="currentMessage.buttons">
	      <a *ngFor="#btn of currentMessage.buttons #i=index"
	        class="mb-action" (click)="takeAction(btn.action, i)">{{btn.text}}</a>
      </div>

      <nav class="mb-nav">
        <a (click)="tourPrevious()"><i class="fa fa-chevron-left"></i></a>
        <a (click)="tourNext()"><i class="fa fa-chevron-right"></i></a>
      </nav>
    </div>
	`,
	pipes: [IndexDisplay],
	providers: [TourData, PatternBuilder],
	directives: [NgFor, NgIf]
})

export class TourPanelCmp {
	public currentIdx: number;
	public lastIdx: number;
	public currentMessage: TourMessage;

	constructor(private tourData: TourData, private flexContainer: FlexContainer, private build:PatternBuilder) {
		let curr = this.currentIdx = 0;
		this.lastIdx = this.tourData.data.length -1;
		this.currentMessage = tourData.data[curr];
	}

	tourNext() {
		let curr = this.currentIdx;
		if (curr !== this.lastIdx) {
			curr = this.currentIdx = this.currentIdx + 1;
			this.currentMessage = this.tourData.data[curr];
		}
	}

	tourPrevious() {
		let curr = this.currentIdx;
		if (curr !== 0) {
			curr = this.currentIdx = this.currentIdx - 1;
			this.currentMessage = this.tourData.data[curr];
		}
	}

	takeAction(action, index){
		let buttons = this.currentMessage.buttons;
		switch (action) {
			case 'url':
				this.openInNewTab(buttons[index].url);
				break;
			case 'resize':
				this.flexContainer.resizeContainer();
				break;
			default:
				this.buildPattern(action);
		}

	}

	private openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}

	buildPattern(pattern) {
		this.flexContainer.list = [];

		switch(pattern) {
			case 'menu':
				this.build.menu();
				break;
			case 'holyGrail':
				this.build.website();
				break;
			case 'grid':

				break;
			default:
				throw new Error('Bad template');
		}
		console.log('building template');
	}

}
