module flexbox {

    export module model {

        export class TourModel {
            messages:any;

            constructor() {


                this.messages = [

                    {
                        "text": 'Step right up! <br><br>Click the right arrow at the bottom of this box to start an interactive tour of flexbox.',
                        "hasButton": true,
                        "xUrl": "#",
                        "xText":"resize it!",
                        "action":true


                    },
                    {
                        "text": 'The Flexbox Layout (Flexible Box) module is meant to help us lay out elements and modules within websites and applications.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'According to Chris Coyier</a>:<br><br> "The main idea behind the flex layout is to give the container the ability to alter its items\' width/height (and order) to best fill the available space..."',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },

                    {
                        "text": '...he continues "a flex container expands items to fill available free space, or shrinks them to prevent overflow."',
                        "hasButton": true,
                        "xUrl": 'http://css-tricks.com/snippets/css/a-guide-to-flexbox/',
                        "xText": 'See the full article',
                        "action":null
                    },
                    {
                        "text": 'You can imagine how helpful this would be with building device-agnostic, responsive web sites and applications.<br><br>Let\'s get started.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },

                    {
                        "text": 'First, note that as we\'re working with flexbox, we\'ll be applying styling to the containing element as well as its children (we\'ll call them "items").',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'So, if the big blue box on your left is a flexbox container (it is), its "display" property will be set to "flex".',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'In fact, that\'s all the code you need to create a simple flexbox container. <br><br>Click the + button at the top of the page 3x to create three new flex items and your first flexbox layout!',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'Ready to see this baby in action?<br><br>Let\'s simulate smaller screens by resizing the container element.',
                        "hasButton": true,
                        "xUrl": "#",
                        "xText": "resize it!",
                        "action":null
                    },
                    {
                        "text": 'Amazing! What used to require an entire suite of floats, media queries, and <a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank">outright hacks</a>, is acheived by adding one property to a container div!',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },


                    {
                        "text": 'Go ahead and click on the gear icon at the top-right of any of the flex items, to see the properties they have. Just simple, pixel-based height and width values. That\'s it.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },

                    {
                        "text": 'Moving on... While fixed-width items are sometimes all you need, they certainly don\'t show you all of the magic flexbox has to offer. <br><br>We\'ll get to that soon enough, but first...',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": '...while we\'ve got these three fixed-width items here, take a minute or two to explore the container styling options at the top of the page.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'Get started with "flex-direction" sets the direction of axis along which your flex items will be displayed. Notice as you toggle between the options how easy it is to make drastic changes to a flex container\'s layout.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'Next is "flex-wrap," which declares whether the flex container will be span single or multiple lines. If you select "nowrap", the flex items will not be contained by the boundaries of the container. If you select "wrap", items will be pushed to the next line when a row is filled.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },


                    {
                        "text": 'Here things get a little more interesting. The "justify-content" property sets the alignment along the main axis (horizontally, if your items are in a row). It will only have an effect if there is free space between your items. If there is... oh, the possibilities.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'Another powerful property is "align-items", which determines how flex items are going to be laid out along other axis (vertically, if your items are in a row). If it helps, just pretend your setting the "justify-content" property for the other direction. Go ahead, take it for a spin.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'Finally we come to the "align-content" propety. Its job is to align a flex container\'s lines when there is extra space between rows (if your items are in a row). It\s important to not that this property only works when a flex container has multiple (more than one) rows of items.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'So, if you haven\'t done it yet, add 3 or 4 more items to your container so you can get acquainted with the uses of "align-content"',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action":null
                    },

                    {
                        "text": 'At this point, you\'ve seen a lot of what flexbox can do. But not all of the properties will do something yet, since some are really designed for flexible width items. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action":null
                    },
                    {
                        "text": 'That being said, to experience the real magic of flexbox we need flex items with flexy widths. Make sure you have 6 flex items and go ahead and click "Make All Flexy" to give them all flexible width properties.',
                        "hasButton": true,
                        "xUrl": "#",
                        "xText": "Make All Flexy",
                        "action":null
                    },
                    {
                        "text": 'Things should immediately look different. What your witnessing is the amazing phenomena that when items in a flex container are flexible width, they\'ll grow (or shrink) to fill the space they\'ve been given. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action":null
                    },
                    {
                        "text": 'So, assuming you don\'t have a "Make All Flexy" button built into your text editor, how do you make something flexy width? Good question.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action":null
                    },
                    {
                        "text": 'The answer is simple. Remove any width/height properties, and replace them with "flex-grow", "flex-shrink," and/or "flex-basis" properties and values.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'Flex-grow is just a size value relative to the other flex items in the container. Go ahead and click the gear on any of the flex items and adjust their flex-grow value to see what I mean. ',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'One fairly spectacular use case for using flex-grow values is a navigation menu which you may need to item items to dynamically. Since flex-grow values are relative to one another you can add more and more items without having to recode them all again. Try adding a couple new flex-items to see what I mean.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'Compared to flex-grow, "flex-shrink" may be a little trickier, but still very useful. Basically it specifies how much the flex item will shrink relative to other flex items the flex container when the space on a row has been filled.',
                        "hasButton": false,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action":null
                    },
                    {
                        "text": 'To see how it works, remove all of your items. Switch your default setting to flexible, and add three. Now set the flex-shrink value of one to 2. Make sense now. It shrinks at twice the pace of the flex items in the container, which only have flex-shrink values of 1',
                        "hasButton": false,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action":null
                    },
                    {
                        "text": 'Finally we come to "flex-basis", which is avery important one. It\'s a lot like "min-width", but for flex items only. Basically it says, "make this item fill the space it has and shrink has much as it needs to... buuuut the smallest it can be is "X". Feel free to use pixels or ems.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action":null
                    },
                    {
                        "text": 'To see it in action, just resize the flex container. You\'ll see that when the item reaches its flex basis, it stops flexing and something else has to flex or pushed to the next line.',
                        "hasButton": true,
                        "xUrl": "#",
                        "xText": "Resize it!",
                        "action":null
                    },
                    {
                        "text": 'Now that we have some flexible items to work with, go ahead and move the align-items property to stretch. That means were stretching them across the cross-axis to fill the space they\'ve been given. Pretty cool, eh?',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action":null
                    },
                    {
                        "text": 'You can imagine how many of the properties in justify-content and align-content are only useful so far as there a space between the items, but go ahead and play around with them too, or just move on to the next slide.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action":null
                    },
                    {
                        "text": 'Now, how about some practical uses for flexbox?',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'One of the most useful right out-of-the-box is vertical centering. Clear your screen of flex items and add just one. ',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'Notice how the item automatically goes to the center of the container. Without flexbox this would take some seriously awkward fanagling, using height and padding properties and probably a little javascript to be sure. This way is just dead simple.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'Or how about basic website layouts. Click the Holy Grail button, and see a perfectly flexible website layout automatically generated.',
                        "hasButton": true,
                        "xUrl": "#",
                        "xText": "Make Holy Grail",
                        "action":null
                    },
                    {
                        "text": 'Another big plus is the flex items in this layout can act as flex boxes if you want them to.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action":null
                    },
                    {
                        "text": 'Don\'t believe me? Look at the flex items in the container app. Click on the gear icon on any one to make the developer lorem ipsum show. See how it\'s centered vertically? Yep, it\'s both a flex box and a flex item.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action":null
                    },
                    {
                        "text": 'In fact, most of the layout elements on this page are flexbox. It makes for very simple layout code, so you can focus on the harder and more fun work (like writing the javascript to make this app interactive!).',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },

                    {
                        "text": 'Another benefit of flexbox, and the last one I\'ll show you solves a common gripe for developers and designers: nav menus. Go ahead, create a perfect nav menu. You\'ll see that it\'s perfectly flexible, center-aligned, and responsive, all without any CSS trickery whatsoever.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'Alright, believe it or not, you know just about all you need to know about flexbox to be dangerous.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action":null
                    },
                    {
                        "text": 'There\'s certainly more to learn--I didn\'t teach you <em>every</em> little nook and cranny of the spec. But at this point the best thing you can do to learn is practice using it on your own projects. Just build websites, as they say.',
                        "hasButton": false,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text",
                        "action":null
                    },
                    {
                        "text": 'Finally, browser support. Long story short, flexbox is now supported in all of the latest browser versions (Firefox 28 has finally shipped), but if you need to support older browsers check out the caniuse listing for flexbox to see what your options are.',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'Wondering about vendor prefixes? There are all sorts of quirky issues actually, since flexbox is officially on its third syntax version. But none of that matters if you use <a href="#">autoprefixer</a>. Seriously, stop worrying about vendor prefixes (at all).',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text": 'Well, I hope that helped you wrap your head around flexbox. It\'s a very useful property and almost certainly the future of CSS layouts. If it seems tricky at first, don\'t worry. Just keep tinkering and you\'ll get the hang of it.',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                    {
                        "text":'Have feedback? I want it. <br> <br> Email me <a href="mailto:brycepj@gmail.com">here</a> or get at me <a href="https://twitter.com/_devbryce"> on twitter</a>.',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": null,
                        "action":null
                    },
                ];


            }

        }

    }

}
