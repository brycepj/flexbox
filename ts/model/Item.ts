module flexbox {

    export module model {

        export class FlexItem {

            model:any;
            index:any;
            iPropsCurrent:any;
            isFixedWidth:any;
            isFlexyWidth:any;
            highlightFixed:any;
            highlightFlexy:any;

            constructor(model:any, index:any, height:string = "250px", width:string = "300px", flexGrow:any = null, flexShrink:any = null, flexBasis:any = null, alignSelf:string = "center", backgroundColor:string = "#01ff70") {

                this.index = ko.observable(index);
                this.model = model;
                console.log(model);
                this.iPropsCurrent = {
                    order: ko.observable("1"),
                    flexGrow: ko.observable(flexGrow),
                    flexShrink: ko.observable(flexShrink),
                    flexBasis: ko.observable(flexBasis),
                    alignSelf: ko.observable(alignSelf),
                    height: ko.observable(height),
                    width: ko.observable(width),
                    backgroundColor: ko.observable(backgroundColor),
                    margin: ko.observable("10px")
                };

                this.isFixedWidth = ko.observable(true);
                this.isFlexyWidth = ko.observable(false);

                this.highlightFixed = ko.computed(function () {
                    if (this.isFixedWidth()) {
                        return "1.6em"
                    }
                    else {
                        return "inherit"
                    }

                }, this);

                this.highlightFlexy = ko.computed(function () {
                    if (this.isFlexyWidth()) {
                        return "1.6em";
                    }
                    else {
                        return "inherit";
                    }

                }, this);


            }


            makeFixedWidth():void {
                console.log('it fired');
                this.isFixedWidth(true);
                this.iPropsCurrent.flexGrow(null);
                this.iPropsCurrent.flexBasis(null);
                this.iPropsCurrent.flexShrink(null);
                this.isFlexyWidth(false);

            }

            makeFlexyWidth():void {
                this.isFixedWidth(false);
                this.isFlexyWidth(true);
                this.iPropsCurrent.flexGrow("1");
                this.iPropsCurrent.flexBasis("200px");
                this.iPropsCurrent.flexShrink("0");
            }

            resetProps():void {
                var currentProps = this.iPropsCurrent;
                var newProps = this.model.iPropsDefault;
                currentProps.width(newProps.width());
                currentProps.flexGrow(newProps.flexGrow());
                currentProps.flexShrink(newProps.flexShrink());
                currentProps.flexBasis(newProps.flexBasis());
                currentProps.alignSelf(newProps.alignSelf());
            }

            destroySelf():void {
                var index = parseInt(this.index(), 10);
                this.model.destroyItem(index);

            }

        }

    }

}
