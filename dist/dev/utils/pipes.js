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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3BpcGVzLnRzIl0sIm5hbWVzIjpbIlByb3BzVG9TZWxlY3RvcnMiLCJQcm9wc1RvU2VsZWN0b3JzLmNvbnN0cnVjdG9yIiwiUHJvcHNUb1NlbGVjdG9ycy50cmFuc2Zvcm0iLCJEZXJwUGlwZSIsIkRlcnBQaXBlLmNvbnN0cnVjdG9yIiwiRGVycFBpcGUudHJhbnNmb3JtIiwiSW5kZXhEaXNwbGF5IiwiSW5kZXhEaXNwbGF5LmNvbnN0cnVjdG9yIiwiSW5kZXhEaXNwbGF5LnRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR2xEO0lBQUFBO0lBVUFDLENBQUNBO0lBUkFELG9DQUFTQSxHQUFUQSxVQUFVQSxNQUFnQ0E7UUFDekNFLElBQUlBLFdBQVdBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ3JCQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFVQSxVQUFVQSxFQUFFQSxTQUFTQTtZQUM5QyxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDeEMsQ0FBQyxDQUFDQSxDQUFDQTtRQUNIQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQTtJQUNwQkEsQ0FBQ0E7SUFURkY7UUFBQ0EsV0FBSUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBQ0Esa0JBQWtCQSxFQUFDQSxDQUFDQTs7eUJBVS9CQTtJQUFEQSx1QkFBQ0E7QUFBREEsQ0FWQSxBQVVDQSxJQUFBO0FBVFksd0JBQWdCLG1CQVM1QixDQUFBO0FBRUQ7SUFBQUc7SUFLQUMsQ0FBQ0E7SUFIQUQsNEJBQVNBLEdBQVRBLFVBQVdBLEtBQUtBLEVBQUVBLElBQUlBO1FBQ3JCRSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUMxQkEsQ0FBQ0E7SUFKRkY7UUFBQ0EsV0FBSUEsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsQ0FBQ0E7O2lCQUt0QkE7SUFBREEsZUFBQ0E7QUFBREEsQ0FMQSxBQUtDQSxJQUFBO0FBSlksZ0JBQVEsV0FJcEIsQ0FBQTtBQUVEO0lBQUFHO0lBS0FDLENBQUNBO0lBSEFELGdDQUFTQSxHQUFUQSxVQUFVQSxLQUFLQTtRQUNkRSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUNsQkEsQ0FBQ0E7SUFKRkY7UUFBQ0EsV0FBSUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsY0FBY0EsRUFBQ0EsQ0FBQ0E7O3FCQUs1QkE7SUFBREEsbUJBQUNBO0FBQURBLENBTEEsQUFLQ0EsSUFBQTtBQUpZLG9CQUFZLGVBSXhCLENBQUEiLCJmaWxlIjoidXRpbHMvcGlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBfOmFueTtcblxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q3NzU3R5bGVGbGV4R2VuZXJpY1N0eWxlc30gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuQFBpcGUoe25hbWU6J1Byb3BzVG9TZWxlY3RvcnMnfSlcbmV4cG9ydCBjbGFzcyBQcm9wc1RvU2VsZWN0b3JzIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cdHRyYW5zZm9ybShzdHlsZXM6Q3NzU3R5bGVGbGV4R2VuZXJpY1N0eWxlcykge1xuXHRcdHZhciBrZWJhYlN0eWxlcyA9IHt9O1xuXHRcdF8uZm9ySW4oc3R5bGVzLCBmdW5jdGlvbiAoc3R5bGVWYWx1ZSwgc3R5bGVQcm9wKSB7XG5cdFx0XHRsZXQgY29udmVydGVkS2V5ID0gXy5rZWJhYkNhc2Uoc3R5bGVQcm9wKTtcblx0XHRcdGtlYmFiU3R5bGVzW2NvbnZlcnRlZEtleV0gPSBzdHlsZVZhbHVlO1xuXHRcdH0pO1xuXHRcdHJldHVybiBrZWJhYlN0eWxlcztcblx0fVxufVxuXG5AUGlwZSh7IG5hbWU6ICdkZXJwJyB9KVxuZXhwb3J0IGNsYXNzIERlcnBQaXBlIHtcblx0dHJhbnNmb3JtICh2YWx1ZSwgYXJncykge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHZhbHVlKTtcblx0fVxufVxuXG5AUGlwZSh7bmFtZTogJ0luZGV4RGlzcGxheSd9KVxuZXhwb3J0IGNsYXNzIEluZGV4RGlzcGxheSB7XG5cdHRyYW5zZm9ybSh2YWx1ZSkge1xuXHRcdHJldHVybiB2YWx1ZSArIDE7XG5cdH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9