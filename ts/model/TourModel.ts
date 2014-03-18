module flexbox {

    export module model {

        export class TourModel {
            messages: any;

            constructor() {


                this.messages = [

                    {
                        "text": 'Welcome! <br><br>Click the right arrow at the bottom of this box to start an interactive tour of flexbox.',
                        "hasButton": false,
                        "xUrl": null,


                    },
                    {
                        "text": 'The Flexbox Layout (Flexible Box) module is meant to help us lay out elements and modules within websites and applications.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'According to <a href="http://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">Chris Coyier</a>:<br><br> "The main idea behind the flex layout is to give the container the ability to alter its items\' width/height (and order) to best fill the available space... A flex container expands items to fill available free space, or shrinks them to prevent overflow.',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                                        {
                        "text": 'You can imagine how helpful that would be with building, device-agnostic responsive web sites and applications.',
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
                        "text": 'You donot actually have to add any special flexbox styling to the flex items',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'For example, lets go ahead and add your first flex item to the container, by clicking the big plus sign at the top right of the screen.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Youll the item is fixed width, which means weve given a definitive width and height.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'This is the way to go in some cases if you need to give an item defined dimensions, but a few steps from now, youll see it doesnt allow you to experience all of the magic of flexbox.',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'Even so, it is something.',
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
                    }, {
                        "text": 'Another benefit of flexbox that solves a common gripe is a nav menus. Click the button that says give me a perfect nav menu. Youll see that its perfectly flexible, center aligned, and responsive, all without any trickery. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    }, {
                        "text": 'Alrighty, believe it or not, you know just about all you need to know about flexbox to be dangerous. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    }, {
                        "text": 'And whats great about that is that even the flex items in this layout can act as flex boxes if you want them to. ',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    }, {
                        "text": 'A couple of important notes Its not well supported quite yet... list the browsers. So it might be a couple of years or more before this becomes standard practice for use in production websites. If youd like to learn more about each specific property, head to LINK or LINK',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    }, {
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
                    },
                ];





            }

        }

    }

}
