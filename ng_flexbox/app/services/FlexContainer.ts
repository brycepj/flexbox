import {FlexItem} from './../models/FlexItem';
import {CSSDefaults} from './CSSDefaults';
import {CssStylePairContainer} from '../utils/interfaces';
import {Local} from './LocalStorage';
import {Inject} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {containerOptions, containerDefaults} from '../utils/data';
import {FlexItemFactory} from '../services/FlexItemFactory';

@Injectable()
export class FlexContainer {
	public list:any = [];
	public styles: any;
	public styleOptions: any;
	constructor(private _flexItemFactory: FlexItemFactory) {
		this.styles = containerDefaults;
		this.styleOptions = containerOptions;
	}

	createFlexItem() {
		if (this.list.length === 0) {
			this.hideMasthead();
		}
		let newItem = this._flexItemFactory.create();
		newItem['index'] = this.list.length;
		this.list.push(newItem);
	}

	removeItem(idx?:number):void {
		let list = this.list;
		if (idx) {
			list.pop(idx);
		} else {
			list.pop();
		}
	}

	removeAll():void {
		this.list = [];
	}

	resizeContainer(){
		// waiting on ng2 animation APIs
		let notEmpty = this.list.length > 0;
		if (notEmpty) {
			this.collapseContainer();
		}
	}
	private collapseContainer() {
		var self = this;
		setTimeout(function () {
			let width = self.styles.width;
			let cur = Number(width.substr(0, width.length-1));
			let bottom = 45;
			if (cur > bottom) {
				self.styles.width = cur - .25 + '%';
				self.collapseContainer();
			} else {
				self.expandContainer()
			}

		}, 5);
	}
	private expandContainer() {
		var self = this;
		setTimeout(function () {
			let width = self.styles.width;
			let cur = Number(width.substr(0, width.length-1));
			let top = 100;
			if (cur < top) {
				self.styles.width = cur + .25 + '%';
				self.expandContainer();
			}
		}, 5);
	}
	// gross hack!!
	hideMasthead(){
		document.querySelector('.masthead').className += ' hidden';
	}

}

