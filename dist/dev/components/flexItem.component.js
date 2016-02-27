var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var common_1 = require('angular2/common');
var core_1 = require('angular2/core');
var FlexContainer_1 = require('../services/FlexContainer');
var FlexItem_1 = require('../models/FlexItem');
var pipes_1 = require('../utils/pipes');
var FlexItemCmp = (function () {
    function FlexItemCmp(flexContainer) {
        this.flexContainer = flexContainer;
        this.viewMode = true;
        this.editMode = false;
        this.isFixed = true;
        this.isFlexy = false;
    }
    FlexItemCmp.prototype.removeSelf = function () {
        this.flexContainer.list.pop(this.idx);
    };
    FlexItemCmp.prototype.toggleViewMode = function () {
        this.viewMode = !this.viewMode;
        this.editMode = !this.editMode;
    };
    FlexItemCmp.prototype.toggleState = function () {
        this.item.settings.state = this.item.settings.state === 'fixed' ? 'flexy' : 'fixed';
    };
    FlexItemCmp.prototype.makeFixedWidth = function () {
        this.toggleState();
        this.item.makeMeFixed();
    };
    FlexItemCmp.prototype.makeFlexyWidth = function () {
        this.toggleState();
        this.item.makeMeFlexy();
    };
    FlexItemCmp.prototype.getItemIndex = function () {
        var idx = this.idx = this.flexContainer.list.indexOf(this.item) + 1;
        return idx;
    };
    FlexItemCmp.prototype.typeSwitcherFontSize = function (type) {
        var base = 12;
        if (type !== this.item.settings.state) {
            base *= 2;
        }
        return base + 'px';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', FlexItem_1.FlexItem)
    ], FlexItemCmp.prototype, "item", void 0);
    FlexItemCmp = __decorate([
        core_1.Component({
            selector: 'flex-item',
            template: "\n      <a href=\"#\" class=\"fi-destroy-btn\" (click)=\"removeSelf()\"><i class=\"fa fa-times\"></i></a>\n      <a href=\"#\" class=\"fi-settings-btn\" (click)=\"toggleViewMode()\"><!--, visible:tallEnough-->\n        <i class=\"fa fa-cog\"></i>\n      </a>\n      <span class=\"fi-index\">{{getItemIndex()}}</span>\n      <div class=\"fi-content\"  *ngIf=\"viewMode\">\n        <p>{{item.lorem}}</p>\n      </div>\n      <div class=\"fi-options\" *ngIf=\"editMode\">\n        <span class=\"fi-o-title\">\n          <a (click)=\"makeFixedWidth()\" [style.font-size]=\"typeSwitcherFontSize('fixed')\">fixed</a> or\n          <a (click)=\"makeFlexyWidth()\" [style.font-size]=\"typeSwitcherFontSize('flexy')\">flexy</a> width?\n        </span>\n        <div *ngIf=\"item.settings.state == 'fixed'\" class=\"fi-options-fixed\">\n          <label>width:\n            <input type=\"text\" [(ngModel)]=\"item.styles.width\" (change)=\"logMe($event)\">\n          </label>\n          <label>height:\n            <input type=\"text\" [(ngModel)]=\"item.styles.height\">\n          </label>\n        </div>\n        <div *ngIf=\"item.settings.state == 'flexy'\" class=\"fi-options-flexy\">\n          <label>flex-grow:\n            <input type=\"text\" [(ngModel)]=\"item.styles.flexGrow\">\n          </label>\n          <label for=\"\">flex-shrink:\n            <input type=\"text\" [(ngModel)]=\"item.styles.flexShrink\">\n          </label>\n          <label for=\"\">flex-basis:\n            <input type=\"text\" [(ngModel)]=\"item.styles.flexBasis\">\n          </label>\n        </div>\n      </div>\n\t",
            directives: [common_1.NgIf, common_1.NgStyle, common_1.NgModel],
            pipes: [pipes_1.PropsToSelectors]
        }), 
        __metadata('design:paramtypes', [FlexContainer_1.FlexContainer])
    ], FlexItemCmp);
    return FlexItemCmp;
})();
exports.FlexItemCmp = FlexItemCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmxleEl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkZsZXhJdGVtQ21wIiwiRmxleEl0ZW1DbXAuY29uc3RydWN0b3IiLCJGbGV4SXRlbUNtcC5yZW1vdmVTZWxmIiwiRmxleEl0ZW1DbXAudG9nZ2xlVmlld01vZGUiLCJGbGV4SXRlbUNtcC50b2dnbGVTdGF0ZSIsIkZsZXhJdGVtQ21wLm1ha2VGaXhlZFdpZHRoIiwiRmxleEl0ZW1DbXAubWFrZUZsZXh5V2lkdGgiLCJGbGV4SXRlbUNtcC5nZXRJdGVtSW5kZXgiLCJGbGV4SXRlbUNtcC50eXBlU3dpdGNoZXJGb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLDhCQUE0QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3hELHlCQUF1QixvQkFBb0IsQ0FBQyxDQUFBO0FBQzVDLHNCQUErQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRWhEO0lBZ0RDQSxxQkFBb0JBLGFBQTRCQTtRQUE1QkMsa0JBQWFBLEdBQWJBLGFBQWFBLENBQWVBO1FBSnpDQSxhQUFRQSxHQUFZQSxJQUFJQSxDQUFDQTtRQUN6QkEsYUFBUUEsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFDMUJBLFlBQU9BLEdBQVlBLElBQUlBLENBQUNBO1FBQ3hCQSxZQUFPQSxHQUFZQSxLQUFLQSxDQUFDQTtJQUNtQkEsQ0FBQ0E7SUFFcERELGdDQUFVQSxHQUFWQTtRQUNDRSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFFREYsb0NBQWNBLEdBQWRBO1FBQ0NHLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO1FBQy9CQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtJQUNoQ0EsQ0FBQ0E7SUFFREgsaUNBQVdBLEdBQVhBO1FBQ0NJLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLEtBQUtBLE9BQU9BLEdBQUlBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBO0lBQ3RGQSxDQUFDQTtJQUVESixvQ0FBY0EsR0FBZEE7UUFDQ0ssSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUNETCxvQ0FBY0EsR0FBZEE7UUFDQ00sSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUNETixrQ0FBWUEsR0FBWkE7UUFFQ08sSUFBSUEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDcEVBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO0lBQ1pBLENBQUNBO0lBRURQLDBDQUFvQkEsR0FBcEJBLFVBQXFCQSxJQUFJQTtRQUN4QlEsSUFBSUEsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDZEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsS0FBS0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkNBLElBQUlBLElBQUdBLENBQUNBLENBQUVBO1FBQ1hBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO0lBQ3BCQSxDQUFDQTtJQXpDRFI7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQUNBLDZCQUFJQSxVQUFXQTtJQTFDekJBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxXQUFXQTtZQUNyQkEsUUFBUUEsRUFBRUEsb2tEQWtDVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsYUFBSUEsRUFBRUEsZ0JBQU9BLEVBQUVBLGdCQUFPQSxDQUFDQTtZQUNwQ0EsS0FBS0EsRUFBRUEsQ0FBQ0Esd0JBQWdCQSxDQUFDQTtTQUN6QkEsQ0FBQ0E7O29CQThDREE7SUFBREEsa0JBQUNBO0FBQURBLENBckZBLEFBcUZDQSxJQUFBO0FBNUNZLG1CQUFXLGNBNEN2QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZmxleEl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ1N0eWxlLCBOZ01vZGVsLCBOZ0lmfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtJbnB1dCwgQ29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RmxleENvbnRhaW5lcn0gZnJvbSAnLi4vc2VydmljZXMvRmxleENvbnRhaW5lcic7XG5pbXBvcnQge0ZsZXhJdGVtfSBmcm9tICcuLi9tb2RlbHMvRmxleEl0ZW0nO1xuaW1wb3J0IHtQcm9wc1RvU2VsZWN0b3JzfSBmcm9tICcuLi91dGlscy9waXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2ZsZXgtaXRlbScsXG5cdHRlbXBsYXRlOiBgXG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZmktZGVzdHJveS1idG5cIiAoY2xpY2spPVwicmVtb3ZlU2VsZigpXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT48L2E+XG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZmktc2V0dGluZ3MtYnRuXCIgKGNsaWNrKT1cInRvZ2dsZVZpZXdNb2RlKClcIj48IS0tLCB2aXNpYmxlOnRhbGxFbm91Z2gtLT5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIj48L2k+XG4gICAgICA8L2E+XG4gICAgICA8c3BhbiBjbGFzcz1cImZpLWluZGV4XCI+e3tnZXRJdGVtSW5kZXgoKX19PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cImZpLWNvbnRlbnRcIiAgKm5nSWY9XCJ2aWV3TW9kZVwiPlxuICAgICAgICA8cD57e2l0ZW0ubG9yZW19fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZpLW9wdGlvbnNcIiAqbmdJZj1cImVkaXRNb2RlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmktby10aXRsZVwiPlxuICAgICAgICAgIDxhIChjbGljayk9XCJtYWtlRml4ZWRXaWR0aCgpXCIgW3N0eWxlLmZvbnQtc2l6ZV09XCJ0eXBlU3dpdGNoZXJGb250U2l6ZSgnZml4ZWQnKVwiPmZpeGVkPC9hPiBvclxuICAgICAgICAgIDxhIChjbGljayk9XCJtYWtlRmxleHlXaWR0aCgpXCIgW3N0eWxlLmZvbnQtc2l6ZV09XCJ0eXBlU3dpdGNoZXJGb250U2l6ZSgnZmxleHknKVwiPmZsZXh5PC9hPiB3aWR0aD9cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5zZXR0aW5ncy5zdGF0ZSA9PSAnZml4ZWQnXCIgY2xhc3M9XCJmaS1vcHRpb25zLWZpeGVkXCI+XG4gICAgICAgICAgPGxhYmVsPndpZHRoOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJpdGVtLnN0eWxlcy53aWR0aFwiIChjaGFuZ2UpPVwibG9nTWUoJGV2ZW50KVwiPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPmhlaWdodDpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiaXRlbS5zdHlsZXMuaGVpZ2h0XCI+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnNldHRpbmdzLnN0YXRlID09ICdmbGV4eSdcIiBjbGFzcz1cImZpLW9wdGlvbnMtZmxleHlcIj5cbiAgICAgICAgICA8bGFiZWw+ZmxleC1ncm93OlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJpdGVtLnN0eWxlcy5mbGV4R3Jvd1wiPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPmZsZXgtc2hyaW5rOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJpdGVtLnN0eWxlcy5mbGV4U2hyaW5rXCI+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+ZmxleC1iYXNpczpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiaXRlbS5zdHlsZXMuZmxleEJhc2lzXCI+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblx0YCxcblx0ZGlyZWN0aXZlczogW05nSWYsIE5nU3R5bGUsIE5nTW9kZWxdLFxuXHRwaXBlczogW1Byb3BzVG9TZWxlY3RvcnNdXG59KVxuXG5leHBvcnQgY2xhc3MgRmxleEl0ZW1DbXAge1xuXHRASW5wdXQoKSBpdGVtOiBGbGV4SXRlbTtcblx0cHVibGljIGlkeDogbnVtYmVyO1xuXHRwdWJsaWMgdmlld01vZGU6IEJvb2xlYW4gPSB0cnVlO1xuXHRwdWJsaWMgZWRpdE1vZGU6IEJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIGlzRml4ZWQ6IEJvb2xlYW4gPSB0cnVlO1xuXHRwdWJsaWMgaXNGbGV4eTogQm9vbGVhbiA9IGZhbHNlO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZsZXhDb250YWluZXI6IEZsZXhDb250YWluZXIpIHt9XG5cblx0cmVtb3ZlU2VsZigpIHtcblx0XHR0aGlzLmZsZXhDb250YWluZXIubGlzdC5wb3AodGhpcy5pZHgpO1xuXHR9XG5cblx0dG9nZ2xlVmlld01vZGUoKSB7XG5cdFx0dGhpcy52aWV3TW9kZSA9ICF0aGlzLnZpZXdNb2RlO1xuXHRcdHRoaXMuZWRpdE1vZGUgPSAhdGhpcy5lZGl0TW9kZTtcblx0fVxuXG5cdHRvZ2dsZVN0YXRlKCkge1xuXHRcdHRoaXMuaXRlbS5zZXR0aW5ncy5zdGF0ZSA9IHRoaXMuaXRlbS5zZXR0aW5ncy5zdGF0ZSA9PT0gJ2ZpeGVkJyA/ICAnZmxleHknIDogJ2ZpeGVkJztcblx0fVxuXG5cdG1ha2VGaXhlZFdpZHRoKCkge1xuXHRcdHRoaXMudG9nZ2xlU3RhdGUoKTtcblx0XHR0aGlzLml0ZW0ubWFrZU1lRml4ZWQoKTtcblx0fVxuXHRtYWtlRmxleHlXaWR0aCgpIHtcblx0XHR0aGlzLnRvZ2dsZVN0YXRlKCk7XG5cdFx0dGhpcy5pdGVtLm1ha2VNZUZsZXh5KCk7XG5cdH1cblx0Z2V0SXRlbUluZGV4KCkge1xuXHRcdC8vIHRoaXMgc2hvdWxkIHByb2JhYmx5IGJlIGhhbmRsZWQgYnkgdGhlIGZsZXhDb250YWluZXIgY2xhc3Ncblx0XHRsZXQgaWR4ID0gdGhpcy5pZHggPSB0aGlzLmZsZXhDb250YWluZXIubGlzdC5pbmRleE9mKHRoaXMuaXRlbSkgKyAxO1xuXHRcdHJldHVybiBpZHg7XG5cdH1cblxuXHR0eXBlU3dpdGNoZXJGb250U2l6ZSh0eXBlKSB7XG5cdFx0dmFyIGJhc2UgPSAxMjtcblx0XHRpZiAodHlwZSAhPT0gdGhpcy5pdGVtLnNldHRpbmdzLnN0YXRlKSB7XG5cdFx0XHRiYXNlICo9MiA7XG5cdFx0fVxuXHRcdHJldHVybiBiYXNlICsgJ3B4Jztcblx0fVxuXG59XG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=