module flexbox {

    export module model {

        export class CodeBox {

            cProps:any;
            iPropsDefault:any;

            constructor(model) {

                this.cProps = {};
                this.iPropsDefault = {
                    flexDirection: ko.observable("row"),
                    flexWrap: ko.observable("wrap"),
                    justifyContent: ko.observable("center"),
                    alignContent: ko.observable("flex-start"),
                    alignItems: ko.observable("center")
                };





                //need to refactor/refigure concept of defualt item props
                //needs to be a set of observables that codebox can watch
                //needs to inform the making of new items
                //isflexy vs isfixed should be the only options

                //code box should loop through the items and, depending on whether isDFlexy or is Fixed is true, it will record certain values about the item and display them
                //this looping through should happen literally every time anything in the container changes, you don't have to worry about the container settings.
                //so basically there should be a 'sync' function on the container
                //you would call it when you create a new item, delete a new item
                //how would you update it when something changes?
                //

                //also it makes sense that we would store an array of printable values for the non-default item values in this module
                //that array would store only the neccessary values depending wheter flexy or fixed, and then the others would be set to null

                //the height property should be on both views of a flex item, pulling form the same observable obviously

                //maybe the codebox syncing should all happen within the container. Basically, we're going to be looping through the items array, recording the values
                //maybe I just need to use some templating to loop through items and display certain things from it directly

                //create a place to show current Cprops
                //show default item props

                //we'll also want to set up local storage for the codebox


            }//end constructor


        }

    }

}
