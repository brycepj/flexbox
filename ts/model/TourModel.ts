module flexbox {

    export module model {

        export class TourModel {
            messages:any;
            actionOptions:any;

            constructor() {

                this.actionOptions = ['resize','holyGrail','perfectNav','picScroll'];

                this.messages = [

                    {

                        "text": 'Step right up! <br><br>Click the right arrow at the bottom of this box to start an interactive tour of flexbox.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null

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
                        "text": 'He continues, "A flex container expands items to fill available free space, or shrinks them to prevent overflow."',
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
                        "text": 'In fact, that\'s all the code you need to create a simple flexbox container. <br><br>Click the + button below three times to create three new flex items and your first flexbox layout!',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Ready to see this baby in action?<br><br>Let\'s simulate smaller screens by resizing the container element.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": 'resize it!',
                        "action": 'resize'
                    },
                    {
                        "text": 'Amazing! What used to require an entire suite of floats, media queries, and <a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank">outright hacks</a>, is acheived by adding one property to a container div!',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },


                    {
                        "text": 'Go ahead and click on the gear icon at the top-right of any of the flex items, to see the properties they have. Just simple, pixel-based height and width values. That\'s it.<br><br>(You could use em or percent values too.)',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },

                    {
                        "text": 'Keep in mind, while fixed-width flex items are sometimes all you need, they certainly don\'t show you all the magic flexbox has to offer. <br><br>We\'ll get to that soon enough, but first...',
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
                        "text": 'You can start with "flex-direction", which is responsible for setting the direction of the axis along which your flex items will be displayed.<br><br> Go ahead and switch it to "column", and then back to row to see the difference.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'By the way, for the next several slides, it\'d be a good idea to keep flex-direction set to "row", since many of the properties we\'ll look at work slightly differently in column layouts.',
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
                        "text": 'Go ahead and play around with the options for justify-content, and remember you can click the "resize box" button at anytime to see what would happen on smaller screens.',
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
                        "text":'For best results, make sure your items are all on one row, either by reducing the number of items in the box or setting flex-wrap to nowrap.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Finally we come to the "align-content" property. Its job is to align a flex container\'s lines when there is extra space between rows (if your items are in a row). It\'s important to note that this property only works when a flex container has more than one row/column of items.',
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
                        "text": 'By the way, you may have noticed the "delete all" button in the control panel. Any time you want to clear all of the items, give it a nice, furtive click.',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },

                    {
                        "text": 'At this point, you\'ve seen a lot of what flexbox can do. But you may have noticed that not all of the properties you\'ve adjusted so far have had an effect on the items in the flexbox. That\'s because some of the properties are really designed for flexible width items...',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'That being said, to experience the real magic of flexbox we need items with flexible widths. Go ahead and clear your flex container (click "delete all") and add six new items to your container. Just be sure the "flexible" option is selected before you do.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Your flex items should immediately look different than they did with fixed width items. What you\'re witnessing is perhaps the premiere feature of flexbox: your items grow (or shrink) to fill the space they\'ve been given.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'It\'s a good to click the little gear icon on one of your items. It will show the properties we\'ve applied to these items, which the fixed ones didn\'t have. You should see "flex-grow", "flex-shrink," and/or "flex-basis" properties and values.',
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
                        "text": 'In fact, let\'s make one! <br><br>(Remember to resize the container!)',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": 'make a menu',
                        "action": 'nav'
                    },
                    {
                        "text": 'Compared to flex-grow, "flex-shrink" may be a little trickier, but still very useful. Basically it specifies how much the flex item will shrink relative to other flex items in the flex container when the space on a row has been filled.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'To see how it works, remove all of your items. Make sure your default setting for new items is flexible, and add three. Now set the flex-shrink value of one to 2, and all of their flex-basis properties to "100px" and click "resize flexbox". It shrinks at twice the pace of the other flex items.',
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
                        "text": 'Now, how about some other practical uses for flexbox?',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'One of the most useful right out-of-the-box is vertical centering. Clear your screen of flex items and add just one. Make sure "justify-content" and "align-items" have been set to "center".',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Notice how the item automatically goes to the center of the container. Without flexbox this would take some seriously awkward fanagling, using height and padding properties and probably a little JavaScript to be sure. This way, on the other hand, is dead simple.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Another practical use would be creating a flexible layout for a basic website. Click the button, and see a perfectly flexible website layout automatically generated.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": "layout a website",
                        "action": 'holyGrail'
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
                        "text": 'In fact, almost all of the layout elements on this page are flexbox. It made for very simple layout code, so I could focus on the harder and more fun work (like writing the JavaScript to make an interactive app!).',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },

                   {
                        "text": 'Alright, I could go on and on with examples... but believe it or not, you know just about all you need to know about flexbox to be dangerous.',
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
                        "text": 'Finally, browser support. Long story short, flexbox is now supported in all of the latest browser versions (Firefox 28 has finally shipped), but if you need to support older browsers check out <a href="http://caniuse.com/flexbox" target="_blank">caniuse</a> to see what your options are.',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'Wondering about vendor prefixes? There are some quirky issues actually, since flexbox is on its third syntax. But none of that matters if you use <a href="http://css-tricks.com/autoprefixer/" target="_blank">autoprefixer</a> to handle vendor prefixes for you. Seriously, stop worrying about vendor prefixes (at all, forever) and use autoprefixer.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                    {
                        "text": 'UPDATE: In making stylistic changes to this app, I\'ve discovered various differences in how browsers render flexbox layouts (particularly Safari), some more significant than others. Long story short, with flexbox, tread lightly and test all the devices you can.',
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
                        "text": 'Oh, a few resources I found very helpful:<br><br><a href="http://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">Chris Coyier\'s Complete Guide</a><br> <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes" target="_blank">MDN on Flexible Boxes</a><br><a href="http://www.w3.org/TR/css-flexbox-1/" target="_blank">The official W3C Spec</a><br><a href="http://caniuse.com/flexbox" target="_blank">CanIUse Flexbox</a>'

                            ,
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
                        "text": 'The End!',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": null,
                        "action": null
                    },
                ];


            }

        }

    }

}
