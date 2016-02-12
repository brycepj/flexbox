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
var PatternBuilder_1 = require("../services/PatternBuilder");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG91clBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJUb3VyUGFuZWxDbXAiLCJUb3VyUGFuZWxDbXAuY29uc3RydWN0b3IiLCJUb3VyUGFuZWxDbXAudG91ck5leHQiLCJUb3VyUGFuZWxDbXAudG91clByZXZpb3VzIiwiVG91clBhbmVsQ21wLnRha2VBY3Rpb24iLCJUb3VyUGFuZWxDbXAub3BlbkluTmV3VGFiIiwiVG91clBhbmVsQ21wLmJ1aWxkUGF0dGVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHlCQUFvQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzNELHNCQUEyQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzVDLDhCQUE0QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3hELCtCQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBRTFEO0lBNEJDQSxzQkFBb0JBLFFBQWtCQSxFQUFVQSxhQUE0QkEsRUFBVUEsS0FBb0JBO1FBQXRGQyxhQUFRQSxHQUFSQSxRQUFRQSxDQUFVQTtRQUFVQSxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBZUE7UUFBVUEsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBZUE7UUFDekdBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLENBQUNBLENBQUNBO1FBQy9CQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFFQSxDQUFDQSxDQUFDQTtRQUM1Q0EsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDM0NBLENBQUNBO0lBRURELCtCQUFRQSxHQUFSQTtRQUNDRSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQTtRQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsS0FBS0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLENBQUNBLENBQUNBO1lBQzdDQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNoREEsQ0FBQ0E7SUFDRkEsQ0FBQ0E7SUFFREYsbUNBQVlBLEdBQVpBO1FBQ0NHLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBO1FBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNoQkEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDN0NBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ2hEQSxDQUFDQTtJQUNGQSxDQUFDQTtJQUVESCxpQ0FBVUEsR0FBVkEsVUFBV0EsTUFBTUEsRUFBRUEsS0FBS0E7UUFDdkJJLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLE9BQU9BLENBQUNBO1FBQzFDQSxNQUFNQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNoQkEsS0FBS0EsS0FBS0E7Z0JBQ1RBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO2dCQUN0Q0EsS0FBS0EsQ0FBQ0E7WUFDUEEsS0FBS0EsUUFBUUE7Z0JBQ1pBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO2dCQUNyQ0EsS0FBS0EsQ0FBQ0E7WUFDUEE7Z0JBQ0NBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQzVCQSxDQUFDQTtJQUVGQSxDQUFDQTtJQUVPSixtQ0FBWUEsR0FBcEJBLFVBQXFCQSxHQUFHQTtRQUN4QkssSUFBSUEsR0FBR0EsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDckNBLEdBQUdBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO0lBQ2JBLENBQUNBO0lBRUFMLG1DQUFZQSxHQUFaQSxVQUFhQSxPQUFPQTtRQUNuQk0sSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFFN0JBLE1BQU1BLENBQUFBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO1lBQ2hCQSxLQUFLQSxNQUFNQTtnQkFDVkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7Z0JBQ2xCQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxXQUFXQTtnQkFDZkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0JBQ3JCQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxNQUFNQTtnQkFFVkEsS0FBS0EsQ0FBQ0E7WUFDUEE7Z0JBQ0NBLE1BQU1BLElBQUlBLEtBQUtBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO1FBQ2xDQSxDQUFDQTtRQUNEQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBO0lBQ2xDQSxDQUFDQTtJQXZGRk47UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLFlBQVlBO1lBQ3RCQSxRQUFRQSxFQUFFQSwycEJBZVRBO1lBQ0RBLEtBQUtBLEVBQUVBLENBQUNBLG9CQUFZQSxDQUFDQTtZQUNyQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsbUJBQVFBLEVBQUVBLCtCQUFjQSxDQUFDQTtZQUNyQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsY0FBS0EsRUFBRUEsYUFBSUEsQ0FBQ0E7U0FDekJBLENBQUNBOztxQkFvRURBO0lBQURBLG1CQUFDQTtBQUFEQSxDQXpGQSxBQXlGQ0EsSUFBQTtBQWxFWSxvQkFBWSxlQWtFeEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3RvdXJQYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nRm9yLCBOZ0lmfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtUb3VyRGF0YSwgVG91ck1lc3NhZ2V9IGZyb20gJy4uL3NlcnZpY2VzL3RvdXJEYXRhJztcbmltcG9ydCB7SW5kZXhEaXNwbGF5fSBmcm9tICcuLi91dGlscy9waXBlcyc7XG5pbXBvcnQge0ZsZXhDb250YWluZXJ9IGZyb20gJy4uL3NlcnZpY2VzL0ZsZXhDb250YWluZXInO1xuaW1wb3J0IHtQYXR0ZXJuQnVpbGRlcn0gZnJvbSBcIi4uL3NlcnZpY2VzL1BhdHRlcm5CdWlsZGVyXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3RvdXItcGFuZWwnLFxuXHR0ZW1wbGF0ZTogYFxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cIm1iLXRpdGxlXCI+dG91cjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibWItcHJvZ3Jlc3NcIj57e2N1cnJlbnRJZHggfCBJbmRleERpc3BsYXkgfX0gLyB7e2xhc3RJZHggfCBJbmRleERpc3BsYXl9fTwvc3Bhbj5cbiAgICAgIDxwIGNsYXNzPVwibWItY29udGVudFwiPnt7Y3VycmVudE1lc3NhZ2UudGV4dH19PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cIm1iLWFjdGlvbnNcIiAqbmdJZj1cImN1cnJlbnRNZXNzYWdlLmJ1dHRvbnNcIj5cblx0ICAgICAgPGEgKm5nRm9yPVwiI2J0biBvZiBjdXJyZW50TWVzc2FnZS5idXR0b25zICNpPWluZGV4XCJcblx0ICAgICAgICBjbGFzcz1cIm1iLWFjdGlvblwiIChjbGljayk9XCJ0YWtlQWN0aW9uKGJ0bi5hY3Rpb24sIGkpXCI+e3tidG4udGV4dH19PC9hPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxuYXYgY2xhc3M9XCJtYi1uYXZcIj5cbiAgICAgICAgPGEgKGNsaWNrKT1cInRvdXJQcmV2aW91cygpXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9hPlxuICAgICAgICA8YSAoY2xpY2spPVwidG91ck5leHQoKVwiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2E+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cblx0YCxcblx0cGlwZXM6IFtJbmRleERpc3BsYXldLFxuXHRwcm92aWRlcnM6IFtUb3VyRGF0YSwgUGF0dGVybkJ1aWxkZXJdLFxuXHRkaXJlY3RpdmVzOiBbTmdGb3IsIE5nSWZdXG59KVxuXG5leHBvcnQgY2xhc3MgVG91clBhbmVsQ21wIHtcblx0cHVibGljIGN1cnJlbnRJZHg6IG51bWJlcjtcblx0cHVibGljIGxhc3RJZHg6IG51bWJlcjtcblx0cHVibGljIGN1cnJlbnRNZXNzYWdlOiBUb3VyTWVzc2FnZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHRvdXJEYXRhOiBUb3VyRGF0YSwgcHJpdmF0ZSBmbGV4Q29udGFpbmVyOiBGbGV4Q29udGFpbmVyLCBwcml2YXRlIGJ1aWxkOlBhdHRlcm5CdWlsZGVyKSB7XG5cdFx0bGV0IGN1cnIgPSB0aGlzLmN1cnJlbnRJZHggPSAwO1xuXHRcdHRoaXMubGFzdElkeCA9IHRoaXMudG91ckRhdGEuZGF0YS5sZW5ndGggLTE7XG5cdFx0dGhpcy5jdXJyZW50TWVzc2FnZSA9IHRvdXJEYXRhLmRhdGFbY3Vycl07XG5cdH1cblxuXHR0b3VyTmV4dCgpIHtcblx0XHRsZXQgY3VyciA9IHRoaXMuY3VycmVudElkeDtcblx0XHRpZiAoY3VyciAhPT0gdGhpcy5sYXN0SWR4KSB7XG5cdFx0XHRjdXJyID0gdGhpcy5jdXJyZW50SWR4ID0gdGhpcy5jdXJyZW50SWR4ICsgMTtcblx0XHRcdHRoaXMuY3VycmVudE1lc3NhZ2UgPSB0aGlzLnRvdXJEYXRhLmRhdGFbY3Vycl07XG5cdFx0fVxuXHR9XG5cblx0dG91clByZXZpb3VzKCkge1xuXHRcdGxldCBjdXJyID0gdGhpcy5jdXJyZW50SWR4O1xuXHRcdGlmIChjdXJyICE9PSAwKSB7XG5cdFx0XHRjdXJyID0gdGhpcy5jdXJyZW50SWR4ID0gdGhpcy5jdXJyZW50SWR4IC0gMTtcblx0XHRcdHRoaXMuY3VycmVudE1lc3NhZ2UgPSB0aGlzLnRvdXJEYXRhLmRhdGFbY3Vycl07XG5cdFx0fVxuXHR9XG5cblx0dGFrZUFjdGlvbihhY3Rpb24sIGluZGV4KXtcblx0XHRsZXQgYnV0dG9ucyA9IHRoaXMuY3VycmVudE1lc3NhZ2UuYnV0dG9ucztcblx0XHRzd2l0Y2ggKGFjdGlvbikge1xuXHRcdFx0Y2FzZSAndXJsJzpcblx0XHRcdFx0dGhpcy5vcGVuSW5OZXdUYWIoYnV0dG9uc1tpbmRleF0udXJsKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdyZXNpemUnOlxuXHRcdFx0XHR0aGlzLmZsZXhDb250YWluZXIucmVzaXplQ29udGFpbmVyKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy5idWlsZFBhdHRlcm4oYWN0aW9uKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgb3BlbkluTmV3VGFiKHVybCkge1xuXHR2YXIgd2luID0gd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG5cdHdpbi5mb2N1cygpO1xufVxuXG5cdGJ1aWxkUGF0dGVybihwYXR0ZXJuKSB7XG5cdFx0dGhpcy5mbGV4Q29udGFpbmVyLmxpc3QgPSBbXTtcblxuXHRcdHN3aXRjaChwYXR0ZXJuKSB7XG5cdFx0XHRjYXNlICdtZW51Jzpcblx0XHRcdFx0dGhpcy5idWlsZC5tZW51KCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaG9seUdyYWlsJzpcblx0XHRcdFx0dGhpcy5idWlsZC53ZWJzaXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZ3JpZCc6XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0JhZCB0ZW1wbGF0ZScpO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZygnYnVpbGRpbmcgdGVtcGxhdGUnKTtcblx0fVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=