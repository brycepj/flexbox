declare var _:any;

import {FlexContainer} from '../services/FlexContainer';
import {Injectable} from 'angular2/core';
import {FlexItem} from '../models/FlexItem';

var menuStylesCfg = {
	flexGrow: '1',
	flexShrink: '0',
	flexBasis: '160px',
	height: '70px',
	content: 'Home'
};

var menuDisplayCfg = {
	view: 'settings',
	state: 'flexy',
	lorem: null,
	content: null
};

var websiteHeaderCfg = {
	flexGrow: '1',
	flexShrink: '0',
	flexBasis: '98%',
	alignSelf: 'center',
	height: null,
	content: 'HEADER'
};

var websiteBookendDisplayCfg = {
	view: 'settings',
	state: 'flexy',
	lorem: null,
	content: null
};

var websiteFooterCfg = {
	flexGrow: '1',
	flexShrink: '0',
	flexBasis: '98%',
	alignSelf: 'center',
	height: null,
	content: 'FOOTER'
};

var websiteColumnCfg = {
	flexGrow: '1',
	flexShrink: '0',
	flexBasis: '200px',
	height: null,
	lorem: 70
};

var websiteColumnDisplayCfg = {
	view: 'settings',
	state: 'flexy',
	lorem: 40
};

@Injectable()
export class PatternBuilder {
	constructor(private flexContainer: FlexContainer) { }

	menu() {
		var menuText = ['Home', 'About', 'Contact', 'Portfolio', 'Blog'];
		var self = this;
		_.times(menuText.length, function(index) {
			var styles = menuStylesCfg;
			var display = menuDisplayCfg;
			display.content = menuText[index];
			self.flexContainer.list.push(new FlexItem(styles, display, true));
		});

	}

	website() {
		var self = this;

		websiteBookendDisplayCfg.content = 'HEADER';
		this.flexContainer.list.push(new FlexItem(websiteHeaderCfg, websiteBookendDisplayCfg, true));

		_.times(3, function() {
			self.flexContainer.list.push(new FlexItem(websiteColumnCfg, websiteColumnDisplayCfg, true));
		});

		websiteBookendDisplayCfg.content = 'FOOTER';
		this.flexContainer.list.push(new FlexItem(websiteFooterCfg, websiteBookendDisplayCfg, true));
	}
}

