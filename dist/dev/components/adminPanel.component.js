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
var FlexItemFactory_1 = require('../services/FlexItemFactory');
var pipes_1 = require('../utils/pipes');
var data_1 = require('../utils/data');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRtaW5QYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQWRtaW5QYW5lbENtcCIsIkFkbWluUGFuZWxDbXAuY29uc3RydWN0b3IiLCJBZG1pblBhbmVsQ21wLnVwZGF0ZUNvbnRhaW5lclN0eWxlcyIsIkFkbWluUGFuZWxDbXAuY2hhbmdlSXRlbVR5cGVEZWZhdWx0IiwiQWRtaW5QYW5lbENtcC51cGRhdGVEZWZhdWx0U3RhdGUiLCJBZG1pblBhbmVsQ21wLmFkZEl0ZW0iLCJBZG1pblBhbmVsQ21wLnJlbW92ZUl0ZW0iLCJBZG1pblBhbmVsQ21wLnJlbW92ZUFsbEl0ZW1zIiwiQWRtaW5QYW5lbENtcC5zZXRJdGVtRGVmYXVsdCIsIkFkbWluUGFuZWxDbXAucmVzaXplQm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsOEJBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFDeEQsNEJBQTBCLHlCQUF5QixDQUFDLENBQUE7QUFDcEQsZ0NBQThCLDZCQUE2QixDQUFDLENBQUE7QUFDNUQsc0JBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFDeEMscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRS9DO0lBVUNBLHVCQUFvQkEsYUFBNEJBLEVBQzVCQSxZQUF5QkEsRUFDMUJBLFlBQTZCQTtRQUY1QkMsa0JBQWFBLEdBQWJBLGFBQWFBLENBQWVBO1FBQzVCQSxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBYUE7UUFDMUJBLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFpQkE7UUFDL0NBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLHVCQUFnQkEsQ0FBQ0E7SUFDakNBLENBQUNBO0lBRURELDZDQUFxQkEsR0FBckJBLFVBQXNCQSxJQUFJQSxFQUFFQSxHQUFHQTtRQUM5QkUsSUFBSUEsT0FBT0EsR0FBR0EsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0E7UUFDN0JBLElBQUlBLE1BQU1BLEdBQUdBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBO1FBQzNCQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQTtJQUMxQ0EsQ0FBQ0E7SUFDREYsNkNBQXFCQSxHQUFyQkEsVUFBc0JBLElBQUlBLEVBQUVBLEtBQUtBO1FBQ2hDRyxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUNoREEsQ0FBQ0E7SUFDREgsMENBQWtCQSxHQUFsQkEsVUFBbUJBLEdBQUdBO1FBQ3JCSSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxVQUFVQSxDQUFDQTtZQUM1QkEsS0FBS0EsRUFBRUEsR0FBR0E7U0FDVkEsQ0FBQ0EsQ0FBQ0E7SUFDSkEsQ0FBQ0E7SUFDREosK0JBQU9BLEdBQVBBO1FBQ0NLLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO0lBQ3JDQSxDQUFDQTtJQUVETCxrQ0FBVUEsR0FBVkE7UUFDQ00sSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0E7SUFDakNBLENBQUNBO0lBRUROLHNDQUFjQSxHQUFkQTtRQUNDTyxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQTtJQUNoQ0EsQ0FBQ0E7SUFFRFAsc0NBQWNBLEdBQWRBLFVBQWVBLFFBQVFBO1FBQ3RCUSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtJQUNyQ0EsQ0FBQ0E7SUFHRFIsaUNBQVNBLEdBQVRBO1FBQ0NTLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO0lBQ3RDQSxDQUFDQTtJQWhERlQ7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLGFBQWFBO1lBQ3ZCQSxXQUFXQSxFQUFFQSx3Q0FBd0NBO1lBQ3JEQSxVQUFVQSxFQUFFQSxDQUFDQSx3QkFBZUEsQ0FBQ0E7WUFDN0JBLEtBQUtBLEVBQUVBLENBQUNBLGdCQUFRQSxDQUFDQTtTQUNqQkEsQ0FBQ0E7O3NCQTZDREE7SUFBREEsb0JBQUNBO0FBQURBLENBbERBLEFBa0RDQSxJQUFBO0FBM0NZLHFCQUFhLGdCQTJDekIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FkbWluUGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0ZsZXhDb250YWluZXJ9IGZyb20gJy4uL3NlcnZpY2VzL0ZsZXhDb250YWluZXInO1xuaW1wb3J0IHtDU1NEZWZhdWx0c30gZnJvbSAnLi4vc2VydmljZXMvQ1NTRGVmYXVsdHMnO1xuaW1wb3J0IHtGbGV4SXRlbUZhY3Rvcnl9IGZyb20gJy4uL3NlcnZpY2VzL0ZsZXhJdGVtRmFjdG9yeSc7XG5pbXBvcnQge0RlcnBQaXBlfSBmcm9tICcuLi91dGlscy9waXBlcyc7XG5pbXBvcnQge2NvbnRhaW5lck9wdGlvbnN9IGZyb20gJy4uL3V0aWxzL2RhdGEnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhZG1pbi1wYW5lbCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3RlbXBsYXRlcy9hZG1pblBhbmVsLmh0bWwnLFxuXHRkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXSxcblx0cGlwZXM6IFtEZXJwUGlwZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBZG1pblBhbmVsQ21wIHtcblx0cHVibGljIG9wdGlvbnM6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZsZXhDb250YWluZXI6IEZsZXhDb250YWluZXIsXG5cdCAgICAgICAgICAgIHByaXZhdGUgX2Nzc0RlZmF1bHRzOiBDU1NEZWZhdWx0cyxcblx0ICAgICAgICAgICAgcHVibGljIGl0ZW1EZWZhdWx0czogRmxleEl0ZW1GYWN0b3J5KSB7XG5cdFx0dGhpcy5vcHRpb25zID0gY29udGFpbmVyT3B0aW9ucztcblx0fVxuXG5cdHVwZGF0ZUNvbnRhaW5lclN0eWxlcyhwcm9wLCBldnQpIHtcblx0XHR2YXIgc3JjRWxlbSA9IGV2dC5zcmNFbGVtZW50O1xuXHRcdHZhciBuZXdWYWwgPSBzcmNFbGVtLnZhbHVlO1xuXHRcdHRoaXMuZmxleENvbnRhaW5lci5zdHlsZXNbcHJvcF0gPSBuZXdWYWw7XG5cdH1cblx0Y2hhbmdlSXRlbVR5cGVEZWZhdWx0KHR5cGUsIGV2ZW50KSB7XG5cdFx0dGhpcy5pdGVtRGVmYXVsdHNbdHlwZV0gPSBldmVudC50YXJnZXQuY2hlY2tlZDtcblx0fVxuXHR1cGRhdGVEZWZhdWx0U3RhdGUodmFsKSB7XG5cdFx0dGhpcy5pdGVtRGVmYXVsdHMuc2V0RGVmYXVsdCh7XG5cdFx0XHRzdGF0ZTogdmFsXG5cdFx0fSk7XG5cdH1cblx0YWRkSXRlbSgpOnZvaWQge1xuXHRcdHRoaXMuZmxleENvbnRhaW5lci5jcmVhdGVGbGV4SXRlbSgpO1xuXHR9XG5cblx0cmVtb3ZlSXRlbSgpOnZvaWQge1xuXHRcdHRoaXMuZmxleENvbnRhaW5lci5yZW1vdmVJdGVtKCk7XG5cdH1cblxuXHRyZW1vdmVBbGxJdGVtcygpOnZvaWQge1xuXHRcdHRoaXMuZmxleENvbnRhaW5lci5yZW1vdmVBbGwoKTtcblx0fVxuXG5cdHNldEl0ZW1EZWZhdWx0KHN0eWxlT2JqKTp2b2lkIHtcblx0XHR0aGlzLl9jc3NEZWZhdWx0cy5zZXRpdGVtKHN0eWxlT2JqKTtcblx0fVxuXG5cblx0cmVzaXplQm94KCk6dm9pZCB7XG5cdFx0dGhpcy5mbGV4Q29udGFpbmVyLnJlc2l6ZUNvbnRhaW5lcigpO1xuXHR9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==