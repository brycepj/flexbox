module flexbox {

    export module model {

        export class Tour {

            index:any;
            currentMessage:any;
            tour:any;
            
            constructor() {
                this.index = ko.observable(0);
                this.tour = ['Here is the first of the greetings',
                    'Here is the second of the greetings',
                    'Here is the third of the greetings'];
                this.currentMessage = ko.observable("Welcome!");

            }
            
            next():void {


            }
            
            previous():void {

            }
          
                
        }

    }

}
