var flexbox;
(function (flexbox) {
    (function (_model) {
        var FlexItem = (function () {
            function FlexItem(model, index) {
                this.index = index;

                this.iPropsDefault = {
                    order: "1",
                    flexGrow: "1",
                    flexShrink: "0",
                    flexBasis: "300px",
                    alignSelf: "center",
                    width: "300px",
                    height: "300px",
                    backgroundColor: "tomato",
                    margin: "10px"
                };

                this.iPropsCurrent = {
                    order: ko.observable("1"),
                    flexGrow: ko.observable("1"),
                    flexShrink: ko.observable("0"),
                    flexBasis: ko.observable("100px"),
                    alignSelf: ko.observable("center"),
                    width: ko.observable("300px"),
                    height: ko.observable("300px"),
                    backgroundColor: ko.observable("tomato"),
                    margin: ko.observable("10px")
                };
            }
            return FlexItem;
        })();
        _model.FlexItem = FlexItem;
    })(flexbox.model || (flexbox.model = {}));
    var model = flexbox.model;
})(flexbox || (flexbox = {}));
var flexbox;
(function (flexbox) {
    (function (view) {
        var FlexContainer = (function () {
            function FlexContainer() {
                this.items = ko.observableArray([
                    new flexbox.model.FlexItem(this, 1),
                    new flexbox.model.FlexItem(this, 2)
                ]);

                this.cPropsDefault = {
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    backgroundColor: "yellow"
                };

                this.cPropsCurrent = {
                    display: ko.observable("flex"),
                    flexDirection: ko.observable("row"),
                    flexWrap: ko.observable("wrap"),
                    justifyContent: ko.observable("center"),
                    alignItems: ko.observable("center"),
                    alignContent: ko.observable("center"),
                    width: ko.observable("75%")
                };

                this.flexDirectionOptions = ['row', 'column'];
                this.flexWrapOptions = ['wrap', 'nowrap'];
                this.justifyContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
                this.alignItemsOptions = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
                this.alignContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'];
            }
            FlexContainer.prototype.newItem = function () {
                var index = this.getItemIndex();
                var newItem = new flexbox.model.FlexItem(this, index);
                this.items.push(newItem);
                console.log('new item added');
            };

            FlexContainer.prototype.oneLessItem = function () {
                this.items.pop();
                console.log('newest item removed');
            };

            FlexContainer.prototype.getItemIndex = function () {
                var currentLength = this.items().length;
                return currentLength + 1;
            };

            FlexContainer.prototype.resetContainerProps = function () {
            };
            return FlexContainer;
        })();
        view.FlexContainer = FlexContainer;
    })(flexbox.view || (flexbox.view = {}));
    var view = flexbox.view;
})(flexbox || (flexbox = {}));
