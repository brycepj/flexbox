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
                    margin: "10px",
                    lorem: 1
                }; }
                if (props.content && props.viewSettings) {
                    props.viewSettings = true;
                    props.viewContent = false;
                } else if (props.content) {
                    props.viewSettings = false;
                    props.viewContent = true;
                }

                ;
                if (typeof props.lorem === "undefined") {
                    props.lorem = 1;
                }
                ;
                if (props.content) {
                    props.lorem = null;
                }
                ;
                if (typeof props.isFlexyWidth === "undefined") {
                    props.isFlexyWidth = false;
                }
                ;
                if (typeof props.isFixedWidth === "undefined") {
                    props.isFixedWidth = true;
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

                this.viewSettings = ko.observable(props.viewSettings);
                this.viewContent = ko.observable(props.viewContent);

                this.lorem = new flexbox.model.devLorem(props.lorem);

                this.content = ko.computed(function () {
                    var index = this.index();
                    var lorem = this.lorem.text;

                    var content = props.content;

                    if (content) {
                        return content;
                    } else {
                        return lorem;
                    }
                }, this);

                this.isFixedWidth = ko.observable(props.isFixedWidth);
                this.isFlexyWidth = ko.observable(props.isFlexyWidth);

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
            FlexItem.prototype.saveProps = function () {
                var index = this.index();
                var keyName = "item-" + index;

                var flexGrow = this.iPropsCurrent.flexGrow();
                var flexShrink = this.iPropsCurrent.flexShrink();
                var flexBasis = this.iPropsCurrent.flexBasis();
                var width = this.iPropsCurrent.width();
                var height = this.iPropsCurrent.height();
                var isFlexy = this.isFlexyWidth();
                var isFixed = this.isFixedWidth();
                var viewContent = this.viewContent();
                var viewSettings = this.viewSettings();
                var content = this.content();

                localStorage.setItem(keyName + "-flexGrow", flexGrow);
                localStorage.setItem(keyName + "-flexShrink", flexShrink);
                localStorage.setItem(keyName + "-flexBasis", flexBasis);
                localStorage.setItem(keyName + "-width", width);
                localStorage.setItem(keyName + "-height", height);
                localStorage.setItem(keyName + "-isFlexy", isFlexy);
                localStorage.setItem(keyName + "-isFixed", isFixed);
                localStorage.setItem(keyName + "-viewContent", viewContent);
                localStorage.setItem(keyName + "-viewSettings", viewSettings);
                localStorage.setItem(keyName + "-content", content);
            };

            FlexItem.prototype.makeFixedWidth = function () {
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
                        "text": 'Start the interactive tour! (click the right arrow)',
                        "hasButton": false,
                        "xUrl": null
                    },
                    {
                        "text": 'Flexbox is a new layout property CSS that ....',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'In this tutorial, you will learn all the major features of the property...by doing!',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'To get our bearings, note that in order for flexbobx to work, we apply styling to the containing element as well as its children.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "Next text"
                    },
                    {
                        "text": 'So, the big blue box on your left is a `div` with display:flex. That is where we will start. You can watch the code sample below grow as we add more styles',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'You dont actually have to add any special flexbox styling to the flex items',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'So, the big blue box on your left is a `div` with display:flex. That is where we will start. You can watch the code sample below grow as we add more styles',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'So, the big blue box on your left is a `div` with display:flex. That is where we will start. You can watch the code sample below grow as we add more styles',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'So, the big blue box on your left is a `div` with display:flex. That is where we will start. You can watch the code sample below grow as we add more styles',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'So, the big blue box on your left is a `div` with display:flex. That is where we will start. You can watch the code sample below grow as we add more styles',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'So, the big blue box on your left is a `div` with display:flex. That is where we will start. You can watch the code sample below grow as we add more styles',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'So, the big blue box on your left is a `div` with display:flex. That is where we will start. You can watch the code sample below grow as we add more styles',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'So, the big blue box on your left is a `div` with display:flex. That is where we will start. You can watch the code sample below grow as we add more styles',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'So, the big blue box on your left is a `div` with display:flex. That is where we will start. You can watch the code sample below grow as we add more styles',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'So, the big blue box on your left is a `div` with display:flex. That is where we will start. You can watch the code sample below grow as we add more styles',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'So, the big blue box on your left is a `div` with display:flex. That is where we will start. You can watch the code sample below grow as we add more styles',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'So, the big blue box on your left is a `div` with display:flex. That is where we will start. You can watch the code sample below grow as we add more styles',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
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
                this.words = ['flexbox', 'device agnostic', 'breaks in ie6', 'paul irish', 'web standards', 'grok', 'crufty', 'angular', 'MV*', 'addy osmani', 'custom elements', 'paralax', 'performance budget', 'offline first', 'gulp', 'node', 'ie6 countdown', 'progressive enhancement', 'the Industry', 'svg', 'machine code', 'rails', 'django', 'google', 'indexDB', 'webgl', 'ux/ui', 'tim kadlec', 'retina', 'fixed header', 'minimalist', 'simplicity is not the absense of clutter', 'QR codes', 'art directed blog posts', 'masonry', 'infinite scrolling', 'lazy load', 'mobile navigation toggle', 'api', 'spa', 'ember', 'backbone', 'mvc', 'require', 'the open web', 'server farm', 'bash', 'free as in beer', 'nosql', 'how long does it take to learn javascript', 'gui', 'fortran', 'server-side', 'back-end', 'groovy on grails', 'haskell', 'erlang', 'continuous integration', 'capistrano', 'typescript', 'coffeescript', 'google dart', 'yehuda katz'];

                var min = 0;
                var max = this.words.length;

                var length = this.wordCount;
                for (var i = 0; i < this.wordCount; i++) {
                    var rando = Math.floor(Math.random() * (max - min + 1)) + min;
                    this.chosenWords.push(this.words[rando]);
                    this.words.splice(rando, 1);
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

                this.setSaveSession();

                this.retrieveSaved();
                this.printLocalStorage();
            }
            FlexContainer.prototype.setSaveSession = function () {
                var self = this;
                window.onbeforeunload = function () {
                    self.saveSession();
                };
            };

            FlexContainer.prototype.saveSession = function () {
                var array = this.items();
                var items = array.length;
                var itemsString = items.toString();

                localStorage.clear();
                localStorage.setItem('items', itemsString);

                for (var i = 0; i < items; i++) {
                    var obj = array[i];
                    obj.saveProps();
                }
            };

            FlexContainer.prototype.retrieveSaved = function () {
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

                    this.items.push(new flexbox.model.FlexItem(this, index, {
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
                    }));
                }
            };

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
                var index = this.getItemIndex();
                this.items([]);
                this.items.push(new flexbox.model.FlexItem(this, index++, {
                    isFlexyWidth: true,
                    flexGrow: "1",
                    flexShrink: "0",
                    flexBasis: "98%",
                    alignSelf: "center",
                    height: "140px",
                    content: "HEADER"
                }), new flexbox.model.FlexItem(this, index++, {
                    viewContent: true,
                    viewSettings: false,
                    isFlexyWidth: true,
                    flexGrow: "1",
                    flexShrink: "0",
                    flexBasis: "200px",
                    height: "auto",
                    lorem: 100 }), new flexbox.model.FlexItem(this, index++, {
                    viewContent: true,
                    viewSettings: false,
                    isFlexyWidth: true,
                    flexGrow: "1",
                    flexShrink: "0",
                    flexBasis: "200px",
                    height: "auto",
                    lorem: 100 }), new flexbox.model.FlexItem(this, index++, {
                    viewContent: true,
                    viewSettings: false,
                    isFlexyWidth: true,
                    flexGrow: "1",
                    flexShrink: "0",
                    flexBasis: "200px",
                    height: "auto",
                    lorem: 100 }), new flexbox.model.FlexItem(this, index++, {
                    isFlexyWidth: true,
                    flexGrow: "1",
                    flexShrink: "0",
                    flexBasis: "98%",
                    alignSelf: "center",
                    height: "140px",
                    content: "FOOTER" }));

                this.cPropsCurrent.alignItems("stretch");
            };

            FlexContainer.prototype.responsiveNav = function () {
                var index = this.getItemIndex();
                this.items([]);
                this.items.push(new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "Home" }), new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "About" }), new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "Contact" }), new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "Portfolio" }), new flexbox.model.FlexItem(this, index++, { isFlexyWidth: true, flexGrow: "1", flexShrink: "0", flexBasis: "200px", height: "50px", margin: "2px", content: "Blog" }));
            };

            FlexContainer.prototype.printLocalStorage = function () {
                var booleanValue;
                var confirm = localStorage.getItem('items');
                if (confirm === "0") {
                    console.log('Nothing has been stored in localStorage.');
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

                this.resizeContainer();
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

            Tour.prototype.resizeContainer = function () {
                var $el = $('.flex-container');
                var width = $el.width();
                $el.css('width', width.toString() + "px");

                $el.animate({
                    width: "300px"
                }, {
                    duration: 3000,
                    easing: "swing"
                });

                $el.animate({
                    width: "100%"
                }, {
                    duration: 3000,
                    easing: "swing"
                });

                $el.css('width', null);
            };
            return Tour;
        })();
        model.Tour = Tour;
    })(flexbox.model || (flexbox.model = {}));
    var model = flexbox.model;
})(flexbox || (flexbox = {}));
