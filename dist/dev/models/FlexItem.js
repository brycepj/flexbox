var wordbank_1 = require('../data/wordbank');
var FlexItem = (function () {
    function FlexItem(styleDefaults, displayDefaults, template) {
        this.wordBank = wordbank_1.wordbank;
        this.styles = styleDefaults;
        this.settings = {
            loremCount: displayDefaults.lorem,
            state: displayDefaults.state,
            view: displayDefaults.view
        };
        this.lorem = displayDefaults.content || this.generateLorem(this.settings.loremCount);
        if (!template) {
            this.setStylesByState();
        }
    }
    FlexItem.prototype.generateLorem = function (count) {
        var self = this;
        var min = 0;
        var max = this.wordBank.length;
        var loremStore = [];
        _.times(count, function () {
            var randomIdx = Math.floor(Math.random() * (max - min + 1)) + min;
            loremStore.push(self.wordBank[randomIdx]);
            self.wordBank.splice(randomIdx, 1);
            max--;
        });
        return loremStore.join(' ');
    };
    FlexItem.prototype.setStylesByState = function () {
        this.settings.state === 'fixed' ? this.makeMeFixed() : this.makeMeFlexy();
    };
    FlexItem.prototype.makeMeFixed = function () {
        var defaultsFixed = {
            'flexGrow': null,
            'flexShrink': null,
            'flexBasis': null,
            width: this.styles.width || '300px'
        };
        _.assign(this.styles, defaultsFixed);
    };
    FlexItem.prototype.makeMeFlexy = function () {
        var defaultsFlexy = {
            flexGrow: '1',
            flexShrink: '0',
            flexBasis: '200px',
            width: null
        };
        _.assign(this.styles, defaultsFlexy);
    };
    return FlexItem;
})();
exports.FlexItem = FlexItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9GbGV4SXRlbS50cyJdLCJuYW1lcyI6WyJGbGV4SXRlbSIsIkZsZXhJdGVtLmNvbnN0cnVjdG9yIiwiRmxleEl0ZW0uZ2VuZXJhdGVMb3JlbSIsIkZsZXhJdGVtLnNldFN0eWxlc0J5U3RhdGUiLCJGbGV4SXRlbS5tYWtlTWVGaXhlZCIsIkZsZXhJdGVtLm1ha2VNZUZsZXh5Il0sIm1hcHBpbmdzIjoiQUFFQSx5QkFBdUIsa0JBQWtCLENBQUMsQ0FBQTtBQUUxQztJQVFDQSxrQkFBWUEsYUFBYUEsRUFBRUEsZUFBZUEsRUFBRUEsUUFBU0E7UUFDcERDLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLG1CQUFRQSxDQUFDQTtRQUN6QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsYUFBYUEsQ0FBQ0E7UUFDNUJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBO1lBQ2ZBLFVBQVVBLEVBQUVBLGVBQWVBLENBQUNBLEtBQUtBO1lBQ2pDQSxLQUFLQSxFQUFFQSxlQUFlQSxDQUFDQSxLQUFLQTtZQUM1QkEsSUFBSUEsRUFBRUEsZUFBZUEsQ0FBQ0EsSUFBSUE7U0FDMUJBLENBQUNBO1FBQ0ZBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLGVBQWVBLENBQUNBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1FBRXJGQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNmQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQ3pCQSxDQUFDQTtJQUNGQSxDQUFDQTtJQUVERCxnQ0FBYUEsR0FBYkEsVUFBY0EsS0FBS0E7UUFDbEJFLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hCQSxJQUFJQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNaQSxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUMvQkEsSUFBSUEsVUFBVUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDcEJBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBO1lBQ2QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2xFLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuQyxHQUFHLEVBQUUsQ0FBQztRQUNQLENBQUMsQ0FBQ0EsQ0FBQ0E7UUFDSEEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDN0JBLENBQUNBO0lBRURGLG1DQUFnQkEsR0FBaEJBO1FBRUNHLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLEtBQUtBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO0lBQzNFQSxDQUFDQTtJQUVESCw4QkFBV0EsR0FBWEE7UUFDQ0ksSUFBSUEsYUFBYUEsR0FBR0E7WUFDbkJBLFVBQVVBLEVBQUVBLElBQUlBO1lBQ2hCQSxZQUFZQSxFQUFFQSxJQUFJQTtZQUNsQkEsV0FBV0EsRUFBRUEsSUFBSUE7WUFDakJBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLElBQUlBLE9BQU9BO1NBQ25DQSxDQUFDQTtRQUNGQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtJQUN0Q0EsQ0FBQ0E7SUFFREosOEJBQVdBLEdBQVhBO1FBQ0NLLElBQUlBLGFBQWFBLEdBQUdBO1lBQ25CQSxRQUFRQSxFQUFFQSxHQUFHQTtZQUNiQSxVQUFVQSxFQUFFQSxHQUFHQTtZQUNmQSxTQUFTQSxFQUFFQSxPQUFPQTtZQUNsQkEsS0FBS0EsRUFBRUEsSUFBSUE7U0FDWEEsQ0FBQ0E7UUFDRkEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7SUFDdENBLENBQUNBO0lBQ0ZMLGVBQUNBO0FBQURBLENBN0RBLEFBNkRDQSxJQUFBO0FBN0RZLGdCQUFRLFdBNkRwQixDQUFBIiwiZmlsZSI6Im1vZGVscy9GbGV4SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIF86YW55O1xuXG5pbXBvcnQge3dvcmRiYW5rfSBmcm9tICcuLi9kYXRhL3dvcmRiYW5rJztcblxuZXhwb3J0IGNsYXNzIEZsZXhJdGVtIHtcblx0cHVibGljIHN0eWxlczogYW55O1xuXHRwdWJsaWMgc2V0dGluZ3M6IGFueTtcblx0cHVibGljIHRleHQ6IHN0cmluZztcblx0cHVibGljIGRhdGU6IGFueTtcblx0cHVibGljIGxvcmVtOiBzdHJpbmc7XG5cdHByaXZhdGUgd29yZEJhbms6IHN0cmluZ1tdO1xuXG5cdGNvbnN0cnVjdG9yKHN0eWxlRGVmYXVsdHMsIGRpc3BsYXlEZWZhdWx0cywgdGVtcGxhdGU/KSB7XG5cdFx0dGhpcy53b3JkQmFuayA9IHdvcmRiYW5rO1xuXHRcdHRoaXMuc3R5bGVzID0gc3R5bGVEZWZhdWx0cztcblx0XHR0aGlzLnNldHRpbmdzID0ge1xuXHRcdFx0bG9yZW1Db3VudDogZGlzcGxheURlZmF1bHRzLmxvcmVtLFxuXHRcdFx0c3RhdGU6IGRpc3BsYXlEZWZhdWx0cy5zdGF0ZSxcblx0XHRcdHZpZXc6IGRpc3BsYXlEZWZhdWx0cy52aWV3XG5cdFx0fTtcblx0XHR0aGlzLmxvcmVtID0gZGlzcGxheURlZmF1bHRzLmNvbnRlbnQgfHwgdGhpcy5nZW5lcmF0ZUxvcmVtKHRoaXMuc2V0dGluZ3MubG9yZW1Db3VudCk7XG5cblx0XHRpZiAoIXRlbXBsYXRlKSB7XG5cdFx0XHR0aGlzLnNldFN0eWxlc0J5U3RhdGUoKTtcblx0XHR9XG5cdH1cblxuXHRnZW5lcmF0ZUxvcmVtKGNvdW50KSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdHZhciBtaW4gPSAwO1xuXHRcdHZhciBtYXggPSB0aGlzLndvcmRCYW5rLmxlbmd0aDtcblx0XHR2YXIgbG9yZW1TdG9yZSA9IFtdO1xuXHRcdF8udGltZXMoY291bnQsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciByYW5kb21JZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXHRcdFx0bG9yZW1TdG9yZS5wdXNoKHNlbGYud29yZEJhbmtbcmFuZG9tSWR4XSk7XG5cdFx0XHRzZWxmLndvcmRCYW5rLnNwbGljZShyYW5kb21JZHgsIDEpO1xuXHRcdFx0bWF4LS07XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGxvcmVtU3RvcmUuam9pbignICcpO1xuXHR9XG5cblx0c2V0U3R5bGVzQnlTdGF0ZSgpIHtcblx0XHQvLyBUT0RPOiBUaGlzIGJlbG9uZ3MgaW4gRmxleEl0ZW0udHNcblx0XHR0aGlzLnNldHRpbmdzLnN0YXRlID09PSAnZml4ZWQnID8gdGhpcy5tYWtlTWVGaXhlZCgpIDogdGhpcy5tYWtlTWVGbGV4eSgpO1xuXHR9XG5cblx0bWFrZU1lRml4ZWQoKSB7XG5cdFx0bGV0IGRlZmF1bHRzRml4ZWQgPSB7XG5cdFx0XHQnZmxleEdyb3cnOiBudWxsLFxuXHRcdFx0J2ZsZXhTaHJpbmsnOiBudWxsLFxuXHRcdFx0J2ZsZXhCYXNpcyc6IG51bGwsXG5cdFx0XHR3aWR0aDogdGhpcy5zdHlsZXMud2lkdGggfHwgJzMwMHB4J1xuXHRcdH07XG5cdFx0Xy5hc3NpZ24odGhpcy5zdHlsZXMsIGRlZmF1bHRzRml4ZWQpO1xuXHR9XG5cblx0bWFrZU1lRmxleHkoKSB7XG5cdFx0bGV0IGRlZmF1bHRzRmxleHkgPSB7XG5cdFx0XHRmbGV4R3JvdzogJzEnLFxuXHRcdFx0ZmxleFNocmluazogJzAnLFxuXHRcdFx0ZmxleEJhc2lzOiAnMjAwcHgnLFxuXHRcdFx0d2lkdGg6IG51bGxcblx0XHR9O1xuXHRcdF8uYXNzaWduKHRoaXMuc3R5bGVzLCBkZWZhdWx0c0ZsZXh5KTtcblx0fVxufVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9