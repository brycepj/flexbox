exports.TourJSON = [
    {
        text: 'Step right up! Click the right arrow at the bottom of this box to start an interactive tour of flexbox.'
    },
    {
        text: 'The Flexbox Layout (Flexible Box) module is meant to help us lay out elements and modules within' +
            'websites and applications.'
    },
    {
        text: 'According to Chris Coyier: "The main idea behind the flex layout is to give the container the ability' +
            ' to alter its items\' width/height (and order) to best fill the available space..."'
    },
    {
        text: 'He continues, "A flex container expands items to fill available free space, or shrinks them to prevent' +
            ' overflow."',
        buttons: [{
                url: 'http://css-tricks.com/snippets/css/a-guide-to-flexbox/',
                text: 'See the full article',
                action: 'url'
            }]
    },
    {
        text: 'You can imagine how helpful this would be with building device-agnostic, responsive web sites and' +
            ' applications.Let\'s get started.'
    },
    {
        text: 'First, note that as we\'re working with flexbox, we\'ll be applying styling to the containing element' +
            ' as well as its children (we\'ll call them "items").'
    },
    {
        text: 'So, if the big grey box at your left is a flexbox container (it is), you can expect that its "display"' +
            'property will be set to "flex".'
    },
    {
        text: 'In fact, that\'s all the code you need to create a simple flexbox container. Click the + button below' +
            ' three times to create three new flex items and your first flexbox layout!'
    },
    {
        text: 'Ready to see this baby in action? Let\'s simulate smaller screens by resizing the container element.',
        buttons: [{
                text: 'resize it!',
                action: 'resize'
            }]
    },
    {
        text: 'Amazing! What used to require an entire suite of floats, media queries, and outright hacks, is acheived' +
            'by adding one property to a container div!',
        buttons: [{
                text: 'Outright hacks',
                url: 'http://nicolasgallagher.com/micro-clearfix-hack/',
                action: 'url'
            }]
    },
    {
        text: 'Go ahead and click on the gear icon at the top-right of any of the flex items, to see the properties they' +
            ' have. Just simple, pixel-based height and width values. That\'s it.(You could use em or percent values too.)'
    },
    {
        text: 'Keep in mind, while fixed-width flex items are sometimes all you need, they certainly don\'t show you' +
            ' all the magic flexbox has to offer. We\'ll get to that soon enough, but first...'
    },
    {
        text: '...while we\'ve got these three fixed-width items here, take a minute or two to explore the container' +
            ' styling options at the top of the page.'
    },
    {
        text: 'You can start with "flex-direction", which is responsible for setting the direction of the axis along' +
            ' which your flex items will be displayed. Go ahead and switch it to "column", and then back to row to see' +
            ' the difference.'
    },
    {
        text: 'By the way, for the next several slides, it\'d be a good idea to keep flex-direction set to "row", since' +
            ' many of the properties we\'ll look at work slightly differently in column layouts.'
    },
    {
        text: 'Next is "flex-wrap," which declares whether the flex container will span single or multiple lines. If' +
            ' you select "nowrap", the flex items will not be contained by the boundaries of the container. If you select' +
            ' "wrap", items will be pushed to the next line when a row is filled.'
    },
    {
        text: 'Here things get a little more interesting. The "justify-content" property sets the alignment along the' +
            ' main axis (horizontally, if your items are in a row). It will only have an effect if there is free space ' +
            'between your items. If there is... oh, the possibilities... '
    },
    {
        text: 'Go ahead and play around with the options for justify-content, and remember you can click the "resize' +
            ' box" button at anytime to see what would happen on smaller screens.'
    },
    {
        text: 'Another powerful property is "align-items", which determines how flex items are going to be laid out' +
            ' along the other axis (vertically, if your items are in a row). Pretend you\'re setting the "justify-content"' +
            ' property for the other direction. Go ahead, take it for a spin.'
    },
    {
        text: 'For best results, make sure your items are all on one row, either by reducing the number of items in the' +
            ' box or setting flex-wrap to nowrap.'
    },
    {
        text: 'Finally we come to the "align-content" property. Its job is to align a flex container\'s lines when' +
            ' there is extra space between rows (if your items are in a row). It\'s important to note that this property ' +
            'only works when a flex container has more than one row/column of items.'
    },
    {
        text: 'So, if you haven\'t done it yet, add 3 or 4 more items to your container so you can get acquainted with' +
            ' the uses of "align-content"'
    },
    {
        text: 'By the way, you may have noticed the "delete all" button in the control panel. Any time you want to' +
            ' clear all of the items, give it a nice, furtive click.'
    },
    {
        text: 'At this point, you\'ve seen a lot of what flexbox can do. But you may have noticed that not all of the' +
            ' properties you\'ve adjusted so far have had an effect on the items in the flexbox. That\'s because some of' +
            ' the properties are really designed for flexible width items...'
    },
    {
        text: 'That being said, to experience the real magic of flexbox we need items with flexible widths. Go ahead' +
            ' and clear your flex container (click "delete all") and add six new items to your container. Just be sure the' +
            ' "flexible" option is selected before you do.'
    },
    {
        text: 'Your flex items should immediately look different than they did with fixed width items. What you\'re' +
            ' witnessing is perhaps the premiere feature of flexbox: your items grow (or shrink) to fill the space they\'ve' +
            ' been given.'
    },
    {
        text: 'It\'s a good to click the little gear icon on one of your items. It will show the properties we\'ve' +
            ' applied to these items, which the fixed ones didn\'t have. You should see "flex-grow", "flex-shrink," and/or' +
            ' "flex-basis" properties and values.'
    },
    {
        text: 'Flex-grow is just a declaration of the items\' size, but unlike pixels or ems, it refers to the item\'s' +
            ' size **relative to the other flex items in the container**. Go ahead and click the gear on any of the flex' +
            ' items and adjust their flex-grow value to see what I mean.'
    },
    {
        text: 'One fairly spectacular use case for flex-grow values is a navigation menu to which you may need to add' +
            ' items dynamically. Since flex-grow values are relative to one another you can add more and more items without' +
            ' having to recode them all again... '
    },
    {
        text: 'In fact, let\'s make one! (Remember to resize the container!)',
        buttons: [{
                text: 'make a menu',
                action: 'menu'
            }]
    },
    {
        text: 'Compared to flex-grow, "flex-shrink" may be a little trickier, but still very useful. Basically it' +
            ' specifies how much the flex item will shrink relative to other flex items in the flex container when the' +
            ' space on a row has been filled.'
    },
    {
        text: 'To see how it works, remove all of your items. Make sure your default setting for new items is flexible,' +
            ' and add three. Now set the flex-shrink value of one to 2, and all of their flex-basis properties to "100px"' +
            ' and click "resize flexbox". It shrinks at twice the pace of the other flex items.'
    },
    {
        text: 'Finally we come to "flex-basis", which is a **very** important one. It\'s a lot like "min-width", but' +
            ' for flex items only. Basically it says, "make this item fill the space it has and shrink as much as it needs' +
            ' to... buuuut the smallest it can be is "X pixels or ems".'
    },
    {
        text: 'To see it in action, just resize the flex container. You\'ll see that when the item reaches its flex' +
            ' basis, it stops flexing and something else has to flex or pushed to the next line.'
    },
    {
        text: 'Now that we have some flexible items to work with, go ahead and move the align-items property to' +
            ' "stretch". That means we\'re stretching them across the vertical axis to fill the space they\'ve been given.' +
            ' Pretty cool, eh?'
    },
    {
        text: 'You can imagine how many of the properties in justify-content and align-content are only useful so far as' +
            ' there a space between the items, but go ahead and play around with them too, or just move on to the next slide.'
    },
    {
        text: 'Now, how about some other practical uses for flexbox?'
    },
    {
        text: 'One of the most useful right out-of-the-box is vertical centering. Clear your screen of flex items and ' +
            'add just one. Make sure "justify-content" and "align-items" have been set to "center".'
    },
    {
        text: 'Notice how the item automatically goes to the center of the container. Without flexbox this would take' +
            ' some seriously awkward fanagling, using height and padding properties and probably a little javascript to be' +
            ' sure. This way, on the other hand, is dead simple.'
    },
    {
        text: 'Another practical use would be creating a flexible layout for a basic website. Click the button, and see' +
            ' a perfectly flexible website layout automatically generated.',
        buttons: [{
                text: 'layout a website',
                action: 'holyGrail'
            }]
    },
    {
        text: 'Another big plus is that your flex items can act as flexbox containers simultaneously, if you want them to.'
    },
    {
        text: 'Don\'t believe me? Right click on any of the flex items in the container app, and select "inspect element".' +
            ' You can see in the styling, that we\'re using flexbox properties to keep the lorem ipsum (within a' +
            ' paragraph tag) in the center of each item.'
    },
    {
        text: 'In fact, almost all of the layout elements on this page are flexbox. It made for very simple layout code,' +
            ' so I could focus on the harder and more fun work (like writing the javascript to make an interactive app!).'
    },
    {
        text: 'Alright, I could go on and on with examples... but believe it or not, you know just about all you need' +
            ' to know about flexbox to be dangerous.'
    },
    {
        text: 'Technically, I didn\'t show you every single feature and variation of the flexbox spec, including the' +
            ' "align-self" property which can be applied to flex items, as well as "order" which allows you to change the' +
            ' order of items in the container.'
    },
    {
        text: 'There are also a few variations for flex-direction and flex-wrap worth looking into, although their ' +
            'usage is probably much less useful than the options you have here.'
    },
    {
        text: 'Finally, browser support. Long story short, flexbox is now supported in all of the latest browser ' +
            'versions (Firefox 28 has finally shipped), but if you need to support older browsers check out caniuse to' +
            ' see what your options are.',
        buttons: [{
                url: 'http://caniuse.com/flexbox',
                text: 'caniuse flexbox',
                action: 'url'
            }]
    },
    {
        text: 'Wondering about vendor prefixes? There are some quirky issues actually, since flexbox is on its third' +
            ' syntax. But none of that matters if you use Autoprefixer to handle vendor prefixes for you. Seriously, stop' +
            ' worrying about vendor prefixes (at all, forever) and use autoprefixer.',
        buttons: [{
                url: 'http://css-tricks.com/autoprefixer/',
                text: 'Read on autoprefixer',
                action: 'url'
            }
        ]
    },
    {
        text: 'UPDATE: In making stylistic changes to this app, I\'ve discovered various differences in how browsers' +
            ' render flexbox layouts (particularly Safari), some more significant than others. Long story short, with' +
            ' flexbox, tread lightly and test all the devices you can.'
    },
    {
        text: 'Well, I hope that helped you wrap your head around flexbox. It\'s a very useful property and almost' +
            ' certainly the future of CSS layouts. If it seems tricky at first, don\'t worry. Just keep tinkering and' +
            ' you\'ll get the hang of it.'
    },
    {
        text: 'Oh, a few resources I found very helpful',
        buttons: [{
                url: 'http://css-tricks.com/snippets/css/a-guide-to-flexbox/',
                text: 'Chris Coyier\'s Complete Guide',
                action: 'url'
            }, {
                url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes',
                text: 'MDN on Flexible Boxes',
                action: 'url'
            },
            {
                url: 'http://www.w3.org/TR/css-flexbox-1',
                text: 'The official W3 Spec',
                action: 'url'
            },
            {
                url: 'http://caniuse.com/flexbox',
                text: 'CanIUse Flexbox',
                action: 'url'
            }]
    },
    {
        text: 'Have feedback? I want it.',
        buttons: [{
                url: 'mailto:brycepj@gmail.com',
                text: 'Email me',
                action: 'url'
            }, {
                url: 'https://twitter.com/_devbryce',
                text: 'Tweet at me',
                action: 'url'
            },
            {
                url: 'https://github.com/brycepj/flexbox/issues',
                text: 'Report bugs',
                action: 'url'
            },
            {
                url: 'https://github.com/brycepj/flexbox',
                text: 'Help out',
                action: 'url'
            }
        ]
    },
    {
        text: 'The End!'
    }
];

