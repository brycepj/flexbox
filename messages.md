- Start the interactive tour
- Flexbox is a new layout property CSS that ....
- In this tutorial, you'll learn all the major features of the property...by doing!
- To get our bearings, note that in order for flexbobx to work, we apply styling to the containing element as well as its children. 
- So, the big blue box on your left is a `div` with display:flex. That's where we'll start. You can watch the code sample below grow as we add more styles
- You don't actually have to add any special flexbox styling to the flex items
- For example, let's go ahead and add your first flex item to the container, by clicking the big plus sign at the top right of the screen. 
- You'll the item is *fixed* width, which means we've given a definitive width and height. 
- This is the way to go in some cases if you need to give an item defined dimensions, but a few steps from now, you'll see it doesn't allow you to experience all of the magic of flexbox.
- Even so, it's something. 
- Go ahead and add three more. 
- Before we get into playing with the properties, you've also done enough to discover one reason flexbox is the future of CSS layouts: it's responsive out-of-the-box.
- Just resize the containing element and you'll see what I mean. 
- Now, let's adjust some of the styling of the container. Generally, when you add this properties they affect all of the children (except those that are absolute positioned) unitedly.
- Let's start with the justify-content property. 
- You apply it to the flex-container when you want to manipulate the spacing between your flex items accross the main axis.
- Go ahead and cycle through the different variations. You'll quickly get a feel for what each can do. 
- Next, let's move on to the align-content property. That's what you do to determine how .....
- Go ahead and cycle through the different variations. You'll notice how this can work in conjunction with the justify-content property to acheive various layout effects. 
-finally let's throw in the align-items property. It's what you adjust when you want to adjust the space between different rows of flex items.
- That means it's not going to do anything for you if you don't have multiple rows of items. Add three more and then play with the align-items property. 
- Be forewarned not all of the properties will do something, since some of them are created for flexible width items. 
- Speaking of: to experience the real magic of flexbox we need flex items with flexy widths. Make sure you have 6 flex items and go ahead and click "Make All flexy at the top"
- Things look similar but definitely different. When items in a flex container are flexy width, they'll grow (or shrink) to fill the space they've been given. 
- So how do you make something flexy width, you ask?
- Just leave off the width/height properties, and rather give them properties you see in their indiividual boxes. The three you'll use the most are flex-grow, flex-shrink, and flex-basis. 
-Flex-grow is just a relative value of its size. Go ahead and adjust the flex-grow values of the different items, and I think you'll get an idea fairly quickly of how it works. 
- Flex Shrink is a lot like flex-grow, but kinda the opposite. It's ....
- Finally flex-basis, which is avery important one. It's a lot like min-width actually.It basically says, make this box fill the space it's given and be flexible and all, but the smallest it can be along the main axis is ____ px or ems
- To see it in action just resize the flex container, and you'll see that when the item reaches its flex point (add functionality that shows the width of the container as it's being resized) it stops flexing. 
- Now that we've got some flexy boxes, we can explore a couple of the features that we're really available to us with fixed width boxes. 
- Go ahead and move the align-items property to stretch. That means we're strecthing them accorss the cross-axis to fill the space they've been given.
- You can imagine how many of the properties in justify-content and align-content are only useful so far as there a space between the items, but go ahead and play around with them too. 

Okay what about some practical uses, for flexbox?

- One of the most useful right our of the box is vertical centering. Clear your screen of flex items and add just one. 

- Notice how the item automatically goes to the center of the container. Without flexbox this would take some seriously awkward fanagling of the boxes height, padding or maybe even javascript. This way is just dead simple. 

- Or how about basic website layouts. Click the Holy Grail button, and see a perfectly flexible website layout automatically generated. 

- And what's great about that is that even the flex items in this layout can act as flex boxes if you want them to. 

- Look at the layout of this app. Every major division of the page is a flexible box. Which means there are sometimes flexboxes three layers deep, like russian doll flexboxes. 

- Another benefit of flexbox that solves a common gripe is a nav menus. Click the button that says give me a perfect nav menu. You'll see that it's perfectly flexible, center aligned, and responsive, all without any trickery. 

- Alrighty, believe it or not, you know just about all you need to know about flexbox to be dangerous. 

- A couple of important notes: 
- 1) It's not well supported quite yet... list the browsers. 
- So it might be a couple of years or more before this becomes standard practice for use in production websites.
- If you'd like to learn more about each specific property, head to LINK or LINK

- I hope you found this helpful. Feedback is much appreciated: @_devbryce on twitter. 


Practice exercises:
- Create several new flex items, but change some to be fixed, and others to have a flexible width and then resize the window. 