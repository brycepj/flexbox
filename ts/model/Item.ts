module flexbox {

    export module model {

        export class FlexItem {

            model: any;
            index: any;
            iPropsCurrent: any;

            constructor(model: any, index: any) {

                this.index = ko.observable(index);
                this.model = model;
                console.log(model);
                this.iPropsCurrent = {
                    order: ko.observable("1"),
                    flexGrow: ko.observable("1"),
                    flexShrink: ko.observable("0"),
                    flexBasis: ko.observable("100px"),
                    alignSelf: ko.observable("center"),
                    width: ko.observable("300px"),
                    height: ko.observable("300px"),
                    backgroundColor: ko.observable("tomato"),
                    margin: ko.observable("10px")
                };



            }

            resetProps(): void {
                var currentProps = this.iPropsCurrent;
                var newProps = this.model.iPropsDefault;
                currentProps.flexGrow(newProps.flexGrow());
                currentProps.flexShrink(newProps.flexShrink());
                currentProps.flexBasis(newProps.flexBasis());
                currentProps.alignSelf(newProps.alignSelf());
            }

            destroySelf(): void {
                var index = parseInt(this.index(),10);
                console.log(index);
                this.model.destroyItem(index);
                
            }

        }

    }

}
