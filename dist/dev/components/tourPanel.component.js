var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var tourData_1 = require('../services/tourData');
var pipes_1 = require('../utils/pipes');
var FlexContainer_1 = require('../services/FlexContainer');
var PatternBuilder_1 = require('../services/PatternBuilder');
var TourPanelCmp = (function () {
    function TourPanelCmp(tourData, flexContainer, build) {
        this.tourData = tourData;
        this.flexContainer = flexContainer;
        this.build = build;
        var curr = this.currentIdx = 0;
        this.lastIdx = this.tourData.data.length - 1;
        this.currentMessage = tourData.data[curr];
    }
    TourPanelCmp.prototype.tourNext = function () {
        var curr = this.currentIdx;
        if (curr !== this.lastIdx) {
            curr = this.currentIdx = this.currentIdx + 1;
            this.currentMessage = this.tourData.data[curr];
        }
    };
    TourPanelCmp.prototype.tourPrevious = function () {
        var curr = this.currentIdx;
        if (curr !== 0) {
            curr = this.currentIdx = this.currentIdx - 1;
            this.currentMessage = this.tourData.data[curr];
        }
    };
    TourPanelCmp.prototype.takeAction = function (action, index) {
        var buttons = this.currentMessage.buttons;
        switch (action) {
            case 'url':
                this.openInNewTab(buttons[index].url);
                break;
            case 'resize':
                this.flexContainer.resizeContainer();
                break;
            default:
                this.buildPattern(action);
        }
    };
    TourPanelCmp.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    TourPanelCmp.prototype.buildPattern = function (pattern) {
        this.flexContainer.list = [];
        switch (pattern) {
            case 'menu':
                this.build.menu();
                break;
            case 'holyGrail':
                this.build.website();
                break;
            case 'grid':
                break;
            default:
                throw new Error('Bad template');
        }
        console.log('building template');
    };
    TourPanelCmp = __decorate([
        core_1.Component({
            selector: 'tour-panel',
            template: "\n    <div>\n      <span class=\"mb-title\">tour</span>\n      <span class=\"mb-progress\">{{currentIdx | IndexDisplay }} / {{lastIdx | IndexDisplay}}</span>\n      <p class=\"mb-content\">{{currentMessage.text}}</p>\n      <div class=\"mb-actions\" *ngIf=\"currentMessage.buttons\">\n\t      <a *ngFor=\"#btn of currentMessage.buttons #i=index\"\n\t        class=\"mb-action\" (click)=\"takeAction(btn.action, i)\">{{btn.text}}</a>\n      </div>\n\n      <nav class=\"mb-nav\">\n        <a (click)=\"tourPrevious()\"><i class=\"fa fa-chevron-left\"></i></a>\n        <a (click)=\"tourNext()\"><i class=\"fa fa-chevron-right\"></i></a>\n      </nav>\n    </div>\n\t",
            pipes: [pipes_1.IndexDisplay],
            providers: [tourData_1.TourData, PatternBuilder_1.PatternBuilder],
            directives: [common_1.NgFor, common_1.NgIf]
        }), 
        __metadata('design:paramtypes', [tourData_1.TourData, FlexContainer_1.FlexContainer, PatternBuilder_1.PatternBuilder])
    ], TourPanelCmp);
    return TourPanelCmp;
})();
exports.TourPanelCmp = TourPanelCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG91clBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJUb3VyUGFuZWxDbXAiLCJUb3VyUGFuZWxDbXAuY29uc3RydWN0b3IiLCJUb3VyUGFuZWxDbXAudG91ck5leHQiLCJUb3VyUGFuZWxDbXAudG91clByZXZpb3VzIiwiVG91clBhbmVsQ21wLnRha2VBY3Rpb24iLCJUb3VyUGFuZWxDbXAub3BlbkluTmV3VGFiIiwiVG91clBhbmVsQ21wLmJ1aWxkUGF0dGVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHlCQUE2QyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3BFLHNCQUEyQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzVDLDhCQUE0QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3hELCtCQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBRTFEO0lBNEJDQSxzQkFBb0JBLFFBQWtCQSxFQUFVQSxhQUE0QkEsRUFBVUEsS0FBb0JBO1FBQXRGQyxhQUFRQSxHQUFSQSxRQUFRQSxDQUFVQTtRQUFVQSxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBZUE7UUFBVUEsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBZUE7UUFDekdBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLENBQUNBLENBQUNBO1FBQy9CQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFFQSxDQUFDQSxDQUFDQTtRQUM1Q0EsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDM0NBLENBQUNBO0lBRURELCtCQUFRQSxHQUFSQTtRQUNDRSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQTtRQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsS0FBS0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLENBQUNBLENBQUNBO1lBQzdDQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNoREEsQ0FBQ0E7SUFDRkEsQ0FBQ0E7SUFFREYsbUNBQVlBLEdBQVpBO1FBQ0NHLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBO1FBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNoQkEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDN0NBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ2hEQSxDQUFDQTtJQUNGQSxDQUFDQTtJQUVESCxpQ0FBVUEsR0FBVkEsVUFBV0EsTUFBTUEsRUFBRUEsS0FBS0E7UUFDdkJJLElBQUlBLE9BQU9BLEdBQVdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLE9BQU9BLENBQUNBO1FBQ2xEQSxNQUFNQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNoQkEsS0FBS0EsS0FBS0E7Z0JBQ1RBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO2dCQUN0Q0EsS0FBS0EsQ0FBQ0E7WUFDUEEsS0FBS0EsUUFBUUE7Z0JBQ1pBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO2dCQUNyQ0EsS0FBS0EsQ0FBQ0E7WUFDUEE7Z0JBQ0NBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQzVCQSxDQUFDQTtJQUVGQSxDQUFDQTtJQUVESixtQ0FBWUEsR0FBWkEsVUFBYUEsR0FBR0E7UUFDZkssSUFBSUEsR0FBR0EsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDckNBLEdBQUdBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO0lBQ2JBLENBQUNBO0lBRURMLG1DQUFZQSxHQUFaQSxVQUFhQSxPQUFPQTtRQUNuQk0sSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFFN0JBLE1BQU1BLENBQUFBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO1lBQ2hCQSxLQUFLQSxNQUFNQTtnQkFDVkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7Z0JBQ2xCQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxXQUFXQTtnQkFDZkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0JBQ3JCQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxNQUFNQTtnQkFFVkEsS0FBS0EsQ0FBQ0E7WUFDUEE7Z0JBQ0NBLE1BQU1BLElBQUlBLEtBQUtBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO1FBQ2xDQSxDQUFDQTtRQUNEQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBO0lBQ2xDQSxDQUFDQTtJQXZGRk47UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLFlBQVlBO1lBQ3RCQSxRQUFRQSxFQUFFQSwycEJBZVRBO1lBQ0RBLEtBQUtBLEVBQUVBLENBQUNBLG9CQUFZQSxDQUFDQTtZQUNyQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsbUJBQVFBLEVBQUVBLCtCQUFjQSxDQUFDQTtZQUNyQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsY0FBS0EsRUFBRUEsYUFBSUEsQ0FBQ0E7U0FDekJBLENBQUNBOztxQkFvRURBO0lBQURBLG1CQUFDQTtBQUFEQSxDQXpGQSxBQXlGQ0EsSUFBQTtBQWxFWSxvQkFBWSxlQWtFeEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3RvdXJQYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nRm9yLCBOZ0lmfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtUb3VyRGF0YSwgVG91ck1lc3NhZ2UsIEJ1dHRvbnN9IGZyb20gJy4uL3NlcnZpY2VzL3RvdXJEYXRhJztcbmltcG9ydCB7SW5kZXhEaXNwbGF5fSBmcm9tICcuLi91dGlscy9waXBlcyc7XG5pbXBvcnQge0ZsZXhDb250YWluZXJ9IGZyb20gJy4uL3NlcnZpY2VzL0ZsZXhDb250YWluZXInO1xuaW1wb3J0IHtQYXR0ZXJuQnVpbGRlcn0gZnJvbSAnLi4vc2VydmljZXMvUGF0dGVybkJ1aWxkZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd0b3VyLXBhbmVsJyxcblx0dGVtcGxhdGU6IGBcbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJtYi10aXRsZVwiPnRvdXI8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cIm1iLXByb2dyZXNzXCI+e3tjdXJyZW50SWR4IHwgSW5kZXhEaXNwbGF5IH19IC8ge3tsYXN0SWR4IHwgSW5kZXhEaXNwbGF5fX08L3NwYW4+XG4gICAgICA8cCBjbGFzcz1cIm1iLWNvbnRlbnRcIj57e2N1cnJlbnRNZXNzYWdlLnRleHR9fTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYi1hY3Rpb25zXCIgKm5nSWY9XCJjdXJyZW50TWVzc2FnZS5idXR0b25zXCI+XG5cdCAgICAgIDxhICpuZ0Zvcj1cIiNidG4gb2YgY3VycmVudE1lc3NhZ2UuYnV0dG9ucyAjaT1pbmRleFwiXG5cdCAgICAgICAgY2xhc3M9XCJtYi1hY3Rpb25cIiAoY2xpY2spPVwidGFrZUFjdGlvbihidG4uYWN0aW9uLCBpKVwiPnt7YnRuLnRleHR9fTwvYT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8bmF2IGNsYXNzPVwibWItbmF2XCI+XG4gICAgICAgIDxhIChjbGljayk9XCJ0b3VyUHJldmlvdXMoKVwiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYT5cbiAgICAgICAgPGEgKGNsaWNrKT1cInRvdXJOZXh0KClcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9hPlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG5cdGAsXG5cdHBpcGVzOiBbSW5kZXhEaXNwbGF5XSxcblx0cHJvdmlkZXJzOiBbVG91ckRhdGEsIFBhdHRlcm5CdWlsZGVyXSxcblx0ZGlyZWN0aXZlczogW05nRm9yLCBOZ0lmXVxufSlcblxuZXhwb3J0IGNsYXNzIFRvdXJQYW5lbENtcCB7XG5cdHB1YmxpYyBjdXJyZW50SWR4OiBudW1iZXI7XG5cdHB1YmxpYyBsYXN0SWR4OiBudW1iZXI7XG5cdHB1YmxpYyBjdXJyZW50TWVzc2FnZTogVG91ck1lc3NhZ2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSB0b3VyRGF0YTogVG91ckRhdGEsIHByaXZhdGUgZmxleENvbnRhaW5lcjogRmxleENvbnRhaW5lciwgcHJpdmF0ZSBidWlsZDpQYXR0ZXJuQnVpbGRlcikge1xuXHRcdGxldCBjdXJyID0gdGhpcy5jdXJyZW50SWR4ID0gMDtcblx0XHR0aGlzLmxhc3RJZHggPSB0aGlzLnRvdXJEYXRhLmRhdGEubGVuZ3RoIC0xO1xuXHRcdHRoaXMuY3VycmVudE1lc3NhZ2UgPSB0b3VyRGF0YS5kYXRhW2N1cnJdO1xuXHR9XG5cblx0dG91ck5leHQoKSB7XG5cdFx0bGV0IGN1cnIgPSB0aGlzLmN1cnJlbnRJZHg7XG5cdFx0aWYgKGN1cnIgIT09IHRoaXMubGFzdElkeCkge1xuXHRcdFx0Y3VyciA9IHRoaXMuY3VycmVudElkeCA9IHRoaXMuY3VycmVudElkeCArIDE7XG5cdFx0XHR0aGlzLmN1cnJlbnRNZXNzYWdlID0gdGhpcy50b3VyRGF0YS5kYXRhW2N1cnJdO1xuXHRcdH1cblx0fVxuXG5cdHRvdXJQcmV2aW91cygpIHtcblx0XHRsZXQgY3VyciA9IHRoaXMuY3VycmVudElkeDtcblx0XHRpZiAoY3VyciAhPT0gMCkge1xuXHRcdFx0Y3VyciA9IHRoaXMuY3VycmVudElkeCA9IHRoaXMuY3VycmVudElkeCAtIDE7XG5cdFx0XHR0aGlzLmN1cnJlbnRNZXNzYWdlID0gdGhpcy50b3VyRGF0YS5kYXRhW2N1cnJdO1xuXHRcdH1cblx0fVxuXG5cdHRha2VBY3Rpb24oYWN0aW9uLCBpbmRleCkge1xuXHRcdGxldCBidXR0b25zOkJ1dHRvbnMgPSB0aGlzLmN1cnJlbnRNZXNzYWdlLmJ1dHRvbnM7XG5cdFx0c3dpdGNoIChhY3Rpb24pIHtcblx0XHRcdGNhc2UgJ3VybCc6XG5cdFx0XHRcdHRoaXMub3BlbkluTmV3VGFiKGJ1dHRvbnNbaW5kZXhdLnVybCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmVzaXplJzpcblx0XHRcdFx0dGhpcy5mbGV4Q29udGFpbmVyLnJlc2l6ZUNvbnRhaW5lcigpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRoaXMuYnVpbGRQYXR0ZXJuKGFjdGlvbik7XG5cdFx0fVxuXG5cdH1cblxuXHRvcGVuSW5OZXdUYWIodXJsKSB7XG5cdFx0dmFyIHdpbiA9IHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xuXHRcdHdpbi5mb2N1cygpO1xuXHR9XG5cblx0YnVpbGRQYXR0ZXJuKHBhdHRlcm4pIHtcblx0XHR0aGlzLmZsZXhDb250YWluZXIubGlzdCA9IFtdO1xuXG5cdFx0c3dpdGNoKHBhdHRlcm4pIHtcblx0XHRcdGNhc2UgJ21lbnUnOlxuXHRcdFx0XHR0aGlzLmJ1aWxkLm1lbnUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdob2x5R3JhaWwnOlxuXHRcdFx0XHR0aGlzLmJ1aWxkLndlYnNpdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdncmlkJzpcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQmFkIHRlbXBsYXRlJyk7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKCdidWlsZGluZyB0ZW1wbGF0ZScpO1xuXHR9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==