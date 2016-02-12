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
            template: "\n    <div *ngIf='!flexContainer.list.length' class=\"masthead\">\n      <h1 class=\"mh-logo\">{{siteTitle}}</h1>\n      <p class=\"mh-desc\">{{siteDesc}}</p>\n\n      <div class=\"mh-cond-content\">\n        <h2 class=\"mh-desc\">{{siteStepsTitle}}</h2>\n        <ul>\n          <li *ngFor=\"#step of siteSteps\">\n            {{ step }}\n          </li>\n        </ul>\n        <p class=\"mh-warning\">{{warning}}</p>\n        <p>{{lastUpdated}}</p>\n        <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-via=\"_devbryce\" data-size=\"large\">Tweet</a>\n        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>\n      </div>\n    </div>\n    <!--<nav>-->\n      <!--<a [routerLink]=\"['/Home']\">Home</a>-->\n      <!--<a [routerLink]=\"['/About']\">About</a>-->\n    <!--</nav>-->\n    <flex-container id=\"flexbox-app\" class=\"flex-container-wrap\"></flex-container>\n    <!--<router-outlet></router-outlet>-->\n  ",
            styleUrls: ['./components/app/app.css'],
            directives: [router_1.ROUTER_DIRECTIVES, flexContainer_component_1.FlexContainerCmp, common_1.NgIf]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.HomeCmp, as: 'Home' },
            { path: '/about', component: about_1.AboutCmp, as: 'About' }
        ]), 
        __metadata('design:paramtypes', [FlexContainer_1.FlexContainer])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDbXAiLCJBcHBDbXAuY29uc3RydWN0b3IiLCJBcHBDbXAuc2V0dXAiLCJBcHBDbXAuc2V0dXBTaXRlSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLDhCQUE4Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzdELHdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELHFCQUFxQixxQkFBcUIsQ0FBQyxDQUFBO0FBQzNDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBSXZDLHFCQUFzQixjQUFjLENBQUMsQ0FBQTtBQUNyQyxzQkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUV4QztJQTJDRUEsZ0JBQW9CQSxhQUE0QkE7UUFBNUJDLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFlQTtRQUM5Q0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7SUFDZkEsQ0FBQ0E7SUFFREQsc0JBQUtBLEdBQUxBO1FBQ0VFLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQUVERiw4QkFBYUEsR0FBYkE7UUFDRUcsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsV0FBSUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDM0JBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1FBQzFCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUM1QkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDNUJBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBO1FBQ3RDQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtRQUNwQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBM0RISDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsWUFBWUE7WUFDdEJBLFFBQVFBLEVBQUNBLDRxQ0F3QlJBO1lBQ0RBLFNBQVNBLEVBQUVBLENBQUNBLDBCQUEwQkEsQ0FBQ0E7WUFDdkNBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsRUFBRUEsMENBQWdCQSxFQUFFQSxhQUFJQSxDQUFDQTtTQUN4REEsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLGNBQU9BLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO1lBQzdDQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxnQkFBUUEsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUE7U0FDckRBLENBQUNBOztlQTZCREE7SUFBREEsYUFBQ0E7QUFBREEsQ0E5REEsQUE4RENBLElBQUE7QUE1QlksY0FBTSxTQTRCbEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FwcC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHsgRmxleENvbnRhaW5lciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0ZsZXhDb250YWluZXInO1xuaW1wb3J0IHtGbGV4Q29udGFpbmVyQ21wfSBmcm9tICcuLi9mbGV4Q29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmZvIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvSW5mbyc7XG5pbXBvcnQgeyBOZ0lmIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuLy8gaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCB7SG9tZUNtcH0gZnJvbSAnLi4vaG9tZS9ob21lJztcbmltcG9ydCB7QWJvdXRDbXB9IGZyb20gJy4uL2Fib3V0L2Fib3V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmxleGJveGFwcCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8ZGl2ICpuZ0lmPSchZmxleENvbnRhaW5lci5saXN0Lmxlbmd0aCcgY2xhc3M9XCJtYXN0aGVhZFwiPlxuICAgICAgPGgxIGNsYXNzPVwibWgtbG9nb1wiPnt7c2l0ZVRpdGxlfX08L2gxPlxuICAgICAgPHAgY2xhc3M9XCJtaC1kZXNjXCI+e3tzaXRlRGVzY319PC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibWgtY29uZC1jb250ZW50XCI+XG4gICAgICAgIDxoMiBjbGFzcz1cIm1oLWRlc2NcIj57e3NpdGVTdGVwc1RpdGxlfX08L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpICpuZ0Zvcj1cIiNzdGVwIG9mIHNpdGVTdGVwc1wiPlxuICAgICAgICAgICAge3sgc3RlcCB9fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwIGNsYXNzPVwibWgtd2FybmluZ1wiPnt7d2FybmluZ319PC9wPlxuICAgICAgICA8cD57e2xhc3RVcGRhdGVkfX08L3A+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3NoYXJlXCIgY2xhc3M9XCJ0d2l0dGVyLXNoYXJlLWJ1dHRvblwiIGRhdGEtdmlhPVwiX2RldmJyeWNlXCIgZGF0YS1zaXplPVwibGFyZ2VcIj5Ud2VldDwvYT5cbiAgICAgICAgPHNjcmlwdD4hZnVuY3Rpb24oZCxzLGlkKXt2YXIganMsZmpzPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF0scD0vXmh0dHA6Ly50ZXN0KGQubG9jYXRpb24pPydodHRwJzonaHR0cHMnO2lmKCFkLmdldEVsZW1lbnRCeUlkKGlkKSl7anM9ZC5jcmVhdGVFbGVtZW50KHMpO2pzLmlkPWlkO2pzLnNyYz1wKyc6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzJztmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsZmpzKTt9fShkb2N1bWVudCwgJ3NjcmlwdCcsICd0d2l0dGVyLXdqcycpOzwvc2NyaXB0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLTxuYXY+LS0+XG4gICAgICA8IS0tPGEgW3JvdXRlckxpbmtdPVwiWycvSG9tZSddXCI+SG9tZTwvYT4tLT5cbiAgICAgIDwhLS08YSBbcm91dGVyTGlua109XCJbJy9BYm91dCddXCI+QWJvdXQ8L2E+LS0+XG4gICAgPCEtLTwvbmF2Pi0tPlxuICAgIDxmbGV4LWNvbnRhaW5lciBpZD1cImZsZXhib3gtYXBwXCIgY2xhc3M9XCJmbGV4LWNvbnRhaW5lci13cmFwXCI+PC9mbGV4LWNvbnRhaW5lcj5cbiAgICA8IS0tPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0Pi0tPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9jb21wb25lbnRzL2FwcC9hcHAuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgRmxleENvbnRhaW5lckNtcCwgTmdJZl1cbn0pXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lQ21wLCBhczogJ0hvbWUnIH0sXG4gIHsgcGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogQWJvdXRDbXAsIGFzOiAnQWJvdXQnIH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ21wIHtcbiAgcHVibGljIHNpdGVUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgc2l0ZURlc2M6IHN0cmluZztcbiAgcHVibGljIHNpdGVTdGVwc1RpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBzaXRlU3RlcHM6IGFueVtdO1xuICBwdWJsaWMgbGFzdFVwZGF0ZWQ6IERhdGU7XG4gIHB1YmxpYyB3YXJuaW5nOiBzdHJpbmc7XG4gIHB1YmxpYyBsaXN0TGVuZ3RoOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmbGV4Q29udGFpbmVyOiBGbGV4Q29udGFpbmVyKSB7XG4gICAgdGhpcy5zZXR1cCgpO1xuICB9XG5cbiAgc2V0dXAoKSB7XG4gICAgdGhpcy5zZXR1cFNpdGVJbmZvKCk7XG4gIH1cblxuICBzZXR1cFNpdGVJbmZvICgpIHtcbiAgICB2YXIgaW5mbyA9IG5ldyBJbmZvKCkuc2l0ZTtcbiAgICB0aGlzLnNpdGVEZXNjID0gaW5mby5kZXNjO1xuICAgIHRoaXMuc2l0ZVRpdGxlID0gaW5mby50aXRsZTtcbiAgICB0aGlzLnNpdGVTdGVwcyA9IGluZm8uc3RlcHM7XG4gICAgdGhpcy5zaXRlU3RlcHNUaXRsZSA9IGluZm8uc3RlcHNUaXRsZTtcbiAgICB0aGlzLmxhc3RVcGRhdGVkID0gaW5mby5sYXN0VXBkYXRlZDtcbiAgICB0aGlzLndhcm5pbmcgPSBpbmZvLndhcm5pbmc7XG4gIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=