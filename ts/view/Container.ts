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
            noItems: any;
            allAreFixed: any;
            allAreFlexy: any;

            constructor() {
                console.log(localStorage["test"]);
                console.log(localStorage["item"]);
                //create prototypal method that sets window.onbeforeunload = save current state settings
                //in the initiation of the object (constructor), after all properties have been set, reinitialize the many different things

                //important for state 
                //number of tiles
                //if more than 0, update all properties
                //all of the properties of each style

                //run event handler in the end of the constructor


                this.items = ko.observableArray([]);

                this.noItems = ko.computed(function() {
                    var array = this.items();
                    console.log(array);
                    if (array.length) {
                        return false;
                    }
                    else {
                        return true;
                    }

                }, this);
                //add all of the flexbox container properties

                this.iPropsDefault = {
                    order: ko.observable("1"),
                    flexGrow: ko.observable("0"),
                    flexShrink: ko.observable("0"),
                    flexBasis: ko.observable("0"),
                    alignSelf: ko.observable("center"),
                    width: ko.observable("300px"),
                    height: ko.observable("250px"),
                    backgroundColor: "blue",
                    margin: "10px"
                };

                this.defaultBtnText = "Sync Items with Defaults"

                //UI edits default props in 

                this.cPropsDefault = {
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    backgroundColor: "#0074d9"
                };

                this.cPropsCurrent = {
                    display: ko.observable("flex"),
                    flexDirection: ko.observable("row"),
                    flexWrap: ko.observable("wrap"),
                    justifyContent: ko.observable("center"),
                    alignItems: ko.observable("center"),
                    alignContent: ko.observable("center"),
                    width: ko.observable("100%")

                };

                this.cPropsCurrent.alignItems.subscribe(function() {
                    var newValue = this.cPropsCurrent.alignItems();
                    var array = this.items();
                    if (newValue === "stretch") {
                        for (var i = 0; i < array.length; i++) {
                            array[i].iPropsCurrent.height(null);

                        }
                        this.cPropsCurrent.alignContent('stretch');
                    } else {
                        for (var i = 0; i < array.length; i++) {
                            array[i].iPropsCurrent.height('250px');

                        }
                    }

                }, this);

                this.cPropsCurrent.alignContent.subscribe(function() {
                    var newValue = this.cPropsCurrent.alignContent();
                    var array = this.items();
                    if (newValue === "stretch") {
                        for (var i = 0; i < array.length; i++) {
                            array[i].iPropsCurrent.height(null);

                        }
                        this.cPropsCurrent.alignItems('stretch');
                    } else {
                        for (var i = 0; i < array.length; i++) {
                            array[i].iPropsCurrent.height('250px');

                        }
                    }

                }, this);



                this.flexDirectionOptions = ['row', 'column'];
                this.flexWrapOptions = ['wrap', 'nowrap'];
                this.justifyContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
                this.alignItemsOptions = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
                this.alignContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'];
                this.alignSelfOptions = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'inherit'];

                this.allAreFixed = ko.observable(true);
                this.allAreFlexy = ko.observable(false);

                //set listener for onbeforeunload to capture current state of flexcontainer
                this.setSaveSession();

            } //end constructor


            setSaveSession(): void {

                var self = this;
                window.onbeforeunload = function() {
                    self.saveSession();
                };

                //run through each tile and run method in each that will save all of its properties

            }

            saveSession(): void {
                
                var array = this.items();
                
                localStorage.setItem("test","success");
                
                array[0].saveProps();

            }


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

            makeAllFixed(): void {

                this.allAreFixed(true);
                this.allAreFlexy(false);
                var array = this.items();
                for (var i = 0; i < array.length; i++) {
                    array[i].makeFixedWidth();

                }

            }

            makeAllFlexy(): void {

                this.allAreFixed(false);
                this.allAreFlexy(true);
                var array = this.items();
                for (var i = 0; i < array.length; i++) {
                    array[i].makeFlexyWidth();

                }

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

            makeHolyGrail(): void {

                var index = this.getItemIndex();
                this.items([]);
                this.items.push(
                    new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "98%", alignSelf: "center", height: "140px", content: "HEADER" }),

                    new flexbox.model.FlexItem(this, index++, { viewContent: true, viewSettings: false, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "auto", lorem: 100 }),

                    new flexbox.model.FlexItem(this, index++, { viewContent: true, viewSettings: false, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "auto", lorem: 100 }),

                    new flexbox.model.FlexItem(this, index++, { viewContent: true, viewSettings: false, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "auto", lorem: 100 }),

                    new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "98%", alignSelf: "center", height: "140px", content: "FOOTER" })
                    );

                this.cPropsCurrent.alignItems("stretch");

            }

            responsiveNav(): void {
                var index = this.getItemIndex();
                this.items([]);
                this.items.push(
                    new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "Home" }),
                    new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "About" }),
                    new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "Contact" }),
                    new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "Portfolio" }),
                    new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "Blog" })
                    );

            }

        } //end class


    }

}
