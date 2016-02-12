exports.TourJSON = [
    {
        text: 'Step right up! Click the right arrow at the bottom of this box to start an interactive tour of flexbox.',
    },
    {
        text: 'The Flexbox Layout (Flexible Box) module is meant to help us lay out elements and modules within websites and applications.',
    },
    {
        text: 'According to Chris Coyier: "The main idea behind the flex layout is to give the container the ability' +
            ' to alter its items\' width/height (and order) to best fill the available space..."',
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
            ' applications.Let\'s get started.',
    },
    {
        text: 'First, note that as we\'re working with flexbox, we\'ll be applying styling to the containing element' +
            ' as well as its children (we\'ll call them "items").',
    },
    {
        text: 'So, if the big grey box at your left is a flexbox container (it is), you can expect that its "display" property will be set to "flex".',
    },
    {
        text: 'In fact, that\'s all the code you need to create a simple flexbox container. Click the + button below' +
            ' three times to create three new flex items and your first flexbox layout!',
    },
    {
        text: 'Ready to see this baby in action? Let\'s simulate smaller screens by resizing the container element.',
        buttons: [{
                text: 'resize it!',
                "action": 'resize'
            }]
    },
    {
        text: 'Amazing! What used to require an entire suite of floats, media queries, and outright hacks, is acheived by adding one property to a container div!',
        buttons: [{
                text: 'Outright hacks',
                url: 'http://nicolasgallagher.com/micro-clearfix-hack/',
                action: 'url'
            }]
    },
    {
        text: 'Go ahead and click on the gear icon at the top-right of any of the flex items, to see the properties they' +
            ' have. Just simple, pixel-based height and width values. That\'s it.(You could use em or percent values too.)',
    },
    {
        text: 'Keep in mind, while fixed-width flex items are sometimes all you need, they certainly don\'t show you' +
            ' all the magic flexbox has to offer. We\'ll get to that soon enough, but first...',
    },
    {
        text: '...while we\'ve got these three fixed-width items here, take a minute or two to explore the container' +
            ' styling options at the top of the page.',
    },
    {
        text: 'You can start with "flex-direction", which is responsible for setting the direction of the axis along' +
            ' which your flex items will be displayed. Go ahead and switch it to "column", and then back to row to see the difference.',
    },
    {
        text: 'By the way, for the next several slides, it\'d be a good idea to keep flex-direction set to "row", since' +
            ' many of the properties we\'ll look at work slightly differently in column layouts.',
    },
    {
        text: 'Next is "flex-wrap," which declares whether the flex container will span single or multiple lines. If' +
            ' you select "nowrap", the flex items will not be contained by the boundaries of the container. If you select' +
            ' "wrap", items will be pushed to the next line when a row is filled.',
    },
    {
        text: 'Here things get a little more interesting. The "justify-content" property sets the alignment along the' +
            ' main axis (horizontally, if your items are in a row). It will only have an effect if there is free space between your items. If there is... oh, the possibilities... ',
    },
    {
        text: 'Go ahead and play around with the options for justify-content, and remember you can click the "resize' +
            ' box" button at anytime to see what would happen on smaller screens.',
    },
    {
        text: 'Another powerful property is "align-items", which determines how flex items are going to be laid out' +
            ' along the other axis (vertically, if your items are in a row). Pretend you\'re setting the "justify-content"' +
            ' property for the other direction. Go ahead, take it for a spin.',
    },
    {
        text: 'For best results, make sure your items are all on one row, either by reducing the number of items in the' +
            ' box or setting flex-wrap to nowrap.',
    },
    {
        text: 'Finally we come to the "align-content" property. Its job is to align a flex container\'s lines when' +
            ' there is extra space between rows (if your items are in a row). It\'s important to note that this property only works when a flex container has more than one row/column of items.',
    },
    {
        text: 'So, if you haven\'t done it yet, add 3 or 4 more items to your container so you can get acquainted with' +
            ' the uses of "align-content"',
    },
    {
        text: 'By the way, you may have noticed the "delete all" button in the control panel. Any time you want to' +
            ' clear all of the items, give it a nice, furtive click.',
    },
    {
        text: 'At this point, you\'ve seen a lot of what flexbox can do. But you may have noticed that not all of the' +
            ' properties you\'ve adjusted so far have had an effect on the items in the flexbox. That\'s because some of' +
            ' the properties are really designed for flexible width items...',
    },
    {
        text: 'That being said, to experience the real magic of flexbox we need items with flexible widths. Go ahead' +
            ' and clear your flex container (click "delete all") and add six new items to your container. Just be sure the' +
            ' "flexible" option is selected before you do.',
    },
    {
        text: 'Your flex items should immediately look different than they did with fixed width items. What you\'re' +
            ' witnessing is perhaps the premiere feature of flexbox: your items grow (or shrink) to fill the space they\'ve' +
            ' been given.',
    },
    {
        text: 'It\'s a good to click the little gear icon on one of your items. It will show the properties we\'ve' +
            ' applied to these items, which the fixed ones didn\'t have. You should see "flex-grow", "flex-shrink," and/or' +
            ' "flex-basis" properties and values.',
    },
    {
        text: 'Flex-grow is just a declaration of the items\' size, but unlike pixels or ems, it refers to the item\'s' +
            ' size **relative to the other flex items in the container**. Go ahead and click the gear on any of the flex' +
            ' items and adjust their flex-grow value to see what I mean.',
    },
    {
        text: 'One fairly spectacular use case for flex-grow values is a navigation menu to which you may need to add' +
            ' items dynamically. Since flex-grow values are relative to one another you can add more and more items without' +
            ' having to recode them all again... ',
    },
    {
        text: 'In fact, let\'s make one! (Remember to resize the container!)',
        buttons: [{
                "text": 'make a menu',
                "action": 'menu'
            }]
    },
    {
        text: 'Compared to flex-grow, "flex-shrink" may be a little trickier, but still very useful. Basically it' +
            ' specifies how much the flex item will shrink relative to other flex items in the flex container when the' +
            ' space on a row has been filled.',
    },
    {
        text: 'To see how it works, remove all of your items. Make sure your default setting for new items is flexible,' +
            ' and add three. Now set the flex-shrink value of one to 2, and all of their flex-basis properties to "100px"' +
            ' and click "resize flexbox". It shrinks at twice the pace of the other flex items.',
    },
    {
        text: 'Finally we come to "flex-basis", which is a **very** important one. It\'s a lot like "min-width", but' +
            ' for flex items only. Basically it says, "make this item fill the space it has and shrink as much as it needs' +
            ' to... buuuut the smallest it can be is "X pixels or ems".',
    },
    {
        text: 'To see it in action, just resize the flex container. You\'ll see that when the item reaches its flex' +
            ' basis, it stops flexing and something else has to flex or pushed to the next line.',
    },
    {
        text: 'Now that we have some flexible items to work with, go ahead and move the align-items property to' +
            ' "stretch". That means we\'re stretching them across the vertical axis to fill the space they\'ve been given.' +
            ' Pretty cool, eh?',
    },
    {
        text: 'You can imagine how many of the properties in justify-content and align-content are only useful so far as' +
            ' there a space between the items, but go ahead and play around with them too, or just move on to the next slide.',
    },
    {
        text: 'Now, how about some other practical uses for flexbox?',
    },
    {
        text: 'One of the most useful right out-of-the-box is vertical centering. Clear your screen of flex items and add just one. Make sure "justify-content" and "align-items" have been set to "center".',
    },
    {
        text: 'Notice how the item automatically goes to the center of the container. Without flexbox this would take' +
            ' some seriously awkward fanagling, using height and padding properties and probably a little javascript to be' +
            ' sure. This way, on the other hand, is dead simple.',
    },
    {
        text: 'Another practical use would be creating a flexible layout for a basic website. Click the button, and see' +
            ' a perfectly flexible website layout automatically generated.',
        buttons: [{
                text: "layout a website",
                action: 'holyGrail'
            }]
    },
    {
        text: 'Another big plus is that your flex items can act as flexbox containers simultaneously, if you want them to.',
    },
    {
        text: 'Don\'t believe me? Right click on any of the flex items in the container app, and select "inspect element". You can see in the styling, that we\'re using flexbox properties to keep the lorem ipsum (within a paragraph tag) in the center of each item.',
    },
    {
        text: 'In fact, almost all of the layout elements on this page are flexbox. It made for very simple layout code, so I could focus on the harder and more fun work (like writing the javascript to make an interactive app!).',
    },
    {
        text: 'Alright, I could go on and on with examples... but believe it or not, you know just about all you need to know about flexbox to be dangerous.',
    },
    {
        text: 'Technically, I didn\'t show you every single feature and variation of the flexbox spec, including the "align-self" property which can be applied to flex items, as well as "order" which allows you to change the order of items in the container.',
    },
    {
        text: 'There are also a few variations for flex-direction and flex-wrap worth looking into, although their usage is probably much less useful than the options you have here.',
    },
    {
        text: 'Finally, browser support. Long story short, flexbox is now supported in all of the latest browser versions (Firefox 28 has finally shipped), but if you need to support older browsers check out caniuse to see what your options are.',
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
            ' flexbox, tread lightly and test all the devices you can.',
    },
    {
        text: 'Well, I hope that helped you wrap your head around flexbox. It\'s a very useful property and almost' +
            ' certainly the future of CSS layouts. If it seems tricky at first, don\'t worry. Just keep tinkering and' +
            ' you\'ll get the hang of it.',
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
        text: 'The End!',
    },
];

