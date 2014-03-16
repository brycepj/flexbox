module flexbox {

    export module view {
        export class FlexContainer {
            items:any;
            cPropsDefault:any;
            cPropsCurrent:any;
            flexDirectionOptions:any;
            flexWrapOptions:any;
            justifyContentOptions:any;
            alignItemsOptions:any;
            alignContentOptions:any;
            alignSelfOptions:any;
            iPropsDefault:any;
            defaultBtnText:any;
            noItems:any;
            allAreFixed:any;
            allAreFlexy:any;

            constructor() {

                this.items = ko.observableArray([]);

                this.noItems = ko.computed(function () {
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

                this.cPropsCurrent.alignItems.subscribe(function () {
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

                this.cPropsCurrent.alignContent.subscribe(function () {
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

                this.retrieveSaved();
                this.printLocalStorage();

            } //end constructor


            setSaveSession():void {

                var self = this;
                window.onbeforeunload = function () {
                    self.saveSession();
                };

                //run through each tile and run method in each that will save all of its properties

            }

            saveSession():void {

                var array = this.items();
                var items = array.length;
                var itemsString = items.toString();

                localStorage.clear();
                localStorage.setItem('items', itemsString);

                for (var i = 0; i < items; i++) {
                    var obj = array[i];
                    obj.saveProps();

                }

            }

            retrieveSaved():void {
                var itemsLengthString = localStorage['items'];
                var itemsLengthNumber = parseInt(itemsLengthString);
                var array = itemsLengthNumber + 1;


                for (var i = 1; i < array; i++) {
                    var flexGrow = localStorage.getItem('item-' + i + "-flexGrow");
                    var flexShrink = localStorage.getItem('item-' + i + "-flexShrink");
                    var flexBasis = localStorage.getItem('item-' + i + "-flexBasis");
                    var width = localStorage.getItem('item-' + i + "-width");
                    var height = localStorage.getItem('item-' + i + "-height");
                    var isFlexy = localStorage.getItem('item-' + i + "-isFlexy");
                    var isFixed = localStorage.getItem('item-' + i + "-isFixed");
                    var viewContent = localStorage.getItem('item-' + i + "-viewContent");
                    var viewSettings = localStorage.getItem('item-' + i + "-viewSettings");
                    var content = localStorage.getItem('item-' + i + "-content");
                    var index = i.toString();

                    if (isFlexy === "true") {
                        isFlexy = true;
                    } else if (isFlexy === "false") {
                        isFlexy = false;
                    }

                    if (isFixed === "true") {
                        isFixed = true;
                    } else if (isFixed === "false") {
                        isFixed = false;
                    }

                    if (viewContent === "true") {
                        viewContent = true;
                    } else if (viewContent === "false") {
                        viewContent = false;
                    }

                    if (viewSettings === "true") {
                        viewSettings = true;
                    } else if (viewSettings === "false") {
                        viewSettings = false;
                    }

                    this.items.push(
                        new flexbox.model.FlexItem(this, index, {
                            flexGrow: flexGrow,
                            flexShrink: flexShrink,
                            flexBasis: flexBasis,
                            width: width,
                            height: height,
                            isFlexyWidth: isFlexy,
                            isFixedWidth: isFixed,
                            viewContent: viewContent,
                            viewSettings: viewSettings,
                            content: content

                        })
                    );
                }


            }

            newItem():void {
                var index = this.getItemIndex();
                var newItem = new flexbox.model.FlexItem(this, index);

                this.items.push(newItem);

            }

            oneLessItem():void {

                this.items.pop();

            }

            getItemIndex():number {
                var currentLength = this.items().length;
                return currentLength + 1;
            }

            makeAllFixed():void {

                this.allAreFixed(true);
                this.allAreFlexy(false);
                var array = this.items();
                for (var i = 0; i < array.length; i++) {
                    array[i].makeFixedWidth();

                }

            }

            makeAllFlexy():void {

                this.allAreFixed(false);
                this.allAreFlexy(true);
                var array = this.items();
                for (var i = 0; i < array.length; i++) {
                    array[i].makeFlexyWidth();

                }

            }

            resetItemProps():void {
                var array = this.items();
                for (var i = 0; i < array.length; i++) {
                    array[i].resetProps();

                }
            }

            destroyItem(index):void {
                var self = this;
                self.items.splice((index - 1), 1);
                (function () {
                    var array = self.items();
                    for (var i = 0; i < array.length; i++) {
                        var newIndex = i + 1;
                        var stringIndex = newIndex.toString();
                        array[i].index(stringIndex);
                    }
                })();
            }

            makeHolyGrail():void {

                var index = this.getItemIndex();
                this.items([]);
                this.items.push(
                    new flexbox.model.FlexItem(this, index++,
                        {   isFlexyWidth: true,
                            flexGrow: "1",
                            flexShrink: "0",
                            flexBasis: "98%",
                            alignSelf: "center",
                            height: "140px",
                            content: "HEADER"
                        }),

                    new flexbox.model.FlexItem(this, index++,
                        { viewContent: true,
                            viewSettings: false,
                            isFlexyWidth: true,
                            flexGrow: "1",
                            flexShrink: "0",
                            flexBasis: "200px",
                            height: "auto",
                            lorem: 100 }),

                    new flexbox.model.FlexItem(this, index++,
                        { viewContent: true,
                            viewSettings: false,
                            isFlexyWidth: true,
                            flexGrow: "1",
                            flexShrink: "0",
                            flexBasis: "200px",
                            height: "auto",
                            lorem: 100 }),

                    new flexbox.model.FlexItem(this, index++,
                        { viewContent: true,
                            viewSettings: false,
                            isFlexyWidth: true,
                            flexGrow: "1",
                            flexShrink: "0",
                            flexBasis: "200px",
                            height: "auto",
                            lorem: 100 }),

                    new flexbox.model.FlexItem(this, index++,
                        { isFlexyWidth: true,
                            flexGrow: "1",
                            flexShrink: "0",
                            flexBasis: "98%",
                            alignSelf: "center",
                            height: "140px",
                            content: "FOOTER" })
                );

                this.cPropsCurrent.alignItems("stretch");

            }

            responsiveNav():void {
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

            printLocalStorage():void {
                var booleanValue;
                var confirm = localStorage.getItem('items');
                if (confirm === "0") {
                    console.log('Nothing has been stored in localStorage.')


                } else if (confirm === "1") {
                    console.log("localStorage has stored " + confirm + " item");
                    for (var i in localStorage) {
                        console.log(localStorage[i]);
                    }
                } else {
                    console.log("localStorage has stored " + confirm + " items");
                    for (var i in localStorage) {
                        console.log(localStorage[i]);
                    }
                }


            }

        } //end class


    }

}
