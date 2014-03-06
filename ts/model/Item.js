var flexbox;
(function (flexbox) {
    (function (_model) {
        var FlexItem = (function () {
            function FlexItem(model, index, flexGrow, flexShrink, flexBasis, alignSelf, backgroundColor) {
                if (typeof flexGrow === "undefined") { flexGrow = "1"; }
                if (typeof flexShrink === "undefined") { flexShrink = "1"; }
                if (typeof flexBasis === "undefined") { flexBasis = "100px"; }
                if (typeof alignSelf === "undefined") { alignSelf = "center"; }
                if (typeof backgroundColor === "undefined") { backgroundColor = "tomato"; }
                this.index = ko.observable(index);
                this.model = model;
                console.log(model);
                this.iPropsCurrent = {
                    order: ko.observable("1"),
                    flexGrow: ko.observable(flexGrow),
                    flexShrink: ko.observable(flexShrink),
                    flexBasis: ko.observable(flexBasis),
                    alignSelf: ko.observable(alignSelf),
                    height: ko.observable("300px"),
                    backgroundColor: ko.observable(backgroundColor),
                    margin: ko.observable("10px")
                };
            }
            FlexItem.prototype.resetProps = function () {
                var currentProps = this.iPropsCurrent;
                var newProps = this.model.iPropsDefault;
                currentProps.flexGrow(newProps.flexGrow());
                currentProps.flexShrink(newProps.flexShrink());
                currentProps.flexBasis(newProps.flexBasis());
                currentProps.alignSelf(newProps.alignSelf());
            };

            FlexItem.prototype.destroySelf = function () {
                var index = parseInt(this.index(), 10);
                this.model.destroyItem(index);
            };
            return FlexItem;
        })();
        _model.FlexItem = FlexItem;
    })(flexbox.model || (flexbox.model = {}));
    var model = flexbox.model;
})(flexbox || (flexbox = {}));
//# sourceMappingURL=Item.js.map