//# sourceMappingURL=data:application/json;base64,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SSxFQUFFLDJCQUEyQjtRQUNqQyxPQUFPLEVBQUUsQ0FBQztnQkFDVCxHQUFHLEVBQUUsMEJBQTBCO2dCQUMvQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEtBQUs7YUFDYixFQUFFO2dCQUNELEdBQUcsRUFBRSwrQkFBK0I7Z0JBQ3BDLElBQUksRUFBRSxhQUFhO2dCQUNuQixNQUFNLEVBQUUsS0FBSzthQUNiO1lBQ0Q7Z0JBQ0MsR0FBRyxFQUFFLDJDQUEyQztnQkFDaEQsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLE1BQU0sRUFBRSxLQUFLO2FBQ2I7WUFDRDtnQkFDQyxHQUFHLEVBQUUsb0NBQW9DO2dCQUN6QyxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEtBQUs7YUFDYjtTQUNEO0tBQ0Q7SUFDRDtRQUNDLElBQUksRUFBRSxVQUFVO0tBQ2hCO0NBQ0QsQ0FBQyIsImZpbGUiOiJkYXRhL1RvdXJKU09OLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBUb3VySlNPTiA9IFtcblx0e1xuXHRcdHRleHQ6ICdTdGVwIHJpZ2h0IHVwISBDbGljayB0aGUgcmlnaHQgYXJyb3cgYXQgdGhlIGJvdHRvbSBvZiB0aGlzIGJveCB0byBzdGFydCBhbiBpbnRlcmFjdGl2ZSB0b3VyIG9mIGZsZXhib3guJ1xuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ1RoZSBGbGV4Ym94IExheW91dCAoRmxleGlibGUgQm94KSBtb2R1bGUgaXMgbWVhbnQgdG8gaGVscCB1cyBsYXkgb3V0IGVsZW1lbnRzIGFuZCBtb2R1bGVzIHdpdGhpbicgK1xuXHRcdCd3ZWJzaXRlcyBhbmQgYXBwbGljYXRpb25zLidcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdBY2NvcmRpbmcgdG8gQ2hyaXMgQ295aWVyOiBcIlRoZSBtYWluIGlkZWEgYmVoaW5kIHRoZSBmbGV4IGxheW91dCBpcyB0byBnaXZlIHRoZSBjb250YWluZXIgdGhlIGFiaWxpdHknICtcblx0XHQnIHRvIGFsdGVyIGl0cyBpdGVtc1xcJyB3aWR0aC9oZWlnaHQgKGFuZCBvcmRlcikgdG8gYmVzdCBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuLi5cIidcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdIZSBjb250aW51ZXMsIFwiQSBmbGV4IGNvbnRhaW5lciBleHBhbmRzIGl0ZW1zIHRvIGZpbGwgYXZhaWxhYmxlIGZyZWUgc3BhY2UsIG9yIHNocmlua3MgdGhlbSB0byBwcmV2ZW50JyArXG5cdFx0JyBvdmVyZmxvdy5cIicsXG5cdFx0YnV0dG9uczogW3tcblx0XHRcdHVybDogJ2h0dHA6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvYS1ndWlkZS10by1mbGV4Ym94LycsXG5cdFx0XHR0ZXh0OiAnU2VlIHRoZSBmdWxsIGFydGljbGUnLFxuXHRcdFx0YWN0aW9uOiAndXJsJ1xuXHRcdH1dXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnWW91IGNhbiBpbWFnaW5lIGhvdyBoZWxwZnVsIHRoaXMgd291bGQgYmUgd2l0aCBidWlsZGluZyBkZXZpY2UtYWdub3N0aWMsIHJlc3BvbnNpdmUgd2ViIHNpdGVzIGFuZCcgK1xuXHRcdCcgYXBwbGljYXRpb25zLkxldFxcJ3MgZ2V0IHN0YXJ0ZWQuJ1xuXHR9LFxuXG5cdHtcblx0XHR0ZXh0OiAnRmlyc3QsIG5vdGUgdGhhdCBhcyB3ZVxcJ3JlIHdvcmtpbmcgd2l0aCBmbGV4Ym94LCB3ZVxcJ2xsIGJlIGFwcGx5aW5nIHN0eWxpbmcgdG8gdGhlIGNvbnRhaW5pbmcgZWxlbWVudCcgK1xuXHRcdCcgYXMgd2VsbCBhcyBpdHMgY2hpbGRyZW4gKHdlXFwnbGwgY2FsbCB0aGVtIFwiaXRlbXNcIikuJ1xuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ1NvLCBpZiB0aGUgYmlnIGdyZXkgYm94IGF0IHlvdXIgbGVmdCBpcyBhIGZsZXhib3ggY29udGFpbmVyIChpdCBpcyksIHlvdSBjYW4gZXhwZWN0IHRoYXQgaXRzIFwiZGlzcGxheVwiJyArXG5cdFx0J3Byb3BlcnR5IHdpbGwgYmUgc2V0IHRvIFwiZmxleFwiLidcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdJbiBmYWN0LCB0aGF0XFwncyBhbGwgdGhlIGNvZGUgeW91IG5lZWQgdG8gY3JlYXRlIGEgc2ltcGxlIGZsZXhib3ggY29udGFpbmVyLiBDbGljayB0aGUgKyBidXR0b24gYmVsb3cnICtcblx0XHQnIHRocmVlIHRpbWVzIHRvIGNyZWF0ZSB0aHJlZSBuZXcgZmxleCBpdGVtcyBhbmQgeW91ciBmaXJzdCBmbGV4Ym94IGxheW91dCEnXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnUmVhZHkgdG8gc2VlIHRoaXMgYmFieSBpbiBhY3Rpb24/IExldFxcJ3Mgc2ltdWxhdGUgc21hbGxlciBzY3JlZW5zIGJ5IHJlc2l6aW5nIHRoZSBjb250YWluZXIgZWxlbWVudC4nLFxuXHRcdGJ1dHRvbnM6IFt7XG5cdFx0XHR0ZXh0OiAncmVzaXplIGl0IScsXG5cdFx0XHRhY3Rpb246ICdyZXNpemUnXG5cdFx0fV1cblx0fSxcblx0e1xuXHRcdHRleHQ6ICdBbWF6aW5nISBXaGF0IHVzZWQgdG8gcmVxdWlyZSBhbiBlbnRpcmUgc3VpdGUgb2YgZmxvYXRzLCBtZWRpYSBxdWVyaWVzLCBhbmQgb3V0cmlnaHQgaGFja3MsIGlzIGFjaGVpdmVkJyArXG5cdFx0J2J5IGFkZGluZyBvbmUgcHJvcGVydHkgdG8gYSBjb250YWluZXIgZGl2IScsXG5cdFx0YnV0dG9uczogW3tcblx0XHRcdHRleHQ6ICdPdXRyaWdodCBoYWNrcycsXG5cdFx0XHR1cmw6ICdodHRwOi8vbmljb2xhc2dhbGxhZ2hlci5jb20vbWljcm8tY2xlYXJmaXgtaGFjay8nLFxuXHRcdFx0YWN0aW9uOiAndXJsJ1xuXHRcdH1dXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnR28gYWhlYWQgYW5kIGNsaWNrIG9uIHRoZSBnZWFyIGljb24gYXQgdGhlIHRvcC1yaWdodCBvZiBhbnkgb2YgdGhlIGZsZXggaXRlbXMsIHRvIHNlZSB0aGUgcHJvcGVydGllcyB0aGV5JyArXG5cdFx0JyBoYXZlLiBKdXN0IHNpbXBsZSwgcGl4ZWwtYmFzZWQgaGVpZ2h0IGFuZCB3aWR0aCB2YWx1ZXMuIFRoYXRcXCdzIGl0LihZb3UgY291bGQgdXNlIGVtIG9yIHBlcmNlbnQgdmFsdWVzIHRvby4pJ1xuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0tlZXAgaW4gbWluZCwgd2hpbGUgZml4ZWQtd2lkdGggZmxleCBpdGVtcyBhcmUgc29tZXRpbWVzIGFsbCB5b3UgbmVlZCwgdGhleSBjZXJ0YWlubHkgZG9uXFwndCBzaG93IHlvdScgK1xuXHRcdCcgYWxsIHRoZSBtYWdpYyBmbGV4Ym94IGhhcyB0byBvZmZlci4gV2VcXCdsbCBnZXQgdG8gdGhhdCBzb29uIGVub3VnaCwgYnV0IGZpcnN0Li4uJ1xuXHR9LFxuXHR7XG5cdFx0dGV4dDogJy4uLndoaWxlIHdlXFwndmUgZ290IHRoZXNlIHRocmVlIGZpeGVkLXdpZHRoIGl0ZW1zIGhlcmUsIHRha2UgYSBtaW51dGUgb3IgdHdvIHRvIGV4cGxvcmUgdGhlIGNvbnRhaW5lcicgK1xuXHRcdCcgc3R5bGluZyBvcHRpb25zIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UuJ1xuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ1lvdSBjYW4gc3RhcnQgd2l0aCBcImZsZXgtZGlyZWN0aW9uXCIsIHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciBzZXR0aW5nIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGF4aXMgYWxvbmcnICtcblx0XHQnIHdoaWNoIHlvdXIgZmxleCBpdGVtcyB3aWxsIGJlIGRpc3BsYXllZC4gR28gYWhlYWQgYW5kIHN3aXRjaCBpdCB0byBcImNvbHVtblwiLCBhbmQgdGhlbiBiYWNrIHRvIHJvdyB0byBzZWUnICtcblx0XHQnIHRoZSBkaWZmZXJlbmNlLidcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdCeSB0aGUgd2F5LCBmb3IgdGhlIG5leHQgc2V2ZXJhbCBzbGlkZXMsIGl0XFwnZCBiZSBhIGdvb2QgaWRlYSB0byBrZWVwIGZsZXgtZGlyZWN0aW9uIHNldCB0byBcInJvd1wiLCBzaW5jZScgK1xuXHRcdCcgbWFueSBvZiB0aGUgcHJvcGVydGllcyB3ZVxcJ2xsIGxvb2sgYXQgd29yayBzbGlnaHRseSBkaWZmZXJlbnRseSBpbiBjb2x1bW4gbGF5b3V0cy4nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnTmV4dCBpcyBcImZsZXgtd3JhcCxcIiB3aGljaCBkZWNsYXJlcyB3aGV0aGVyIHRoZSBmbGV4IGNvbnRhaW5lciB3aWxsIHNwYW4gc2luZ2xlIG9yIG11bHRpcGxlIGxpbmVzLiBJZicgK1xuXHRcdCcgeW91IHNlbGVjdCBcIm5vd3JhcFwiLCB0aGUgZmxleCBpdGVtcyB3aWxsIG5vdCBiZSBjb250YWluZWQgYnkgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIGNvbnRhaW5lci4gSWYgeW91IHNlbGVjdCcgK1xuXHRcdCcgXCJ3cmFwXCIsIGl0ZW1zIHdpbGwgYmUgcHVzaGVkIHRvIHRoZSBuZXh0IGxpbmUgd2hlbiBhIHJvdyBpcyBmaWxsZWQuJ1xuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0hlcmUgdGhpbmdzIGdldCBhIGxpdHRsZSBtb3JlIGludGVyZXN0aW5nLiBUaGUgXCJqdXN0aWZ5LWNvbnRlbnRcIiBwcm9wZXJ0eSBzZXRzIHRoZSBhbGlnbm1lbnQgYWxvbmcgdGhlJyArXG5cdFx0JyBtYWluIGF4aXMgKGhvcml6b250YWxseSwgaWYgeW91ciBpdGVtcyBhcmUgaW4gYSByb3cpLiBJdCB3aWxsIG9ubHkgaGF2ZSBhbiBlZmZlY3QgaWYgdGhlcmUgaXMgZnJlZSBzcGFjZSAnICtcblx0XHQnYmV0d2VlbiB5b3VyIGl0ZW1zLiBJZiB0aGVyZSBpcy4uLiBvaCwgdGhlIHBvc3NpYmlsaXRpZXMuLi4gJ1xuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0dvIGFoZWFkIGFuZCBwbGF5IGFyb3VuZCB3aXRoIHRoZSBvcHRpb25zIGZvciBqdXN0aWZ5LWNvbnRlbnQsIGFuZCByZW1lbWJlciB5b3UgY2FuIGNsaWNrIHRoZSBcInJlc2l6ZScgK1xuXHRcdCcgYm94XCIgYnV0dG9uIGF0IGFueXRpbWUgdG8gc2VlIHdoYXQgd291bGQgaGFwcGVuIG9uIHNtYWxsZXIgc2NyZWVucy4nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnQW5vdGhlciBwb3dlcmZ1bCBwcm9wZXJ0eSBpcyBcImFsaWduLWl0ZW1zXCIsIHdoaWNoIGRldGVybWluZXMgaG93IGZsZXggaXRlbXMgYXJlIGdvaW5nIHRvIGJlIGxhaWQgb3V0JyArXG5cdFx0JyBhbG9uZyB0aGUgb3RoZXIgYXhpcyAodmVydGljYWxseSwgaWYgeW91ciBpdGVtcyBhcmUgaW4gYSByb3cpLiBQcmV0ZW5kIHlvdVxcJ3JlIHNldHRpbmcgdGhlIFwianVzdGlmeS1jb250ZW50XCInICtcblx0XHQnIHByb3BlcnR5IGZvciB0aGUgb3RoZXIgZGlyZWN0aW9uLiBHbyBhaGVhZCwgdGFrZSBpdCBmb3IgYSBzcGluLidcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdGb3IgYmVzdCByZXN1bHRzLCBtYWtlIHN1cmUgeW91ciBpdGVtcyBhcmUgYWxsIG9uIG9uZSByb3csIGVpdGhlciBieSByZWR1Y2luZyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZScgK1xuXHRcdCcgYm94IG9yIHNldHRpbmcgZmxleC13cmFwIHRvIG5vd3JhcC4nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnRmluYWxseSB3ZSBjb21lIHRvIHRoZSBcImFsaWduLWNvbnRlbnRcIiBwcm9wZXJ0eS4gSXRzIGpvYiBpcyB0byBhbGlnbiBhIGZsZXggY29udGFpbmVyXFwncyBsaW5lcyB3aGVuJyArXG5cdFx0JyB0aGVyZSBpcyBleHRyYSBzcGFjZSBiZXR3ZWVuIHJvd3MgKGlmIHlvdXIgaXRlbXMgYXJlIGluIGEgcm93KS4gSXRcXCdzIGltcG9ydGFudCB0byBub3RlIHRoYXQgdGhpcyBwcm9wZXJ0eSAnICtcblx0XHQnb25seSB3b3JrcyB3aGVuIGEgZmxleCBjb250YWluZXIgaGFzIG1vcmUgdGhhbiBvbmUgcm93L2NvbHVtbiBvZiBpdGVtcy4nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnU28sIGlmIHlvdSBoYXZlblxcJ3QgZG9uZSBpdCB5ZXQsIGFkZCAzIG9yIDQgbW9yZSBpdGVtcyB0byB5b3VyIGNvbnRhaW5lciBzbyB5b3UgY2FuIGdldCBhY3F1YWludGVkIHdpdGgnICtcblx0XHQnIHRoZSB1c2VzIG9mIFwiYWxpZ24tY29udGVudFwiJ1xuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0J5IHRoZSB3YXksIHlvdSBtYXkgaGF2ZSBub3RpY2VkIHRoZSBcImRlbGV0ZSBhbGxcIiBidXR0b24gaW4gdGhlIGNvbnRyb2wgcGFuZWwuIEFueSB0aW1lIHlvdSB3YW50IHRvJyArXG5cdFx0JyBjbGVhciBhbGwgb2YgdGhlIGl0ZW1zLCBnaXZlIGl0IGEgbmljZSwgZnVydGl2ZSBjbGljay4nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnQXQgdGhpcyBwb2ludCwgeW91XFwndmUgc2VlbiBhIGxvdCBvZiB3aGF0IGZsZXhib3ggY2FuIGRvLiBCdXQgeW91IG1heSBoYXZlIG5vdGljZWQgdGhhdCBub3QgYWxsIG9mIHRoZScgK1xuXHRcdCcgcHJvcGVydGllcyB5b3VcXCd2ZSBhZGp1c3RlZCBzbyBmYXIgaGF2ZSBoYWQgYW4gZWZmZWN0IG9uIHRoZSBpdGVtcyBpbiB0aGUgZmxleGJveC4gVGhhdFxcJ3MgYmVjYXVzZSBzb21lIG9mJyArXG5cdFx0JyB0aGUgcHJvcGVydGllcyBhcmUgcmVhbGx5IGRlc2lnbmVkIGZvciBmbGV4aWJsZSB3aWR0aCBpdGVtcy4uLidcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdUaGF0IGJlaW5nIHNhaWQsIHRvIGV4cGVyaWVuY2UgdGhlIHJlYWwgbWFnaWMgb2YgZmxleGJveCB3ZSBuZWVkIGl0ZW1zIHdpdGggZmxleGlibGUgd2lkdGhzLiBHbyBhaGVhZCcgK1xuXHRcdCcgYW5kIGNsZWFyIHlvdXIgZmxleCBjb250YWluZXIgKGNsaWNrIFwiZGVsZXRlIGFsbFwiKSBhbmQgYWRkIHNpeCBuZXcgaXRlbXMgdG8geW91ciBjb250YWluZXIuIEp1c3QgYmUgc3VyZSB0aGUnICtcblx0XHQnIFwiZmxleGlibGVcIiBvcHRpb24gaXMgc2VsZWN0ZWQgYmVmb3JlIHlvdSBkby4nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnWW91ciBmbGV4IGl0ZW1zIHNob3VsZCBpbW1lZGlhdGVseSBsb29rIGRpZmZlcmVudCB0aGFuIHRoZXkgZGlkIHdpdGggZml4ZWQgd2lkdGggaXRlbXMuIFdoYXQgeW91XFwncmUnICtcblx0XHQnIHdpdG5lc3NpbmcgaXMgcGVyaGFwcyB0aGUgcHJlbWllcmUgZmVhdHVyZSBvZiBmbGV4Ym94OiB5b3VyIGl0ZW1zIGdyb3cgKG9yIHNocmluaykgdG8gZmlsbCB0aGUgc3BhY2UgdGhleVxcJ3ZlJyArXG5cdFx0JyBiZWVuIGdpdmVuLidcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdJdFxcJ3MgYSBnb29kIHRvIGNsaWNrIHRoZSBsaXR0bGUgZ2VhciBpY29uIG9uIG9uZSBvZiB5b3VyIGl0ZW1zLiBJdCB3aWxsIHNob3cgdGhlIHByb3BlcnRpZXMgd2VcXCd2ZScgK1xuXHRcdCcgYXBwbGllZCB0byB0aGVzZSBpdGVtcywgd2hpY2ggdGhlIGZpeGVkIG9uZXMgZGlkblxcJ3QgaGF2ZS4gWW91IHNob3VsZCBzZWUgXCJmbGV4LWdyb3dcIiwgXCJmbGV4LXNocmluayxcIiBhbmQvb3InICtcblx0XHQnIFwiZmxleC1iYXNpc1wiIHByb3BlcnRpZXMgYW5kIHZhbHVlcy4nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnRmxleC1ncm93IGlzIGp1c3QgYSBkZWNsYXJhdGlvbiBvZiB0aGUgaXRlbXNcXCcgc2l6ZSwgYnV0IHVubGlrZSBwaXhlbHMgb3IgZW1zLCBpdCByZWZlcnMgdG8gdGhlIGl0ZW1cXCdzJyArXG5cdFx0JyBzaXplICoqcmVsYXRpdmUgdG8gdGhlIG90aGVyIGZsZXggaXRlbXMgaW4gdGhlIGNvbnRhaW5lcioqLiBHbyBhaGVhZCBhbmQgY2xpY2sgdGhlIGdlYXIgb24gYW55IG9mIHRoZSBmbGV4JyArXG5cdFx0JyBpdGVtcyBhbmQgYWRqdXN0IHRoZWlyIGZsZXgtZ3JvdyB2YWx1ZSB0byBzZWUgd2hhdCBJIG1lYW4uJ1xuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ09uZSBmYWlybHkgc3BlY3RhY3VsYXIgdXNlIGNhc2UgZm9yIGZsZXgtZ3JvdyB2YWx1ZXMgaXMgYSBuYXZpZ2F0aW9uIG1lbnUgdG8gd2hpY2ggeW91IG1heSBuZWVkIHRvIGFkZCcgK1xuXHRcdCcgaXRlbXMgZHluYW1pY2FsbHkuIFNpbmNlIGZsZXgtZ3JvdyB2YWx1ZXMgYXJlIHJlbGF0aXZlIHRvIG9uZSBhbm90aGVyIHlvdSBjYW4gYWRkIG1vcmUgYW5kIG1vcmUgaXRlbXMgd2l0aG91dCcgK1xuXHRcdCcgaGF2aW5nIHRvIHJlY29kZSB0aGVtIGFsbCBhZ2Fpbi4uLiAnXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnSW4gZmFjdCwgbGV0XFwncyBtYWtlIG9uZSEgKFJlbWVtYmVyIHRvIHJlc2l6ZSB0aGUgY29udGFpbmVyISknLFxuXHRcdGJ1dHRvbnM6IFt7XG5cdFx0XHR0ZXh0OiAnbWFrZSBhIG1lbnUnLFxuXHRcdFx0YWN0aW9uOiAnbWVudSdcblx0XHR9XVxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0NvbXBhcmVkIHRvIGZsZXgtZ3JvdywgXCJmbGV4LXNocmlua1wiIG1heSBiZSBhIGxpdHRsZSB0cmlja2llciwgYnV0IHN0aWxsIHZlcnkgdXNlZnVsLiBCYXNpY2FsbHkgaXQnICtcblx0XHQnIHNwZWNpZmllcyBob3cgbXVjaCB0aGUgZmxleCBpdGVtIHdpbGwgc2hyaW5rIHJlbGF0aXZlIHRvIG90aGVyIGZsZXggaXRlbXMgaW4gdGhlIGZsZXggY29udGFpbmVyIHdoZW4gdGhlJyArXG5cdFx0JyBzcGFjZSBvbiBhIHJvdyBoYXMgYmVlbiBmaWxsZWQuJ1xuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ1RvIHNlZSBob3cgaXQgd29ya3MsIHJlbW92ZSBhbGwgb2YgeW91ciBpdGVtcy4gTWFrZSBzdXJlIHlvdXIgZGVmYXVsdCBzZXR0aW5nIGZvciBuZXcgaXRlbXMgaXMgZmxleGlibGUsJyArXG5cdFx0JyBhbmQgYWRkIHRocmVlLiBOb3cgc2V0IHRoZSBmbGV4LXNocmluayB2YWx1ZSBvZiBvbmUgdG8gMiwgYW5kIGFsbCBvZiB0aGVpciBmbGV4LWJhc2lzIHByb3BlcnRpZXMgdG8gXCIxMDBweFwiJyArXG5cdFx0JyBhbmQgY2xpY2sgXCJyZXNpemUgZmxleGJveFwiLiBJdCBzaHJpbmtzIGF0IHR3aWNlIHRoZSBwYWNlIG9mIHRoZSBvdGhlciBmbGV4IGl0ZW1zLidcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdGaW5hbGx5IHdlIGNvbWUgdG8gXCJmbGV4LWJhc2lzXCIsIHdoaWNoIGlzIGEgKip2ZXJ5KiogaW1wb3J0YW50IG9uZS4gSXRcXCdzIGEgbG90IGxpa2UgXCJtaW4td2lkdGhcIiwgYnV0JyArXG5cdFx0JyBmb3IgZmxleCBpdGVtcyBvbmx5LiBCYXNpY2FsbHkgaXQgc2F5cywgXCJtYWtlIHRoaXMgaXRlbSBmaWxsIHRoZSBzcGFjZSBpdCBoYXMgYW5kIHNocmluayBhcyBtdWNoIGFzIGl0IG5lZWRzJyArXG5cdFx0JyB0by4uLiBidXV1dXQgdGhlIHNtYWxsZXN0IGl0IGNhbiBiZSBpcyBcIlggcGl4ZWxzIG9yIGVtc1wiLidcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdUbyBzZWUgaXQgaW4gYWN0aW9uLCBqdXN0IHJlc2l6ZSB0aGUgZmxleCBjb250YWluZXIuIFlvdVxcJ2xsIHNlZSB0aGF0IHdoZW4gdGhlIGl0ZW0gcmVhY2hlcyBpdHMgZmxleCcgK1xuXHRcdCcgYmFzaXMsIGl0IHN0b3BzIGZsZXhpbmcgYW5kIHNvbWV0aGluZyBlbHNlIGhhcyB0byBmbGV4IG9yIHB1c2hlZCB0byB0aGUgbmV4dCBsaW5lLidcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdOb3cgdGhhdCB3ZSBoYXZlIHNvbWUgZmxleGlibGUgaXRlbXMgdG8gd29yayB3aXRoLCBnbyBhaGVhZCBhbmQgbW92ZSB0aGUgYWxpZ24taXRlbXMgcHJvcGVydHkgdG8nICtcblx0XHQnIFwic3RyZXRjaFwiLiBUaGF0IG1lYW5zIHdlXFwncmUgc3RyZXRjaGluZyB0aGVtIGFjcm9zcyB0aGUgdmVydGljYWwgYXhpcyB0byBmaWxsIHRoZSBzcGFjZSB0aGV5XFwndmUgYmVlbiBnaXZlbi4nICtcblx0XHQnIFByZXR0eSBjb29sLCBlaD8nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnWW91IGNhbiBpbWFnaW5lIGhvdyBtYW55IG9mIHRoZSBwcm9wZXJ0aWVzIGluIGp1c3RpZnktY29udGVudCBhbmQgYWxpZ24tY29udGVudCBhcmUgb25seSB1c2VmdWwgc28gZmFyIGFzJyArXG5cdFx0JyB0aGVyZSBhIHNwYWNlIGJldHdlZW4gdGhlIGl0ZW1zLCBidXQgZ28gYWhlYWQgYW5kIHBsYXkgYXJvdW5kIHdpdGggdGhlbSB0b28sIG9yIGp1c3QgbW92ZSBvbiB0byB0aGUgbmV4dCBzbGlkZS4nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnTm93LCBob3cgYWJvdXQgc29tZSBvdGhlciBwcmFjdGljYWwgdXNlcyBmb3IgZmxleGJveD8nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnT25lIG9mIHRoZSBtb3N0IHVzZWZ1bCByaWdodCBvdXQtb2YtdGhlLWJveCBpcyB2ZXJ0aWNhbCBjZW50ZXJpbmcuIENsZWFyIHlvdXIgc2NyZWVuIG9mIGZsZXggaXRlbXMgYW5kICcgK1xuXHRcdCdhZGQganVzdCBvbmUuIE1ha2Ugc3VyZSBcImp1c3RpZnktY29udGVudFwiIGFuZCBcImFsaWduLWl0ZW1zXCIgaGF2ZSBiZWVuIHNldCB0byBcImNlbnRlclwiLidcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdOb3RpY2UgaG93IHRoZSBpdGVtIGF1dG9tYXRpY2FsbHkgZ29lcyB0byB0aGUgY2VudGVyIG9mIHRoZSBjb250YWluZXIuIFdpdGhvdXQgZmxleGJveCB0aGlzIHdvdWxkIHRha2UnICtcblx0XHQnIHNvbWUgc2VyaW91c2x5IGF3a3dhcmQgZmFuYWdsaW5nLCB1c2luZyBoZWlnaHQgYW5kIHBhZGRpbmcgcHJvcGVydGllcyBhbmQgcHJvYmFibHkgYSBsaXR0bGUgamF2YXNjcmlwdCB0byBiZScgK1xuXHRcdCcgc3VyZS4gVGhpcyB3YXksIG9uIHRoZSBvdGhlciBoYW5kLCBpcyBkZWFkIHNpbXBsZS4nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnQW5vdGhlciBwcmFjdGljYWwgdXNlIHdvdWxkIGJlIGNyZWF0aW5nIGEgZmxleGlibGUgbGF5b3V0IGZvciBhIGJhc2ljIHdlYnNpdGUuIENsaWNrIHRoZSBidXR0b24sIGFuZCBzZWUnICtcblx0XHQnIGEgcGVyZmVjdGx5IGZsZXhpYmxlIHdlYnNpdGUgbGF5b3V0IGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLicsXG5cdFx0YnV0dG9uczogW3tcblx0XHRcdHRleHQ6ICdsYXlvdXQgYSB3ZWJzaXRlJyxcblx0XHRcdGFjdGlvbjogJ2hvbHlHcmFpbCdcblx0XHR9XVxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0Fub3RoZXIgYmlnIHBsdXMgaXMgdGhhdCB5b3VyIGZsZXggaXRlbXMgY2FuIGFjdCBhcyBmbGV4Ym94IGNvbnRhaW5lcnMgc2ltdWx0YW5lb3VzbHksIGlmIHlvdSB3YW50IHRoZW0gdG8uJ1xuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0RvblxcJ3QgYmVsaWV2ZSBtZT8gUmlnaHQgY2xpY2sgb24gYW55IG9mIHRoZSBmbGV4IGl0ZW1zIGluIHRoZSBjb250YWluZXIgYXBwLCBhbmQgc2VsZWN0IFwiaW5zcGVjdCBlbGVtZW50XCIuJyArXG5cdFx0JyBZb3UgY2FuIHNlZSBpbiB0aGUgc3R5bGluZywgdGhhdCB3ZVxcJ3JlIHVzaW5nIGZsZXhib3ggcHJvcGVydGllcyB0byBrZWVwIHRoZSBsb3JlbSBpcHN1bSAod2l0aGluIGEnICtcblx0XHQnIHBhcmFncmFwaCB0YWcpIGluIHRoZSBjZW50ZXIgb2YgZWFjaCBpdGVtLidcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdJbiBmYWN0LCBhbG1vc3QgYWxsIG9mIHRoZSBsYXlvdXQgZWxlbWVudHMgb24gdGhpcyBwYWdlIGFyZSBmbGV4Ym94LiBJdCBtYWRlIGZvciB2ZXJ5IHNpbXBsZSBsYXlvdXQgY29kZSwnICtcblx0XHQnIHNvIEkgY291bGQgZm9jdXMgb24gdGhlIGhhcmRlciBhbmQgbW9yZSBmdW4gd29yayAobGlrZSB3cml0aW5nIHRoZSBqYXZhc2NyaXB0IHRvIG1ha2UgYW4gaW50ZXJhY3RpdmUgYXBwISkuJ1xuXHR9LFxuXG5cdHtcblx0XHR0ZXh0OiAnQWxyaWdodCwgSSBjb3VsZCBnbyBvbiBhbmQgb24gd2l0aCBleGFtcGxlcy4uLiBidXQgYmVsaWV2ZSBpdCBvciBub3QsIHlvdSBrbm93IGp1c3QgYWJvdXQgYWxsIHlvdSBuZWVkJyArXG5cdFx0JyB0byBrbm93IGFib3V0IGZsZXhib3ggdG8gYmUgZGFuZ2Vyb3VzLidcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdUZWNobmljYWxseSwgSSBkaWRuXFwndCBzaG93IHlvdSBldmVyeSBzaW5nbGUgZmVhdHVyZSBhbmQgdmFyaWF0aW9uIG9mIHRoZSBmbGV4Ym94IHNwZWMsIGluY2x1ZGluZyB0aGUnICtcblx0XHQnIFwiYWxpZ24tc2VsZlwiIHByb3BlcnR5IHdoaWNoIGNhbiBiZSBhcHBsaWVkIHRvIGZsZXggaXRlbXMsIGFzIHdlbGwgYXMgXCJvcmRlclwiIHdoaWNoIGFsbG93cyB5b3UgdG8gY2hhbmdlIHRoZScgK1xuXHRcdCcgb3JkZXIgb2YgaXRlbXMgaW4gdGhlIGNvbnRhaW5lci4nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnVGhlcmUgYXJlIGFsc28gYSBmZXcgdmFyaWF0aW9ucyBmb3IgZmxleC1kaXJlY3Rpb24gYW5kIGZsZXgtd3JhcCB3b3J0aCBsb29raW5nIGludG8sIGFsdGhvdWdoIHRoZWlyICcgK1xuXHRcdCd1c2FnZSBpcyBwcm9iYWJseSBtdWNoIGxlc3MgdXNlZnVsIHRoYW4gdGhlIG9wdGlvbnMgeW91IGhhdmUgaGVyZS4nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnRmluYWxseSwgYnJvd3NlciBzdXBwb3J0LiBMb25nIHN0b3J5IHNob3J0LCBmbGV4Ym94IGlzIG5vdyBzdXBwb3J0ZWQgaW4gYWxsIG9mIHRoZSBsYXRlc3QgYnJvd3NlciAnICtcblx0XHQndmVyc2lvbnMgKEZpcmVmb3ggMjggaGFzIGZpbmFsbHkgc2hpcHBlZCksIGJ1dCBpZiB5b3UgbmVlZCB0byBzdXBwb3J0IG9sZGVyIGJyb3dzZXJzIGNoZWNrIG91dCBjYW5pdXNlIHRvJyArXG5cdFx0JyBzZWUgd2hhdCB5b3VyIG9wdGlvbnMgYXJlLicsXG5cdFx0YnV0dG9uczogW3tcblx0XHRcdHVybDogJ2h0dHA6Ly9jYW5pdXNlLmNvbS9mbGV4Ym94Jyxcblx0XHRcdHRleHQ6ICdjYW5pdXNlIGZsZXhib3gnLFxuXHRcdFx0YWN0aW9uOiAndXJsJ1xuXHRcdH1dXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnV29uZGVyaW5nIGFib3V0IHZlbmRvciBwcmVmaXhlcz8gVGhlcmUgYXJlIHNvbWUgcXVpcmt5IGlzc3VlcyBhY3R1YWxseSwgc2luY2UgZmxleGJveCBpcyBvbiBpdHMgdGhpcmQnICtcblx0XHQnIHN5bnRheC4gQnV0IG5vbmUgb2YgdGhhdCBtYXR0ZXJzIGlmIHlvdSB1c2UgQXV0b3ByZWZpeGVyIHRvIGhhbmRsZSB2ZW5kb3IgcHJlZml4ZXMgZm9yIHlvdS4gU2VyaW91c2x5LCBzdG9wJyArXG5cdFx0JyB3b3JyeWluZyBhYm91dCB2ZW5kb3IgcHJlZml4ZXMgKGF0IGFsbCwgZm9yZXZlcikgYW5kIHVzZSBhdXRvcHJlZml4ZXIuJyxcblx0XHRidXR0b25zOiBbe1xuXHRcdFx0dXJsOiAnaHR0cDovL2Nzcy10cmlja3MuY29tL2F1dG9wcmVmaXhlci8nLFxuXHRcdFx0dGV4dDogJ1JlYWQgb24gYXV0b3ByZWZpeGVyJyxcblx0XHRcdGFjdGlvbjogJ3VybCdcblx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ1VQREFURTogSW4gbWFraW5nIHN0eWxpc3RpYyBjaGFuZ2VzIHRvIHRoaXMgYXBwLCBJXFwndmUgZGlzY292ZXJlZCB2YXJpb3VzIGRpZmZlcmVuY2VzIGluIGhvdyBicm93c2VycycgK1xuXHRcdCcgcmVuZGVyIGZsZXhib3ggbGF5b3V0cyAocGFydGljdWxhcmx5IFNhZmFyaSksIHNvbWUgbW9yZSBzaWduaWZpY2FudCB0aGFuIG90aGVycy4gTG9uZyBzdG9yeSBzaG9ydCwgd2l0aCcgK1xuXHRcdCcgZmxleGJveCwgdHJlYWQgbGlnaHRseSBhbmQgdGVzdCBhbGwgdGhlIGRldmljZXMgeW91IGNhbi4nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnV2VsbCwgSSBob3BlIHRoYXQgaGVscGVkIHlvdSB3cmFwIHlvdXIgaGVhZCBhcm91bmQgZmxleGJveC4gSXRcXCdzIGEgdmVyeSB1c2VmdWwgcHJvcGVydHkgYW5kIGFsbW9zdCcgK1xuXHRcdCcgY2VydGFpbmx5IHRoZSBmdXR1cmUgb2YgQ1NTIGxheW91dHMuIElmIGl0IHNlZW1zIHRyaWNreSBhdCBmaXJzdCwgZG9uXFwndCB3b3JyeS4gSnVzdCBrZWVwIHRpbmtlcmluZyBhbmQnICtcblx0XHQnIHlvdVxcJ2xsIGdldCB0aGUgaGFuZyBvZiBpdC4nXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnT2gsIGEgZmV3IHJlc291cmNlcyBJIGZvdW5kIHZlcnkgaGVscGZ1bCcsXG5cdFx0YnV0dG9uczogW3tcblx0XHRcdHVybDogJ2h0dHA6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvYS1ndWlkZS10by1mbGV4Ym94LycsXG5cdFx0XHR0ZXh0OiAnQ2hyaXMgQ295aWVyXFwncyBDb21wbGV0ZSBHdWlkZScsXG5cdFx0XHRhY3Rpb246ICd1cmwnXG5cdFx0fSwge1xuXHRcdFx0XHR1cmw6ICdodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9HdWlkZS9DU1MvRmxleGlibGVfYm94ZXMnLFxuXHRcdFx0XHR0ZXh0OiAnTUROIG9uIEZsZXhpYmxlIEJveGVzJyxcblx0XHRcdFx0YWN0aW9uOiAndXJsJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dXJsOiAnaHR0cDovL3d3dy53My5vcmcvVFIvY3NzLWZsZXhib3gtMScsXG5cdFx0XHRcdHRleHQ6ICdUaGUgb2ZmaWNpYWwgVzMgU3BlYycsXG5cdFx0XHRcdGFjdGlvbjogJ3VybCdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHVybDogJ2h0dHA6Ly9jYW5pdXNlLmNvbS9mbGV4Ym94Jyxcblx0XHRcdFx0dGV4dDogJ0NhbklVc2UgRmxleGJveCcsXG5cdFx0XHRcdGFjdGlvbjogJ3VybCdcblx0XHRcdH1dXG5cdH0sXG5cblx0e1xuXHRcdHRleHQ6ICdIYXZlIGZlZWRiYWNrPyBJIHdhbnQgaXQuJyxcblx0XHRidXR0b25zOiBbe1xuXHRcdFx0dXJsOiAnbWFpbHRvOmJyeWNlcGpAZ21haWwuY29tJyxcblx0XHRcdHRleHQ6ICdFbWFpbCBtZScsXG5cdFx0XHRhY3Rpb246ICd1cmwnXG5cdFx0fSwge1xuXHRcdFx0XHR1cmw6ICdodHRwczovL3R3aXR0ZXIuY29tL19kZXZicnljZScsXG5cdFx0XHRcdHRleHQ6ICdUd2VldCBhdCBtZScsXG5cdFx0XHRcdGFjdGlvbjogJ3VybCdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9icnljZXBqL2ZsZXhib3gvaXNzdWVzJyxcblx0XHRcdFx0dGV4dDogJ1JlcG9ydCBidWdzJyxcblx0XHRcdFx0YWN0aW9uOiAndXJsJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2JyeWNlcGovZmxleGJveCcsXG5cdFx0XHRcdHRleHQ6ICdIZWxwIG91dCcsXG5cdFx0XHRcdGFjdGlvbjogJ3VybCdcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnVGhlIEVuZCEnXG5cdH1cbl07XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==