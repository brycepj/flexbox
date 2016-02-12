import {Component} from 'angular2/core';
import {NgFor, NgStyle} from 'angular2/common';
import {FlexContainer} from '../services/FlexContainer';
import {FlexItemCmp} from './flexItem.component';
import {TourPanelCmp, AdminPanelCmp, CodePanelCmp} from './SidebarCmps';
import {FlexItem} from '../models/FlexItem';
import {CSSDefaults} from '../services/CSSDefaults';
import {Local} from '../services/LocalStorage';
import {PropsToSelectors} from '../utils/pipes';

@Component({
	selector: 'flex-container',
	styles: [`

  `],
	template: `
			<div id="flex-container"  [ngStyle]="{
		    'width': flexContainer.styles.width,
		    'height': flexContainer.styles.height,
	      'display': flexContainer.styles.display,
				'flex-wrap': flexContainer.styles.flexWrap,
				'flex-direction': flexContainer.styles.flexDirection,
				'justify-content': flexContainer.styles.justifyContent,
				'align-items': flexContainer.styles.alignItems,
				'align-content': flexContainer.styles.alignContent
	    }" class="flex-container">
				<flex-item class="flex-item" *ngFor="#item of flexContainer.list" [item]="item" [ngStyle]="{
		    'width': item.styles.width,
		    'height': item.styles.height,
				'flex-grow': item.styles.flexGrow,
				'flex-shrink': item.styles.flexShrink,
				'flex-order': item.styles.flexOrder,
				'flex-basis': item.styles.flexBasis,
				'align-self': item.styles.alignSelf
	    }"></flex-item>
			</div>
    <aside class="sidebar">
			<tour-panel id="message-box" class="message-box"></tour-panel>
			<admin-panel class="control-panel"></admin-panel>
			<!--<code-panel class="code-box" list="flexContainer.list"></code-panel>-->
		</aside>
	`,
	directives: [NgFor, FlexItemCmp, NgStyle,
		TourPanelCmp, AdminPanelCmp, CodePanelCmp],
	providers: [CSSDefaults, FlexContainer],
	pipes: [PropsToSelectors]
})

export class FlexContainerCmp {
	constructor(private flexContainer: FlexContainer) {}

}

//
//	function goRight () {
//	var cur = parseInt(getComputedStyle(el).left);
//
//	setTimeout(function () {
//		if (cur < end) {
//			el.style.left = cur + 4 + 'px';
//			goRight();
//		}
//	}, 5);
//}
//}