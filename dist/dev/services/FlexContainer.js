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
var data_1 = require('../utils/data');
var FlexItemFactory_1 = require('../services/FlexItemFactory');
var FlexContainer = (function () {
    function FlexContainer(_flexItemFactory) {
        this._flexItemFactory = _flexItemFactory;
        this.list = [];
        this.styles = data_1.containerDefaults;
        this.styleOptions = data_1.containerOptions;
    }
    FlexContainer.prototype.createFlexItem = function () {
        if (this.list.length === 0) {
            this.hideMasthead();
        }
        var newItem = this._flexItemFactory.create();
        newItem['index'] = this.list.length;
        this.list.push(newItem);
    };
    FlexContainer.prototype.removeItem = function (idx) {
        var list = this.list;
        if (idx) {
            list.pop(idx);
        }
        else {
            list.pop();
        }
    };
    FlexContainer.prototype.removeAll = function () {
        this.list = [];
    };
    FlexContainer.prototype.resizeContainer = function () {
        var notEmpty = this.list.length > 0;
        if (notEmpty) {
            this.collapseContainer();
        }
    };
    FlexContainer.prototype.collapseContainer = function () {
        var self = this;
        setTimeout(function () {
            var width = self.styles.width;
            var cur = Number(width.substr(0, width.length - 1));
            var bottom = 45;
            if (cur > bottom) {
                self.styles.width = cur - .25 + '%';
                self.collapseContainer();
            }
            else {
                self.expandContainer();
            }
        }, 5);
    };
    FlexContainer.prototype.expandContainer = function () {
        var self = this;
        setTimeout(function () {
            var width = self.styles.width;
            var cur = Number(width.substr(0, width.length - 1));
            var top = 100;
            if (cur < top) {
                self.styles.width = cur + .25 + '%';
                self.expandContainer();
            }
        }, 5);
    };
    FlexContainer.prototype.hideMasthead = function () {
        document.querySelector('.masthead').className += ' hidden';
    };
    FlexContainer = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [FlexItemFactory_1.FlexItemFactory])
    ], FlexContainer);
    return FlexContainer;
})();
exports.FlexContainer = FlexContainer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0ZsZXhDb250YWluZXIudHMiXSwibmFtZXMiOlsiRmxleENvbnRhaW5lciIsIkZsZXhDb250YWluZXIuY29uc3RydWN0b3IiLCJGbGV4Q29udGFpbmVyLmNyZWF0ZUZsZXhJdGVtIiwiRmxleENvbnRhaW5lci5yZW1vdmVJdGVtIiwiRmxleENvbnRhaW5lci5yZW1vdmVBbGwiLCJGbGV4Q29udGFpbmVyLnJlc2l6ZUNvbnRhaW5lciIsIkZsZXhDb250YWluZXIuY29sbGFwc2VDb250YWluZXIiLCJGbGV4Q29udGFpbmVyLmV4cGFuZENvbnRhaW5lciIsIkZsZXhDb250YWluZXIuaGlkZU1hc3RoZWFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQWtELGVBQWUsQ0FBQyxDQUFBO0FBQ2xFLGdDQUE4Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRTVEO0lBS0NBLHVCQUFvQkEsZ0JBQWlDQTtRQUFqQ0MscUJBQWdCQSxHQUFoQkEsZ0JBQWdCQSxDQUFpQkE7UUFIOUNBLFNBQUlBLEdBQU9BLEVBQUVBLENBQUNBO1FBSXBCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSx3QkFBaUJBLENBQUNBO1FBQ2hDQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSx1QkFBZ0JBLENBQUNBO0lBQ3RDQSxDQUFDQTtJQUVERCxzQ0FBY0EsR0FBZEE7UUFDQ0UsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDNUJBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBO1FBQ3JCQSxDQUFDQTtRQUNEQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1FBQzdDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxD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Q0EsSUFBQTtBQXRFWSxxQkFBYSxnQkFzRXpCLENBQUEiLCJmaWxlIjoic2VydmljZXMvRmxleENvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmxleEl0ZW19IGZyb20gJy4vLi4vbW9kZWxzL0ZsZXhJdGVtJztcbmltcG9ydCB7Q1NTRGVmYXVsdHN9IGZyb20gJy4vQ1NTRGVmYXVsdHMnO1xuaW1wb3J0IHtDc3NTdHlsZVBhaXJDb250YWluZXJ9IGZyb20gJy4uL3V0aWxzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtMb2NhbH0gZnJvbSAnLi9Mb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHtJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Y29udGFpbmVyT3B0aW9ucywgY29udGFpbmVyRGVmYXVsdHN9IGZyb20gJy4uL3V0aWxzL2RhdGEnO1xuaW1wb3J0IHtGbGV4SXRlbUZhY3Rvcnl9IGZyb20gJy4uL3NlcnZpY2VzL0ZsZXhJdGVtRmFjdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGbGV4Q29udGFpbmVyIHtcblx0cHVibGljIGxpc3Q6YW55ID0gW107XG5cdHB1YmxpYyBzdHlsZXM6IGFueTtcblx0cHVibGljIHN0eWxlT3B0aW9uczogYW55O1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9mbGV4SXRlbUZhY3Rvcnk6IEZsZXhJdGVtRmFjdG9yeSkge1xuXHRcdHRoaXMuc3R5bGVzID0gY29udGFpbmVyRGVmYXVsdHM7XG5cdFx0dGhpcy5zdHlsZU9wdGlvbnMgPSBjb250YWluZXJPcHRpb25zO1xuXHR9XG5cblx0Y3JlYXRlRmxleEl0ZW0oKSB7XG5cdFx0aWYgKHRoaXMubGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuaGlkZU1hc3RoZWFkKCk7XG5cdFx0fVxuXHRcdGxldCBuZXdJdGVtID0gdGhpcy5fZmxleEl0ZW1GYWN0b3J5LmNyZWF0ZSgpO1xuXHRcdG5ld0l0ZW1bJ2luZGV4J10gPSB0aGlzLmxpc3QubGVuZ3RoO1xuXHRcdHRoaXMubGlzdC5wdXNoKG5ld0l0ZW0pO1xuXHR9XG5cblx0cmVtb3ZlSXRlbShpZHg/Om51bWJlcik6dm9pZCB7XG5cdFx0bGV0IGxpc3QgPSB0aGlzLmxpc3Q7XG5cdFx0aWYgKGlkeCkge1xuXHRcdFx0bGlzdC5wb3AoaWR4KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGlzdC5wb3AoKTtcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVBbGwoKTp2b2lkIHtcblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0fVxuXG5cdHJlc2l6ZUNvbnRhaW5lcigpe1xuXHRcdC8vIHdhaXRpbmcgb24gbmcyIGFuaW1hdGlvbiBBUElzXG5cdFx0bGV0IG5vdEVtcHR5ID0gdGhpcy5saXN0Lmxlbmd0aCA+IDA7XG5cdFx0aWYgKG5vdEVtcHR5KSB7XG5cdFx0XHR0aGlzLmNvbGxhcHNlQ29udGFpbmVyKCk7XG5cdFx0fVxuXHR9XG5cdHByaXZhdGUgY29sbGFwc2VDb250YWluZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHdpZHRoID0gc2VsZi5zdHlsZXMud2lkdGg7XG5cdFx0XHRsZXQgY3VyID0gTnVtYmVyKHdpZHRoLnN1YnN0cigwLCB3aWR0aC5sZW5ndGgtMSkpO1xuXHRcdFx0bGV0IGJvdHRvbSA9IDQ1O1xuXHRcdFx0aWYgKGN1ciA+IGJvdHRvbSkge1xuXHRcdFx0XHRzZWxmLnN0eWxlcy53aWR0aCA9IGN1ciAtIC4yNSArICclJztcblx0XHRcdFx0c2VsZi5jb2xsYXBzZUNvbnRhaW5lcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5leHBhbmRDb250YWluZXIoKVxuXHRcdFx0fVxuXG5cdFx0fSwgNSk7XG5cdH1cblx0cHJpdmF0ZSBleHBhbmRDb250YWluZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHdpZHRoID0gc2VsZi5zdHlsZXMud2lkdGg7XG5cdFx0XHRsZXQgY3VyID0gTnVtYmVyKHdpZHRoLnN1YnN0cigwLCB3aWR0aC5sZW5ndGgtMSkpO1xuXHRcdFx0bGV0IHRvcCA9IDEwMDtcblx0XHRcdGlmIChjdXIgPCB0b3ApIHtcblx0XHRcdFx0c2VsZi5zdHlsZXMud2lkdGggPSBjdXIgKyAuMjUgKyAnJSc7XG5cdFx0XHRcdHNlbGYuZXhwYW5kQ29udGFpbmVyKCk7XG5cdFx0XHR9XG5cdFx0fSwgNSk7XG5cdH1cblx0Ly8gZ3Jvc3MgaGFjayEhXG5cdGhpZGVNYXN0aGVhZCgpe1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXN0aGVhZCcpLmNsYXNzTmFtZSArPSAnIGhpZGRlbic7XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=