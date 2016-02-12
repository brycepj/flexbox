declare var store:StoreJSStatic;
declare var _:any;
import {Injectable} from 'angular2/core';

@Injectable()
export class Local {
	private _exists:Boolean;
	constructor() {
		this._exists = _.keys(store.getAll()).length > 0;
	}

	get exists():Boolean {
		return this._exists;
	}

	getitemsList():any {
		return store.get('itemsList');
	}

	setitemsList(items:any) {
		store.set('itemsList', items);
	}

	getitemDefaults():any {
		return store.get('itemDefaults');
	}

	setitemDefaults(itemObj:any) {
		store.set('itemDefaults', itemObj);
	}

	getcontainerDefaults():any {
		return store.get('containerDefaults');
	}

	setcontainerDefaults(containerObj:any) {
		store.set('containerDefaults', containerObj);
	}
}
