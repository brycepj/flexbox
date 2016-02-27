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
var CSSDefaults_1 = require('./CSSDefaults');
var FlexItem_1 = require('../models/FlexItem');
var displayDefaults = {
    view: 'settings',
    state: 'fixed',
    lorem: 5
};
var FlexItemFactory = (function () {
    function FlexItemFactory(_cssDefaults) {
        this._cssDefaults = _cssDefaults;
        this.displayDefaults = displayDefaults;
    }
    FlexItemFactory.prototype.create = function (styles, display) {
        var styleDefaults = styles || this._cssDefaults.getitem();
        var displayDefaults = display || this.displayDefaults;
        return new FlexItem_1.FlexItem(styleDefaults, displayDefaults);
    };
    FlexItemFactory.prototype.setDefault = function (cfg) {
        _.assign(this.displayDefaults, cfg);
    };
    FlexItemFactory = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [CSSDefaults_1.CSSDefaults])
    ], FlexItemFactory);
    return FlexItemFactory;
})();
exports.FlexItemFactory = FlexItemFactory;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0ZsZXhJdGVtRmFjdG9yeS50cyJdLCJuYW1lcyI6WyJGbGV4SXRlbUZhY3RvcnkiLCJGbGV4SXRlbUZhY3RvcnkuY29uc3RydWN0b3IiLCJGbGV4SXRlbUZhY3RvcnkuY3JlYXRlIiwiRmxleEl0ZW1GYWN0b3J5LnNldERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyw0QkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMseUJBQXVCLG9CQUFvQixDQUFDLENBQUE7QUFFNUMsSUFBSSxlQUFlLEdBQUc7SUFDckIsSUFBSSxFQUFFLFVBQVU7SUFDaEIsS0FBSyxFQUFFLE9BQU87SUFDZCxLQUFLLEVBQUUsQ0FBQztDQUNSLENBQUM7QUFFRjtJQUlDQSx5QkFBb0JBLFlBQXdCQTtRQUF4QkMsaUJBQVlBLEdBQVpBLFlBQVlBLENBQVlBO1FBQzNDQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxlQUFlQSxDQUFDQTtJQUN4Q0EsQ0FBQ0E7SUFFREQsZ0NBQU1BLEdBQU5BLFVBQU9BLE1BQU9BLEVBQUVBLE9BQVFBO1FBQ3ZCRSxJQUFJQSxhQUFhQSxHQUFHQSxNQUFNQSxJQUFJQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtRQUMxREEsSUFBSUEsZUFBZUEsR0FBR0EsT0FBT0EsSUFBSUEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7UUFDdERBLE1BQU1BLENBQUNBLElBQUlBLG1CQUFRQSxDQUFDQSxhQUFhQSxFQUFFQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUNyREEsQ0FBQ0E7SUFFREYsb0NBQVVBLEdBQVZBLFVBQVdBLEdBQUdBO1FBQ2JHLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO0lBQ3JDQSxDQUFDQTtJQWhCRkg7UUFBQ0EsaUJBQVVBLEVBQUVBOzt3QkFpQlpBO0lBQURBLHNCQUFDQTtBQUFEQSxDQWpCQSxBQWlCQ0EsSUFBQTtBQWhCWSx1QkFBZSxrQkFnQjNCLENBQUEiLCJmaWxlIjoic2VydmljZXMvRmxleEl0ZW1GYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgXzphbnk7XG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NTU0RlZmF1bHRzfSBmcm9tICcuL0NTU0RlZmF1bHRzJztcbmltcG9ydCB7RmxleEl0ZW19IGZyb20gJy4uL21vZGVscy9GbGV4SXRlbSc7XG5cbnZhciBkaXNwbGF5RGVmYXVsdHMgPSB7XG5cdHZpZXc6ICdzZXR0aW5ncycsXG5cdHN0YXRlOiAnZml4ZWQnLFxuXHRsb3JlbTogNVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZsZXhJdGVtRmFjdG9yeSB7XG5cdC8vIGV2ZW50dWFsbHkgdmFsaWRhdGUgd2l0aCBhIHZhbGlkYXRlIG1ldGhvZFxuXHRwdWJsaWMgZGlzcGxheURlZmF1bHRzOiBhbnk7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2Nzc0RlZmF1bHRzOkNTU0RlZmF1bHRzKSB7XG5cdFx0dGhpcy5kaXNwbGF5RGVmYXVsdHMgPSBkaXNwbGF5RGVmYXVsdHM7XG5cdH1cblxuXHRjcmVhdGUoc3R5bGVzPywgZGlzcGxheT8pIHtcblx0XHRsZXQgc3R5bGVEZWZhdWx0cyA9IHN0eWxlcyB8fCB0aGlzLl9jc3NEZWZhdWx0cy5nZXRpdGVtKCk7XG5cdFx0bGV0IGRpc3BsYXlEZWZhdWx0cyA9IGRpc3BsYXkgfHwgdGhpcy5kaXNwbGF5RGVmYXVsdHM7XG5cdFx0cmV0dXJuIG5ldyBGbGV4SXRlbShzdHlsZURlZmF1bHRzLCBkaXNwbGF5RGVmYXVsdHMpO1xuXHR9XG5cblx0c2V0RGVmYXVsdChjZmcpIHtcblx0XHRfLmFzc2lnbih0aGlzLmRpc3BsYXlEZWZhdWx0cywgY2ZnKTtcblx0fVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=