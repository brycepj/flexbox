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
var FlexContainer_1 = require('../services/FlexContainer');
var CodePanelCmp = (function () {
    function CodePanelCmp(flexContainer) {
        this.flexContainer = flexContainer;
    }
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CodePanelCmp.prototype, "list", void 0);
    CodePanelCmp = __decorate([
        core_1.Component({
            selector: 'code-panel',
            templateUrl: './components/templates/codePanel.html'
        }), 
        __metadata('design:paramtypes', [FlexContainer_1.FlexContainer])
    ], CodePanelCmp);
    return CodePanelCmp;
})();
exports.CodePanelCmp = CodePanelCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29kZVBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJDb2RlUGFuZWxDbXAiLCJDb2RlUGFuZWxDbXAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyw4QkFBNEIsMkJBQTJCLENBQUMsQ0FBQTtBQUV4RDtJQU1DQSxzQkFBb0JBLGFBQTRCQTtRQUE1QkMsa0JBQWFBLEdBQWJBLGFBQWFBLENBQWVBO0lBQUdBLENBQUNBOztJQURwREQ7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQUNBLDhCQUFJQSxVQUFNQTtJQUxwQkE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLFlBQVlBO1lBQ3RCQSxXQUFXQSxFQUFFQSx1Q0FBdUNBO1NBQ3BEQSxDQUFDQTs7cUJBSURBO0lBQURBLG1CQUFDQTtBQUFEQSxDQVBBLEFBT0NBLElBQUE7QUFIWSxvQkFBWSxlQUd4QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29kZVBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0ZsZXhDb250YWluZXJ9IGZyb20gJy4uL3NlcnZpY2VzL0ZsZXhDb250YWluZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb2RlLXBhbmVsJyxcblx0dGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvdGVtcGxhdGVzL2NvZGVQYW5lbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2RlUGFuZWxDbXAge1xuXHRASW5wdXQoKSBsaXN0OiBhbnk7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZmxleENvbnRhaW5lcjogRmxleENvbnRhaW5lcikge307XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=