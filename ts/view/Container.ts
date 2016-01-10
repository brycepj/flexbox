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
            flexType:any;
            loremCount:any;
            tourBox:any;
            iPropsFlags:any;
            masthead:any

            constructor() {
                this.items = ko.observableArray([]);

                this.tourBox = new flexbox.model.Tour();

                this.masthead = new flexbox.view.Masthead(this);

                this.noItems = ko.computed(function () {
                    var array = this.items();
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
                };

                this.cPropsCurrent = {
                    display: ko.observable("flex"),
                    flexDirection: ko.observable("row"),
                    flexWrap: ko.observable("wrap"),
                    justifyContent: ko.observable("center"),
                    alignItems: ko.observable("stretch"),
                    alignContent: ko.observable("stretch"),
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
                            var oldHeight = array[i].iPropsCurrent.height();
                            array[i].iPropsCurrent.height(oldHeight);

                        }
                    }


                }, this);


                this.flexDirectionOptions = ['row', 'column'];
                this.flexWrapOptions = ['wrap', 'nowrap'];
                this.justifyContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
                this.alignItemsOptions = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
                this.alignContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'];
                this.alignSelfOptions = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'inherit'];

                this.flexType = ko.observable("fixed");
                this.loremCount = ko.observable(5);


                //localStorage setup
                this.setSaveSession();
                this.printLocalStorage();
                this.retrieveSaved();


            } //end constructor


            actionChecker():void {

            }

            tourNext():void {
                this.tourBox.next();
            }

            tourPrevious():void {
                this.tourBox.previous();
            }

            tourResize():void {
                this.tourBox.resizeContainer();
            }

            tourAction():void {
                var index = this.tourBox.index();
                var action = this.tourBox.tour.messages[index].action;
                switch (action) {
                    case "resize":
                        this.tourBox.resizeContainer();
                        break;
                    case "holyGrail":
                        this.makeHolyGrail();
                        break;
                    case "nav":
                        this.makeResponsiveNav();
                        break;
                    case "picScroll":
                        this.makePicScroll();
                        break;
                    default:
                }

            }

            newItem():void {
                var index = this.getItemIndex();
                var flexType = this.flexType();
                var newItem = new flexbox.model.FlexItem(this, index);
                var loremCount = this.loremCount();

                if (flexType === "fixed") {
                    var newItem = new flexbox.model.FlexItem(this, index, {
                        viewContent: true,
                        viewSettings: false,
                        isFixedWidth: true,
                        width: "300px",
                        height: "250px",
                        lorem: loremCount
                    });
                    this.items.push(newItem);
                } else if (flexType === "flexy") {
                    var newItem = new flexbox.model.FlexItem(this, index, {
                        viewContent: true,
                        viewSettings: false,
                        isFlexyWidth: true,
                        flexGrow: "1",
                        flexShrink: "0",
                        flexBasis: "200px",
                        height: "250px",
                        lorem: loremCount
                    });
                    this.items.push(newItem);
                }
            }

            oneLessItem():void {

                this.items.pop();

            }

            getItemIndex():number {
                var currentLength = this.items().length;
                return currentLength + 1;
            }

            deleteAllItems():void {
                var array = this.items();
                var self = this;


                for (var i = 0; i < array.length; i++) {
                    $('.flex-item').eq(i).addClass('fadeOutDownBig');
                }

                setTimeout(function () {
                    self.items([]);
                }, 500);


            }

            setSaveSession():void {

                var self = this;
                window.onunload = function () {
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

                var flexDirection = this.cPropsCurrent.flexDirection();
                var flexWrap = this.cPropsCurrent.flexWrap();
                var justifyContent = this.cPropsCurrent.justifyContent();
                var alignItems = this.cPropsCurrent.alignItems();
                var alignContent = this.cPropsCurrent.alignContent();
                var flexType = this.flexType();
                localStorage.setItem('cProps-flexDirection', flexDirection);
                localStorage.setItem('cProps-flexWrap', flexWrap);
                localStorage.setItem('cProps-justifyContent', justifyContent);
                localStorage.setItem('cProps-alignItems', alignItems);
                localStorage.setItem('cProps-alignContent', alignContent);

                for (var i = 0; i < items; i++) {
                    var obj = array[i];
                    obj.saveProps();

                }

            }


            retrieveSaved():void {
                var itemsLengthString = localStorage['items'];
                var itemsLengthNumber = parseInt(itemsLengthString);
                var array = itemsLengthNumber + 1;


                this.cPropsCurrent.flexDirection(localStorage.getItem('cProps-flexDirection'));
                this.cPropsCurrent.flexWrap(localStorage.getItem('cProps-flexWrap'));
                this.cPropsCurrent.justifyContent(localStorage.getItem('cProps-justifyContent'));
                this.cPropsCurrent.alignItems(localStorage.getItem('cProps-alignItems'));
                this.cPropsCurrent.alignContent(localStorage.getItem('cProps-alignContent'));


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

            destroyAll():void {
                $('.flex-item').addClass('bounceOut');
                var self = this;

                setTimeout(function () {
                    self.items([]);
                }, 800);
            }


            makeHolyGrail():void {
                this.items([]);
                var index = this.getItemIndex();


                this.items.push(
                    new flexbox.model.FlexItem(this, index++,
                        {   isFlexyWidth: true,
                            flexGrow: "1",
                            flexShrink: "0",
                            flexBasis: "98%",
                            alignSelf: "center",
                            height:null,
                            content: "HEADER"
                        }),

                    new flexbox.model.FlexItem(this, index++,
                        {   viewContent: true,
                            viewSettings: false,
                            isFlexyWidth: true,
                            flexGrow: "1",
                            flexShrink: "0",
                            flexBasis: "200px",
                            height: null,
                            lorem: 70 }),

                    new flexbox.model.FlexItem(this, index++,
                        { viewContent: true,
                            viewSettings: false,
                            isFlexyWidth: true,
                            flexGrow: "1",
                            flexShrink: "0",
                            flexBasis: "200px",
                            height:  null,
                            lorem: 70 }),

                    new flexbox.model.FlexItem(this, index++,
                        {   viewContent: true,
                            viewSettings: false,
                            isFlexyWidth: true,
                            flexGrow: "1",
                            flexShrink: "0",
                            flexBasis: "200px",
                            height: null,
                            lorem: 70 }),

                    new flexbox.model.FlexItem(this, index++,
                        { isFlexyWidth: true,
                            flexGrow: "1",
                            flexShrink: "0",
                            flexBasis: "98%",
                            alignSelf: "center",
                            height: null,
                            content: "FOOTER" })
                );

                this.cPropsCurrent.flexDirection('row');
                this.cPropsCurrent.flexWrap('wrap');
                this.cPropsCurrent.alignItems("stretch");
                this.cPropsCurrent.justifyContent('center');
                this.cPropsCurrent.alignContent('flex-start');

            }

            makeResponsiveNav():void {
                this.items([]);
                var index = this.getItemIndex();

                this.cPropsCurrent.flexDirection('row');
                this.cPropsCurrent.flexWrap('wrap');
                this.cPropsCurrent.alignItems("flex-start");
                this.cPropsCurrent.justifyContent('center');
                this.cPropsCurrent.alignContent('flex-start');

                this.items.push(
                    new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", height: "70px", margin: "2px", content: "Home" }),
                    new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", height: "70px", margin: "2px", content: "About" }),
                    new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", height: "70px", margin: "2px", content: "Contact" }),
                    new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", height: "70px", margin: "2px", content: "Portfolio" }),
                    new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", height: "70px", margin: "2px", content: "Blog" })
                );
            }

            makePicScroll():void {
                this.items([]);
                var index = this.getItemIndex();

                this.cPropsCurrent.flexDirection('row');
                this.cPropsCurrent.flexWrap('nowrap');
                this.cPropsCurrent.alignItems("center");
                this.cPropsCurrent.justifyContent('flex-start');
                this.cPropsCurrent.alignContent('center');

                this.items.push(
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" }),
                    new flexbox.model.FlexItem(this, index++, { viewContent: true, lorem:0, isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "100px", margin: "2px",  height: "80px" })

            );

            }




        } //end class


    }

}
