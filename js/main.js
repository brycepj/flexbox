var flexbox;
(function (flexbox) {
    (function (_model) {
        var FlexItem = (function () {
            function FlexItem(model, index, props) {
                if (typeof props === "undefined") { props = {
                    viewSettings: false,
                    viewContent: true,
                    content: null,
                    isFlexyWidth: false,
                    isFixedWidth: true,
                    height: "250px",
                    width: "300px",
                    order: null,
                    flexGrow: null,
                    flexShrink: null,
                    flexBasis: null,
                    alignSelf: null,
                    backgroundColor: "#01ff70",
                    margin: "10px"
                }; }
                if (props.content) {
                    props.viewSettings = false;
                    props.viewContent = true;
                }
                if (typeof props.isFlexyWidth === "undefined") {
                    props.isFlexyWidth = false;
                }
                ;
                if (typeof props.isFixedWidth === "undefined") {
                    props.isFixedWidth = true;
                }
                ;
                if (typeof props.content === "undefined") {
                    props.content = "Lorem ipsum for the win";
                }
                ;
                if (typeof props.height === "undefined") {
                    props.height = "250px";
                }
                ;
                if (typeof props.width === "undefined") {
                    props.width = "300px";
                }
                ;
                if (typeof props.order === "undefined") {
                    props.order = null;
                }
                ;
                if (typeof props.flexGrow === "undefined") {
                    props.flexGrow = null;
                }
                ;
                if (typeof props.flexShrink === "undefined") {
                    props.flexShrink = null;
                }
                ;
                if (typeof props.flexBasis === "undefined" && props.isFixedWidth) {
                    props.flexBasis = null;
                }
                ;
                if (typeof props.backgroundColor === "undefined") {
                    props.backgroundColor = "#01ff70";
                }
                ;
                if (typeof props.margin === "undefined") {
                    props.margin = "10px";
                }
                ;

                if (props.isFlexyWidth) {
                    props.isFixedWidth = false;
                    props.width = null;
                } else if (props.isFixedWidth) {
                    props.isFlexyWidth = false;
                    props.height = "250px";
                    props.width = "300px";
                    props.order = null;
                    props.flexGrow = null;
                    props.flexShrink = null;
                    props.flexBasis = null;
                    props.alignSelf = null;
                }

                this.index = ko.observable(index);
                this.model = model;
                console.log(model);
                this.iPropsCurrent = {
                    order: ko.observable(props.order),
                    flexGrow: ko.observable(props.flexGrow),
                    flexShrink: ko.observable(props.flexShrink),
                    flexBasis: ko.observable(props.flexBasis),
                    alignSelf: ko.observable(props.alignSelf),
                    height: ko.observable(props.height),
                    width: ko.observable(props.width),
                    backgroundColor: ko.observable(props.backgroundColor),
                    margin: ko.observable(props.margin)
                };

                var lorem = new flexbox.model.devLorem(10);

                this.content = ko.observable(lorem.text);

                this.viewSettings = ko.observable(props.viewSettings);
                this.viewContent = ko.observable(props.viewContent);

                this.isFixedWidth = ko.observable(props.isFixedWidth);
                this.isFlexyWidth = ko.observable(props.isFlexyWidth);

                var input = 4;
                this.lorem = new flexbox.model.devLorem(input);

                this.highlightFixed = ko.computed(function () {
                    if (this.isFixedWidth()) {
                        return "1.6em";
                    } else {
                        return "inherit";
                    }
                }, this);

                this.highlightFlexy = ko.computed(function () {
                    if (this.isFlexyWidth()) {
                        return "1.6em";
                    } else {
                        return "inherit";
                    }
                }, this);
            }
            FlexItem.prototype.makeFixedWidth = function () {
                console.log('it fired');
                this.isFixedWidth(true);
                this.iPropsCurrent.flexGrow(null);
                this.iPropsCurrent.flexBasis(null);
                this.iPropsCurrent.flexShrink(null);
                this.isFlexyWidth(false);
            };

            FlexItem.prototype.makeFlexyWidth = function () {
                this.isFixedWidth(false);
                this.isFlexyWidth(true);
                this.iPropsCurrent.flexGrow("1");
                this.iPropsCurrent.flexBasis("200px");
                this.iPropsCurrent.flexShrink("0");
            };

            FlexItem.prototype.resetProps = function () {
                var currentProps = this.iPropsCurrent;
                var newProps = this.model.iPropsDefault;
                currentProps.width(newProps.width());
                currentProps.flexGrow(newProps.flexGrow());
                currentProps.flexShrink(newProps.flexShrink());
                currentProps.flexBasis(newProps.flexBasis());
                currentProps.alignSelf(newProps.alignSelf());
            };

            FlexItem.prototype.toggleSettings = function () {
                var visible = this.viewSettings();
                console.log(visible);
                if (visible) {
                    this.viewSettings(false);
                    this.viewContent(true);
                } else {
                    this.viewSettings(true);
                    this.viewContent(false);
                }
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
var flexbox;
(function (flexbox) {
    (function (model) {
        var TourModel = (function () {
            function TourModel() {
                this.messages = [
                    {
                        "text": 'Welcome!  It is much longer than I thought it would be given the circumstances. Maybe I will try to do soemthing about it.',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": "Resources"
                    },
                    {
                        "text": 'Here is the first of the greetings',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'Here is the second of the greetings',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'Here is the third of the greetings',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "Next text"
                    },
                    {
                        "text": 'Here is the fourth of the greetings',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'The End!',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    }
                ];
            }
            return TourModel;
        })();
        model.TourModel = TourModel;
    })(flexbox.model || (flexbox.model = {}));
    var model = flexbox.model;
})(flexbox || (flexbox = {}));
var flexbox;
(function (flexbox) {
    (function (model) {
        var devLorem = (function () {
            function devLorem(wordCount) {
                this.wordCount = wordCount;
                this.chosenWords = [];
                this.text = "";
                this.words = ['flexbox', 'device agnostic', 'breaks in ie6', 'paul irish', 'web standards', 'grok', 'crufty', 'angular', 'MV*', 'addy osmani', 'custom elements', 'paralax', 'performance budget', 'offline first', 'gulp', 'node', 'ie6 countdown', 'progressive enhancement', 'the Industry'];

                var min = 0;
                var max = this.words.length;

                var length = this.wordCount;
                for (var i = 0; i < this.wordCount; i++) {
                    var rando = Math.floor(Math.random() * (max - min + 1)) + min;
                    this.chosenWords.push(this.words[rando]);
                    console.log(this.chosenWords);
                }

                this.text = this.chosenWords.join(' ');

                return this.text;
            }
            return devLorem;
        })();
        model.devLorem = devLorem;
    })(flexbox.model || (flexbox.model = {}));
    var model = flexbox.model;
})(flexbox || (flexbox = {}));
var flexbox;
(function (flexbox) {
    (function (view) {
        var FlexContainer = (function () {
            function FlexContainer() {
                this.items = ko.observableArray([]);

                this.noItems = ko.computed(function () {
                    var array = this.items();
                    console.log(array);
                    if (array.length) {
                        return false;
                    } else {
                        return true;
                    }
                }, this);

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

                this.defaultBtnText = "Sync Items with Defaults";

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

                this.flexDirectionOptions = ['row', 'column'];
                this.flexWrapOptions = ['wrap', 'nowrap'];
                this.justifyContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
                this.alignItemsOptions = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
                this.alignContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'];
                this.alignSelfOptions = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'inherit'];

                this.allAreFixed = ko.observable(true);
                this.allAreFlexy = ko.observable(false);
            }
            FlexContainer.prototype.newItem = function () {
                var index = this.getItemIndex();
                var newItem = new flexbox.model.FlexItem(this, index);

                this.items.push(newItem);
            };

            FlexContainer.prototype.oneLessItem = function () {
                this.items.pop();
            };

            FlexContainer.prototype.getItemIndex = function () {
                var currentLength = this.items().length;
                return currentLength + 1;
            };

            FlexContainer.prototype.makeAllFixed = function () {
                this.allAreFixed(true);
                this.allAreFlexy(false);
                var array = this.items();
                for (var i = 0; i < array.length; i++) {
                    array[i].makeFixedWidth();
                }
            };

            FlexContainer.prototype.makeAllFlexy = function () {
                this.allAreFixed(false);
                this.allAreFlexy(true);
                var array = this.items();
                for (var i = 0; i < array.length; i++) {
                    array[i].makeFlexyWidth();
                }
            };

            FlexContainer.prototype.resetItemProps = function () {
                var array = this.items();
                for (var i = 0; i < array.length; i++) {
                    array[i].resetProps();
                }
            };

            FlexContainer.prototype.destroyItem = function (index) {
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
            };

            FlexContainer.prototype.makeHolyGrail = function () {
                var text = "The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accomodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space, or shrinks them to prevent overflow.";
                var text2 = text + text + text;
                var index = this.getItemIndex();
                this.items([]);
                this.items.push(new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "98%", alignSelf: "center", height: "140px", content: "HEADER" }), new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "auto", content: text2 }), new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "auto", content: text }), new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "auto", content: text2 }), new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "98%", alignSelf: "center", height: "140px", content: "FOOTER" }));

                this.cPropsCurrent.alignItems("stretch");
            };

            FlexContainer.prototype.responsiveNav = function () {
                var index = this.getItemIndex();
                this.items([]);
                this.items.push(new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "Home" }), new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "About" }), new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "Contact" }), new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "Portfolio" }), new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "Blog" }));
            };
            return FlexContainer;
        })();
        view.FlexContainer = FlexContainer;
    })(flexbox.view || (flexbox.view = {}));
    var view = flexbox.view;
})(flexbox || (flexbox = {}));
var flexbox;
(function (flexbox) {
    (function (model) {
        var Tour = (function () {
            function Tour() {
                this.tour = new flexbox.model.TourModel();
                this.index = ko.observable(0);
                console.log(this.tour.messages);

                this.currentMessage = ko.computed(function () {
                    var index = this.index();

                    return this.tour.messages[index].text;
                }, this);

                this.currentXUrl = ko.computed(function () {
                    var index = this.index();

                    return this.tour.messages[index].xUrl;
                }, this);

                this.currentXText = ko.computed(function () {
                    var index = this.index();

                    return this.tour.messages[index].xText;
                }, this);

                this.hasButton = ko.computed(function () {
                    var index = this.index();

                    return this.tour.messages[index].hasButton;
                }, this);
            }
            Tour.prototype.next = function () {
                var arrayLength = this.tour.messages.length;
                var current = this.index();

                if (current === (arrayLength - 1)) {
                    return;
                } else {
                    current++;
                    this.index(current);
                }
            };

            Tour.prototype.previous = function () {
                var arrayLength = this.tour.messages.length;
                var current = this.index();
                if (current === 0) {
                    return;
                } else {
                    current--;
                    this.index(current);
                }
            };

            Tour.prototype.test = function () {
                $('.flex-container').hide();
            };
            return Tour;
        })();
        model.Tour = Tour;
    })(flexbox.model || (flexbox.model = {}));
    var model = flexbox.model;
})(flexbox || (flexbox = {}));
