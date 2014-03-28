var flexbox;
(function (flexbox) {
    (function () {
        $(document).ready(function () {
            var flexboxApp = new flexbox.view.FlexContainer();
            ko.applyBindings(flexboxApp, document.getElementById('flexbox-app'));

            var slideBtn = document.getElementById('mh-slide-btn');

            slideBtn.addEventListener('click', function () {
                sayHi();
            });

            function sayHi() {
                console.log('hi');
            }
        });
    })();
})(flexbox || (flexbox = {}));
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
                        "text": 'Step right up! <br><br>Click the right arrow at the bottom of this box to start an interactive tour of flexbox.',
                        "hasButton": true,
                        "xUrl": "#",
                        "xText": "resize it!",
                        "action": true
                    },
                    {
                        "text": 'The Flexbox Layout (Flexible Box) module is meant to help us lay out elements and modules within websites and applications.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'According to Chris Coyier</a>:<br><br> "The main idea behind the flex layout is to give the container the ability to alter its items\' width/height (and order) to best fill the available space..."',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": '...he continues "a flex container expands items to fill available free space, or shrinks them to prevent overflow."',
                        "hasButton": true,
                        "xUrl": 'http://css-tricks.com/snippets/css/a-guide-to-flexbox/',
                        "xText": 'See the full article',
                        "action": null
                    },
                    {
                        "text": 'You can imagine how helpful this would be with building device-agnostic, responsive web sites and applications.<br><br>Let\'s get started.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'First, note that as we\'re working with flexbox, we\'ll be applying styling to the containing element as well as its children (we\'ll call them "items").',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'So, if the big grey box at your left is a flexbox container (it is), you can expect that its "display" property will be set to "flex".',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'In fact, that\'s all the code you need to create a simple flexbox container. <br><br>Click the + button at the top-left of this page three times to create three new flex items and your first flexbox layout!',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Ready to see this baby in action?<br><br>Let\'s simulate smaller screens by resizing the container element.',
                        "hasButton": true,
                        "xUrl": "#",
                        "xText": "resize it!",
                        "action": true
                    },
                    {
                        "text": 'Amazing! What used to require an entire suite of floats, media queries, and <a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank">outright hacks</a>, is acheived by adding one property to a container div!',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Go ahead and click on the gear icon at the top-right of any of the flex items, to see the properties they have. Just simple, pixel-based height and width values. That\'s it.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Keep in mind, while fixed-width flex items are sometimes all you need, they certainly don\'t show you all of the magic flexbox has to offer. <br><br>We\'ll get to that soon enough, but first...',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": '...while we\'ve got these three fixed-width items here, take a minute or two to explore the container styling options at the top of the page.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'You can start with "flex-direction", which is responsible for setting the direction of the axis along which your flex items will be displayed.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'Next is "flex-wrap," which declares whether the flex container will span single or multiple lines. If you select "nowrap", the flex items will not be contained by the boundaries of the container. <br><br>If you select "wrap", items will be pushed to the next line when a row is filled.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Here things get a little more interesting. The "justify-content" property sets the alignment along the main axis (horizontally, if your items are in a row). It will only have an effect if there is free space between your items. If there is... oh, the possibilities... ',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Another powerful property is "align-items", which determines how flex items are going to be laid out along the other axis (vertically, if your items are in a row). Pretend you\'re setting the "justify-content" property for the other direction. Go ahead, take it for a spin.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Finally we come to the "align-content" propety. Its job is to align a flex container\'s lines when there is extra space between rows (if your items are in a row). It\'s important to note that this property only works when a flex container has more than one row/column of items.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'So, if you haven\'t done it yet, add 3 or 4 more items to your container so you can get acquainted with the uses of "align-content"',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'By the way, you may have noticed the "resize flexbox" button at the top of the page. Any time you want to see what a layout would do on a smaller screen, click it. You can clear all of the items and start fresh with the "delete all" button. (big surprise)',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'At this point, you\'ve seen a lot of what flexbox can do. But you may have noticed that not all of the properties you\'ve changed so far have had an effect on the items in the flexbox. That\'s because some of the properties are really designed for flexible width items...',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'That being said, to experience the real magic of flexbox we need items with flexible widths. Co ahead and clear your flex container (click "delete all") and add six new items to your container. Just be sure the "flexible" option is selected before you do.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Your flexbox should immediately look different than they did with fixed width items. What you\'re witnessing is perhaps the premiere feature of flexbox: your items grow (or shrink) to fill the space they\'ve been given.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action": null
                    },
                    {
                        "text": 'It\'d be a good to click the little gear icon on one of your items. It will show the properties we\'ve applied to these items, which the fixed ones didn\'t have. You should see "flex-grow", "flex-shrink," and/or "flex-basis" properties and values.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Flex-grow is just a declaration of the items\' size, but unlike pixels or ems, it refers to the item\'s size <em>relative to the other flex items in the container</em>. Go ahead and click the gear on any of the flex items and adjust their flex-grow value to see what I mean.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'One fairly spectacular use case for flex-grow values is a navigation menu to which you may need to add items dynamically. Since flex-grow values are relative to one another you can add more and more items without having to recode them all again... ',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Try adding a several new flexible items to see them squish together all onto one row.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Compared to flex-grow, "flex-shrink" may be a little trickier, but still very useful. Basically it specifies how much the flex item will shrink relative to other flex items in the flex container when the space on a row has been filled.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'To see how it works, remove all of your items. Make sure your default setting for new items is flexible, and add three. Now set the flex-shrink value of one to 2 and click "resize flexbox". It shrinks at twice the pace of the other flex items in the container.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Finally we come to "flex-basis", which is a <em>very</em> important one. It\'s a lot like "min-width", but for flex items only. Basically it says, "make this item fill the space it has and shrink as much as it needs to... buuuut the smallest it can be is "X pixels or ems".',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'To see it in action, just resize the flex container. You\'ll see that when the item reaches its flex basis, it stops flexing and something else has to flex or pushed to the next line.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Now that we have some flexible items to work with, go ahead and move the align-items property to "stretch". That means we\'re stretching them across the vertical axis to fill the space they\'ve been given. Pretty cool, eh?',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'You can imagine how many of the properties in justify-content and align-content are only useful so far as there a space between the items, but go ahead and play around with them too, or just move on to the next slide.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Now, how about some practical uses for flexbox?',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'One of the most useful right out-of-the-box is vertical centering. Clear your screen of flex items and add just one. Make sure "justify-content" and "align-content" have been set to "center".',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Notice how the item automatically goes to the center of the container. Without flexbox this would take some seriously awkward fanagling, using height and padding properties and probably a little javascript to be sure. This way, on the other hand, is dead simple.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Another practical use would be creating a flexible layout for a basic website. Click the button, and see a perfectly flexible website layout automatically generated.',
                        "hasButton": true,
                        "xUrl": "#",
                        "xText": "Make Holy Grail",
                        "action": true
                    },
                    {
                        "text": 'Another big plus is that your flex items can act as flexbox containers simultaneously, if you want them to.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Don\'t believe me? Right click on any of the flex items in the container app, and select "inspect element". You can see in the styling, that we\'re using flexbox properties to keep the lorem ipsum (within a paragraph tag) in the center of each item.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'In fact, most of the layout elements on this page are flexbox. It made for very simple layout code, so I could focus on the harder and more fun work (like writing the javascript to make an interactive app!).',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Alright, believe it or not, you know just about all you need to know about flexbox to be dangerous.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Technically, I didn\'t show you every single feature and variation of the flexbox spec, including the "align-self" property which can be applied to flex items, as well as "order" which allows you to change the order of items in the container.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'There are also a few variations for flex-direction and flex-wrap worth looking into, although their usage is probably much less useful than the options you have here.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Finally, browser support. Long story short, flexbox is now supported in all of the latest browser versions (Firefox 28 has finally shipped), but if you need to support older browsers check out <a href="http://caniuse.com/flexbox" target="_blank">caniuse</a>to see what your options are.',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Wondering about vendor prefixes? There are all sorts of quirky issues actually, since flexbox is on its third syntax. But none of that matters if you use <a href="http://css-tricks.com/autoprefixer/" target="_blank">autoprefixer</a>. Seriously, stop worrying about vendor prefixes (at all) and use autoprefixer.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Well, I hope that helped you wrap your head around flexbox. It\'s a very useful property and almost certainly the future of CSS layouts. If it seems tricky at first, don\'t worry. Just keep tinkering and you\'ll get the hang of it.',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Have feedback? I want it. <br> <br> Email me <a href="mailto:brycepj@gmail.com">here</a> or get at me <a href="https://twitter.com/_devbryce"> on twitter</a>.',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'El Fin!',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": null,
                        "action": null
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
                this.text = "devLorem ipsum";
                this.words = ['apple\'s website', 'unobtrusive javascript', 'static', 'brad frost', 'organic', 'mockup', 'whitespace', 'above the fold', 'skeuomorphism', 'always be shipping', 'steve jobs', 'flat design', 'grid', 'net neutrality', 'SOPA', 'code', 'ICANN', 'content strategy', 'content', 'f.lux', 'blue beanie', 'rollover', 'table', 'css zen garden', 'preload', 'gif', 'sprite', 'laura kalbag', 'dev bootcamp', 'cs degree', 'hacker school', 'the picture element', 'W3 Fools', 'W3C', 'ftp', 'deployment strategy', 'python vs ruby', 'jeff atwood', 'stack overflow', 'just build websites', 'wordpress', 'java', 'pycharm', 'web storm', 'foreach', 'addClass', 'slice', 'alex sexton', '80/20 rule', 'float drop', 'bacon ipsum', 'dogmatic', 'promise', 'atomic design', 'shoptalkshow', 'yayQuery', 'javascript jabber', 'vagrant', 'chris coyier', 'flexbox', 'device agnostic', 'breaks in ie6', 'paul irish', 'web standards', 'grok', 'crufty', 'angular', 'MV*', 'addy osmani', 'custom elements', 'paralax', 'performance budget', 'offline first', 'gulp', 'node', 'ie6 countdown', 'progressive enhancement', 'the Industry', 'svg', 'machine code', 'rails', 'django', 'google', 'indexDB', 'webgl', 'ux/ui', 'tim kadlec', 'retina', 'fixed header', 'minimalist', 'QR codes', 'art direction', 'masonry', 'infinite scrolling', 'lazy load', 'mobile navigation toggle', 'api', 'spa', 'ember', 'backbone', 'mvc', 'require', 'the open web', 'server farm', 'bash', 'free as in beer', 'nosql', 'how long does it take to learn javascript', 'gui', 'fortran', 'server-side', 'back-end', 'groovy on grails', 'haskell', 'erlang', 'continuous integration', 'capistrano', 'typescript', 'coffeescript', 'google dart', 'yehuda katz'];

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

                this.tourBox = new flexbox.model.Tour();

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
                    margin: "10px"
                };

                this.defaultBtnText = "Sync Items with Defaults";

                this.cPropsDefault = {
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center"
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

                this.flexType = ko.observable("fixed");
                this.loremCount = ko.observable(5);

                this.setSaveSession();
                this.printLocalStorage();
                this.retrieveSaved();
            }
            FlexContainer.prototype.actionChecker = function () {
            };

            FlexContainer.prototype.tourNext = function () {
                this.tourBox.next();
            };

            FlexContainer.prototype.tourPrevious = function () {
                this.tourBox.previous();
            };

            FlexContainer.prototype.tourResize = function () {
                this.tourBox.resizeContainer();
            };

            FlexContainer.prototype.newItem = function () {
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

                console.log('new item created as: ' + flexType);
            };

            FlexContainer.prototype.oneLessItem = function () {
                this.items.pop();
            };

            FlexContainer.prototype.getItemIndex = function () {
                var currentLength = this.items().length;
                return currentLength + 1;
            };

            FlexContainer.prototype.deleteAllItems = function () {
                console.log('just went there');

                var array = this.items();
                var self = this;

                for (var i = 0; i < array.length; i++) {
                    $('.flex-item').eq(i).addClass('fadeOutDownBig');
                }

                setTimeout(function () {
                    self.items([]);
                }, 500);
            };

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

            FlexContainer.prototype.destroyAll = function () {
                $('.flex-item').addClass('bounceOut');
                var self = this;

                setTimeout(function () {
                    self.items([]);
                }, 800);
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

                this.currentAction = ko.computed(function () {
                    var index = this.index();
                    var action = this.tour.messages[index].action;

                    if (action) {
                        return true;
                    }
                }, this);

                this.tourProgress = ko.computed(function () {
                    var currentIndexNum = this.index() + 1;

                    console.log(currentIndexNum);
                    var currentIndex = currentIndexNum.toString();
                    var tourLength = this.tour.messages.length.toString();
                    var progressString = currentIndex + " / " + tourLength;

                    return progressString;
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
