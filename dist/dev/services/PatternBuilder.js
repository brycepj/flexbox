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
var FlexContainer_1 = require('./FlexContainer');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1BhdHRlcm5CdWlsZGVyLnRzIl0sIm5hbWVzIjpbIlBhdHRlcm5CdWlsZGVyIiwiUGF0dGVybkJ1aWxkZXIuY29uc3RydWN0b3IiLCJQYXR0ZXJuQnVpbGRlci5tZW51IiwiUGF0dGVybkJ1aWxkZXIud2Vic2l0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0EscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDhCQUE0QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzlDLHlCQUF1QixvQkFBb0IsQ0FBQyxDQUFBO0FBRTVDLElBQUksYUFBYSxHQUFHO0lBQ25CLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLEdBQUc7SUFDZixTQUFTLEVBQUUsT0FBTztJQUNsQixNQUFNLEVBQUUsTUFBTTtJQUNkLE9BQU8sRUFBRSxNQUFNO0NBQ2YsQ0FBQztBQUVGLElBQUksY0FBYyxHQUFHO0lBQ3BCLElBQUksRUFBRSxVQUFVO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLElBQUk7SUFDWCxPQUFPLEVBQUUsSUFBSTtDQUNiLENBQUM7QUFFRixJQUFJLGdCQUFnQixHQUFHO0lBQ3RCLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLEdBQUc7SUFDZixTQUFTLEVBQUUsS0FBSztJQUNoQixTQUFTLEVBQUUsUUFBUTtJQUNuQixNQUFNLEVBQUUsSUFBSTtJQUNaLE9BQU8sRUFBRSxRQUFRO0NBQ2pCLENBQUM7QUFFRixJQUFJLHdCQUF3QixHQUFHO0lBQzlCLElBQUksRUFBRSxVQUFVO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLElBQUk7SUFDWCxPQUFPLEVBQUUsSUFBSTtDQUNiLENBQUM7QUFFRixJQUFJLGdCQUFnQixHQUFHO0lBQ3RCLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLEdBQUc7SUFDZixTQUFTLEVBQUUsS0FBSztJQUNoQixTQUFTLEVBQUUsUUFBUTtJQUNuQixNQUFNLEVBQUUsSUFBSTtJQUNaLE9BQU8sRUFBRSxRQUFRO0NBQ2pCLENBQUM7QUFFRixJQUFJLGdCQUFnQixHQUFHO0lBQ3RCLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLEdBQUc7SUFDZixTQUFTLEVBQUUsT0FBTztJQUNsQixNQUFNLEVBQUUsSUFBSTtJQUNaLEtBQUssRUFBRSxFQUFFO0NBQ1QsQ0FBQztBQUVGLElBQUksdUJBQXVCLEdBQUc7SUFDN0IsSUFBSSxFQUFFLFVBQVU7SUFDaEIsS0FBSyxFQUFFLE9BQU87SUFDZCxLQUFLLEVBQUUsRUFBRTtDQUNULENBQUM7QUFFRjtJQUVDQSx3QkFBb0JBLGFBQTRCQTtRQUE1QkMsa0JBQWFBLEdBQWJBLGFBQWFBLENBQWVBO0lBQUlBLENBQUNBO0lBRXJERCw2QkFBSUEsR0FBSkE7UUFDQ0UsSUFBSUEsUUFBUUEsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0EsRUFBRUEsV0FBV0EsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDakVBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hCQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFTQSxLQUFLQTtZQUN0QyxJQUFJLE1BQU0sR0FBRyxhQUFhLENBQUM7WUFDM0IsSUFBSSxPQUFPLEdBQUcsY0FBYyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFFSkEsQ0FBQ0E7SUFFREYsZ0NBQU9BLEdBQVBBO1FBQ0NHLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBRWhCQSx3QkFBd0JBLENBQUNBLE9BQU9BLEdBQUdBLFFBQVFBLENBQUNBO1FBQzVDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxtQkFBUUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSx3QkFBd0JBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBRTdGQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxFQUFFQTtZQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFRLENBQUMsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3RixDQUFDLENBQUNBLENBQUNBO1FBRUhBLHdCQUF3QkEsQ0FBQ0EsT0FBT0EsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDNUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLG1CQUFRQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLHdCQUF3QkEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDOUZBLENBQUNBO0lBNUJGSDtRQUFDQSxpQkFBVUEsRUFBRUE7O3VCQTZCWkE7SUFBREEscUJBQUNBO0FBQURBLENBN0JBLEFBNkJDQSxJQUFBO0FBNUJZLHNCQUFjLGlCQTRCMUIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9QYXR0ZXJuQnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIF86YW55O1xuXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0ZsZXhDb250YWluZXJ9IGZyb20gJy4vRmxleENvbnRhaW5lcic7XG5pbXBvcnQge0ZsZXhJdGVtfSBmcm9tICcuLi9tb2RlbHMvRmxleEl0ZW0nO1xuXG52YXIgbWVudVN0eWxlc0NmZyA9IHtcblx0ZmxleEdyb3c6ICcxJyxcblx0ZmxleFNocmluazogJzAnLFxuXHRmbGV4QmFzaXM6ICcxNjBweCcsXG5cdGhlaWdodDogJzcwcHgnLFxuXHRjb250ZW50OiAnSG9tZSdcbn07XG5cbnZhciBtZW51RGlzcGxheUNmZyA9IHtcblx0dmlldzogJ3NldHRpbmdzJyxcblx0c3RhdGU6ICdmbGV4eScsXG5cdGxvcmVtOiBudWxsLFxuXHRjb250ZW50OiBudWxsXG59O1xuXG52YXIgd2Vic2l0ZUhlYWRlckNmZyA9IHtcblx0ZmxleEdyb3c6ICcxJyxcblx0ZmxleFNocmluazogJzAnLFxuXHRmbGV4QmFzaXM6ICc5OCUnLFxuXHRhbGlnblNlbGY6ICdjZW50ZXInLFxuXHRoZWlnaHQ6IG51bGwsXG5cdGNvbnRlbnQ6ICdIRUFERVInXG59O1xuXG52YXIgd2Vic2l0ZUJvb2tlbmREaXNwbGF5Q2ZnID0ge1xuXHR2aWV3OiAnc2V0dGluZ3MnLFxuXHRzdGF0ZTogJ2ZsZXh5Jyxcblx0bG9yZW06IG51bGwsXG5cdGNvbnRlbnQ6IG51bGxcbn07XG5cbnZhciB3ZWJzaXRlRm9vdGVyQ2ZnID0ge1xuXHRmbGV4R3JvdzogJzEnLFxuXHRmbGV4U2hyaW5rOiAnMCcsXG5cdGZsZXhCYXNpczogJzk4JScsXG5cdGFsaWduU2VsZjogJ2NlbnRlcicsXG5cdGhlaWdodDogbnVsbCxcblx0Y29udGVudDogJ0ZPT1RFUidcbn07XG5cbnZhciB3ZWJzaXRlQ29sdW1uQ2ZnID0ge1xuXHRmbGV4R3JvdzogJzEnLFxuXHRmbGV4U2hyaW5rOiAnMCcsXG5cdGZsZXhCYXNpczogJzIwMHB4Jyxcblx0aGVpZ2h0OiBudWxsLFxuXHRsb3JlbTogNzBcbn07XG5cbnZhciB3ZWJzaXRlQ29sdW1uRGlzcGxheUNmZyA9IHtcblx0dmlldzogJ3NldHRpbmdzJyxcblx0c3RhdGU6ICdmbGV4eScsXG5cdGxvcmVtOiA0MFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhdHRlcm5CdWlsZGVyIHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmbGV4Q29udGFpbmVyOiBGbGV4Q29udGFpbmVyKSB7IH1cblxuXHRtZW51KCkge1xuXHRcdHZhciBtZW51VGV4dCA9IFsnSG9tZScsICdBYm91dCcsICdDb250YWN0JywgJ1BvcnRmb2xpbycsICdCbG9nJ107XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdF8udGltZXMobWVudVRleHQubGVuZ3RoLCBmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0dmFyIHN0eWxlcyA9IG1lbnVTdHlsZXNDZmc7XG5cdFx0XHR2YXIgZGlzcGxheSA9IG1lbnVEaXNwbGF5Q2ZnO1xuXHRcdFx0ZGlzcGxheS5jb250ZW50ID0gbWVudVRleHRbaW5kZXhdO1xuXHRcdFx0c2VsZi5mbGV4Q29udGFpbmVyLmxpc3QucHVzaChuZXcgRmxleEl0ZW0oc3R5bGVzLCBkaXNwbGF5LCB0cnVlKSk7XG5cdFx0fSk7XG5cblx0fVxuXG5cdHdlYnNpdGUoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0d2Vic2l0ZUJvb2tlbmREaXNwbGF5Q2ZnLmNvbnRlbnQgPSAnSEVBREVSJztcblx0XHR0aGlzLmZsZXhDb250YWluZXIubGlzdC5wdXNoKG5ldyBGbGV4SXRlbSh3ZWJzaXRlSGVhZGVyQ2ZnLCB3ZWJzaXRlQm9va2VuZERpc3BsYXlDZmcsIHRydWUpKTtcblxuXHRcdF8udGltZXMoMywgZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLmZsZXhDb250YWluZXIubGlzdC5wdXNoKG5ldyBGbGV4SXRlbSh3ZWJzaXRlQ29sdW1uQ2ZnLCB3ZWJzaXRlQ29sdW1uRGlzcGxheUNmZywgdHJ1ZSkpO1xuXHRcdH0pO1xuXG5cdFx0d2Vic2l0ZUJvb2tlbmREaXNwbGF5Q2ZnLmNvbnRlbnQgPSAnRk9PVEVSJztcblx0XHR0aGlzLmZsZXhDb250YWluZXIubGlzdC5wdXNoKG5ldyBGbGV4SXRlbSh3ZWJzaXRlRm9vdGVyQ2ZnLCB3ZWJzaXRlQm9va2VuZERpc3BsYXlDZmcsIHRydWUpKTtcblx0fVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=