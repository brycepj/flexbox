/**
 * Created by bryce on 2/10/16.
 */
import {FlexContainer} from '../services/FlexContainer';
import {Injectable} from 'angular2/core';
import {FlexItem} from '../models/FlexItem';


const menuStylesCfg = {
	flexGrow: "1",
	flexShrink: "0",
	flexBasis: "160px",
	height: "70px",
	content: "Home"
};

const menuDisplayCfg = {
	view: 'settings',
	state: 'flexy',
	lorem: null
};

const websiteHeaderCfg = {
	flexGrow: "1",
	flexShrink: "0",
	flexBasis: "98%",
	alignSelf: "center",
	height: null,
	content: "HEADER"
};

const websiteBookendDisplayCfg = {
	view: 'settings',
	state: 'flexy',
	lorem: null
};

const websiteFooterCfg = {
	flexGrow: "1",
	flexShrink: "0",
	flexBasis: "98%",
	alignSelf: "center",
	height: null,
	content: "FOOTER"
};

const websiteColumnCfg = {
	flexGrow: "1",
	flexShrink: "0",
	flexBasis: "200px",
	height: null,
	lorem: 70
};

const websiteColumnDisplayCfg = {
	view: 'settings',
	state: 'flexy',
	lorem: 40
};
const gridItemCfg = {

};


@Injectable()
export class PatternBuilder {
	constructor(private flexContainer: FlexContainer){}

	menu(){
		var menuText = ['Home', 'About', 'Contact', 'Portfolio', 'Blog'];
		var self = this;
		_.times(menuText.length, function (index) {
			var styles = menuStylesCfg;
			var display = menuDisplayCfg;
			display.content = menuText[index];
			self.flexContainer.list.push(new FlexItem(styles, display, true));
		});

	}

	website(){
		var self = this;

		websiteBookendDisplayCfg.content = 'HEADER';
		this.flexContainer.list.push(new FlexItem(websiteHeaderCfg, websiteBookendDisplayCfg, true));

		_.times(3, function () {
			self.flexContainer.list.push(new FlexItem(websiteColumnCfg, websiteColumnDisplayCfg, true));
		});

		websiteBookendDisplayCfg.content = 'FOOTER';
		this.flexContainer.list.push(new FlexItem(websiteFooterCfg, websiteBookendDisplayCfg, true));
	}

	grid(){

	}


}

