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
            template: "\n    <div *ngIf='!flexContainer.list.length' class=\"masthead\">\n      <h1 class=\"mh-logo\">{{siteTitle}}</h1>\n      <p class=\"mh-desc\">{{siteDesc}}</p>\n\n      <div class=\"mh-cond-content\">\n        <h2 class=\"mh-desc\">{{siteStepsTitle}}</h2>\n        <ul>\n          <li *ngFor=\"#step of siteSteps\">\n            {{ step }}\n          </li>\n        </ul>\n        <p class=\"mh-warning\">{{warning}}</p>\n        <p>{{lastUpdated}}</p>\n        <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-via=\"_devbryce\" \n\t\t\t\t\tdata-size=\"large\">Tweet</a>\n        <script>!function(d,s,id){\n\t\t\t\t\tvar js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\n\t\t\t\t\t'http':'https';if(!d.getElementById(id)){js=d.createElement(s);\n\t\t\t\t\tjs.id=id;js.src=p+'://platform.twitter.com/widgets.js';\n\t\t\t\t\tfjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');\n\t\t\t\t</script>\n      </div>\n    </div>\n    <!--<nav>-->\n      <!--<a [routerLink]=\"['/Home']\">Home</a>-->\n      <!--<a [routerLink]=\"['/About']\">About</a>-->\n    <!--</nav>-->\n    <flex-container id=\"flexbox-app\" class=\"flex-container-wrap\"></flex-container>\n    <!--<router-outlet></router-outlet>-->\n  ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDbXAiLCJBcHBDbXAuY29uc3RydWN0b3IiLCJBcHBDbXAuc2V0dXAiLCJBcHBDbXAuc2V0dXBTaXRlSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLDhCQUE4Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzdELHdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELHFCQUFxQixxQkFBcUIsQ0FBQyxDQUFBO0FBQzNDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBSXZDLHFCQUFzQixjQUFjLENBQUMsQ0FBQTtBQUNyQyxzQkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUV4QztJQWlERUEsZ0JBQW9CQSxhQUE0QkE7UUFBNUJDLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFlQTtRQUM5Q0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7SUFDZkEsQ0FBQ0E7SUFFREQsc0JBQUtBLEdBQUxBO1FBQ0VFLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQUVERiw4QkFBYUEsR0FBYkE7UUFDRUcsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsV0FBSUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDM0JBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1FBQzFCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUM1QkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDNUJBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBO1FBQ3RDQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtRQUNwQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBakVISDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsWUFBWUE7WUFDdEJBLFFBQVFBLEVBQUNBLGt2Q0E4QlJBO1lBQ0RBLFNBQVNBLEVBQUVBLENBQUNBLDBCQUEwQkEsQ0FBQ0E7WUFDdkNBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsRUFBRUEsMENBQWdCQSxFQUFFQSxhQUFJQSxDQUFDQTtTQUN4REEsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLGNBQU9BLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO1lBQzdDQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxnQkFBUUEsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUE7U0FDckRBLENBQUNBOztlQTZCREE7SUFBREEsYUFBQ0E7QUFBREEsQ0FwRUEsQUFvRUNBLElBQUE7QUE1QlksY0FBTSxTQTRCbEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FwcC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHsgRmxleENvbnRhaW5lciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0ZsZXhDb250YWluZXInO1xuaW1wb3J0IHtGbGV4Q29udGFpbmVyQ21wfSBmcm9tICcuLi9mbGV4Q29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmZvIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvSW5mbyc7XG5pbXBvcnQgeyBOZ0lmIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuLy8gaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCB7SG9tZUNtcH0gZnJvbSAnLi4vaG9tZS9ob21lJztcbmltcG9ydCB7QWJvdXRDbXB9IGZyb20gJy4uL2Fib3V0L2Fib3V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmxleGJveGFwcCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8ZGl2ICpuZ0lmPSchZmxleENvbnRhaW5lci5saXN0Lmxlbmd0aCcgY2xhc3M9XCJtYXN0aGVhZFwiPlxuICAgICAgPGgxIGNsYXNzPVwibWgtbG9nb1wiPnt7c2l0ZVRpdGxlfX08L2gxPlxuICAgICAgPHAgY2xhc3M9XCJtaC1kZXNjXCI+e3tzaXRlRGVzY319PC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibWgtY29uZC1jb250ZW50XCI+XG4gICAgICAgIDxoMiBjbGFzcz1cIm1oLWRlc2NcIj57e3NpdGVTdGVwc1RpdGxlfX08L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpICpuZ0Zvcj1cIiNzdGVwIG9mIHNpdGVTdGVwc1wiPlxuICAgICAgICAgICAge3sgc3RlcCB9fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwIGNsYXNzPVwibWgtd2FybmluZ1wiPnt7d2FybmluZ319PC9wPlxuICAgICAgICA8cD57e2xhc3RVcGRhdGVkfX08L3A+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3NoYXJlXCIgY2xhc3M9XCJ0d2l0dGVyLXNoYXJlLWJ1dHRvblwiIGRhdGEtdmlhPVwiX2RldmJyeWNlXCIgXG5cdFx0XHRcdFx0ZGF0YS1zaXplPVwibGFyZ2VcIj5Ud2VldDwvYT5cbiAgICAgICAgPHNjcmlwdD4hZnVuY3Rpb24oZCxzLGlkKXtcblx0XHRcdFx0XHR2YXIganMsZmpzPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF0scD0vXmh0dHA6Ly50ZXN0KGQubG9jYXRpb24pP1xuXHRcdFx0XHRcdCdodHRwJzonaHR0cHMnO2lmKCFkLmdldEVsZW1lbnRCeUlkKGlkKSl7anM9ZC5jcmVhdGVFbGVtZW50KHMpO1xuXHRcdFx0XHRcdGpzLmlkPWlkO2pzLnNyYz1wKyc6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzJztcblx0XHRcdFx0XHRmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsZmpzKTt9fShkb2N1bWVudCwgJ3NjcmlwdCcsICd0d2l0dGVyLXdqcycpO1xuXHRcdFx0XHQ8L3NjcmlwdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwhLS08bmF2Pi0tPlxuICAgICAgPCEtLTxhIFtyb3V0ZXJMaW5rXT1cIlsnL0hvbWUnXVwiPkhvbWU8L2E+LS0+XG4gICAgICA8IS0tPGEgW3JvdXRlckxpbmtdPVwiWycvQWJvdXQnXVwiPkFib3V0PC9hPi0tPlxuICAgIDwhLS08L25hdj4tLT5cbiAgICA8ZmxleC1jb250YWluZXIgaWQ9XCJmbGV4Ym94LWFwcFwiIGNsYXNzPVwiZmxleC1jb250YWluZXItd3JhcFwiPjwvZmxleC1jb250YWluZXI+XG4gICAgPCEtLTxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4tLT5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vY29tcG9uZW50cy9hcHAvYXBwLmNzcyddLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEZsZXhDb250YWluZXJDbXAsIE5nSWZdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZUNtcCwgYXM6ICdIb21lJyB9LFxuICB7IHBhdGg6ICcvYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q21wLCBhczogJ0Fib3V0JyB9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENtcCB7XG4gIHB1YmxpYyBzaXRlVGl0bGU6IHN0cmluZztcbiAgcHVibGljIHNpdGVEZXNjOiBzdHJpbmc7XG4gIHB1YmxpYyBzaXRlU3RlcHNUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgc2l0ZVN0ZXBzOiBhbnlbXTtcbiAgcHVibGljIGxhc3RVcGRhdGVkOiBEYXRlO1xuICBwdWJsaWMgd2FybmluZzogc3RyaW5nO1xuICBwdWJsaWMgbGlzdExlbmd0aDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmxleENvbnRhaW5lcjogRmxleENvbnRhaW5lcikge1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgfVxuXG4gIHNldHVwKCkge1xuICAgIHRoaXMuc2V0dXBTaXRlSW5mbygpO1xuICB9XG5cbiAgc2V0dXBTaXRlSW5mbyAoKSB7XG4gICAgdmFyIGluZm8gPSBuZXcgSW5mbygpLnNpdGU7XG4gICAgdGhpcy5zaXRlRGVzYyA9IGluZm8uZGVzYztcbiAgICB0aGlzLnNpdGVUaXRsZSA9IGluZm8udGl0bGU7XG4gICAgdGhpcy5zaXRlU3RlcHMgPSBpbmZvLnN0ZXBzO1xuICAgIHRoaXMuc2l0ZVN0ZXBzVGl0bGUgPSBpbmZvLnN0ZXBzVGl0bGU7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9IGluZm8ubGFzdFVwZGF0ZWQ7XG4gICAgdGhpcy53YXJuaW5nID0gaW5mby53YXJuaW5nO1xuICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9