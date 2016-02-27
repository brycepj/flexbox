import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {FlexContainer} from '../services/FlexContainer';
import {CSSDefaults} from '../services/CSSDefaults';
import {DerpPipe} from '../utils/pipes';
import {containerOptions} from '../utils/data';
import {FlexItemFactory} from '../services/FlexItemFactory';

@Component({
	selector: 'admin-panel',
	templateUrl: './components/templates/adminPanel.html',
	directives: [FORM_DIRECTIVES],
	pipes: [DerpPipe]
})

export class AdminPanelCmp {
	public options: any;

	constructor(private flexContainer: FlexContainer,
	            private _cssDefaults: CSSDefaults,
	            public itemDefaults: FlexItemFactory) {
		this.options = containerOptions;
	}

	updateContainerStyles(prop, evt) {
		var srcElem = evt.srcElement;
		var newVal = srcElem.value;
		this.flexContainer.styles[prop] = newVal;
	}
	changeItemTypeDefault(type, event) {
		this.itemDefaults[type] = event.target.checked;
	}
	updateDefaultState(val) {
		this.itemDefaults.setDefault({
			state: val
		});
	}
	addItem():void {
		this.flexContainer.createFlexItem();
	}

	removeItem():void {
		this.flexContainer.removeItem();
	}

	removeAllItems():void {
		this.flexContainer.removeAll();
	}

	setItemDefault(styleObj):void {
		this._cssDefaults.setitem(styleObj);
	}


	resizeBox():void {
		this.flexContainer.resizeContainer();
	}

}
