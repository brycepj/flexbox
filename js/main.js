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
                        "text": 'Welcome! <br><br>Click the right arrow at the bottom of this box to start an interactive tour of flexbox.',
                        "hasButton": false,
                        "xUrl": null
                    },
                    {
                        "text": 'The Flexbox Layout (Flexible Box) module is meant to help us lay out elements and modules within websites and applications.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'According to Chris Coyier</a>:<br><br> "The main idea behind the flex layout is to give the container the ability to alter its items\' width/height (and order) to best fill the available space..."',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": '"...a flex container expands items to fill available free space, or shrinks them to prevent overflow."',
                        "hasButton": true,
                        "xUrl": 'http://css-tricks.com/snippets/css/a-guide-to-flexbox/',
                        "xText": 'See the full article'
                    },
                    {
                        "text": 'You can imagine how helpful this would be with building device-agnostic, responsive web sites and applications.<br><br>Let\'s get started.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'First, note that as we\'re working with flexbox, we\'ll be applying styling to the containing element as well as its children (we\'ll call them "items").',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'So, if the big blue box on your left is a flexbox container (it is), its display property will be set to <code>flex</code>.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'In fact, that\'s all you have to do to create a simple flex layout. <br><br>Click the + button at the top of the page 3x to create three new flex items and your first flexbox layout!',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'Ready to see this baby in action?<br><br>Let\'s simulate smaller screens by resizing the container element.',
                        "hasButton": true,
                        "xUrl": "#",
                        "xText": "resize it!"
                    },
                    {
                        "text": 'Amazing! What used to require an entire suite of floats, media queries, and <a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank">outright hacks</a>, is acheived by adding one property to a container div!',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'Go ahead and click on the gear icon at the top-right of any of the flex items, to see the properties they have. Just simple, pixel-based height and width values.',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'While fixed-width flex items are sometimes all you need, they certainly don\'t show you all of the magic flexbox has to offer. We\'ll get to that soon enough, but first...',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": '...while we\'ve got these three fixed-width items here, take a minute or two to explore the containers styles at the top of the page.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": '"flex-direction" This establishes the main-axis, thus defining the direction flex items are placed in the flex container.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": '"flex-wrap" This defines whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": '"justify-content" sets the alignment horizontally (unless your items are in a column). It\'s how you tell the browser what to do with any free space between the flex items.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": '"align-items" This defines the default behaviour for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": '"align-content" This aligns a flex containers lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. Note: this property has no effect when the flexbox has only a single line.',
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
                        "text": 'Go ahead and add three more.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Before we get into playing with the properties, youve also done enough to discover one reason flexbox is the future of CSS layouts: its responsive out-of-the-box.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Just resize the containing element and youll see what I mean. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Now, lets adjust some of the styling of the container. Generally, when you add this properties they affect all of the children (except those that are absolute positioned) unitedly.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Lets start with the justify-content property.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'You apply it to the flex-container when you want to manipulate the spacing between your flex items accross the main axis.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Go ahead and cycle through the different variations. Youll quickly get a feel for what each can do. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Next, lets move on to the align-content property. Thats what you do to determine how .....',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Go ahead and cycle through the different variations. Youll notice how this can work in conjunction with the justify-content property to acheive various layout effects. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'finally lets throw in the align-items property. Its what you adjust when you want to adjust the space between different rows of flex items.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'That means its not going to do anything for you if you dont have multiple rows of items. Add three more and then play with the align-items property. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Be forewarned not all of the properties will do something, since some of them are created for flexible width items. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Speaking of: to experience the real magic of flexbox we need flex items with flexy widths. Make sure you have 6 flex items and go ahead and click "Make All flexy at the top"',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Things look similar but definitely different. When items in a flex container are flexy width, theyll grow (or shrink) to fill the space theyve been given. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'So how do you make something flexy width, you ask?',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Just leave off the width/height properties, and rather give them properties you see in their indiividual boxes. The three youll use the most are flex-grow, flex-shrink, and flex-basis. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Flex-grow is just a relative value of its size. Go ahead and adjust the flex-grow values of the different items, and I think youll get an idea fairly quickly of how it works. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Flex Shrink is a lot like flex-grow, but kinda the opposite. Its ....',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Finally flex-basis, which is avery important one. Its a lot like min-width actually.It basically says, make this box fill the space its given and be flexible and all, but the smallest it can be along the main axis is ____ px or ems',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'To see it in action just resize the flex container, and youll see that when the item reaches its flex point (add functionality that shows the width of the container as its being resized) it stops flexing.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Now that weve got some flexy boxes, we can explore a couple of the features that were really available to us with fixed width boxes.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Go ahead and move the align-items property to stretch. That means were strecthing them accorss the cross-axis to fill the space theyve been given.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'You can imagine how many of the properties in justify-content and align-content are only useful so far as there a space between the items, but go ahead and play around with them too.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Okay what about some practical uses, for flexbox?',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'One of the most useful right our of the box is vertical centering. Clear your screen of flex items and add just one. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Notice how the item automatically goes to the center of the container. Without flexbox this would take some seriously awkward fanagling of the boxes height, padding or maybe even javascript. This way is just dead simple.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Or how about basic website layouts. Click the Holy Grail button, and see a perfectly flexible website layout automatically generated.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'And whats great about that is that even the flex items in this layout can act as flex boxes if you want them to. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Look at the layout of this app. Every major division of the page is a flexible box. Which means there are sometimes flexboxes three layers deep, like russian doll flexboxes. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Another benefit of flexbox that solves a common gripe is a nav menus. Click the button that says give me a perfect nav menu. Youll see that its perfectly flexible, center aligned, and responsive, all without any trickery. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Alrighty, believe it or not, you know just about all you need to know about flexbox to be dangerous. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'And whats great about that is that even the flex items in this layout can act as flex boxes if you want them to. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'A couple of important notes Its not well supported quite yet... list the browsers. So it might be a couple of years or more before this becomes standard practice for use in production websites. If youd like to learn more about each specific property, head to LINK or LINK',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'I hope you found this helpful. Feedback is much appreciated: @_devbryce on twitter. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'El Fin!',
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

                    if (array.length > 5) {
                        alert('your going to have some screwed up stuff happen to you!');
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
                this.printLocalStorage();
                this.retrieveSaved();
            }
            FlexContainer.prototype.setSaveSession = function () {
                var self = this;
                window.onunload = function () {
                    self.saveSession();
                };
            };

            FlexContainer.prototype.saveSession = function () {
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

                localStorage.setItem('cProps-flexDirection', flexDirection);
                localStorage.setItem('cProps-flexWrap', flexWrap);
                localStorage.setItem('cProps-justifyContent', justifyContent);
                localStorage.setItem('cProps-alignItems', alignItems);
                localStorage.setItem('cProps-alignContent', alignContent);

                for (var i = 0; i < items; i++) {
                    var obj = array[i];
                    obj.saveProps();
                }
            };

            FlexContainer.prototype.retrieveSaved = function () {
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
                    width: "270px"
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
