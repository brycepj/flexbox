var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var FlexContainer_1 = require('../services/FlexContainer');
var core_1 = require('angular2/core');
var FlexItem_1 = require('../models/FlexItem');
var menuStylesCfg = {
    flexGrow: '1',
    flexShrink: '0',
    flexBasis: '160px',
    height: '70px',
    content: 'Home'
};
var menuDisplayCfg = {
    view: 'settings',
    state: 'flexy',
    lorem: null,
    content: null
};
var websiteHeaderCfg = {
    flexGrow: '1',
    flexShrink: '0',
    flexBasis: '98%',
    alignSelf: 'center',
    height: null,
    content: 'HEADER'
};
var websiteBookendDisplayCfg = {
    view: 'settings',
    state: 'flexy',
    lorem: null,
    content: null
};
var websiteFooterCfg = {
    flexGrow: '1',
    flexShrink: '0',
    flexBasis: '98%',
    alignSelf: 'center',
    height: null,
    content: 'FOOTER'
};
var websiteColumnCfg = {
    flexGrow: '1',
    flexShrink: '0',
    flexBasis: '200px',
    height: null,
    lorem: 70
};
var websiteColumnDisplayCfg = {
    view: 'settings',
    state: 'flexy',
    lorem: 40
};
var PatternBuilder = (function () {
    function PatternBuilder(flexContainer) {
        this.flexContainer = flexContainer;
    }
    PatternBuilder.prototype.menu = function () {
        var menuText = ['Home', 'About', 'Contact', 'Portfolio', 'Blog'];
        var self = this;
        _.times(menuText.length, function (index) {
            var styles = menuStylesCfg;
            var display = menuDisplayCfg;
            display.content = menuText[index];
            self.flexContainer.list.push(new FlexItem_1.FlexItem(styles, display, true));
        });
    };
    PatternBuilder.prototype.website = function () {
        var self = this;
        websiteBookendDisplayCfg.content = 'HEADER';
        this.flexContainer.list.push(new FlexItem_1.FlexItem(websiteHeaderCfg, websiteBookendDisplayCfg, true));
        _.times(3, function () {
            self.flexContainer.list.push(new FlexItem_1.FlexItem(websiteColumnCfg, websiteColumnDisplayCfg, true));
        });
        websiteBookendDisplayCfg.content = 'FOOTER';
        this.flexContainer.list.push(new FlexItem_1.FlexItem(websiteFooterCfg, websiteBookendDisplayCfg, true));
    };
    PatternBuilder = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [FlexContainer_1.FlexContainer])
    ], PatternBuilder);
    return PatternBuilder;
})();
exports.PatternBuilder = PatternBuilder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1BhdHRlcm5CdWlsZGVyLnRzIl0sIm5hbWVzIjpbIlBhdHRlcm5CdWlsZGVyIiwiUGF0dGVybkJ1aWxkZXIuY29uc3RydWN0b3IiLCJQYXR0ZXJuQnVpbGRlci5tZW51IiwiUGF0dGVybkJ1aWxkZXIud2Vic2l0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsOEJBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFDeEQscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHlCQUF1QixvQkFBb0IsQ0FBQyxDQUFBO0FBRTVDLElBQUksYUFBYSxHQUFHO0lBQ25CLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLEdBQUc7SUFDZixTQUFTLEVBQUUsT0FBTztJQUNsQixNQUFNLEVBQUUsTUFBTTtJQUNkLE9BQU8sRUFBRSxNQUFNO0NBQ2YsQ0FBQztBQUVGLElBQUksY0FBYyxHQUFHO0lBQ3BCLElBQUksRUFBRSxVQUFVO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLElBQUk7SUFDWCxPQUFPLEVBQUUsSUFBSTtDQUNiLENBQUM7QUFFRixJQUFJLGdCQUFnQixHQUFHO0lBQ3RCLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLEdBQUc7SUFDZixTQUFTLEVBQUUsS0FBSztJQUNoQixTQUFTLEVBQUUsUUFBUTtJQUNuQixNQUFNLEVBQUUsSUFBSTtJQUNaLE9BQU8sRUFBRSxRQUFRO0NBQ2pCLENBQUM7QUFFRixJQUFJLHdCQUF3QixHQUFHO0lBQzlCLElBQUksRUFBRSxVQUFVO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLElBQUk7SUFDWCxPQUFPLEVBQUUsSUFBSTtDQUNiLENBQUM7QUFFRixJQUFJLGdCQUFnQixHQUFHO0lBQ3RCLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLEdBQUc7SUFDZixTQUFTLEVBQUUsS0FBSztJQUNoQixTQUFTLEVBQUUsUUFBUTtJQUNuQixNQUFNLEVBQUUsSUFBSTtJQUNaLE9BQU8sRUFBRSxRQUFRO0NBQ2pCLENBQUM7QUFFRixJQUFJLGdCQUFnQixHQUFHO0lBQ3RCLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLEdBQUc7SUFDZixTQUFTLEVBQUUsT0FBTztJQUNsQixNQUFNLEVBQUUsSUFBSTtJQUNaLEtBQUssRUFBRSxFQUFFO0NBQ1QsQ0FBQztBQUVGLElBQUksdUJBQXVCLEdBQUc7SUFDN0IsSUFBSSxFQUFFLFVBQVU7SUFDaEIsS0FBSyxFQUFFLE9BQU87SUFDZCxLQUFLLEVBQUUsRUFBRTtDQUNULENBQUM7QUFFRjtJQUVDQSx3QkFBb0JBLGFBQTRCQTtRQUE1QkMsa0JBQWFBLEdBQWJBLGFBQWFBLENBQWVBO0lBQUlBLENBQUNBO0lBRXJERCw2QkFBSUEsR0FBSkE7UUFDQ0UsSUFBSUEsUUFBUUEsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0EsRUFBRUEsV0FBV0EsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDakVBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hCQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFTQSxLQUFLQTtZQUN0QyxJQUFJLE1BQU0sR0FBRyxhQUFhLENBQUM7WUFDM0IsSUFBSSxPQUFPLEdBQUcsY0FBYyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFFSkEsQ0FBQ0E7SUFFREYsZ0NBQU9BLEdBQVBBO1FBQ0NHLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBRWhCQSx3QkFBd0JBLENBQUNBLE9BQU9BLEdBQUdBLFFBQVFBLENBQUNBO1FBQzVDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxtQkFBUUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSx3QkFBd0JBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBRTdGQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxFQUFFQTtZQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFRLENBQUMsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3RixDQUFDLENBQUNBLENBQUNBO1FBRUhBLHdCQUF3QkEsQ0FBQ0EsT0FBT0EsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDNUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLG1CQUFRQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLHdCQUF3QkEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDOUZBLENBQUNBO0lBNUJGSDtRQUFDQSxpQkFBVUEsRUFBRUE7O3VCQTZCWkE7SUFBREEscUJBQUNBO0FBQURBLENBN0JBLEFBNkJDQSxJQUFBO0FBNUJZLHNCQUFjLGlCQTRCMUIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9QYXR0ZXJuQnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIF86YW55O1xuXG5pbXBvcnQge0ZsZXhDb250YWluZXJ9IGZyb20gJy4uL3NlcnZpY2VzL0ZsZXhDb250YWluZXInO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RmxleEl0ZW19IGZyb20gJy4uL21vZGVscy9GbGV4SXRlbSc7XG5cbnZhciBtZW51U3R5bGVzQ2ZnID0ge1xuXHRmbGV4R3JvdzogJzEnLFxuXHRmbGV4U2hyaW5rOiAnMCcsXG5cdGZsZXhCYXNpczogJzE2MHB4Jyxcblx0aGVpZ2h0OiAnNzBweCcsXG5cdGNvbnRlbnQ6ICdIb21lJ1xufTtcblxudmFyIG1lbnVEaXNwbGF5Q2ZnID0ge1xuXHR2aWV3OiAnc2V0dGluZ3MnLFxuXHRzdGF0ZTogJ2ZsZXh5Jyxcblx0bG9yZW06IG51bGwsXG5cdGNvbnRlbnQ6IG51bGxcbn07XG5cbnZhciB3ZWJzaXRlSGVhZGVyQ2ZnID0ge1xuXHRmbGV4R3JvdzogJzEnLFxuXHRmbGV4U2hyaW5rOiAnMCcsXG5cdGZsZXhCYXNpczogJzk4JScsXG5cdGFsaWduU2VsZjogJ2NlbnRlcicsXG5cdGhlaWdodDogbnVsbCxcblx0Y29udGVudDogJ0hFQURFUidcbn07XG5cbnZhciB3ZWJzaXRlQm9va2VuZERpc3BsYXlDZmcgPSB7XG5cdHZpZXc6ICdzZXR0aW5ncycsXG5cdHN0YXRlOiAnZmxleHknLFxuXHRsb3JlbTogbnVsbCxcblx0Y29udGVudDogbnVsbFxufTtcblxudmFyIHdlYnNpdGVGb290ZXJDZmcgPSB7XG5cdGZsZXhHcm93OiAnMScsXG5cdGZsZXhTaHJpbms6ICcwJyxcblx0ZmxleEJhc2lzOiAnOTglJyxcblx0YWxpZ25TZWxmOiAnY2VudGVyJyxcblx0aGVpZ2h0OiBudWxsLFxuXHRjb250ZW50OiAnRk9PVEVSJ1xufTtcblxudmFyIHdlYnNpdGVDb2x1bW5DZmcgPSB7XG5cdGZsZXhHcm93OiAnMScsXG5cdGZsZXhTaHJpbms6ICcwJyxcblx0ZmxleEJhc2lzOiAnMjAwcHgnLFxuXHRoZWlnaHQ6IG51bGwsXG5cdGxvcmVtOiA3MFxufTtcblxudmFyIHdlYnNpdGVDb2x1bW5EaXNwbGF5Q2ZnID0ge1xuXHR2aWV3OiAnc2V0dGluZ3MnLFxuXHRzdGF0ZTogJ2ZsZXh5Jyxcblx0bG9yZW06IDQwXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGF0dGVybkJ1aWxkZXIge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZsZXhDb250YWluZXI6IEZsZXhDb250YWluZXIpIHsgfVxuXG5cdG1lbnUoKSB7XG5cdFx0dmFyIG1lbnVUZXh0ID0gWydIb21lJywgJ0Fib3V0JywgJ0NvbnRhY3QnLCAnUG9ydGZvbGlvJywgJ0Jsb2cnXTtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0Xy50aW1lcyhtZW51VGV4dC5sZW5ndGgsIGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHR2YXIgc3R5bGVzID0gbWVudVN0eWxlc0NmZztcblx0XHRcdHZhciBkaXNwbGF5ID0gbWVudURpc3BsYXlDZmc7XG5cdFx0XHRkaXNwbGF5LmNvbnRlbnQgPSBtZW51VGV4dFtpbmRleF07XG5cdFx0XHRzZWxmLmZsZXhDb250YWluZXIubGlzdC5wdXNoKG5ldyBGbGV4SXRlbShzdHlsZXMsIGRpc3BsYXksIHRydWUpKTtcblx0XHR9KTtcblxuXHR9XG5cblx0d2Vic2l0ZSgpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHR3ZWJzaXRlQm9va2VuZERpc3BsYXlDZmcuY29udGVudCA9ICdIRUFERVInO1xuXHRcdHRoaXMuZmxleENvbnRhaW5lci5saXN0LnB1c2gobmV3IEZsZXhJdGVtKHdlYnNpdGVIZWFkZXJDZmcsIHdlYnNpdGVCb29rZW5kRGlzcGxheUNmZywgdHJ1ZSkpO1xuXG5cdFx0Xy50aW1lcygzLCBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGYuZmxleENvbnRhaW5lci5saXN0LnB1c2gobmV3IEZsZXhJdGVtKHdlYnNpdGVDb2x1bW5DZmcsIHdlYnNpdGVDb2x1bW5EaXNwbGF5Q2ZnLCB0cnVlKSk7XG5cdFx0fSk7XG5cblx0XHR3ZWJzaXRlQm9va2VuZERpc3BsYXlDZmcuY29udGVudCA9ICdGT09URVInO1xuXHRcdHRoaXMuZmxleENvbnRhaW5lci5saXN0LnB1c2gobmV3IEZsZXhJdGVtKHdlYnNpdGVGb290ZXJDZmcsIHdlYnNpdGVCb29rZW5kRGlzcGxheUNmZywgdHJ1ZSkpO1xuXHR9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==