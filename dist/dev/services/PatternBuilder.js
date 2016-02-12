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
    flexGrow: "1",
    flexShrink: "0",
    flexBasis: "160px",
    height: "70px",
    content: "Home"
};
var menuDisplayCfg = {
    view: 'settings',
    state: 'flexy',
    lorem: null
};
var websiteHeaderCfg = {
    flexGrow: "1",
    flexShrink: "0",
    flexBasis: "98%",
    alignSelf: "center",
    height: null,
    content: "HEADER"
};
var websiteBookendDisplayCfg = {
    view: 'settings',
    state: 'flexy',
    lorem: null
};
var websiteFooterCfg = {
    flexGrow: "1",
    flexShrink: "0",
    flexBasis: "98%",
    alignSelf: "center",
    height: null,
    content: "FOOTER"
};
var websiteColumnCfg = {
    flexGrow: "1",
    flexShrink: "0",
    flexBasis: "200px",
    height: null,
    lorem: 70
};
var websiteColumnDisplayCfg = {
    view: 'settings',
    state: 'flexy',
    lorem: 40
};
var gridItemCfg = {};
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
    PatternBuilder.prototype.grid = function () {
    };
    PatternBuilder = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [FlexContainer_1.FlexContainer])
    ], PatternBuilder);
    return PatternBuilder;
})();
exports.PatternBuilder = PatternBuilder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1BhdHRlcm5CdWlsZGVyLnRzIl0sIm5hbWVzIjpbIlBhdHRlcm5CdWlsZGVyIiwiUGF0dGVybkJ1aWxkZXIuY29uc3RydWN0b3IiLCJQYXR0ZXJuQnVpbGRlci5tZW51IiwiUGF0dGVybkJ1aWxkZXIud2Vic2l0ZSIsIlBhdHRlcm5CdWlsZGVyLmdyaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBLDhCQUE0QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3hELHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx5QkFBdUIsb0JBQW9CLENBQUMsQ0FBQTtBQUc1QyxJQUFNLGFBQWEsR0FBRztJQUNyQixRQUFRLEVBQUUsR0FBRztJQUNiLFVBQVUsRUFBRSxHQUFHO0lBQ2YsU0FBUyxFQUFFLE9BQU87SUFDbEIsTUFBTSxFQUFFLE1BQU07SUFDZCxPQUFPLEVBQUUsTUFBTTtDQUNmLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRztJQUN0QixJQUFJLEVBQUUsVUFBVTtJQUNoQixLQUFLLEVBQUUsT0FBTztJQUNkLEtBQUssRUFBRSxJQUFJO0NBQ1gsQ0FBQztBQUVGLElBQU0sZ0JBQWdCLEdBQUc7SUFDeEIsUUFBUSxFQUFFLEdBQUc7SUFDYixVQUFVLEVBQUUsR0FBRztJQUNmLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLE1BQU0sRUFBRSxJQUFJO0lBQ1osT0FBTyxFQUFFLFFBQVE7Q0FDakIsQ0FBQztBQUVGLElBQU0sd0JBQXdCLEdBQUc7SUFDaEMsSUFBSSxFQUFFLFVBQVU7SUFDaEIsS0FBSyxFQUFFLE9BQU87SUFDZCxLQUFLLEVBQUUsSUFBSTtDQUNYLENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHO0lBQ3hCLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLEdBQUc7SUFDZixTQUFTLEVBQUUsS0FBSztJQUNoQixTQUFTLEVBQUUsUUFBUTtJQUNuQixNQUFNLEVBQUUsSUFBSTtJQUNaLE9BQU8sRUFBRSxRQUFRO0NBQ2pCLENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHO0lBQ3hCLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLEdBQUc7SUFDZixTQUFTLEVBQUUsT0FBTztJQUNsQixNQUFNLEVBQUUsSUFBSTtJQUNaLEtBQUssRUFBRSxFQUFFO0NBQ1QsQ0FBQztBQUVGLElBQU0sdUJBQXVCLEdBQUc7SUFDL0IsSUFBSSxFQUFFLFVBQVU7SUFDaEIsS0FBSyxFQUFFLE9BQU87SUFDZCxLQUFLLEVBQUUsRUFBRTtDQUNULENBQUM7QUFDRixJQUFNLFdBQVcsR0FBRyxFQUVuQixDQUFDO0FBR0Y7SUFFQ0Esd0JBQW9CQSxhQUE0QkE7UUFBNUJDLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFlQTtJQUFFQSxDQUFDQTtJQUVuREQsNkJBQUlBLEdBQUpBO1FBQ0NFLElBQUlBLFFBQVFBLEdBQUdBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLEVBQUVBLFNBQVNBLEVBQUVBLFdBQVdBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1FBQ2pFQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNoQkEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBVUEsS0FBS0E7WUFDdkMsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDO1lBQzNCLElBQUksT0FBTyxHQUFHLGNBQWMsQ0FBQztZQUM3QixPQUFPLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUNBLENBQUNBO0lBRUpBLENBQUNBO0lBRURGLGdDQUFPQSxHQUFQQTtRQUNDRyxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUVoQkEsd0JBQXdCQSxDQUFDQSxPQUFPQSxHQUFHQSxRQUFRQSxDQUFDQTtRQUM1Q0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsbUJBQVFBLENBQUNBLGdCQUFnQkEsRUFBRUEsd0JBQXdCQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUU3RkEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsRUFBRUE7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBUSxDQUFDLGdCQUFnQixFQUFFLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0YsQ0FBQyxDQUFDQSxDQUFDQTtRQUVIQSx3QkFBd0JBLENBQUNBLE9BQU9BLEdBQUdBLFFBQVFBLENBQUNBO1FBQzVDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxtQkFBUUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSx3QkFBd0JBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBQzlGQSxDQUFDQTtJQUVESCw2QkFBSUEsR0FBSkE7SUFFQUksQ0FBQ0E7SUFoQ0ZKO1FBQUNBLGlCQUFVQSxFQUFFQTs7dUJBbUNaQTtJQUFEQSxxQkFBQ0E7QUFBREEsQ0FuQ0EsQUFtQ0NBLElBQUE7QUFsQ1ksc0JBQWMsaUJBa0MxQixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL1BhdHRlcm5CdWlsZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGJyeWNlIG9uIDIvMTAvMTYuXG4gKi9cbmltcG9ydCB7RmxleENvbnRhaW5lcn0gZnJvbSAnLi4vc2VydmljZXMvRmxleENvbnRhaW5lcic7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtGbGV4SXRlbX0gZnJvbSAnLi4vbW9kZWxzL0ZsZXhJdGVtJztcblxuXG5jb25zdCBtZW51U3R5bGVzQ2ZnID0ge1xuXHRmbGV4R3JvdzogXCIxXCIsXG5cdGZsZXhTaHJpbms6IFwiMFwiLFxuXHRmbGV4QmFzaXM6IFwiMTYwcHhcIixcblx0aGVpZ2h0OiBcIjcwcHhcIixcblx0Y29udGVudDogXCJIb21lXCJcbn07XG5cbmNvbnN0IG1lbnVEaXNwbGF5Q2ZnID0ge1xuXHR2aWV3OiAnc2V0dGluZ3MnLFxuXHRzdGF0ZTogJ2ZsZXh5Jyxcblx0bG9yZW06IG51bGxcbn07XG5cbmNvbnN0IHdlYnNpdGVIZWFkZXJDZmcgPSB7XG5cdGZsZXhHcm93OiBcIjFcIixcblx0ZmxleFNocmluazogXCIwXCIsXG5cdGZsZXhCYXNpczogXCI5OCVcIixcblx0YWxpZ25TZWxmOiBcImNlbnRlclwiLFxuXHRoZWlnaHQ6IG51bGwsXG5cdGNvbnRlbnQ6IFwiSEVBREVSXCJcbn07XG5cbmNvbnN0IHdlYnNpdGVCb29rZW5kRGlzcGxheUNmZyA9IHtcblx0dmlldzogJ3NldHRpbmdzJyxcblx0c3RhdGU6ICdmbGV4eScsXG5cdGxvcmVtOiBudWxsXG59O1xuXG5jb25zdCB3ZWJzaXRlRm9vdGVyQ2ZnID0ge1xuXHRmbGV4R3JvdzogXCIxXCIsXG5cdGZsZXhTaHJpbms6IFwiMFwiLFxuXHRmbGV4QmFzaXM6IFwiOTglXCIsXG5cdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblx0aGVpZ2h0OiBudWxsLFxuXHRjb250ZW50OiBcIkZPT1RFUlwiXG59O1xuXG5jb25zdCB3ZWJzaXRlQ29sdW1uQ2ZnID0ge1xuXHRmbGV4R3JvdzogXCIxXCIsXG5cdGZsZXhTaHJpbms6IFwiMFwiLFxuXHRmbGV4QmFzaXM6IFwiMjAwcHhcIixcblx0aGVpZ2h0OiBudWxsLFxuXHRsb3JlbTogNzBcbn07XG5cbmNvbnN0IHdlYnNpdGVDb2x1bW5EaXNwbGF5Q2ZnID0ge1xuXHR2aWV3OiAnc2V0dGluZ3MnLFxuXHRzdGF0ZTogJ2ZsZXh5Jyxcblx0bG9yZW06IDQwXG59O1xuY29uc3QgZ3JpZEl0ZW1DZmcgPSB7XG5cbn07XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhdHRlcm5CdWlsZGVyIHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmbGV4Q29udGFpbmVyOiBGbGV4Q29udGFpbmVyKXt9XG5cblx0bWVudSgpe1xuXHRcdHZhciBtZW51VGV4dCA9IFsnSG9tZScsICdBYm91dCcsICdDb250YWN0JywgJ1BvcnRmb2xpbycsICdCbG9nJ107XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdF8udGltZXMobWVudVRleHQubGVuZ3RoLCBmdW5jdGlvbiAoaW5kZXgpIHtcblx0XHRcdHZhciBzdHlsZXMgPSBtZW51U3R5bGVzQ2ZnO1xuXHRcdFx0dmFyIGRpc3BsYXkgPSBtZW51RGlzcGxheUNmZztcblx0XHRcdGRpc3BsYXkuY29udGVudCA9IG1lbnVUZXh0W2luZGV4XTtcblx0XHRcdHNlbGYuZmxleENvbnRhaW5lci5saXN0LnB1c2gobmV3IEZsZXhJdGVtKHN0eWxlcywgZGlzcGxheSwgdHJ1ZSkpO1xuXHRcdH0pO1xuXG5cdH1cblxuXHR3ZWJzaXRlKCl7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0d2Vic2l0ZUJvb2tlbmREaXNwbGF5Q2ZnLmNvbnRlbnQgPSAnSEVBREVSJztcblx0XHR0aGlzLmZsZXhDb250YWluZXIubGlzdC5wdXNoKG5ldyBGbGV4SXRlbSh3ZWJzaXRlSGVhZGVyQ2ZnLCB3ZWJzaXRlQm9va2VuZERpc3BsYXlDZmcsIHRydWUpKTtcblxuXHRcdF8udGltZXMoMywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZi5mbGV4Q29udGFpbmVyLmxpc3QucHVzaChuZXcgRmxleEl0ZW0od2Vic2l0ZUNvbHVtbkNmZywgd2Vic2l0ZUNvbHVtbkRpc3BsYXlDZmcsIHRydWUpKTtcblx0XHR9KTtcblxuXHRcdHdlYnNpdGVCb29rZW5kRGlzcGxheUNmZy5jb250ZW50ID0gJ0ZPT1RFUic7XG5cdFx0dGhpcy5mbGV4Q29udGFpbmVyLmxpc3QucHVzaChuZXcgRmxleEl0ZW0od2Vic2l0ZUZvb3RlckNmZywgd2Vic2l0ZUJvb2tlbmREaXNwbGF5Q2ZnLCB0cnVlKSk7XG5cdH1cblxuXHRncmlkKCl7XG5cblx0fVxuXG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9