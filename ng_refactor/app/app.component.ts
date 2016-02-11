import {Component} from 'angular2/core';

@Component({
	selector: 'flexbox-app',
	template: `
	  <h1>Hey what up angular? {{siteTitle}}</h1>
	   `
})

export class AppComponent {
	public siteTitle;

	constructor() {
		this.siteTitle = "hello world";
	}
}