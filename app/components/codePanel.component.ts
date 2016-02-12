import {Component, Input} from 'angular2/core';
import {FlexContainer} from '../services/FlexContainer';

@Component({
	selector: 'code-panel',
	templateUrl: './components/templates/codePanel.html'
})
export class CodePanelCmp {
	@Input() list: any;
	constructor(private flexContainer: FlexContainer) {
	console.log('hello world')
	}

}
