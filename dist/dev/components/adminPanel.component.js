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
var FlexContainer_1 = require('../services/FlexContainer');
var CSSDefaults_1 = require('../services/CSSDefaults');
var pipes_1 = require('../utils/pipes');
var data_1 = require('../utils/data');
var FlexItemFactory_1 = require('../services/FlexItemFactory');
var AdminPanelCmp = (function () {
    function AdminPanelCmp(flexContainer, _cssDefaults, itemDefaults) {
        this.flexContainer = flexContainer;
        this._cssDefaults = _cssDefaults;
        this.itemDefaults = itemDefaults;
        this.options = data_1.containerOptions;
    }
    AdminPanelCmp.prototype.updateContainerStyles = function (prop, evt) {
        var srcElem = evt.srcElement;
        var newVal = srcElem.value;
        this.flexContainer.styles[prop] = newVal;
    };
    AdminPanelCmp.prototype.changeItemTypeDefault = function (type, event) {
        this.itemDefaults[type] = event.target.checked;
    };
    AdminPanelCmp.prototype.toggleLocalValues = function () {
    };
    AdminPanelCmp.prototype.updateDefaultState = function (val) {
        this.itemDefaults.setDefault({
            state: val
        });
    };
    AdminPanelCmp.prototype.addItem = function () {
        this.flexContainer.createFlexItem();
    };
    AdminPanelCmp.prototype.removeItem = function () {
        this.flexContainer.removeItem();
    };
    AdminPanelCmp.prototype.removeAllItems = function () {
        this.flexContainer.removeAll();
    };
    AdminPanelCmp.prototype.setItemDefault = function (styleObj) {
        this._cssDefaults.setitem(styleObj);
    };
    AdminPanelCmp.prototype.resizeBox = function () {
        this.flexContainer.resizeContainer();
    };
    AdminPanelCmp = __decorate([
        core_1.Component({
            selector: 'admin-panel',
            templateUrl: './components/templates/adminPanel.html',
            directives: [common_1.FORM_DIRECTIVES],
            pipes: [pipes_1.DerpPipe]
        }), 
        __metadata('design:paramtypes', [FlexContainer_1.FlexContainer, CSSDefaults_1.CSSDefaults, FlexItemFactory_1.FlexItemFactory])
    ], AdminPanelCmp);
    return AdminPanelCmp;
})();
exports.AdminPanelCmp = AdminPanelCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRtaW5QYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQWRtaW5QYW5lbENtcCIsIkFkbWluUGFuZWxDbXAuY29uc3RydWN0b3IiLCJBZG1pblBhbmVsQ21wLnVwZGF0ZUNvbnRhaW5lclN0eWxlcyIsIkFkbWluUGFuZWxDbXAuY2hhbmdlSXRlbVR5cGVEZWZhdWx0IiwiQWRtaW5QYW5lbENtcC50b2dnbGVMb2NhbFZhbHVlcyIsIkFkbWluUGFuZWxDbXAudXBkYXRlRGVmYXVsdFN0YXRlIiwiQWRtaW5QYW5lbENtcC5hZGRJdGVtIiwiQWRtaW5QYW5lbENtcC5yZW1vdmVJdGVtIiwiQWRtaW5QYW5lbENtcC5yZW1vdmVBbGxJdGVtcyIsIkFkbWluUGFuZWxDbXAuc2V0SXRlbURlZmF1bHQiLCJBZG1pblBhbmVsQ21wLnJlc2l6ZUJveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHVCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELDhCQUE0QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3hELDRCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELHNCQUF1QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3hDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxnQ0FBOEIsNkJBQTZCLENBQUMsQ0FBQTtBQUU1RDtJQVVDQSx1QkFBb0JBLGFBQTRCQSxFQUM1QkEsWUFBeUJBLEVBQzFCQSxZQUE2QkE7UUFGNUJDLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFlQTtRQUM1QkEsaUJBQVlBLEdBQVpBLFlBQVlBLENBQWFBO1FBQzFCQSxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBaUJBO1FBQy9DQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSx1QkFBZ0JBLENBQUNBO0lBQ2pDQSxDQUFDQTtJQUVERCw2Q0FBcUJBLEdBQXJCQSxVQUFzQkEsSUFBSUEsRUFBRUEsR0FBR0E7UUFDOUJFLElBQUlBLE9BQU9BLEdBQUdBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBO1FBQzdCQSxJQUFJQSxNQUFNQSxHQUFHQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0E7SUFDMUNBLENBQUNBO0lBRURGLDZDQUFxQkEsR0FBckJBLFVBQXNCQSxJQUFJQSxFQUFFQSxLQUFLQTtRQUNoQ0csSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFHaERBLENBQUNBO0lBQ09ILHlDQUFpQkEsR0FBekJBO0lBRUFJLENBQUNBO0lBQ0RKLDBDQUFrQkEsR0FBbEJBLFVBQW1CQSxHQUFHQTtRQUNyQkssSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7WUFDNUJBLEtBQUtBLEVBQUVBLEdBQUdBO1NBQ1ZBLENBQUNBLENBQUNBO0lBQ0pBLENBQUNBO0lBQ0RMLCtCQUFPQSxHQUFQQTtRQUNDTSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtJQUNyQ0EsQ0FBQ0E7SUFFRE4sa0NBQVVBLEdBQVZBO1FBQ0NPLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO0lBQ2pDQSxDQUFDQTtJQUVEUCxzQ0FBY0EsR0FBZEE7UUFDQ1EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQUE7SUFDL0JBLENBQUNBO0lBRURSLHNDQUFjQSxHQUFkQSxVQUFlQSxRQUFRQTtRQUN0QlMsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFDckNBLENBQUNBO0lBR0RULGlDQUFTQSxHQUFUQTtRQUNDVSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtJQUN0Q0EsQ0FBQ0E7SUF0REZWO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxhQUFhQTtZQUN2QkEsV0FBV0EsRUFBRUEsd0NBQXdDQTtZQUNyREEsVUFBVUEsRUFBRUEsQ0FBQ0Esd0JBQWVBLENBQUNBO1lBQzdCQSxLQUFLQSxFQUFFQSxDQUFDQSxnQkFBUUEsQ0FBQ0E7U0FDakJBLENBQUNBOztzQkFtRERBO0lBQURBLG9CQUFDQTtBQUFEQSxDQXhEQSxBQXdEQ0EsSUFBQTtBQWpEWSxxQkFBYSxnQkFpRHpCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hZG1pblBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7RmxleENvbnRhaW5lcn0gZnJvbSAnLi4vc2VydmljZXMvRmxleENvbnRhaW5lcic7XG5pbXBvcnQge0NTU0RlZmF1bHRzfSBmcm9tICcuLi9zZXJ2aWNlcy9DU1NEZWZhdWx0cyc7XG5pbXBvcnQge0RlcnBQaXBlfSBmcm9tICcuLi91dGlscy9waXBlcyc7XG5pbXBvcnQge2NvbnRhaW5lck9wdGlvbnN9IGZyb20gJy4uL3V0aWxzL2RhdGEnO1xuaW1wb3J0IHtGbGV4SXRlbUZhY3Rvcnl9IGZyb20gJy4uL3NlcnZpY2VzL0ZsZXhJdGVtRmFjdG9yeSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FkbWluLXBhbmVsJyxcblx0dGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvdGVtcGxhdGVzL2FkbWluUGFuZWwuaHRtbCcsXG5cdGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVNdLFxuXHRwaXBlczogW0RlcnBQaXBlXVxufSlcblxuZXhwb3J0IGNsYXNzIEFkbWluUGFuZWxDbXAge1xuXHRwdWJsaWMgb3B0aW9uczogYW55O1xuXHRwdWJsaWMgaXRlbURlZmF1bHRzOiBhbnk7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZmxleENvbnRhaW5lcjogRmxleENvbnRhaW5lcixcblx0ICAgICAgICAgICAgcHJpdmF0ZSBfY3NzRGVmYXVsdHM6IENTU0RlZmF1bHRzLFxuXHQgICAgICAgICAgICBwdWJsaWMgaXRlbURlZmF1bHRzOiBGbGV4SXRlbUZhY3RvcnkpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBjb250YWluZXJPcHRpb25zO1xuXHR9XG5cblx0dXBkYXRlQ29udGFpbmVyU3R5bGVzKHByb3AsIGV2dCkge1xuXHRcdHZhciBzcmNFbGVtID0gZXZ0LnNyY0VsZW1lbnQ7XG5cdFx0dmFyIG5ld1ZhbCA9IHNyY0VsZW0udmFsdWU7XG5cdFx0dGhpcy5mbGV4Q29udGFpbmVyLnN0eWxlc1twcm9wXSA9IG5ld1ZhbDtcblx0fVxuXG5cdGNoYW5nZUl0ZW1UeXBlRGVmYXVsdCh0eXBlLCBldmVudCkge1xuXHRcdHRoaXMuaXRlbURlZmF1bHRzW3R5cGVdID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG5cblxuXHR9XG5cdHByaXZhdGUgdG9nZ2xlTG9jYWxWYWx1ZXMoKXtcblxuXHR9XG5cdHVwZGF0ZURlZmF1bHRTdGF0ZSh2YWwpe1xuXHRcdHRoaXMuaXRlbURlZmF1bHRzLnNldERlZmF1bHQoe1xuXHRcdFx0c3RhdGU6IHZhbFxuXHRcdH0pO1xuXHR9XG5cdGFkZEl0ZW0oKSB7XG5cdFx0dGhpcy5mbGV4Q29udGFpbmVyLmNyZWF0ZUZsZXhJdGVtKCk7XG5cdH1cblxuXHRyZW1vdmVJdGVtKCkge1xuXHRcdHRoaXMuZmxleENvbnRhaW5lci5yZW1vdmVJdGVtKCk7XG5cdH1cblxuXHRyZW1vdmVBbGxJdGVtcygpe1xuXHRcdHRoaXMuZmxleENvbnRhaW5lci5yZW1vdmVBbGwoKVxuXHR9XG5cblx0c2V0SXRlbURlZmF1bHQoc3R5bGVPYmopIHtcblx0XHR0aGlzLl9jc3NEZWZhdWx0cy5zZXRpdGVtKHN0eWxlT2JqKTtcblx0fVxuXG5cblx0cmVzaXplQm94KCkge1xuXHRcdHRoaXMuZmxleENvbnRhaW5lci5yZXNpemVDb250YWluZXIoKTtcblx0fVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=