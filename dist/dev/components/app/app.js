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
var router_1 = require('angular2/router');
var FlexContainer_1 = require('../../services/FlexContainer');
var flexContainer_component_1 = require('../flexContainer.component');
var Info_1 = require('../../services/Info');
var common_1 = require('angular2/common');
var home_1 = require('../home/home');
var about_1 = require('../about/about');
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
            template: "\n    <div *ngIf='!flexContainer.list.length' class=\"masthead\">\n      <h1 class=\"mh-logo\">{{siteTitle}}</h1>\n      <p class=\"mh-desc\">{{siteDesc}}</p>\n\n      <div class=\"mh-cond-content\">\n        <h2 class=\"mh-desc\">{{siteStepsTitle}}</h2>\n        <ul>\n          <li *ngFor=\"#step of siteSteps\">\n            {{ step }}\n          </li>\n        </ul>\n        <p class=\"mh-warning\">{{warning}}</p>\n        <p>{{lastUpdated}}</p>\n        <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-via=\"_devbryce\" \n\t\t\t\t\tdata-size=\"large\">Tweet</a>\n        <script>!function(d,s,id){\n\t\t\t\t\tvar js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\n\t\t\t\t\t'http':'https';if(!d.getElementById(id)){js=d.createElement(s);\n\t\t\t\t\tjs.id=id;js.src=p+'://platform.twitter.com/widgets.js';\n\t\t\t\t\tfjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');\n\t\t\t\t</script>\n      </div>\n    </div>\n    <flex-container id=\"flexbox-app\" class=\"flex-container-wrap\"></flex-container>\n    <!--<router-outlet></router-outlet>-->\n  ",
            styleUrls: ['./components/app/app.css'],
            directives: [router_1.ROUTER_DIRECTIVES, flexContainer_component_1.FlexContainerCmp, common_1.NgIf]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.HomeCmp, as: 'Home' },
        ]), 
        __metadata('design:paramtypes', [FlexContainer_1.FlexContainer])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDbXAiLCJBcHBDbXAuY29uc3RydWN0b3IiLCJBcHBDbXAuc2V0dXAiLCJBcHBDbXAuc2V0dXBTaXRlSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLHFCQUFzQixjQUFjLENBQUMsQ0FBQTtBQUNyQyx3Q0FBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCw4QkFBOEIsOEJBQThCLENBQUMsQ0FBQTtBQUM3RCxxQkFBcUIscUJBQXFCLENBQUMsQ0FBQTtBQUUzQztJQTRDRUEsZ0JBQW9CQSxhQUE0QkE7UUFBNUJDLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFlQTtRQUM5Q0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7SUFDZkEsQ0FBQ0E7SUFFREQsc0JBQUtBLEdBQUxBO1FBQ0VFLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQUVERiw4QkFBYUEsR0FBYkE7UUFDRUcsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsV0FBSUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDM0JBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1FBQzFCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUM1QkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDNUJBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBO1FBQ3RDQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtRQUNwQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBNURISDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsWUFBWUE7WUFDdEJBLFFBQVFBLEVBQUNBLGltQ0EwQlJBO1lBQ0RBLFNBQVNBLEVBQUVBLENBQUNBLDBCQUEwQkEsQ0FBQ0E7WUFDdkNBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsRUFBRUEsMENBQWdCQSxFQUFFQSxhQUFJQSxDQUFDQTtTQUN4REEsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLGNBQU9BLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO1NBQzlDQSxDQUFDQTs7ZUE2QkRBO0lBQURBLGFBQUNBO0FBQURBLENBL0RBLEFBK0RDQSxJQUFBO0FBNUJZLGNBQU0sU0E0QmxCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgTmdJZiB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIb21lQ21wfSBmcm9tICcuLi9ob21lL2hvbWUnO1xuaW1wb3J0IHtGbGV4Q29udGFpbmVyQ21wfSBmcm9tICcuLi9mbGV4Q29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGbGV4Q29udGFpbmVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvRmxleENvbnRhaW5lcic7XG5pbXBvcnQgeyBJbmZvIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvSW5mbyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZsZXhib3hhcHAnLFxuICB0ZW1wbGF0ZTpgXG4gICAgPGRpdiAqbmdJZj0nIWZsZXhDb250YWluZXIubGlzdC5sZW5ndGgnIGNsYXNzPVwibWFzdGhlYWRcIj5cbiAgICAgIDxoMSBjbGFzcz1cIm1oLWxvZ29cIj57e3NpdGVUaXRsZX19PC9oMT5cbiAgICAgIDxwIGNsYXNzPVwibWgtZGVzY1wiPnt7c2l0ZURlc2N9fTwvcD5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1oLWNvbmQtY29udGVudFwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJtaC1kZXNjXCI+e3tzaXRlU3RlcHNUaXRsZX19PC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSAqbmdGb3I9XCIjc3RlcCBvZiBzaXRlU3RlcHNcIj5cbiAgICAgICAgICAgIHt7IHN0ZXAgfX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8cCBjbGFzcz1cIm1oLXdhcm5pbmdcIj57e3dhcm5pbmd9fTwvcD5cbiAgICAgICAgPHA+e3tsYXN0VXBkYXRlZH19PC9wPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFyZVwiIGNsYXNzPVwidHdpdHRlci1zaGFyZS1idXR0b25cIiBkYXRhLXZpYT1cIl9kZXZicnljZVwiIFxuXHRcdFx0XHRcdGRhdGEtc2l6ZT1cImxhcmdlXCI+VHdlZXQ8L2E+XG4gICAgICAgIDxzY3JpcHQ+IWZ1bmN0aW9uKGQscyxpZCl7XG5cdFx0XHRcdFx0dmFyIGpzLGZqcz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdLHA9L15odHRwOi8udGVzdChkLmxvY2F0aW9uKT9cblx0XHRcdFx0XHQnaHR0cCc6J2h0dHBzJztpZighZC5nZXRFbGVtZW50QnlJZChpZCkpe2pzPWQuY3JlYXRlRWxlbWVudChzKTtcblx0XHRcdFx0XHRqcy5pZD1pZDtqcy5zcmM9cCsnOi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy5qcyc7XG5cdFx0XHRcdFx0ZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLGZqcyk7fX0oZG9jdW1lbnQsICdzY3JpcHQnLCAndHdpdHRlci13anMnKTtcblx0XHRcdFx0PC9zY3JpcHQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZmxleC1jb250YWluZXIgaWQ9XCJmbGV4Ym94LWFwcFwiIGNsYXNzPVwiZmxleC1jb250YWluZXItd3JhcFwiPjwvZmxleC1jb250YWluZXI+XG4gICAgPCEtLTxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4tLT5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vY29tcG9uZW50cy9hcHAvYXBwLmNzcyddLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEZsZXhDb250YWluZXJDbXAsIE5nSWZdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZUNtcCwgYXM6ICdIb21lJyB9LFxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDbXAge1xuICBwdWJsaWMgc2l0ZVRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBzaXRlRGVzYzogc3RyaW5nO1xuICBwdWJsaWMgc2l0ZVN0ZXBzVGl0bGU6IHN0cmluZztcbiAgcHVibGljIHNpdGVTdGVwczogYW55W107XG4gIHB1YmxpYyBsYXN0VXBkYXRlZDogRGF0ZTtcbiAgcHVibGljIHdhcm5pbmc6IHN0cmluZztcbiAgcHVibGljIGxpc3RMZW5ndGg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZsZXhDb250YWluZXI6IEZsZXhDb250YWluZXIpIHtcbiAgICB0aGlzLnNldHVwKCk7XG4gIH1cblxuICBzZXR1cCgpIHtcbiAgICB0aGlzLnNldHVwU2l0ZUluZm8oKTtcbiAgfVxuXG4gIHNldHVwU2l0ZUluZm8gKCkge1xuICAgIHZhciBpbmZvID0gbmV3IEluZm8oKS5zaXRlO1xuICAgIHRoaXMuc2l0ZURlc2MgPSBpbmZvLmRlc2M7XG4gICAgdGhpcy5zaXRlVGl0bGUgPSBpbmZvLnRpdGxlO1xuICAgIHRoaXMuc2l0ZVN0ZXBzID0gaW5mby5zdGVwcztcbiAgICB0aGlzLnNpdGVTdGVwc1RpdGxlID0gaW5mby5zdGVwc1RpdGxlO1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSBpbmZvLmxhc3RVcGRhdGVkO1xuICAgIHRoaXMud2FybmluZyA9IGluZm8ud2FybmluZztcbiAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==