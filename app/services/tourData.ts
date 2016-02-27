import {TourJSON} from '../data/TourJSON';

export class TourData {
	public data : TourMessage[];

	constructor() {
		this.data = TourJSON;
	}
}

export interface TourMessage {
	text: string;
	buttons?: any;
}

export interface Buttons {
	url?: string;
	text: string;
	action?: string;
}

