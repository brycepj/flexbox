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
var Local = (function () {
    function Local() {
        this._exists = _.keys(store.getAll()).length > 0;
    }
    Object.defineProperty(Local.prototype, "exists", {
        get: function () {
            return this._exists;
        },
        enumerable: true,
        configurable: true
    });
    Local.prototype.getitemsList = function () {
        return store.get('itemsList');
    };
    Local.prototype.setitemsList = function (items) {
        store.set('itemsList', items);
    };
    Local.prototype.getitemDefaults = function () {
        return store.get('itemDefaults');
    };
    Local.prototype.setitemDefaults = function (itemObj) {
        store.set('itemDefaults', itemObj);
    };
    Local.prototype.getcontainerDefaults = function () {
        return store.get('containerDefaults');
    };
    Local.prototype.setcontainerDefaults = function (containerObj) {
        store.set('containerDefaults', containerObj);
    };
    Local = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Local);
    return Local;
})();
exports.Local = Local;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0xvY2FsU3RvcmFnZS50cyJdLCJuYW1lcyI6WyJMb2NhbCIsIkxvY2FsLmNvbnN0cnVjdG9yIiwiTG9jYWwuZXhpc3RzIiwiTG9jYWwuZ2V0aXRlbXNMaXN0IiwiTG9jYWwuc2V0aXRlbXNMaXN0IiwiTG9jYWwuZ2V0aXRlbURlZmF1bHRzIiwiTG9jYWwuc2V0aXRlbURlZmF1bHRzIiwiTG9jYWwuZ2V0Y29udGFpbmVyRGVmYXVsdHMiLCJMb2NhbC5zZXRjb250YWluZXJEZWZhdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDO0lBR0NBO1FBQ0NDLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO0lBQ2xEQSxDQUFDQTtJQUVERCxzQkFBSUEseUJBQU1BO2FBQVZBO1lBQ0NFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBO1FBQ3JCQSxDQUFDQTs7O09BQUFGO0lBRURBLDRCQUFZQSxHQUFaQTtRQUNDRyxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtJQUMvQkEsQ0FBQ0E7SUFFREgsNEJBQVlBLEdBQVpBLFVBQWFBLEtBQVNBO1FBQ3JCSSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxXQUFXQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUMvQkEsQ0FBQ0E7SUFFREosK0JBQWVBLEdBQWZBO1FBQ0NLLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO0lBQ2xDQSxDQUFDQTtJQUVETCwrQkFBZUEsR0FBZkEsVUFBZ0JBLE9BQVdBO1FBQzFCTSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxjQUFjQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUNwQ0EsQ0FBQ0E7SUFFRE4sb0NBQW9CQSxHQUFwQkE7UUFDQ08sTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFFRFAsb0NBQW9CQSxHQUFwQkEsVUFBcUJBLFlBQWdCQTtRQUNwQ1EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxZQUFZQSxDQUFDQSxDQUFDQTtJQUM5Q0EsQ0FBQ0E7SUFqQ0ZSO1FBQUNBLGlCQUFVQSxFQUFFQTs7Y0FrQ1pBO0lBQURBLFlBQUNBO0FBQURBLENBbENBLEFBa0NDQSxJQUFBO0FBakNZLGFBQUssUUFpQ2pCLENBQUEiLCJmaWxlIjoic2VydmljZXMvTG9jYWxTdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgc3RvcmU6YW55O1xuZGVjbGFyZSB2YXIgXzphbnk7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWwge1xuXHRwcml2YXRlIF9leGlzdHM6Qm9vbGVhbjtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5fZXhpc3RzID0gXy5rZXlzKHN0b3JlLmdldEFsbCgpKS5sZW5ndGggPiAwO1xuXHR9XG5cblx0Z2V0IGV4aXN0cygpOkJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9leGlzdHM7XG5cdH1cblxuXHRnZXRpdGVtc0xpc3QoKTphbnkge1xuXHRcdHJldHVybiBzdG9yZS5nZXQoJ2l0ZW1zTGlzdCcpO1xuXHR9XG5cblx0c2V0aXRlbXNMaXN0KGl0ZW1zOmFueSkge1xuXHRcdHN0b3JlLnNldCgnaXRlbXNMaXN0JywgaXRlbXMpO1xuXHR9XG5cblx0Z2V0aXRlbURlZmF1bHRzKCk6YW55IHtcblx0XHRyZXR1cm4gc3RvcmUuZ2V0KCdpdGVtRGVmYXVsdHMnKTtcblx0fVxuXG5cdHNldGl0ZW1EZWZhdWx0cyhpdGVtT2JqOmFueSkge1xuXHRcdHN0b3JlLnNldCgnaXRlbURlZmF1bHRzJywgaXRlbU9iaik7XG5cdH1cblxuXHRnZXRjb250YWluZXJEZWZhdWx0cygpOmFueSB7XG5cdFx0cmV0dXJuIHN0b3JlLmdldCgnY29udGFpbmVyRGVmYXVsdHMnKTtcblx0fVxuXG5cdHNldGNvbnRhaW5lckRlZmF1bHRzKGNvbnRhaW5lck9iajphbnkpIHtcblx0XHRzdG9yZS5zZXQoJ2NvbnRhaW5lckRlZmF1bHRzJywgY29udGFpbmVyT2JqKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9