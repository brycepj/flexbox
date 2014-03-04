module flexbox {

    export module view {

        export class FlexContainer {
            items: any;
            cPropsDefault: any;
            cPropsCurrent: any;
            flexDirectionOptions: any;
            flexWrapOptions: any;
            justifyContentOptions: any;
            alignItemsOptions: any;
            alignContentOptions: any;
            alignSelfOptions: any;
            iPropsDefault: any;
            defaultBtnText: any;
            constructor() {

                this.items = ko.observableArray([

                ]);

                //add all of the flexbox container properties

                this.iPropsDefault = {
                    order: ko.observable("1"),
                    flexGrow: ko.observable("1"),
                    flexShrink: ko.observable("1"),
                    flexBasis: ko.observable("300px"),
                    alignSelf: ko.observable("center"),
                    width: ko.observable("300px"),
                    height: ko.observable("300px"),
                    backgroundColor: "blue",
                    margin: "10px"
                };

                this.defaultBtnText = ko.computed(function() {
                    var def = this.iPropsDefault;

                    if (def.flexGrow() === '1' && def.flexShrink() === '1' && def.flexBasis() === "300px" && def.alignSelf() === "center") {
                    return "reset all items"
                    } else {
                        return "update item defaults";
                    }

                }, this);

                //UI edits default props in 

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
                this.alignSelfOptions = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'inherit'];
            } //end constructor


            newItem(): void {
                var index = this.getItemIndex();
                var newItem = new flexbox.model.FlexItem(this, index);
                this.items.push(newItem);


            }

            oneLessItem(): void {

                this.items.pop();


            }

            getItemIndex(): number {
                var currentLength = this.items().length;
                return currentLength + 1;
            }

            resetItemProps(): void {
                var array = this.items();
                for (var i = 0; i < array.length; i++) {
                    array[i].resetProps();

                }
            }
            destroyItem(index): void {
                var self = this;
                self.items.splice((index - 1), 1);
                (function() {
                    var array = self.items();
                    for (var i = 0; i < array.length; i++) {
                        var newIndex = i + 1;
                        var stringIndex = newIndex.toString();
                        array[i].index(stringIndex);
                    }
                })();
            }

            resetContainerProps(): void { }

        } //end class



    }

}
