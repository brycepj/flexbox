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
var PropsToSelectors = (function () {
    function PropsToSelectors() {
    }
    PropsToSelectors.prototype.transform = function (styles) {
        var kebabStyles = {};
        _.forIn(styles, function (styleValue, styleProp) {
            var convertedKey = _.kebabCase(styleProp);
            kebabStyles[convertedKey] = styleValue;
        });
        return kebabStyles;
    };
    PropsToSelectors = __decorate([
        core_1.Pipe({ name: 'PropsToSelectors' }), 
        __metadata('design:paramtypes', [])
    ], PropsToSelectors);
    return PropsToSelectors;
})();
exports.PropsToSelectors = PropsToSelectors;
var DerpPipe = (function () {
    function DerpPipe() {
    }
    DerpPipe.prototype.transform = function (value, args) {
        return Array.from(value);
    };
    DerpPipe = __decorate([
        core_1.Pipe({ name: 'derp' }), 
        __metadata('design:paramtypes', [])
    ], DerpPipe);
    return DerpPipe;
})();
exports.DerpPipe = DerpPipe;
var IndexDisplay = (function () {
    function IndexDisplay() {
    }
    IndexDisplay.prototype.transform = function (value) {
        return value + 1;
    };
    IndexDisplay = __decorate([
        core_1.Pipe({ name: 'IndexDisplay' }), 
        __metadata('design:paramtypes', [])
    ], IndexDisplay);
    return IndexDisplay;
})();
exports.IndexDisplay = IndexDisplay;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3BpcGVzLnRzIl0sIm5hbWVzIjpbIlByb3BzVG9TZWxlY3RvcnMiLCJQcm9wc1RvU2VsZWN0b3JzLmNvbnN0cnVjdG9yIiwiUHJvcHNUb1NlbGVjdG9ycy50cmFuc2Zvcm0iLCJEZXJwUGlwZSIsIkRlcnBQaXBlLmNvbnN0cnVjdG9yIiwiRGVycFBpcGUudHJhbnNmb3JtIiwiSW5kZXhEaXNwbGF5IiwiSW5kZXhEaXNwbGF5LmNvbnN0cnVjdG9yIiwiSW5kZXhEaXNwbGF5LnRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR2xEO0lBQUFBO0lBVUFDLENBQUNBO0lBUkFELG9DQUFTQSxHQUFUQSxVQUFVQSxNQUFnQ0E7UUFDekNFLElBQUlBLFdBQVdBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ3JCQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFVQSxVQUFVQSxFQUFFQSxTQUFTQTtZQUM5QyxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDeEMsQ0FBQyxDQUFDQSxDQUFDQTtRQUNIQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQTtJQUNwQkEsQ0FBQ0E7SUFURkY7UUFBQ0EsV0FBSUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBQ0Esa0JBQWtCQSxFQUFDQSxDQUFDQTs7eUJBVS9CQTtJQUFEQSx1QkFBQ0E7QUFBREEsQ0FWQSxBQVVDQSxJQUFBO0FBVFksd0JBQWdCLG1CQVM1QixDQUFBO0FBRUQ7SUFBQUc7SUFLQUMsQ0FBQ0E7SUFIQUQsNEJBQVNBLEdBQVRBLFVBQVdBLEtBQUtBLEVBQUVBLElBQUlBO1FBQ3JCRSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUMxQkEsQ0FBQ0E7SUFKRkY7UUFBQ0EsV0FBSUEsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsQ0FBQ0E7O2lCQUt0QkE7SUFBREEsZUFBQ0E7QUFBREEsQ0FMQSxBQUtDQSxJQUFBO0FBSlksZ0JBQVEsV0FJcEIsQ0FBQTtBQUVEO0lBQUFHO0lBS0FDLENBQUNBO0lBSEFELGdDQUFTQSxHQUFUQSxVQUFVQSxLQUFLQTtRQUNkRSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUNsQkEsQ0FBQ0E7SUFKRkY7UUFBQ0EsV0FBSUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsY0FBY0EsRUFBQ0EsQ0FBQ0E7O3FCQUs1QkE7SUFBREEsbUJBQUNBO0FBQURBLENBTEEsQUFLQ0EsSUFBQTtBQUpZLG9CQUFZLGVBSXhCLENBQUEiLCJmaWxlIjoidXRpbHMvcGlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDc3NTdHlsZUZsZXhHZW5lcmljU3R5bGVzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5AUGlwZSh7bmFtZTonUHJvcHNUb1NlbGVjdG9ycyd9KVxuZXhwb3J0IGNsYXNzIFByb3BzVG9TZWxlY3RvcnMgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblx0dHJhbnNmb3JtKHN0eWxlczpDc3NTdHlsZUZsZXhHZW5lcmljU3R5bGVzKSB7XG5cdFx0dmFyIGtlYmFiU3R5bGVzID0ge307XG5cdFx0Xy5mb3JJbihzdHlsZXMsIGZ1bmN0aW9uIChzdHlsZVZhbHVlLCBzdHlsZVByb3ApIHtcblx0XHRcdGxldCBjb252ZXJ0ZWRLZXkgPSBfLmtlYmFiQ2FzZShzdHlsZVByb3ApO1xuXHRcdFx0a2ViYWJTdHlsZXNbY29udmVydGVkS2V5XSA9IHN0eWxlVmFsdWU7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGtlYmFiU3R5bGVzO1xuXHR9XG59XG5cbkBQaXBlKHsgbmFtZTogJ2RlcnAnIH0pXG5leHBvcnQgY2xhc3MgRGVycFBpcGUge1xuXHR0cmFuc2Zvcm0gKHZhbHVlLCBhcmdzKSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xuXHR9XG59XG5cbkBQaXBlKHtuYW1lOiAnSW5kZXhEaXNwbGF5J30pXG5leHBvcnQgY2xhc3MgSW5kZXhEaXNwbGF5IHtcblx0dHJhbnNmb3JtKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHZhbHVlICsgMTtcblx0fVxufVxuXG4vL0BQaXBlKHtuYW1lOiAnZXNjYXBlSHRtbCcsIHB1cmU6IGZhbHNlfSlcbi8vZXhwb3J0IGNsYXNzIEVzY2FwZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4vL1x0dHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M6IGFueVtdID0gW10pIHtcbi8vXHRcdC8vIEVzY2FwZSAndmFsdWUnIGFuZCByZXR1cm4gaXRcbi8vXHR9XG4vL30iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=