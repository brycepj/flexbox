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
var FlexItem_1 = require('../models/FlexItem');
var pipes_1 = require('../utils/pipes');
var common_2 = require('angular2/common');
var FlexContainer_1 = require('../services/FlexContainer');
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
            directives: [common_1.NgIf, common_2.NgStyle, common_2.NgModel],
            pipes: [pipes_1.PropsToSelectors]
        }), 
        __metadata('design:paramtypes', [FlexContainer_1.FlexContainer])
    ], FlexItemCmp);
    return FlexItemCmp;
})();
exports.FlexItemCmp = FlexItemCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmxleEl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkZsZXhJdGVtQ21wIiwiRmxleEl0ZW1DbXAuY29uc3RydWN0b3IiLCJGbGV4SXRlbUNtcC5yZW1vdmVTZWxmIiwiRmxleEl0ZW1DbXAudG9nZ2xlVmlld01vZGUiLCJGbGV4SXRlbUNtcC50b2dnbGVTdGF0ZSIsIkZsZXhJdGVtQ21wLm1ha2VGaXhlZFdpZHRoIiwiRmxleEl0ZW1DbXAubWFrZUZsZXh5V2lkdGgiLCJGbGV4SXRlbUNtcC5nZXRJdGVtSW5kZXgiLCJGbGV4SXRlbUNtcC50eXBlU3dpdGNoZXJGb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsdUJBQW1CLGlCQUFpQixDQUFDLENBQUE7QUFDckMscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHlCQUF1QixvQkFBb0IsQ0FBQyxDQUFBO0FBQzVDLHNCQUErQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2hELHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELDhCQUE0QiwyQkFBMkIsQ0FBQyxDQUFBO0FBRXhEO0lBZ0RDQSxxQkFBb0JBLGFBQTRCQTtRQUE1QkMsa0JBQWFBLEdBQWJBLGFBQWFBLENBQWVBO1FBSnpDQSxhQUFRQSxHQUFZQSxJQUFJQSxDQUFDQTtRQUN6QkEsYUFBUUEsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFDMUJBLFlBQU9BLEdBQVlBLElBQUlBLENBQUNBO1FBQ3hCQSxZQUFPQSxHQUFZQSxLQUFLQSxDQUFDQTtJQUNtQkEsQ0FBQ0E7SUFFcERELGdDQUFVQSxHQUFWQTtRQUNDRSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFFREYsb0NBQWNBLEdBQWRBO1FBQ0NHLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO1FBQy9CQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtJQUNoQ0EsQ0FBQ0E7SUFFREgsaUNBQVdBLEdBQVhBO1FBQ0NJLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLEtBQUtBLE9BQU9BLEdBQUlBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBO0lBQ3RGQSxDQUFDQTtJQUVESixvQ0FBY0EsR0FBZEE7UUFDQ0ssSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUNETCxvQ0FBY0EsR0FBZEE7UUFDQ00sSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUNETixrQ0FBWUEsR0FBWkE7UUFFQ08sSUFBSUEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDcEVBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO0lBQ1pBLENBQUNBO0lBRURQLDBDQUFvQkEsR0FBcEJBLFVBQXFCQSxJQUFJQTtRQUN4QlEsSUFBSUEsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDZEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsS0FBS0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkNBLElBQUlBLElBQUdBLENBQUNBLENBQUVBO1FBQ1hBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO0lBQ3BCQSxDQUFDQTtJQXpDRFI7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQUNBLDZCQUFJQSxVQUFXQTtJQTFDekJBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxXQUFXQTtZQUNyQkEsUUFBUUEsRUFBRUEsb2tEQWtDVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsYUFBSUEsRUFBRUEsZ0JBQU9BLEVBQUVBLGdCQUFPQSxDQUFDQTtZQUNwQ0EsS0FBS0EsRUFBRUEsQ0FBQ0Esd0JBQWdCQSxDQUFDQTtTQUN6QkEsQ0FBQ0E7O29CQThDREE7SUFBREEsa0JBQUNBO0FBQURBLENBckZBLEFBcUZDQSxJQUFBO0FBNUNZLG1CQUFXLGNBNEN2QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZmxleEl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpcyB3aGVyZSB5b3Ugd3JpdGUgVUkgbG9naWMgYW5kIG1ldGhvZHMgZm9yIEZsZXhJdGVtXG5pbXBvcnQge05nSWZ9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0lucHV0LCBDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtGbGV4SXRlbX0gZnJvbSAnLi4vbW9kZWxzL0ZsZXhJdGVtJztcbmltcG9ydCB7UHJvcHNUb1NlbGVjdG9yc30gZnJvbSAnLi4vdXRpbHMvcGlwZXMnO1xuaW1wb3J0IHtOZ1N0eWxlLCBOZ01vZGVsfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtGbGV4Q29udGFpbmVyfSBmcm9tICcuLi9zZXJ2aWNlcy9GbGV4Q29udGFpbmVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZmxleC1pdGVtJyxcblx0dGVtcGxhdGU6IGBcbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJmaS1kZXN0cm95LWJ0blwiIChjbGljayk9XCJyZW1vdmVTZWxmKClcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPjwvYT5cbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJmaS1zZXR0aW5ncy1idG5cIiAoY2xpY2spPVwidG9nZ2xlVmlld01vZGUoKVwiPjwhLS0sIHZpc2libGU6dGFsbEVub3VnaC0tPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT5cbiAgICAgIDwvYT5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmktaW5kZXhcIj57e2dldEl0ZW1JbmRleCgpfX08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmktY29udGVudFwiICAqbmdJZj1cInZpZXdNb2RlXCI+XG4gICAgICAgIDxwPnt7aXRlbS5sb3JlbX19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmktb3B0aW9uc1wiICpuZ0lmPVwiZWRpdE1vZGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmaS1vLXRpdGxlXCI+XG4gICAgICAgICAgPGEgKGNsaWNrKT1cIm1ha2VGaXhlZFdpZHRoKClcIiBbc3R5bGUuZm9udC1zaXplXT1cInR5cGVTd2l0Y2hlckZvbnRTaXplKCdmaXhlZCcpXCI+Zml4ZWQ8L2E+IG9yXG4gICAgICAgICAgPGEgKGNsaWNrKT1cIm1ha2VGbGV4eVdpZHRoKClcIiBbc3R5bGUuZm9udC1zaXplXT1cInR5cGVTd2l0Y2hlckZvbnRTaXplKCdmbGV4eScpXCI+ZmxleHk8L2E+IHdpZHRoP1xuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnNldHRpbmdzLnN0YXRlID09ICdmaXhlZCdcIiBjbGFzcz1cImZpLW9wdGlvbnMtZml4ZWRcIj5cbiAgICAgICAgICA8bGFiZWw+d2lkdGg6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIml0ZW0uc3R5bGVzLndpZHRoXCIgKGNoYW5nZSk9XCJsb2dNZSgkZXZlbnQpXCI+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+aGVpZ2h0OlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJpdGVtLnN0eWxlcy5oZWlnaHRcIj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0uc2V0dGluZ3Muc3RhdGUgPT0gJ2ZsZXh5J1wiIGNsYXNzPVwiZmktb3B0aW9ucy1mbGV4eVwiPlxuICAgICAgICAgIDxsYWJlbD5mbGV4LWdyb3c6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIml0ZW0uc3R5bGVzLmZsZXhHcm93XCI+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+ZmxleC1zaHJpbms6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIml0ZW0uc3R5bGVzLmZsZXhTaHJpbmtcIj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5mbGV4LWJhc2lzOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJpdGVtLnN0eWxlcy5mbGV4QmFzaXNcIj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXHRgLFxuXHRkaXJlY3RpdmVzOiBbTmdJZiwgTmdTdHlsZSwgTmdNb2RlbF0sXG5cdHBpcGVzOiBbUHJvcHNUb1NlbGVjdG9yc11cbn0pXG5cbmV4cG9ydCBjbGFzcyBGbGV4SXRlbUNtcCB7XG5cdEBJbnB1dCgpIGl0ZW06IEZsZXhJdGVtO1xuXHRwdWJsaWMgaWR4OiBudW1iZXI7XG5cdHB1YmxpYyB2aWV3TW9kZTogQm9vbGVhbiA9IHRydWU7XG5cdHB1YmxpYyBlZGl0TW9kZTogQm9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWMgaXNGaXhlZDogQm9vbGVhbiA9IHRydWU7XG5cdHB1YmxpYyBpc0ZsZXh5OiBCb29sZWFuID0gZmFsc2U7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZmxleENvbnRhaW5lcjogRmxleENvbnRhaW5lcikge31cblxuXHRyZW1vdmVTZWxmKCkge1xuXHRcdHRoaXMuZmxleENvbnRhaW5lci5saXN0LnBvcCh0aGlzLmlkeCk7XG5cdH1cblxuXHR0b2dnbGVWaWV3TW9kZSgpIHtcblx0XHR0aGlzLnZpZXdNb2RlID0gIXRoaXMudmlld01vZGU7XG5cdFx0dGhpcy5lZGl0TW9kZSA9ICF0aGlzLmVkaXRNb2RlO1xuXHR9XG5cblx0dG9nZ2xlU3RhdGUoKSB7XG5cdFx0dGhpcy5pdGVtLnNldHRpbmdzLnN0YXRlID0gdGhpcy5pdGVtLnNldHRpbmdzLnN0YXRlID09PSAnZml4ZWQnID8gICdmbGV4eScgOiAnZml4ZWQnO1xuXHR9XG5cblx0bWFrZUZpeGVkV2lkdGgoKSB7XG5cdFx0dGhpcy50b2dnbGVTdGF0ZSgpO1xuXHRcdHRoaXMuaXRlbS5tYWtlTWVGaXhlZCgpO1xuXHR9XG5cdG1ha2VGbGV4eVdpZHRoKCkge1xuXHRcdHRoaXMudG9nZ2xlU3RhdGUoKTtcblx0XHR0aGlzLml0ZW0ubWFrZU1lRmxleHkoKTtcblx0fVxuXHRnZXRJdGVtSW5kZXgoKSB7XG5cdFx0Ly8gdGhpcyBzaG91bGQgcHJvYmFibHkgYmUgaGFuZGxlZCBieSB0aGUgZmxleENvbnRhaW5lciBjbGFzc1xuXHRcdGxldCBpZHggPSB0aGlzLmlkeCA9IHRoaXMuZmxleENvbnRhaW5lci5saXN0LmluZGV4T2YodGhpcy5pdGVtKSArIDE7XG5cdFx0cmV0dXJuIGlkeDtcblx0fVxuXG5cdHR5cGVTd2l0Y2hlckZvbnRTaXplKHR5cGUpIHtcblx0XHR2YXIgYmFzZSA9IDEyO1xuXHRcdGlmICh0eXBlICE9PSB0aGlzLml0ZW0uc2V0dGluZ3Muc3RhdGUpIHtcblx0XHRcdGJhc2UgKj0yIDtcblx0XHR9XG5cdFx0cmV0dXJuIGJhc2UgKyAncHgnO1xuXHR9XG5cbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==