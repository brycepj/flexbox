declare var _:any;

import {Local} from '../services/LocalStorage';
import {CssStylePairItem, CssStylePairContainer} from '../utils/interfaces';
import {Inject, Injectable} from 'angular2/core';

const itemDefaults = {
	'display': 'block',
	'width': '300px',
	'height': '250px',
	'flexGrow': '0',
	'flexShrink': '0',
	'flexOrder': '0',
	'flexBasis': '0',
	'alignSelf': 'center'
};

const containerDefaults = {
	'display': 'block',
	'width': '100%',
	'height': '100%',
	'flexWrap': 'wrap',
	'flexDirection': 'row',
	'justifyContent': 'center',
	'alignItems': 'center',
	'alignContent': 'center'
};

const containerOptions = {
	'display': 'flex',
	'width': '100%',
	'height': '100%',
	'flexWrap': ['wrap', 'nowrap'],
	'flexDirection': ['row', 'column'],
	'justifyContent': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
	'alignItems': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
	'alignContent': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
};

@Injectable()
export class CSSDefaults {
	// injected at Boot, inject anywhere
	public container:CssStylePairContainer;
	public item:CssStylePairItem;
	public containerOptions: any = containerOptions;

	private _itemDefaults:CssStylePairItem;
	private _containerDefaults:any;
	private _localExists:Boolean;
	private _local:any;

	constructor(@Inject(Local) _local) {
		this._local = _local;
		this._localExists = _local.exists;
		this._itemDefaults = _.cloneDeep(itemDefaults);
		this._containerDefaults = _.cloneDeep(containerDefaults);
		this.setup(this._localExists);
	}

	getcontainer() {
		return _.cloneDeep(this._containerDefaults);
	}

	setcontainer(styles:CssStylePairContainer) {
		// TODO: Will want to validate these as possible styles
		_.forOwn(styles, function (val, key) {
			let defaults = this._containerDefaults;
			if (defaults.hasOwnProperty(key)) {
				defaults[key] = val;
			}
		});
	}

	getitem() {
		return _.cloneDeep(this._itemDefaults);
	}

	setitem(styles:CssStylePairItem) {
		_.forOwn(styles, function (val, key) {
			let defaults = this._itemDefaults;
			if (defaults.hasOwnProperty(key)) {
				defaults[key] = val;
			}
		});
	}

	setup(exists:Boolean):void {
		this.setupContainerDefaults(exists);
		this.setupItemDefaults(exists);
	}

	setupContainerDefaults(exists:Boolean):void {
		this.container = exists
			? this._local.getcontainerDefaults()
			: this._containerDefaults;
	}

	setupItemDefaults(exists) {
		this.item = exists
			? this._local.getitemDefaults()
			: this._itemDefaults;
	}
}

