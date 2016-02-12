var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var FlexItem_1 = require('../models/FlexItem');
var CSSDefaults_1 = require("./CSSDefaults");
var core_1 = require("angular2/core");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0ZsZXhJdGVtRmFjdG9yeS50cyJdLCJuYW1lcyI6WyJGbGV4SXRlbUZhY3RvcnkiLCJGbGV4SXRlbUZhY3RvcnkuY29uc3RydWN0b3IiLCJGbGV4SXRlbUZhY3RvcnkuY3JlYXRlIiwiRmxleEl0ZW1GYWN0b3J5LnNldERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlCQUF1QixvQkFBb0IsQ0FBQyxDQUFBO0FBQzVDLDRCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsSUFBSSxlQUFlLEdBQUc7SUFDckIsSUFBSSxFQUFFLFVBQVU7SUFDaEIsS0FBSyxFQUFFLE9BQU87SUFDZCxLQUFLLEVBQUUsQ0FBQztDQUNSLENBQUM7QUFFRjtJQUlDQSx5QkFBb0JBLFlBQXdCQTtRQUF4QkMsaUJBQVlBLEdBQVpBLFlBQVlBLENBQVlBO1FBQzNDQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxlQUFlQSxDQUFDQTtJQUN4Q0EsQ0FBQ0E7SUFFREQsZ0NBQU1BLEdBQU5BLFVBQU9BLE1BQU1BLEVBQUVBLE9BQU9BO1FBQ3JCRSxJQUFJQSxhQUFhQSxHQUFHQSxNQUFNQSxJQUFJQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtRQUMxREEsSUFBSUEsZUFBZUEsR0FBR0EsT0FBT0EsSUFBSUEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7UUFDdERBLE1BQU1BLENBQUNBLElBQUlBLG1CQUFRQSxDQUFDQSxhQUFhQSxFQUFFQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUNyREEsQ0FBQ0E7SUFFREYsb0NBQVVBLEdBQVZBLFVBQVdBLEdBQUdBO1FBQ2JHLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO0lBQ3JDQSxDQUFDQTtJQWhCRkg7UUFBQ0EsaUJBQVVBLEVBQUVBOzt3QkFpQlpBO0lBQURBLHNCQUFDQTtBQUFEQSxDQWpCQSxBQWlCQ0EsSUFBQTtBQWhCWSx1QkFBZSxrQkFnQjNCLENBQUEiLCJmaWxlIjoic2VydmljZXMvRmxleEl0ZW1GYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGbGV4SXRlbX0gZnJvbSAnLi4vbW9kZWxzL0ZsZXhJdGVtJztcbmltcG9ydCB7Q1NTRGVmYXVsdHN9IGZyb20gXCIuL0NTU0RlZmF1bHRzXCI7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbnZhciBkaXNwbGF5RGVmYXVsdHMgPSB7XG5cdHZpZXc6ICdzZXR0aW5ncycsXG5cdHN0YXRlOiAnZml4ZWQnLFxuXHRsb3JlbTogNVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZsZXhJdGVtRmFjdG9yeSB7XG5cdC8vIGV2ZW50dWFsbHkgdmFsaWRhdGUgd2l0aCBhIHZhbGlkYXRlIG1ldGhvZFxuXHRwdWJsaWMgZGlzcGxheURlZmF1bHRzOiBhbnk7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2Nzc0RlZmF1bHRzOkNTU0RlZmF1bHRzKSB7XG5cdFx0dGhpcy5kaXNwbGF5RGVmYXVsdHMgPSBkaXNwbGF5RGVmYXVsdHM7XG5cdH1cblxuXHRjcmVhdGUoc3R5bGVzLCBkaXNwbGF5KSB7XG5cdFx0bGV0IHN0eWxlRGVmYXVsdHMgPSBzdHlsZXMgfHwgdGhpcy5fY3NzRGVmYXVsdHMuZ2V0aXRlbSgpO1xuXHRcdGxldCBkaXNwbGF5RGVmYXVsdHMgPSBkaXNwbGF5IHx8IHRoaXMuZGlzcGxheURlZmF1bHRzO1xuXHRcdHJldHVybiBuZXcgRmxleEl0ZW0oc3R5bGVEZWZhdWx0cywgZGlzcGxheURlZmF1bHRzKTtcblx0fVxuXG5cdHNldERlZmF1bHQoY2ZnKXtcblx0XHRfLmFzc2lnbih0aGlzLmRpc3BsYXlEZWZhdWx0cywgY2ZnKTtcblx0fVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=