module flexbox {

    export module model {

        export class Tour {

            index: any;
            currentMessage: any;
            tour: any;
            currentXUrl: any;
            currentXText: any;
            hasButton: any;

            constructor() {

                this.tour = new TourModel();
                this.index = ko.observable(0);
                console.log(this.tour.messages)

                this.currentMessage = ko.computed(function() {
                    var index = this.index();

                    return this.tour.messages[index].text;

                }, this);

                this.currentXUrl = ko.computed(function(){
                    var index = this.index();
                    
                    return this.tour.messages[index].xUrl;
                
                },this);
                
                this.currentXText = ko.computed(function(){
                    var index = this.index();
                    
                    return this.tour.messages[index].xText;
                
                },this); 
                
                this.hasButton = ko.computed(function(){
                    var index = this.index();
                    
                    return this.tour.messages[index].hasButton;
                
                },this);


            }

            next(): void {
                var arrayLength = this.tour.messages.length;
                var current = this.index();

                if (current === (arrayLength - 1)) { return; }
                else {
                    current++;
                    this.index(current); //increment index up one
                    
                }
            }

            previous(): void {
                var arrayLength = this.tour.messages.length;
                var current = this.index();
                if (current === 0) { return; }
                else {
                    current--;
                    this.index(current); //increment index up one
                    
                }
            }


            test():void {
                $('.flex-container').hide();
            }
           

        }

    }

}
