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
var FlexItemFactory_1 = require('../services/FlexItemFactory');
var data_1 = require('../utils/data');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0ZsZXhDb250YWluZXIudHMiXSwibmFtZXMiOlsiRmxleENvbnRhaW5lciIsIkZsZXhDb250YWluZXIuY29uc3RydWN0b3IiLCJGbGV4Q29udGFpbmVyLmNyZWF0ZUZsZXhJdGVtIiwiRmxleENvbnRhaW5lci5yZW1vdmVJdGVtIiwiRmxleENvbnRhaW5lci5yZW1vdmVBbGwiLCJGbGV4Q29udGFpbmVyLnJlc2l6ZUNvbnRhaW5lciIsIkZsZXhDb250YWluZXIuY29sbGFwc2VDb250YWluZXIiLCJGbGV4Q29udGFpbmVyLmV4cGFuZENvbnRhaW5lciIsIkZsZXhDb250YWluZXIuaGlkZU1hc3RoZWFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsZ0NBQThCLDZCQUE2QixDQUFDLENBQUE7QUFDNUQscUJBQWtELGVBQWUsQ0FBQyxDQUFBO0FBRWxFO0lBS0NBLHVCQUFvQkEsZ0JBQWlDQTtRQUFqQ0MscUJBQWdCQSxHQUFoQkEsZ0JBQWdCQSxDQUFpQkE7UUFIOUNBLFNBQUlBLEdBQU9BLEVBQUVBLENBQUNBO1FBSXBCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSx3QkFBaUJBLENBQUNBO1FBQ2hDQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSx1QkFBZ0JBLENBQUNBO0lBQ3RDQSxDQUFDQTtJQUVERCxzQ0FBY0EsR0FBZEE7UUFDQ0UsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDNUJBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBO1FBQ3JCQSxDQUFDQTtRQUNEQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1FBQzdDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxD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QSxJQUFBO0FBdEVZLHFCQUFhLGdCQXNFekIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9GbGV4Q29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RmxleEl0ZW1GYWN0b3J5fSBmcm9tICcuLi9zZXJ2aWNlcy9GbGV4SXRlbUZhY3RvcnknO1xuaW1wb3J0IHtjb250YWluZXJPcHRpb25zLCBjb250YWluZXJEZWZhdWx0c30gZnJvbSAnLi4vdXRpbHMvZGF0YSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGbGV4Q29udGFpbmVyIHtcblx0cHVibGljIGxpc3Q6YW55ID0gW107XG5cdHB1YmxpYyBzdHlsZXM6IGFueTtcblx0cHVibGljIHN0eWxlT3B0aW9uczogYW55O1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9mbGV4SXRlbUZhY3Rvcnk6IEZsZXhJdGVtRmFjdG9yeSkge1xuXHRcdHRoaXMuc3R5bGVzID0gY29udGFpbmVyRGVmYXVsdHM7XG5cdFx0dGhpcy5zdHlsZU9wdGlvbnMgPSBjb250YWluZXJPcHRpb25zO1xuXHR9XG5cblx0Y3JlYXRlRmxleEl0ZW0oKSB7XG5cdFx0aWYgKHRoaXMubGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuaGlkZU1hc3RoZWFkKCk7XG5cdFx0fVxuXHRcdGxldCBuZXdJdGVtID0gdGhpcy5fZmxleEl0ZW1GYWN0b3J5LmNyZWF0ZSgpO1xuXHRcdG5ld0l0ZW1bJ2luZGV4J10gPSB0aGlzLmxpc3QubGVuZ3RoO1xuXHRcdHRoaXMubGlzdC5wdXNoKG5ld0l0ZW0pO1xuXHR9XG5cblx0cmVtb3ZlSXRlbShpZHg/Om51bWJlcik6dm9pZCB7XG5cdFx0bGV0IGxpc3QgPSB0aGlzLmxpc3Q7XG5cdFx0aWYgKGlkeCkge1xuXHRcdFx0bGlzdC5wb3AoaWR4KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGlzdC5wb3AoKTtcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVBbGwoKTp2b2lkIHtcblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0fVxuXG5cdHJlc2l6ZUNvbnRhaW5lcigpIHtcblx0XHQvLyB3YWl0aW5nIG9uIG5nMiBhbmltYXRpb24gQVBJc1xuXHRcdGxldCBub3RFbXB0eSA9IHRoaXMubGlzdC5sZW5ndGggPiAwO1xuXHRcdGlmIChub3RFbXB0eSkge1xuXHRcdFx0dGhpcy5jb2xsYXBzZUNvbnRhaW5lcigpO1xuXHRcdH1cblx0fVxuXHRjb2xsYXBzZUNvbnRhaW5lcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgd2lkdGggPSBzZWxmLnN0eWxlcy53aWR0aDtcblx0XHRcdGxldCBjdXIgPSBOdW1iZXIod2lkdGguc3Vic3RyKDAsIHdpZHRoLmxlbmd0aC0xKSk7XG5cdFx0XHRsZXQgYm90dG9tID0gNDU7XG5cdFx0XHRpZiAoY3VyID4gYm90dG9tKSB7XG5cdFx0XHRcdHNlbGYuc3R5bGVzLndpZHRoID0gY3VyIC0gLjI1ICsgJyUnO1xuXHRcdFx0XHRzZWxmLmNvbGxhcHNlQ29udGFpbmVyKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLmV4cGFuZENvbnRhaW5lcigpO1xuXHRcdFx0fVxuXG5cdFx0fSwgNSk7XG5cdH1cblx0ZXhwYW5kQ29udGFpbmVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCB3aWR0aCA9IHNlbGYuc3R5bGVzLndpZHRoO1xuXHRcdFx0bGV0IGN1ciA9IE51bWJlcih3aWR0aC5zdWJzdHIoMCwgd2lkdGgubGVuZ3RoLTEpKTtcblx0XHRcdGxldCB0b3AgPSAxMDA7XG5cdFx0XHRpZiAoY3VyIDwgdG9wKSB7XG5cdFx0XHRcdHNlbGYuc3R5bGVzLndpZHRoID0gY3VyICsgLjI1ICsgJyUnO1xuXHRcdFx0XHRzZWxmLmV4cGFuZENvbnRhaW5lcigpO1xuXHRcdFx0fVxuXHRcdH0sIDUpO1xuXHR9XG5cdC8vIGdyb3NzIGhhY2shIVxuXHRoaWRlTWFzdGhlYWQoKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc3RoZWFkJykuY2xhc3NOYW1lICs9ICcgaGlkZGVuJztcblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==