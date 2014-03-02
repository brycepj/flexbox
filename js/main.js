var flexbox;
(function (flexbox) {
    (function (model) {
        var FlexItem = (function () {
            function FlexItem(name) {
                this.name = name;
            }
            return FlexItem;
        })();
        model.FlexItem = FlexItem;
    })(flexbox.model || (flexbox.model = {}));
    var model = flexbox.model;
})(flexbox || (flexbox = {}));
var flexbox;
(function (flexbox) {
    (function (view) {
        var FlexContainer = (function () {
            function FlexContainer() {
                this.rando = ko.observable("RANDO BANDO");
                this.items = ko.observableArray([
                    new flexbox.model.FlexItem("Bryce"),
                    new flexbox.model.FlexItem("Bryce")
                ]);
            }
            FlexContainer.prototype.newItem = function () {
                var name = this.rando();
                this.items.push(new flexbox.model.FlexItem(name));
                console.log(this.items());
            };
            return FlexContainer;
        })();
        view.FlexContainer = FlexContainer;
    })(flexbox.view || (flexbox.view = {}));
    var view = flexbox.view;
})(flexbox || (flexbox = {}));
