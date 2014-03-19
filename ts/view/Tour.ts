module flexbox {

    export module model {

        export class Tour {

            index:any;
            currentMessage:any;
            tour:any;
            currentXUrl:any;
            currentXText:any;
            hasButton:any;

            constructor() {
                this.tour = new TourModel();
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
                //temporary resizeContainer! Only for testing! Add a button that activates this 
                this.resizeContainer();
                
                
            }


            
            next():void {
                var arrayLength = this.tour.messages.length;
                var current = this.index();

                if (current === (arrayLength - 1)) {
                    return;
                }
                else {
                    current++;
                    this.index(current); //increment index up one

                }
            }

            previous():void {
                var arrayLength = this.tour.messages.length;
                var current = this.index();
                if (current === 0) {
                    return;
                }
                else {
                    current--;
                    this.index(current); //increment index up one

                }
            }


            test():void {
                $('.flex-container').hide();
            }

            resizeContainer():void {
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
            }

        }

    }

}
