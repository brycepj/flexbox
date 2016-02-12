import {Component, Input} from 'angular2/core';
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
	public itemDefaults: any;
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
	private toggleLocalValues(){

	}
	updateDefaultState(val){
		this.itemDefaults.setDefault({
			state: val
		});
	}
	addItem() {
		this.flexContainer.createFlexItem();
	}

	removeItem() {
		this.flexContainer.removeItem();
	}

	removeAllItems(){
		this.flexContainer.removeAll()
	}

	setItemDefault(styleObj) {
		this._cssDefaults.setitem(styleObj);
	}


	resizeBox() {
		this.flexContainer.resizeContainer();
	}

}
