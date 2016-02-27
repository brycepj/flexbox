var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LocalStorage_1 = require('../services/LocalStorage');
var core_1 = require('angular2/core');
var itemDefaults = {
    'display': 'block',
    'width': '300px',
    'height': '250px',
    'flexGrow': '0',
    'flexShrink': '0',
    'flexOrder': '0',
    'flexBasis': '0',
    'alignSelf': 'center'
};
var containerDefaults = {
    'display': 'block',
    'width': '100%',
    'height': '100%',
    'flexWrap': 'wrap',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    'alignContent': 'center'
};
var containerOptions = {
    'display': 'flex',
    'width': '100%',
    'height': '100%',
    'flexWrap': ['wrap', 'nowrap'],
    'flexDirection': ['row', 'column'],
    'justifyContent': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    'alignItems': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    'alignContent': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
};
var CSSDefaults = (function () {
    function CSSDefaults(_local) {
        this.containerOptions = containerOptions;
        this._local = _local;
        this._localExists = _local.exists;
        this._itemDefaults = _.cloneDeep(itemDefaults);
        this._containerDefaults = _.cloneDeep(containerDefaults);
        this.setup(this._localExists);
    }
    CSSDefaults.prototype.getcontainer = function () {
        return _.cloneDeep(this._containerDefaults);
    };
    CSSDefaults.prototype.setcontainer = function (styles) {
        _.forOwn(styles, function (val, key) {
            var defaults = this._containerDefaults;
            if (defaults.hasOwnProperty(key)) {
                defaults[key] = val;
            }
        });
    };
    CSSDefaults.prototype.getitem = function () {
        return _.cloneDeep(this._itemDefaults);
    };
    CSSDefaults.prototype.setitem = function (styles) {
        _.forOwn(styles, function (val, key) {
            var defaults = this._itemDefaults;
            if (defaults.hasOwnProperty(key)) {
                defaults[key] = val;
            }
        });
    };
    CSSDefaults.prototype.setup = function (exists) {
        this.setupContainerDefaults(exists);
        this.setupItemDefaults(exists);
    };
    CSSDefaults.prototype.setupContainerDefaults = function (exists) {
        this.container = exists
            ? this._local.getcontainerDefaults()
            : this._containerDefaults;
    };
    CSSDefaults.prototype.setupItemDefaults = function (exists) {
        this.item = exists
            ? this._local.getitemDefaults()
            : this._itemDefaults;
    };
    CSSDefaults = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(LocalStorage_1.Local)), 
        __metadata('design:paramtypes', [Object])
    ], CSSDefaults);
    return CSSDefaults;
})();
exports.CSSDefaults = CSSDefaults;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0NTU0RlZmF1bHRzLnRzIl0sIm5hbWVzIjpbIkNTU0RlZmF1bHRzIiwiQ1NTRGVmYXVsdHMuY29uc3RydWN0b3IiLCJDU1NEZWZhdWx0cy5nZXRjb250YWluZXIiLCJDU1NEZWZhdWx0cy5zZXRjb250YWluZXIiLCJDU1NEZWZhdWx0cy5nZXRpdGVtIiwiQ1NTRGVmYXVsdHMuc2V0aXRlbSIsIkNTU0RlZmF1bHRzLnNldHVwIiwiQ1NTRGVmYXVsdHMuc2V0dXBDb250YWluZXJEZWZhdWx0cyIsIkNTU0RlZmF1bHRzLnNldHVwSXRlbURlZmF1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSw2QkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUUvQyxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFFakQsSUFBTSxZQUFZLEdBQUc7SUFDcEIsU0FBUyxFQUFFLE9BQU87SUFDbEIsT0FBTyxFQUFFLE9BQU87SUFDaEIsUUFBUSxFQUFFLE9BQU87SUFDakIsVUFBVSxFQUFFLEdBQUc7SUFDZixZQUFZLEVBQUUsR0FBRztJQUNqQixXQUFXLEVBQUUsR0FBRztJQUNoQixXQUFXLEVBQUUsR0FBRztJQUNoQixXQUFXLEVBQUUsUUFBUTtDQUNyQixDQUFDO0FBRUYsSUFBTSxpQkFBaUIsR0FBRztJQUN6QixTQUFTLEVBQUUsT0FBTztJQUNsQixPQUFPLEVBQUUsTUFBTTtJQUNmLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsWUFBWSxFQUFFLFFBQVE7SUFDdEIsY0FBYyxFQUFFLFFBQVE7Q0FDeEIsQ0FBQztBQUVGLElBQU0sZ0JBQWdCLEdBQUc7SUFDeEIsU0FBUyxFQUFFLE1BQU07SUFDakIsT0FBTyxFQUFFLE1BQU07SUFDZixRQUFRLEVBQUUsTUFBTTtJQUNoQixVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO0lBQzlC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LElBQUlBLENBQUNBLElBQUlBLEdBQUdBLE1BQU1BO2NBQ2ZBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLGVBQWVBLEVBQUVBO2NBQzdCQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7SUE5REZSO1FBQUNBLGlCQUFVQSxFQUFFQTtRQVlBQSxXQUFDQSxhQUFNQSxDQUFDQSxvQkFBS0EsQ0FBQ0EsQ0FBQUE7O29CQW1EMUJBO0lBQURBLGtCQUFDQTtBQUFEQSxDQS9EQSxBQStEQ0EsSUFBQTtBQTlEWSxtQkFBVyxjQThEdkIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9DU1NEZWZhdWx0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIF86YW55O1xuXG5pbXBvcnQge0xvY2FsfSBmcm9tICcuLi9zZXJ2aWNlcy9Mb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHtDc3NTdHlsZVBhaXJJdGVtLCBDc3NTdHlsZVBhaXJDb250YWluZXJ9IGZyb20gJy4uL3V0aWxzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5jb25zdCBpdGVtRGVmYXVsdHMgPSB7XG5cdCdkaXNwbGF5JzogJ2Jsb2NrJyxcblx0J3dpZHRoJzogJzMwMHB4Jyxcblx0J2hlaWdodCc6ICcyNTBweCcsXG5cdCdmbGV4R3Jvdyc6ICcwJyxcblx0J2ZsZXhTaHJpbmsnOiAnMCcsXG5cdCdmbGV4T3JkZXInOiAnMCcsXG5cdCdmbGV4QmFzaXMnOiAnMCcsXG5cdCdhbGlnblNlbGYnOiAnY2VudGVyJ1xufTtcblxuY29uc3QgY29udGFpbmVyRGVmYXVsdHMgPSB7XG5cdCdkaXNwbGF5JzogJ2Jsb2NrJyxcblx0J3dpZHRoJzogJzEwMCUnLFxuXHQnaGVpZ2h0JzogJzEwMCUnLFxuXHQnZmxleFdyYXAnOiAnd3JhcCcsXG5cdCdmbGV4RGlyZWN0aW9uJzogJ3JvdycsXG5cdCdqdXN0aWZ5Q29udGVudCc6ICdjZW50ZXInLFxuXHQnYWxpZ25JdGVtcyc6ICdjZW50ZXInLFxuXHQnYWxpZ25Db250ZW50JzogJ2NlbnRlcidcbn07XG5cbmNvbnN0IGNvbnRhaW5lck9wdGlvbnMgPSB7XG5cdCdkaXNwbGF5JzogJ2ZsZXgnLFxuXHQnd2lkdGgnOiAnMTAwJScsXG5cdCdoZWlnaHQnOiAnMTAwJScsXG5cdCdmbGV4V3JhcCc6IFsnd3JhcCcsICdub3dyYXAnXSxcblx0J2ZsZXhEaXJlY3Rpb24nOiBbJ3JvdycsICdjb2x1bW4nXSxcblx0J2p1c3RpZnlDb250ZW50JzogWydmbGV4LXN0YXJ0JywgJ2ZsZXgtZW5kJywgJ2NlbnRlcicsICdzcGFjZS1iZXR3ZWVuJywgJ3NwYWNlLWFyb3VuZCddLFxuXHQnYWxpZ25JdGVtcyc6IFsnZmxleC1zdGFydCcsICdmbGV4LWVuZCcsICdjZW50ZXInLCAnYmFzZWxpbmUnLCAnc3RyZXRjaCddLFxuXHQnYWxpZ25Db250ZW50JzogWydmbGV4LXN0YXJ0JywgJ2ZsZXgtZW5kJywgJ2NlbnRlcicsICdzcGFjZS1iZXR3ZWVuJywgJ3NwYWNlLWFyb3VuZCcsICdzdHJldGNoJ11cbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDU1NEZWZhdWx0cyB7XG5cdC8vIGluamVjdGVkIGF0IEJvb3QsIGluamVjdCBhbnl3aGVyZVxuXHRwdWJsaWMgY29udGFpbmVyOkNzc1N0eWxlUGFpckNvbnRhaW5lcjtcblx0cHVibGljIGl0ZW06Q3NzU3R5bGVQYWlySXRlbTtcblx0cHVibGljIGNvbnRhaW5lck9wdGlvbnM6IGFueSA9IGNvbnRhaW5lck9wdGlvbnM7XG5cblx0cHJpdmF0ZSBfaXRlbURlZmF1bHRzOkNzc1N0eWxlUGFpckl0ZW07XG5cdHByaXZhdGUgX2NvbnRhaW5lckRlZmF1bHRzOmFueTtcblx0cHJpdmF0ZSBfbG9jYWxFeGlzdHM6Qm9vbGVhbjtcblx0cHJpdmF0ZSBfbG9jYWw6YW55O1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTG9jYWwpIF9sb2NhbCkge1xuXHRcdHRoaXMuX2xvY2FsID0gX2xvY2FsO1xuXHRcdHRoaXMuX2xvY2FsRXhpc3RzID0gX2xvY2FsLmV4aXN0cztcblx0XHR0aGlzLl9pdGVtRGVmYXVsdHMgPSBfLmNsb25lRGVlcChpdGVtRGVmYXVsdHMpO1xuXHRcdHRoaXMuX2NvbnRhaW5lckRlZmF1bHRzID0gXy5jbG9uZURlZXAoY29udGFpbmVyRGVmYXVsdHMpO1xuXHRcdHRoaXMuc2V0dXAodGhpcy5fbG9jYWxFeGlzdHMpO1xuXHR9XG5cblx0Z2V0Y29udGFpbmVyKCkge1xuXHRcdHJldHVybiBfLmNsb25lRGVlcCh0aGlzLl9jb250YWluZXJEZWZhdWx0cyk7XG5cdH1cblxuXHRzZXRjb250YWluZXIoc3R5bGVzOkNzc1N0eWxlUGFpckNvbnRhaW5lcikge1xuXHRcdC8vIFRPRE86IFdpbGwgd2FudCB0byB2YWxpZGF0ZSB0aGVzZSBhcyBwb3NzaWJsZSBzdHlsZXNcblx0XHRfLmZvck93bihzdHlsZXMsIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuXHRcdFx0bGV0IGRlZmF1bHRzID0gdGhpcy5fY29udGFpbmVyRGVmYXVsdHM7XG5cdFx0XHRpZiAoZGVmYXVsdHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRkZWZhdWx0c1trZXldID0gdmFsO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Z2V0aXRlbSgpIHtcblx0XHRyZXR1cm4gXy5jbG9uZURlZXAodGhpcy5faXRlbURlZmF1bHRzKTtcblx0fVxuXG5cdHNldGl0ZW0oc3R5bGVzOkNzc1N0eWxlUGFpckl0ZW0pIHtcblx0XHRfLmZvck93bihzdHlsZXMsIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuXHRcdFx0bGV0IGRlZmF1bHRzID0gdGhpcy5faXRlbURlZmF1bHRzO1xuXHRcdFx0aWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0ZGVmYXVsdHNba2V5XSA9IHZhbDtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNldHVwKGV4aXN0czpCb29sZWFuKTp2b2lkIHtcblx0XHR0aGlzLnNldHVwQ29udGFpbmVyRGVmYXVsdHMoZXhpc3RzKTtcblx0XHR0aGlzLnNldHVwSXRlbURlZmF1bHRzKGV4aXN0cyk7XG5cdH1cblxuXHRzZXR1cENvbnRhaW5lckRlZmF1bHRzKGV4aXN0czpCb29sZWFuKTp2b2lkIHtcblx0XHR0aGlzLmNvbnRhaW5lciA9IGV4aXN0c1xuXHRcdFx0PyB0aGlzLl9sb2NhbC5nZXRjb250YWluZXJEZWZhdWx0cygpXG5cdFx0XHQ6IHRoaXMuX2NvbnRhaW5lckRlZmF1bHRzO1xuXHR9XG5cblx0c2V0dXBJdGVtRGVmYXVsdHMoZXhpc3RzKSB7XG5cdFx0dGhpcy5pdGVtID0gZXhpc3RzXG5cdFx0XHQ/IHRoaXMuX2xvY2FsLmdldGl0ZW1EZWZhdWx0cygpXG5cdFx0XHQ6IHRoaXMuX2l0ZW1EZWZhdWx0cztcblx0fVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=