//# sourceMappingURL=data:application/json;base64,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QUEyQztnQkFDaEQsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLE1BQU0sRUFBRSxLQUFLO2FBQ2I7WUFDRDtnQkFDQyxHQUFHLEVBQUUsb0NBQW9DO2dCQUN6QyxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEtBQUs7YUFDYjtTQUNBO0tBQ0Q7SUFDRDtRQUNDLElBQUksRUFBRSxVQUFVO0tBQ2hCO0NBQ0QsQ0FBQyIsImZpbGUiOiJkYXRhL1RvdXJKU09OLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBUb3VySlNPTiA9IFtcblx0e1xuXHRcdHRleHQ6ICdTdGVwIHJpZ2h0IHVwISBDbGljayB0aGUgcmlnaHQgYXJyb3cgYXQgdGhlIGJvdHRvbSBvZiB0aGlzIGJveCB0byBzdGFydCBhbiBpbnRlcmFjdGl2ZSB0b3VyIG9mIGZsZXhib3guJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdUaGUgRmxleGJveCBMYXlvdXQgKEZsZXhpYmxlIEJveCkgbW9kdWxlIGlzIG1lYW50IHRvIGhlbHAgdXMgbGF5IG91dCBlbGVtZW50cyBhbmQgbW9kdWxlcyB3aXRoaW4gd2Vic2l0ZXMgYW5kIGFwcGxpY2F0aW9ucy4nLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0FjY29yZGluZyB0byBDaHJpcyBDb3lpZXI6IFwiVGhlIG1haW4gaWRlYSBiZWhpbmQgdGhlIGZsZXggbGF5b3V0IGlzIHRvIGdpdmUgdGhlIGNvbnRhaW5lciB0aGUgYWJpbGl0eScgK1xuXHRcdCcgdG8gYWx0ZXIgaXRzIGl0ZW1zXFwnIHdpZHRoL2hlaWdodCAoYW5kIG9yZGVyKSB0byBiZXN0IGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4uLlwiJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdIZSBjb250aW51ZXMsIFwiQSBmbGV4IGNvbnRhaW5lciBleHBhbmRzIGl0ZW1zIHRvIGZpbGwgYXZhaWxhYmxlIGZyZWUgc3BhY2UsIG9yIHNocmlua3MgdGhlbSB0byBwcmV2ZW50JyArXG5cdFx0JyBvdmVyZmxvdy5cIicsXG5cdFx0YnV0dG9uczogW3tcblx0XHRcdHVybDogJ2h0dHA6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvYS1ndWlkZS10by1mbGV4Ym94LycsXG5cdFx0XHR0ZXh0OiAnU2VlIHRoZSBmdWxsIGFydGljbGUnLFxuXHRcdFx0YWN0aW9uOiAndXJsJ1xuXHRcdH1dXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnWW91IGNhbiBpbWFnaW5lIGhvdyBoZWxwZnVsIHRoaXMgd291bGQgYmUgd2l0aCBidWlsZGluZyBkZXZpY2UtYWdub3N0aWMsIHJlc3BvbnNpdmUgd2ViIHNpdGVzIGFuZCcgK1xuXHRcdCcgYXBwbGljYXRpb25zLkxldFxcJ3MgZ2V0IHN0YXJ0ZWQuJyxcblx0fSxcblxuXHR7XG5cdFx0dGV4dDogJ0ZpcnN0LCBub3RlIHRoYXQgYXMgd2VcXCdyZSB3b3JraW5nIHdpdGggZmxleGJveCwgd2VcXCdsbCBiZSBhcHBseWluZyBzdHlsaW5nIHRvIHRoZSBjb250YWluaW5nIGVsZW1lbnQnICtcblx0XHQnIGFzIHdlbGwgYXMgaXRzIGNoaWxkcmVuICh3ZVxcJ2xsIGNhbGwgdGhlbSBcIml0ZW1zXCIpLicsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnU28sIGlmIHRoZSBiaWcgZ3JleSBib3ggYXQgeW91ciBsZWZ0IGlzIGEgZmxleGJveCBjb250YWluZXIgKGl0IGlzKSwgeW91IGNhbiBleHBlY3QgdGhhdCBpdHMgXCJkaXNwbGF5XCIgcHJvcGVydHkgd2lsbCBiZSBzZXQgdG8gXCJmbGV4XCIuJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdJbiBmYWN0LCB0aGF0XFwncyBhbGwgdGhlIGNvZGUgeW91IG5lZWQgdG8gY3JlYXRlIGEgc2ltcGxlIGZsZXhib3ggY29udGFpbmVyLiBDbGljayB0aGUgKyBidXR0b24gYmVsb3cnICtcblx0XHQnIHRocmVlIHRpbWVzIHRvIGNyZWF0ZSB0aHJlZSBuZXcgZmxleCBpdGVtcyBhbmQgeW91ciBmaXJzdCBmbGV4Ym94IGxheW91dCEnLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ1JlYWR5IHRvIHNlZSB0aGlzIGJhYnkgaW4gYWN0aW9uPyBMZXRcXCdzIHNpbXVsYXRlIHNtYWxsZXIgc2NyZWVucyBieSByZXNpemluZyB0aGUgY29udGFpbmVyIGVsZW1lbnQuJyxcblx0XHRidXR0b25zOiBbe1xuXHRcdFx0dGV4dDogJ3Jlc2l6ZSBpdCEnLFxuXHRcdFx0XCJhY3Rpb25cIjogJ3Jlc2l6ZSdcblx0XHR9XVxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0FtYXppbmchIFdoYXQgdXNlZCB0byByZXF1aXJlIGFuIGVudGlyZSBzdWl0ZSBvZiBmbG9hdHMsIG1lZGlhIHF1ZXJpZXMsIGFuZCBvdXRyaWdodCBoYWNrcywgaXMgYWNoZWl2ZWQgYnkgYWRkaW5nIG9uZSBwcm9wZXJ0eSB0byBhIGNvbnRhaW5lciBkaXYhJyxcblx0XHRidXR0b25zOiBbe1xuXHRcdFx0dGV4dDogJ091dHJpZ2h0IGhhY2tzJyxcblx0XHRcdHVybDogJ2h0dHA6Ly9uaWNvbGFzZ2FsbGFnaGVyLmNvbS9taWNyby1jbGVhcmZpeC1oYWNrLycsXG5cdFx0XHRhY3Rpb246ICd1cmwnXG5cdFx0fV1cblx0fSxcblx0e1xuXHRcdHRleHQ6ICdHbyBhaGVhZCBhbmQgY2xpY2sgb24gdGhlIGdlYXIgaWNvbiBhdCB0aGUgdG9wLXJpZ2h0IG9mIGFueSBvZiB0aGUgZmxleCBpdGVtcywgdG8gc2VlIHRoZSBwcm9wZXJ0aWVzIHRoZXknICtcblx0XHQnIGhhdmUuIEp1c3Qgc2ltcGxlLCBwaXhlbC1iYXNlZCBoZWlnaHQgYW5kIHdpZHRoIHZhbHVlcy4gVGhhdFxcJ3MgaXQuKFlvdSBjb3VsZCB1c2UgZW0gb3IgcGVyY2VudCB2YWx1ZXMgdG9vLiknLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0tlZXAgaW4gbWluZCwgd2hpbGUgZml4ZWQtd2lkdGggZmxleCBpdGVtcyBhcmUgc29tZXRpbWVzIGFsbCB5b3UgbmVlZCwgdGhleSBjZXJ0YWlubHkgZG9uXFwndCBzaG93IHlvdScgK1xuXHRcdCcgYWxsIHRoZSBtYWdpYyBmbGV4Ym94IGhhcyB0byBvZmZlci4gV2VcXCdsbCBnZXQgdG8gdGhhdCBzb29uIGVub3VnaCwgYnV0IGZpcnN0Li4uJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICcuLi53aGlsZSB3ZVxcJ3ZlIGdvdCB0aGVzZSB0aHJlZSBmaXhlZC13aWR0aCBpdGVtcyBoZXJlLCB0YWtlIGEgbWludXRlIG9yIHR3byB0byBleHBsb3JlIHRoZSBjb250YWluZXInICtcblx0XHQnIHN0eWxpbmcgb3B0aW9ucyBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLicsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnWW91IGNhbiBzdGFydCB3aXRoIFwiZmxleC1kaXJlY3Rpb25cIiwgd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHNldHRpbmcgdGhlIGRpcmVjdGlvbiBvZiB0aGUgYXhpcyBhbG9uZycgK1xuXHRcdCcgd2hpY2ggeW91ciBmbGV4IGl0ZW1zIHdpbGwgYmUgZGlzcGxheWVkLiBHbyBhaGVhZCBhbmQgc3dpdGNoIGl0IHRvIFwiY29sdW1uXCIsIGFuZCB0aGVuIGJhY2sgdG8gcm93IHRvIHNlZSB0aGUgZGlmZmVyZW5jZS4nLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0J5IHRoZSB3YXksIGZvciB0aGUgbmV4dCBzZXZlcmFsIHNsaWRlcywgaXRcXCdkIGJlIGEgZ29vZCBpZGVhIHRvIGtlZXAgZmxleC1kaXJlY3Rpb24gc2V0IHRvIFwicm93XCIsIHNpbmNlJyArXG5cdFx0JyBtYW55IG9mIHRoZSBwcm9wZXJ0aWVzIHdlXFwnbGwgbG9vayBhdCB3b3JrIHNsaWdodGx5IGRpZmZlcmVudGx5IGluIGNvbHVtbiBsYXlvdXRzLicsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnTmV4dCBpcyBcImZsZXgtd3JhcCxcIiB3aGljaCBkZWNsYXJlcyB3aGV0aGVyIHRoZSBmbGV4IGNvbnRhaW5lciB3aWxsIHNwYW4gc2luZ2xlIG9yIG11bHRpcGxlIGxpbmVzLiBJZicgK1xuXHRcdCcgeW91IHNlbGVjdCBcIm5vd3JhcFwiLCB0aGUgZmxleCBpdGVtcyB3aWxsIG5vdCBiZSBjb250YWluZWQgYnkgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIGNvbnRhaW5lci4gSWYgeW91IHNlbGVjdCcgK1xuXHRcdCcgXCJ3cmFwXCIsIGl0ZW1zIHdpbGwgYmUgcHVzaGVkIHRvIHRoZSBuZXh0IGxpbmUgd2hlbiBhIHJvdyBpcyBmaWxsZWQuJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdIZXJlIHRoaW5ncyBnZXQgYSBsaXR0bGUgbW9yZSBpbnRlcmVzdGluZy4gVGhlIFwianVzdGlmeS1jb250ZW50XCIgcHJvcGVydHkgc2V0cyB0aGUgYWxpZ25tZW50IGFsb25nIHRoZScgK1xuXHRcdCcgbWFpbiBheGlzIChob3Jpem9udGFsbHksIGlmIHlvdXIgaXRlbXMgYXJlIGluIGEgcm93KS4gSXQgd2lsbCBvbmx5IGhhdmUgYW4gZWZmZWN0IGlmIHRoZXJlIGlzIGZyZWUgc3BhY2UgYmV0d2VlbiB5b3VyIGl0ZW1zLiBJZiB0aGVyZSBpcy4uLiBvaCwgdGhlIHBvc3NpYmlsaXRpZXMuLi4gJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdHbyBhaGVhZCBhbmQgcGxheSBhcm91bmQgd2l0aCB0aGUgb3B0aW9ucyBmb3IganVzdGlmeS1jb250ZW50LCBhbmQgcmVtZW1iZXIgeW91IGNhbiBjbGljayB0aGUgXCJyZXNpemUnICtcblx0XHQnIGJveFwiIGJ1dHRvbiBhdCBhbnl0aW1lIHRvIHNlZSB3aGF0IHdvdWxkIGhhcHBlbiBvbiBzbWFsbGVyIHNjcmVlbnMuJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdBbm90aGVyIHBvd2VyZnVsIHByb3BlcnR5IGlzIFwiYWxpZ24taXRlbXNcIiwgd2hpY2ggZGV0ZXJtaW5lcyBob3cgZmxleCBpdGVtcyBhcmUgZ29pbmcgdG8gYmUgbGFpZCBvdXQnICtcblx0XHQnIGFsb25nIHRoZSBvdGhlciBheGlzICh2ZXJ0aWNhbGx5LCBpZiB5b3VyIGl0ZW1zIGFyZSBpbiBhIHJvdykuIFByZXRlbmQgeW91XFwncmUgc2V0dGluZyB0aGUgXCJqdXN0aWZ5LWNvbnRlbnRcIicgK1xuXHRcdCcgcHJvcGVydHkgZm9yIHRoZSBvdGhlciBkaXJlY3Rpb24uIEdvIGFoZWFkLCB0YWtlIGl0IGZvciBhIHNwaW4uJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdGb3IgYmVzdCByZXN1bHRzLCBtYWtlIHN1cmUgeW91ciBpdGVtcyBhcmUgYWxsIG9uIG9uZSByb3csIGVpdGhlciBieSByZWR1Y2luZyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZScgK1xuXHRcdCcgYm94IG9yIHNldHRpbmcgZmxleC13cmFwIHRvIG5vd3JhcC4nLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0ZpbmFsbHkgd2UgY29tZSB0byB0aGUgXCJhbGlnbi1jb250ZW50XCIgcHJvcGVydHkuIEl0cyBqb2IgaXMgdG8gYWxpZ24gYSBmbGV4IGNvbnRhaW5lclxcJ3MgbGluZXMgd2hlbicgK1xuXHRcdCcgdGhlcmUgaXMgZXh0cmEgc3BhY2UgYmV0d2VlbiByb3dzIChpZiB5b3VyIGl0ZW1zIGFyZSBpbiBhIHJvdykuIEl0XFwncyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IHRoaXMgcHJvcGVydHkgb25seSB3b3JrcyB3aGVuIGEgZmxleCBjb250YWluZXIgaGFzIG1vcmUgdGhhbiBvbmUgcm93L2NvbHVtbiBvZiBpdGVtcy4nLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ1NvLCBpZiB5b3UgaGF2ZW5cXCd0IGRvbmUgaXQgeWV0LCBhZGQgMyBvciA0IG1vcmUgaXRlbXMgdG8geW91ciBjb250YWluZXIgc28geW91IGNhbiBnZXQgYWNxdWFpbnRlZCB3aXRoJyArXG5cdFx0JyB0aGUgdXNlcyBvZiBcImFsaWduLWNvbnRlbnRcIicsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnQnkgdGhlIHdheSwgeW91IG1heSBoYXZlIG5vdGljZWQgdGhlIFwiZGVsZXRlIGFsbFwiIGJ1dHRvbiBpbiB0aGUgY29udHJvbCBwYW5lbC4gQW55IHRpbWUgeW91IHdhbnQgdG8nICtcblx0XHQnIGNsZWFyIGFsbCBvZiB0aGUgaXRlbXMsIGdpdmUgaXQgYSBuaWNlLCBmdXJ0aXZlIGNsaWNrLicsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnQXQgdGhpcyBwb2ludCwgeW91XFwndmUgc2VlbiBhIGxvdCBvZiB3aGF0IGZsZXhib3ggY2FuIGRvLiBCdXQgeW91IG1heSBoYXZlIG5vdGljZWQgdGhhdCBub3QgYWxsIG9mIHRoZScgK1xuXHRcdCcgcHJvcGVydGllcyB5b3VcXCd2ZSBhZGp1c3RlZCBzbyBmYXIgaGF2ZSBoYWQgYW4gZWZmZWN0IG9uIHRoZSBpdGVtcyBpbiB0aGUgZmxleGJveC4gVGhhdFxcJ3MgYmVjYXVzZSBzb21lIG9mJyArXG5cdFx0JyB0aGUgcHJvcGVydGllcyBhcmUgcmVhbGx5IGRlc2lnbmVkIGZvciBmbGV4aWJsZSB3aWR0aCBpdGVtcy4uLicsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnVGhhdCBiZWluZyBzYWlkLCB0byBleHBlcmllbmNlIHRoZSByZWFsIG1hZ2ljIG9mIGZsZXhib3ggd2UgbmVlZCBpdGVtcyB3aXRoIGZsZXhpYmxlIHdpZHRocy4gR28gYWhlYWQnICtcblx0XHQnIGFuZCBjbGVhciB5b3VyIGZsZXggY29udGFpbmVyIChjbGljayBcImRlbGV0ZSBhbGxcIikgYW5kIGFkZCBzaXggbmV3IGl0ZW1zIHRvIHlvdXIgY29udGFpbmVyLiBKdXN0IGJlIHN1cmUgdGhlJyArXG5cdFx0JyBcImZsZXhpYmxlXCIgb3B0aW9uIGlzIHNlbGVjdGVkIGJlZm9yZSB5b3UgZG8uJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdZb3VyIGZsZXggaXRlbXMgc2hvdWxkIGltbWVkaWF0ZWx5IGxvb2sgZGlmZmVyZW50IHRoYW4gdGhleSBkaWQgd2l0aCBmaXhlZCB3aWR0aCBpdGVtcy4gV2hhdCB5b3VcXCdyZScgK1xuXHRcdCcgd2l0bmVzc2luZyBpcyBwZXJoYXBzIHRoZSBwcmVtaWVyZSBmZWF0dXJlIG9mIGZsZXhib3g6IHlvdXIgaXRlbXMgZ3JvdyAob3Igc2hyaW5rKSB0byBmaWxsIHRoZSBzcGFjZSB0aGV5XFwndmUnICtcblx0XHQnIGJlZW4gZ2l2ZW4uJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdJdFxcJ3MgYSBnb29kIHRvIGNsaWNrIHRoZSBsaXR0bGUgZ2VhciBpY29uIG9uIG9uZSBvZiB5b3VyIGl0ZW1zLiBJdCB3aWxsIHNob3cgdGhlIHByb3BlcnRpZXMgd2VcXCd2ZScgK1xuXHRcdCcgYXBwbGllZCB0byB0aGVzZSBpdGVtcywgd2hpY2ggdGhlIGZpeGVkIG9uZXMgZGlkblxcJ3QgaGF2ZS4gWW91IHNob3VsZCBzZWUgXCJmbGV4LWdyb3dcIiwgXCJmbGV4LXNocmluayxcIiBhbmQvb3InICtcblx0XHQnIFwiZmxleC1iYXNpc1wiIHByb3BlcnRpZXMgYW5kIHZhbHVlcy4nLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0ZsZXgtZ3JvdyBpcyBqdXN0IGEgZGVjbGFyYXRpb24gb2YgdGhlIGl0ZW1zXFwnIHNpemUsIGJ1dCB1bmxpa2UgcGl4ZWxzIG9yIGVtcywgaXQgcmVmZXJzIHRvIHRoZSBpdGVtXFwncycgK1xuXHRcdCcgc2l6ZSAqKnJlbGF0aXZlIHRvIHRoZSBvdGhlciBmbGV4IGl0ZW1zIGluIHRoZSBjb250YWluZXIqKi4gR28gYWhlYWQgYW5kIGNsaWNrIHRoZSBnZWFyIG9uIGFueSBvZiB0aGUgZmxleCcgK1xuXHRcdCcgaXRlbXMgYW5kIGFkanVzdCB0aGVpciBmbGV4LWdyb3cgdmFsdWUgdG8gc2VlIHdoYXQgSSBtZWFuLicsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnT25lIGZhaXJseSBzcGVjdGFjdWxhciB1c2UgY2FzZSBmb3IgZmxleC1ncm93IHZhbHVlcyBpcyBhIG5hdmlnYXRpb24gbWVudSB0byB3aGljaCB5b3UgbWF5IG5lZWQgdG8gYWRkJyArXG5cdFx0JyBpdGVtcyBkeW5hbWljYWxseS4gU2luY2UgZmxleC1ncm93IHZhbHVlcyBhcmUgcmVsYXRpdmUgdG8gb25lIGFub3RoZXIgeW91IGNhbiBhZGQgbW9yZSBhbmQgbW9yZSBpdGVtcyB3aXRob3V0JyArXG5cdFx0JyBoYXZpbmcgdG8gcmVjb2RlIHRoZW0gYWxsIGFnYWluLi4uICcsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnSW4gZmFjdCwgbGV0XFwncyBtYWtlIG9uZSEgKFJlbWVtYmVyIHRvIHJlc2l6ZSB0aGUgY29udGFpbmVyISknLFxuXHRcdGJ1dHRvbnM6IFt7XG5cdFx0XHRcInRleHRcIjogJ21ha2UgYSBtZW51Jyxcblx0XHRcdFwiYWN0aW9uXCI6ICdtZW51J1xuXHRcdH1dXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnQ29tcGFyZWQgdG8gZmxleC1ncm93LCBcImZsZXgtc2hyaW5rXCIgbWF5IGJlIGEgbGl0dGxlIHRyaWNraWVyLCBidXQgc3RpbGwgdmVyeSB1c2VmdWwuIEJhc2ljYWxseSBpdCcgK1xuXHRcdCcgc3BlY2lmaWVzIGhvdyBtdWNoIHRoZSBmbGV4IGl0ZW0gd2lsbCBzaHJpbmsgcmVsYXRpdmUgdG8gb3RoZXIgZmxleCBpdGVtcyBpbiB0aGUgZmxleCBjb250YWluZXIgd2hlbiB0aGUnICtcblx0XHQnIHNwYWNlIG9uIGEgcm93IGhhcyBiZWVuIGZpbGxlZC4nLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ1RvIHNlZSBob3cgaXQgd29ya3MsIHJlbW92ZSBhbGwgb2YgeW91ciBpdGVtcy4gTWFrZSBzdXJlIHlvdXIgZGVmYXVsdCBzZXR0aW5nIGZvciBuZXcgaXRlbXMgaXMgZmxleGlibGUsJyArXG5cdFx0JyBhbmQgYWRkIHRocmVlLiBOb3cgc2V0IHRoZSBmbGV4LXNocmluayB2YWx1ZSBvZiBvbmUgdG8gMiwgYW5kIGFsbCBvZiB0aGVpciBmbGV4LWJhc2lzIHByb3BlcnRpZXMgdG8gXCIxMDBweFwiJyArXG5cdFx0JyBhbmQgY2xpY2sgXCJyZXNpemUgZmxleGJveFwiLiBJdCBzaHJpbmtzIGF0IHR3aWNlIHRoZSBwYWNlIG9mIHRoZSBvdGhlciBmbGV4IGl0ZW1zLicsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnRmluYWxseSB3ZSBjb21lIHRvIFwiZmxleC1iYXNpc1wiLCB3aGljaCBpcyBhICoqdmVyeSoqIGltcG9ydGFudCBvbmUuIEl0XFwncyBhIGxvdCBsaWtlIFwibWluLXdpZHRoXCIsIGJ1dCcgK1xuXHRcdCcgZm9yIGZsZXggaXRlbXMgb25seS4gQmFzaWNhbGx5IGl0IHNheXMsIFwibWFrZSB0aGlzIGl0ZW0gZmlsbCB0aGUgc3BhY2UgaXQgaGFzIGFuZCBzaHJpbmsgYXMgbXVjaCBhcyBpdCBuZWVkcycgK1xuXHRcdCcgdG8uLi4gYnV1dXV0IHRoZSBzbWFsbGVzdCBpdCBjYW4gYmUgaXMgXCJYIHBpeGVscyBvciBlbXNcIi4nLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ1RvIHNlZSBpdCBpbiBhY3Rpb24sIGp1c3QgcmVzaXplIHRoZSBmbGV4IGNvbnRhaW5lci4gWW91XFwnbGwgc2VlIHRoYXQgd2hlbiB0aGUgaXRlbSByZWFjaGVzIGl0cyBmbGV4JyArXG5cdFx0JyBiYXNpcywgaXQgc3RvcHMgZmxleGluZyBhbmQgc29tZXRoaW5nIGVsc2UgaGFzIHRvIGZsZXggb3IgcHVzaGVkIHRvIHRoZSBuZXh0IGxpbmUuJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdOb3cgdGhhdCB3ZSBoYXZlIHNvbWUgZmxleGlibGUgaXRlbXMgdG8gd29yayB3aXRoLCBnbyBhaGVhZCBhbmQgbW92ZSB0aGUgYWxpZ24taXRlbXMgcHJvcGVydHkgdG8nICtcblx0XHQnIFwic3RyZXRjaFwiLiBUaGF0IG1lYW5zIHdlXFwncmUgc3RyZXRjaGluZyB0aGVtIGFjcm9zcyB0aGUgdmVydGljYWwgYXhpcyB0byBmaWxsIHRoZSBzcGFjZSB0aGV5XFwndmUgYmVlbiBnaXZlbi4nICtcblx0XHQnIFByZXR0eSBjb29sLCBlaD8nLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ1lvdSBjYW4gaW1hZ2luZSBob3cgbWFueSBvZiB0aGUgcHJvcGVydGllcyBpbiBqdXN0aWZ5LWNvbnRlbnQgYW5kIGFsaWduLWNvbnRlbnQgYXJlIG9ubHkgdXNlZnVsIHNvIGZhciBhcycgK1xuXHRcdCcgdGhlcmUgYSBzcGFjZSBiZXR3ZWVuIHRoZSBpdGVtcywgYnV0IGdvIGFoZWFkIGFuZCBwbGF5IGFyb3VuZCB3aXRoIHRoZW0gdG9vLCBvciBqdXN0IG1vdmUgb24gdG8gdGhlIG5leHQgc2xpZGUuJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdOb3csIGhvdyBhYm91dCBzb21lIG90aGVyIHByYWN0aWNhbCB1c2VzIGZvciBmbGV4Ym94PycsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnT25lIG9mIHRoZSBtb3N0IHVzZWZ1bCByaWdodCBvdXQtb2YtdGhlLWJveCBpcyB2ZXJ0aWNhbCBjZW50ZXJpbmcuIENsZWFyIHlvdXIgc2NyZWVuIG9mIGZsZXggaXRlbXMgYW5kIGFkZCBqdXN0IG9uZS4gTWFrZSBzdXJlIFwianVzdGlmeS1jb250ZW50XCIgYW5kIFwiYWxpZ24taXRlbXNcIiBoYXZlIGJlZW4gc2V0IHRvIFwiY2VudGVyXCIuJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdOb3RpY2UgaG93IHRoZSBpdGVtIGF1dG9tYXRpY2FsbHkgZ29lcyB0byB0aGUgY2VudGVyIG9mIHRoZSBjb250YWluZXIuIFdpdGhvdXQgZmxleGJveCB0aGlzIHdvdWxkIHRha2UnICtcblx0XHQnIHNvbWUgc2VyaW91c2x5IGF3a3dhcmQgZmFuYWdsaW5nLCB1c2luZyBoZWlnaHQgYW5kIHBhZGRpbmcgcHJvcGVydGllcyBhbmQgcHJvYmFibHkgYSBsaXR0bGUgamF2YXNjcmlwdCB0byBiZScgK1xuXHRcdCcgc3VyZS4gVGhpcyB3YXksIG9uIHRoZSBvdGhlciBoYW5kLCBpcyBkZWFkIHNpbXBsZS4nLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0Fub3RoZXIgcHJhY3RpY2FsIHVzZSB3b3VsZCBiZSBjcmVhdGluZyBhIGZsZXhpYmxlIGxheW91dCBmb3IgYSBiYXNpYyB3ZWJzaXRlLiBDbGljayB0aGUgYnV0dG9uLCBhbmQgc2VlJyArXG5cdFx0JyBhIHBlcmZlY3RseSBmbGV4aWJsZSB3ZWJzaXRlIGxheW91dCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZC4nLFxuXHRcdGJ1dHRvbnM6IFt7XG5cdFx0XHR0ZXh0OiBcImxheW91dCBhIHdlYnNpdGVcIixcblx0XHRcdGFjdGlvbjogJ2hvbHlHcmFpbCdcblx0XHR9XVxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ0Fub3RoZXIgYmlnIHBsdXMgaXMgdGhhdCB5b3VyIGZsZXggaXRlbXMgY2FuIGFjdCBhcyBmbGV4Ym94IGNvbnRhaW5lcnMgc2ltdWx0YW5lb3VzbHksIGlmIHlvdSB3YW50IHRoZW0gdG8uJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdEb25cXCd0IGJlbGlldmUgbWU/IFJpZ2h0IGNsaWNrIG9uIGFueSBvZiB0aGUgZmxleCBpdGVtcyBpbiB0aGUgY29udGFpbmVyIGFwcCwgYW5kIHNlbGVjdCBcImluc3BlY3QgZWxlbWVudFwiLiBZb3UgY2FuIHNlZSBpbiB0aGUgc3R5bGluZywgdGhhdCB3ZVxcJ3JlIHVzaW5nIGZsZXhib3ggcHJvcGVydGllcyB0byBrZWVwIHRoZSBsb3JlbSBpcHN1bSAod2l0aGluIGEgcGFyYWdyYXBoIHRhZykgaW4gdGhlIGNlbnRlciBvZiBlYWNoIGl0ZW0uJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdJbiBmYWN0LCBhbG1vc3QgYWxsIG9mIHRoZSBsYXlvdXQgZWxlbWVudHMgb24gdGhpcyBwYWdlIGFyZSBmbGV4Ym94LiBJdCBtYWRlIGZvciB2ZXJ5IHNpbXBsZSBsYXlvdXQgY29kZSwgc28gSSBjb3VsZCBmb2N1cyBvbiB0aGUgaGFyZGVyIGFuZCBtb3JlIGZ1biB3b3JrIChsaWtlIHdyaXRpbmcgdGhlIGphdmFzY3JpcHQgdG8gbWFrZSBhbiBpbnRlcmFjdGl2ZSBhcHAhKS4nLFxuXHR9LFxuXG5cdHtcblx0XHR0ZXh0OiAnQWxyaWdodCwgSSBjb3VsZCBnbyBvbiBhbmQgb24gd2l0aCBleGFtcGxlcy4uLiBidXQgYmVsaWV2ZSBpdCBvciBub3QsIHlvdSBrbm93IGp1c3QgYWJvdXQgYWxsIHlvdSBuZWVkIHRvIGtub3cgYWJvdXQgZmxleGJveCB0byBiZSBkYW5nZXJvdXMuJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdUZWNobmljYWxseSwgSSBkaWRuXFwndCBzaG93IHlvdSBldmVyeSBzaW5nbGUgZmVhdHVyZSBhbmQgdmFyaWF0aW9uIG9mIHRoZSBmbGV4Ym94IHNwZWMsIGluY2x1ZGluZyB0aGUgXCJhbGlnbi1zZWxmXCIgcHJvcGVydHkgd2hpY2ggY2FuIGJlIGFwcGxpZWQgdG8gZmxleCBpdGVtcywgYXMgd2VsbCBhcyBcIm9yZGVyXCIgd2hpY2ggYWxsb3dzIHlvdSB0byBjaGFuZ2UgdGhlIG9yZGVyIG9mIGl0ZW1zIGluIHRoZSBjb250YWluZXIuJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdUaGVyZSBhcmUgYWxzbyBhIGZldyB2YXJpYXRpb25zIGZvciBmbGV4LWRpcmVjdGlvbiBhbmQgZmxleC13cmFwIHdvcnRoIGxvb2tpbmcgaW50bywgYWx0aG91Z2ggdGhlaXIgdXNhZ2UgaXMgcHJvYmFibHkgbXVjaCBsZXNzIHVzZWZ1bCB0aGFuIHRoZSBvcHRpb25zIHlvdSBoYXZlIGhlcmUuJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdGaW5hbGx5LCBicm93c2VyIHN1cHBvcnQuIExvbmcgc3Rvcnkgc2hvcnQsIGZsZXhib3ggaXMgbm93IHN1cHBvcnRlZCBpbiBhbGwgb2YgdGhlIGxhdGVzdCBicm93c2VyIHZlcnNpb25zIChGaXJlZm94IDI4IGhhcyBmaW5hbGx5IHNoaXBwZWQpLCBidXQgaWYgeW91IG5lZWQgdG8gc3VwcG9ydCBvbGRlciBicm93c2VycyBjaGVjayBvdXQgY2FuaXVzZSB0byBzZWUgd2hhdCB5b3VyIG9wdGlvbnMgYXJlLicsXG5cdFx0YnV0dG9uczogW3tcblx0XHRcdHVybDogJ2h0dHA6Ly9jYW5pdXNlLmNvbS9mbGV4Ym94Jyxcblx0XHRcdHRleHQ6ICdjYW5pdXNlIGZsZXhib3gnLFxuXHRcdFx0YWN0aW9uOiAndXJsJ1xuXHRcdH1dXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiAnV29uZGVyaW5nIGFib3V0IHZlbmRvciBwcmVmaXhlcz8gVGhlcmUgYXJlIHNvbWUgcXVpcmt5IGlzc3VlcyBhY3R1YWxseSwgc2luY2UgZmxleGJveCBpcyBvbiBpdHMgdGhpcmQnICtcblx0XHQnIHN5bnRheC4gQnV0IG5vbmUgb2YgdGhhdCBtYXR0ZXJzIGlmIHlvdSB1c2UgQXV0b3ByZWZpeGVyIHRvIGhhbmRsZSB2ZW5kb3IgcHJlZml4ZXMgZm9yIHlvdS4gU2VyaW91c2x5LCBzdG9wJyArXG5cdFx0JyB3b3JyeWluZyBhYm91dCB2ZW5kb3IgcHJlZml4ZXMgKGF0IGFsbCwgZm9yZXZlcikgYW5kIHVzZSBhdXRvcHJlZml4ZXIuJyxcblx0XHRidXR0b25zOiBbe1xuXHRcdFx0dXJsOiAnaHR0cDovL2Nzcy10cmlja3MuY29tL2F1dG9wcmVmaXhlci8nLFxuXHRcdFx0dGV4dDogJ1JlYWQgb24gYXV0b3ByZWZpeGVyJyxcblx0XHRcdGFjdGlvbjogJ3VybCdcblx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ1VQREFURTogSW4gbWFraW5nIHN0eWxpc3RpYyBjaGFuZ2VzIHRvIHRoaXMgYXBwLCBJXFwndmUgZGlzY292ZXJlZCB2YXJpb3VzIGRpZmZlcmVuY2VzIGluIGhvdyBicm93c2VycycgK1xuXHRcdCcgcmVuZGVyIGZsZXhib3ggbGF5b3V0cyAocGFydGljdWxhcmx5IFNhZmFyaSksIHNvbWUgbW9yZSBzaWduaWZpY2FudCB0aGFuIG90aGVycy4gTG9uZyBzdG9yeSBzaG9ydCwgd2l0aCcgK1xuXHRcdCcgZmxleGJveCwgdHJlYWQgbGlnaHRseSBhbmQgdGVzdCBhbGwgdGhlIGRldmljZXMgeW91IGNhbi4nLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogJ1dlbGwsIEkgaG9wZSB0aGF0IGhlbHBlZCB5b3Ugd3JhcCB5b3VyIGhlYWQgYXJvdW5kIGZsZXhib3guIEl0XFwncyBhIHZlcnkgdXNlZnVsIHByb3BlcnR5IGFuZCBhbG1vc3QnICtcblx0XHQnIGNlcnRhaW5seSB0aGUgZnV0dXJlIG9mIENTUyBsYXlvdXRzLiBJZiBpdCBzZWVtcyB0cmlja3kgYXQgZmlyc3QsIGRvblxcJ3Qgd29ycnkuIEp1c3Qga2VlcCB0aW5rZXJpbmcgYW5kJyArXG5cdFx0JyB5b3VcXCdsbCBnZXQgdGhlIGhhbmcgb2YgaXQuJyxcblx0fSxcblx0e1xuXHRcdHRleHQ6ICdPaCwgYSBmZXcgcmVzb3VyY2VzIEkgZm91bmQgdmVyeSBoZWxwZnVsJyxcblx0XHRidXR0b25zOiBbe1xuXHRcdFx0dXJsOiAnaHR0cDovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9hLWd1aWRlLXRvLWZsZXhib3gvJyxcblx0XHRcdHRleHQ6ICdDaHJpcyBDb3lpZXJcXCdzIENvbXBsZXRlIEd1aWRlJyxcblx0XHRcdGFjdGlvbjogJ3VybCdcblx0XHR9LCB7XG5cdFx0XHR1cmw6ICdodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9HdWlkZS9DU1MvRmxleGlibGVfYm94ZXMnLFxuXHRcdFx0dGV4dDogJ01ETiBvbiBGbGV4aWJsZSBCb3hlcycsXG5cdFx0XHRhY3Rpb246ICd1cmwnXG5cdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dXJsOiAnaHR0cDovL3d3dy53My5vcmcvVFIvY3NzLWZsZXhib3gtMScsXG5cdFx0XHRcdHRleHQ6ICdUaGUgb2ZmaWNpYWwgVzMgU3BlYycsXG5cdFx0XHRcdGFjdGlvbjogJ3VybCdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHVybDogJ2h0dHA6Ly9jYW5pdXNlLmNvbS9mbGV4Ym94Jyxcblx0XHRcdFx0dGV4dDogJ0NhbklVc2UgRmxleGJveCcsXG5cdFx0XHRcdGFjdGlvbjogJ3VybCdcblx0XHRcdH1dXG5cdH0sXG5cblx0e1xuXHRcdHRleHQ6ICdIYXZlIGZlZWRiYWNrPyBJIHdhbnQgaXQuJyxcblx0XHRidXR0b25zOiBbe1xuXHRcdFx0dXJsOiAnbWFpbHRvOmJyeWNlcGpAZ21haWwuY29tJyxcblx0XHRcdHRleHQ6ICdFbWFpbCBtZScsXG5cdFx0XHRhY3Rpb246ICd1cmwnXG5cdFx0fSwge1xuXHRcdFx0dXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9fZGV2YnJ5Y2UnLFxuXHRcdFx0dGV4dDogJ1R3ZWV0IGF0IG1lJyxcblx0XHRcdGFjdGlvbjogJ3VybCdcblx0XHR9LFxuXHRcdHtcblx0XHRcdHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9icnljZXBqL2ZsZXhib3gvaXNzdWVzJyxcblx0XHRcdHRleHQ6ICdSZXBvcnQgYnVncycsXG5cdFx0XHRhY3Rpb246ICd1cmwnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vYnJ5Y2Vwai9mbGV4Ym94Jyxcblx0XHRcdHRleHQ6ICdIZWxwIG91dCcsXG5cdFx0XHRhY3Rpb246ICd1cmwnXG5cdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdHRleHQ6ICdUaGUgRW5kIScsXG5cdH0sXG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==