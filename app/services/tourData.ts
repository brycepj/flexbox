import {TourJSON} from '../data/TourJSON';

export class TourData {
	public data : TourMessage[];


	constructor() {
		this.data = TourJSON;
	}
}

export interface TourMessage {
	text: string,
	btnUrl?: string,
	btnText?: string,
	btnAction?: string
}