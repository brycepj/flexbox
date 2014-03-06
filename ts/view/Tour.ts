module flexbox {

    export module model {

        export class Tour {

            index:any;
            currentMessage:any;
            tour:any;
            
            constructor() {
                this.index = ko.observable(0);
                this.currentMessage = ko.observable("");
                this.tour = ['Here is the first of the greetings', 'Here is the second of the greetings','Here is the third of the greetings'];
                
            }
            
            next():void {
                var array = this.tour;
                var index = this.index();
                index++;
                this.currentMessage(array[index]);
            }
            
            previous():void {
                var array = this.tour;
                var index = this.index();
                index++;
                this.currentMessage(array[index]);
            }
          
                
        }

    }

}
