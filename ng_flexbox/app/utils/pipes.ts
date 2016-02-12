import {Pipe, PipeTransform} from 'angular2/core';
import {CssStyleFlexGenericStyles} from './interfaces';

@Pipe({name:'PropsToSelectors'})
export class PropsToSelectors implements PipeTransform {
	transform(styles:CssStyleFlexGenericStyles) {
		var kebabStyles = {};
		_.forIn(styles, function (styleValue, styleProp) {
			let convertedKey = _.kebabCase(styleProp);
			kebabStyles[convertedKey] = styleValue;
		});
		return kebabStyles;
	}
}

@Pipe({ name: 'derp' })
export class DerpPipe {
	transform (value, args) {
		return Array.from(value);
	}
}

@Pipe({name: 'IndexDisplay'})
export class IndexDisplay {
	transform(value) {
		return value + 1;
	}
}

//@Pipe({name: 'escapeHtml', pure: false})
//export class EscapeHtmlPipe implements PipeTransform {
//	transform(value: any, args: any[] = []) {
//		// Escape 'value' and return it
//	}
//}