// this is where you write UI logic and methods for FlexItem
import {NgIf} from 'angular2/common';
import {Input, Component} from 'angular2/core';
import {FlexItem} from '../models/FlexItem';
import {CSSDefaults} from '../services/CSSDefaults';
import {PropsToSelectors} from '../utils/pipes';
import {NgStyle, NgModel} from 'angular2/common';
import {FlexContainer} from '../services/FlexContainer';

@Component({
	selector: 'flex-item',
	template: `
      <a href="#" class="fi-destroy-btn" (click)="removeSelf()"><i class="fa fa-times"></i></a>
      <a href="#" class="fi-settings-btn" (click)="toggleViewMode()"><!--, visible:tallEnough-->
        <i class="fa fa-cog"></i>
      </a>
      <span class="fi-index">{{getItemIndex()}}</span>
      <div class="fi-content"  *ngIf="viewMode">
        <p>{{item.lorem}}</p>
      </div>
      <div class="fi-options" *ngIf="editMode">
        <span class="fi-o-title">
          <a (click)="makeFixedWidth()" [style.font-size]="typeSwitcherFontSize('fixed')">fixed</a> or
          <a (click)="makeFlexyWidth()" [style.font-size]="typeSwitcherFontSize('flexy')">flexy</a> width?
        </span>
        <div *ngIf="item.settings.state == 'fixed'" class="fi-options-fixed">
          <label>width:
            <input type="text" [(ngModel)]="item.styles.width" (change)="logMe($event)">
          </label>
          <label>height:
            <input type="text" [(ngModel)]="item.styles.height">
          </label>
        </div>
        <div *ngIf="item.settings.state == 'flexy'" class="fi-options-flexy">
          <label>flex-grow:
            <input type="text" [(ngModel)]="item.styles.flexGrow">
          </label>
          <label for="">flex-shrink:
            <input type="text" [(ngModel)]="item.styles.flexShrink">
          </label>
          <label for="">flex-basis:
            <input type="text" [(ngModel)]="item.styles.flexBasis">
          </label>
        </div>
      </div>
	`,
	directives: [NgIf, NgStyle, NgModel],
	pipes: [PropsToSelectors]
})

export class FlexItemCmp {
	@Input() item: FlexItem;
	public idx: number;
	public viewMode: Boolean = true;
	public editMode: Boolean = false;
	public isFixed: Boolean = true;
	public isFlexy: Boolean = false;
	constructor(private flexContainer: FlexContainer) {}

	removeSelf() {
		this.flexContainer.list.pop(this.idx);
	}

	toggleViewMode(){
		this.viewMode = !this.viewMode;
		this.editMode = !this.editMode;
	}

	toggleState(){
		this.item.settings.state = this.item.settings.state === 'fixed' ?  'flexy' : 'fixed';
	}

	makeFixedWidth() {
		this.toggleState();
		this.item.makeMeFixed();
	}
	makeFlexyWidth() {
		this.toggleState();
		this.item.makeMeFlexy();
	}
	getItemIndex(){
		// this should probably be handled by the flexContainer class
		let idx = this.idx = this.flexContainer.list.indexOf(this.item) + 1;
		return idx;
	}

	typeSwitcherFontSize(type) {
		var base = 12;
		if (type !== this.item.settings.state) {
			base *=2 ;
		}
		return base + 'px';
	}

}



