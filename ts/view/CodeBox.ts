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





            }//end constructor


        }

    }

}
