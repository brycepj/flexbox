// this is where the data model and data-related methods go for FlexItems
import {ItemCfg} from '../utils/interfaces';
import {CSSDefaults} from '../services/CSSDefaults';
import {Inject, Injectable, Injector} from 'angular2/core';


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
		!template && this.setStylesByState();
	}

	generateLorem(count) {
		let self = this;
		var min = 0;
		var max = this.wordBank.length;
		var loremStore = [];
		_.times(count, function () {
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

	makeMeFlexy(){
		let defaultsFlexy = {
			'flexGrow': "1",
			'flexShrink': "0",
			'flexBasis': "200px",
			width: null
		};
		_.assign(this.styles, defaultsFlexy);
	}
}

var wordbank = ['es7','mithril','apple\'s website','unobtrusive javascript','static',
	'brad frost','organic','mockup','whitespace','above the fold','skeuomorphism',
	'always be shipping','steve jobs','flat design','grid','net neutrality','SOPA',
	'code','ICANN','content strategy','content','f.lux','blue beanie','rollover','table',
	'css zen garden','preload','gif','sprite','laura kalbag','dev bootcamp','cs degree',
	'hacker school','the picture element','W3 Fools','W3C','ftp','deployment strategy',
	'python vs ruby','jeff atwood','stack overflow','just build websites','wordpress',
	'java','pycharm','web storm','foreach','addClass','slice','alex sexton','80/20 rule',
	'float drop','bacon ipsum','dogmatic','promise','atomic design','shoptalkshow','yayQuery',
	'javascript jabber','vagrant','chris coyier','flexbox','device agnostic', 'breaks in ie6',
	'paul irish', 'web standards', 'grok', 'crufty', 'angular', 'MV*', 'addy osmani',
	'custom elements', 'paralax', 'performance budget', 'offline first', 'gulp', 'node',
	'ie6 countdown', 'progressive enhancement', 'the Industry','svg','machine code','rails',
	'django','google','indexDB','webgl','ux/ui','tim kadlec','retina','fixed header','minimalist',
	'QR codes','art direction','masonry','infinite scrolling','lazy load','mobile navigation toggle',
	'api','spa','ember','backbone','mvc','require','the open web','server farm', 'bash','free as in beer',
	'nosql','how long does it take to learn javascript', 'gui','fortran','server-side','back-end',
	'groovy on grails','haskell','erlang','continuous integration','capistrano','typescript',
	'coffeescript','google dart','yehuda katz', 'classes', 'angular 2', 'igor minar', 'react',
	'react native', 'systemjs', 'gulp', 'meteor', 'patrickjs', 'remoteconf', 'iife', 'qooxdoo',
	'story', 'chalk', 'mocha', 'cheerio', 'underscore', 'lodash', 'john david dalton', 'nodemon'];



//var ItemStyles = {
//	height: {
//		unit: 'px',
//		value: '250',
//		options: null
//	},
//	width: {
//		unit: 'px',
//		value: '300',
//		options: null
//	},
//	margin: {
//		unit: 'px',
//		value: '10',
//		options: null
//	},
//	flexGrow: {
//		unit: null,
//		value: '1',
//		options: null
//	},
//	flexShrink: {
//		unit: null,
//		value: '0',
//		options: []
//	},
//	flexBasis: {
//		unit: 'px',
//		value: '200',
//		options: null
//	},
//	alignSelf: {
//		unit: null,
//		value: '',
//		options: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'inherit']
//	}
//};
//
//var ContainerStyles = {
//	flexDirection: {
//		unit: null,
//		value: '',
//		options: ['row', 'column']
//	},
//	flexWrap: {
//		unit: null,
//		value: '',
//		options: ['wrap', 'nowrap']
//	},
//	justifyContent: {
//		unit: null,
//		value: '',
//		options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
//	},
//	alignItems: {
//		unit: null,
//		value: '',
//		options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
//	},
//	alignContent: {
//		unit: null,
//		value: '',
//		options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
//	}
//};
// remember fixed/flexy is a setting of multiple props

// {display: flex}


/*
 setStyles() {
 return {
 // CSS property names
 'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
 'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
 'font-size':   this.isSpecial    ? 'x-large': 'smaller', // larger
 }
 }

 */
