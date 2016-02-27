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
var router_1 = require('angular2/router');
var home_1 = require('../home/home');
var flexContainer_component_1 = require('../flexContainer.component');
var FlexContainer_1 = require('../../services/FlexContainer');
var Info_1 = require('../../services/Info');
var AppCmp = (function () {
    function AppCmp(flexContainer) {
        this.flexContainer = flexContainer;
        this.setup();
    }
    AppCmp.prototype.setup = function () {
        this.setupSiteInfo();
    };
    AppCmp.prototype.setupSiteInfo = function () {
        var info = new Info_1.Info().site;
        this.siteDesc = info.desc;
        this.siteTitle = info.title;
        this.siteSteps = info.steps;
        this.siteStepsTitle = info.stepsTitle;
        this.lastUpdated = info.lastUpdated;
        this.warning = info.warning;
    };
    AppCmp = __decorate([
        core_1.Component({
            selector: 'flexboxapp',
            template: "\n    <div *ngIf='!flexContainer.list.length' class=\"masthead\">\n      <h1 class=\"mh-logo\">{{siteTitle}}</h1>\n      <p class=\"mh-desc\">{{siteDesc}}</p>\n\n      <div class=\"mh-cond-content\">\n        <h2 class=\"mh-desc\">{{siteStepsTitle}}</h2>\n        <ul>\n          <li *ngFor=\"#step of siteSteps\">\n            {{ step }}\n          </li>\n        </ul>\n        <p class=\"mh-warning\">{{warning}}</p>\n        <p>{{lastUpdated}}</p>\n        <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-via=\"_devbryce\" \n\t\t\t\t\tdata-size=\"large\">Tweet</a>\n        <script>!function(d,s,id){\n\t\t\t\t\tvar js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\n\t\t\t\t\t'http':'https';if(!d.getElementById(id)){js=d.createElement(s);\n\t\t\t\t\tjs.id=id;js.src=p+'://platform.twitter.com/widgets.js';\n\t\t\t\t\tfjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');\n\t\t\t\t</script>\n      </div>\n    </div>\n    <flex-container id=\"flexbox-app\" class=\"flex-container-wrap\"></flex-container>\n  ",
            directives: [flexContainer_component_1.FlexContainerCmp, common_1.NgIf]
        }), 
        __metadata('design:paramtypes', [FlexContainer_1.FlexContainer])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDbXAiLCJBcHBDbXAuY29uc3RydWN0b3IiLCJBcHBDbXAuc2V0dXAiLCJBcHBDbXAuc2V0dXBTaXRlSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFtQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3JDLHdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELDhCQUE2Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzVELHFCQUFtQixxQkFBcUIsQ0FBQyxDQUFBO0FBRXpDO0lBd0NFQSxnQkFBb0JBLGFBQTRCQTtRQUE1QkMsa0JBQWFBLEdBQWJBLGFBQWFBLENBQWVBO1FBQzlDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtJQUNmQSxDQUFDQTtJQUVERCxzQkFBS0EsR0FBTEE7UUFDRUUsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0E7SUFDdkJBLENBQUNBO0lBRURGLDhCQUFhQSxHQUFiQTtRQUNFRyxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxXQUFJQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDMUJBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1FBQzVCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUM1QkEsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7UUFDdENBLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO1FBQ3BDQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUF4REhIO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxZQUFZQTtZQUN0QkEsUUFBUUEsRUFBQ0EscWpDQXlCUkE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMENBQWdCQSxFQUFFQSxhQUFJQSxDQUFDQTtTQUNyQ0EsQ0FBQ0E7O2VBOEJEQTtJQUFEQSxhQUFDQTtBQUFEQSxDQTNEQSxBQTJEQ0EsSUFBQTtBQTVCWSxjQUFNLFNBNEJsQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TmdJZn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7RmxleENvbnRhaW5lckNtcH0gZnJvbSAnLi4vZmxleENvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtGbGV4Q29udGFpbmVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvRmxleENvbnRhaW5lcic7XG5pbXBvcnQge0luZm99IGZyb20gJy4uLy4uL3NlcnZpY2VzL0luZm8nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbGV4Ym94YXBwJyxcbiAgdGVtcGxhdGU6YFxuICAgIDxkaXYgKm5nSWY9JyFmbGV4Q29udGFpbmVyLmxpc3QubGVuZ3RoJyBjbGFzcz1cIm1hc3RoZWFkXCI+XG4gICAgICA8aDEgY2xhc3M9XCJtaC1sb2dvXCI+e3tzaXRlVGl0bGV9fTwvaDE+XG4gICAgICA8cCBjbGFzcz1cIm1oLWRlc2NcIj57e3NpdGVEZXNjfX08L3A+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtaC1jb25kLWNvbnRlbnRcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwibWgtZGVzY1wiPnt7c2l0ZVN0ZXBzVGl0bGV9fTwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgKm5nRm9yPVwiI3N0ZXAgb2Ygc2l0ZVN0ZXBzXCI+XG4gICAgICAgICAgICB7eyBzdGVwIH19XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHAgY2xhc3M9XCJtaC13YXJuaW5nXCI+e3t3YXJuaW5nfX08L3A+XG4gICAgICAgIDxwPnt7bGFzdFVwZGF0ZWR9fTwvcD5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vc2hhcmVcIiBjbGFzcz1cInR3aXR0ZXItc2hhcmUtYnV0dG9uXCIgZGF0YS12aWE9XCJfZGV2YnJ5Y2VcIiBcblx0XHRcdFx0XHRkYXRhLXNpemU9XCJsYXJnZVwiPlR3ZWV0PC9hPlxuICAgICAgICA8c2NyaXB0PiFmdW5jdGlvbihkLHMsaWQpe1xuXHRcdFx0XHRcdHZhciBqcyxmanM9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXSxwPS9eaHR0cDovLnRlc3QoZC5sb2NhdGlvbik/XG5cdFx0XHRcdFx0J2h0dHAnOidodHRwcyc7aWYoIWQuZ2V0RWxlbWVudEJ5SWQoaWQpKXtqcz1kLmNyZWF0ZUVsZW1lbnQocyk7XG5cdFx0XHRcdFx0anMuaWQ9aWQ7anMuc3JjPXArJzovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanMnO1xuXHRcdFx0XHRcdGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcyxmanMpO319KGRvY3VtZW50LCAnc2NyaXB0JywgJ3R3aXR0ZXItd2pzJyk7XG5cdFx0XHRcdDwvc2NyaXB0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGZsZXgtY29udGFpbmVyIGlkPVwiZmxleGJveC1hcHBcIiBjbGFzcz1cImZsZXgtY29udGFpbmVyLXdyYXBcIj48L2ZsZXgtY29udGFpbmVyPlxuICBgLFxuICBkaXJlY3RpdmVzOiBbRmxleENvbnRhaW5lckNtcCwgTmdJZl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDbXAge1xuICBwdWJsaWMgc2l0ZVRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBzaXRlRGVzYzogc3RyaW5nO1xuICBwdWJsaWMgc2l0ZVN0ZXBzVGl0bGU6IHN0cmluZztcbiAgcHVibGljIHNpdGVTdGVwczogYW55W107XG4gIHB1YmxpYyBsYXN0VXBkYXRlZDogRGF0ZTtcbiAgcHVibGljIHdhcm5pbmc6IHN0cmluZztcbiAgcHVibGljIGxpc3RMZW5ndGg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZsZXhDb250YWluZXI6IEZsZXhDb250YWluZXIpIHtcbiAgICB0aGlzLnNldHVwKCk7XG4gIH1cblxuICBzZXR1cCgpIHtcbiAgICB0aGlzLnNldHVwU2l0ZUluZm8oKTtcbiAgfVxuXG4gIHNldHVwU2l0ZUluZm8gKCkge1xuICAgIHZhciBpbmZvID0gbmV3IEluZm8oKS5zaXRlO1xuICAgIHRoaXMuc2l0ZURlc2MgPSBpbmZvLmRlc2M7XG4gICAgdGhpcy5zaXRlVGl0bGUgPSBpbmZvLnRpdGxlO1xuICAgIHRoaXMuc2l0ZVN0ZXBzID0gaW5mby5zdGVwcztcbiAgICB0aGlzLnNpdGVTdGVwc1RpdGxlID0gaW5mby5zdGVwc1RpdGxlO1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSBpbmZvLmxhc3RVcGRhdGVkO1xuICAgIHRoaXMud2FybmluZyA9IGluZm8ud2FybmluZztcbiAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==