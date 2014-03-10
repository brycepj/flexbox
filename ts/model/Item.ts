module flexbox {

    export module model {

        export class FlexItem {

            model: any;
            index: any;
            iPropsCurrent: any;
            isFixedWidth: any;
            isFlexyWidth: any;
            highlightFixed: any;
            highlightFlexy: any;

            constructor(model: any, index: any, props: model.ItemProps = {
                isFlexyWidth: false,
                isFixedWidth: true,
                height: "250px",
                width: "300px",
                order: null,
                flexGrow: null,
                flexShrink: null,
                flexBasis: null,
                alignSelf: null,
                backgroundColor: "#01ff70",
                margin: "10px"

            }) {

                if (typeof props.isFlexyWidth === "undefined") { props.isFlexyWidth = false };
                if (typeof props.isFixedWidth === "undefined") { props.isFixedWidth = true };
                if (typeof props.height === "undefined") { props.height = "250px" };
                if (typeof props.width === "undefined") { props.width = "300px" };
                if (typeof props.order === "undefined") { props.order = null };
                if (typeof props.flexGrow === "undefined") { props.flexGrow = null };
                if (typeof props.flexShrink === "undefined") { props.flexShrink = null };
                if (typeof props.flexBasis === "undefined" && props.isFixedWidth) { props.flexBasis = null };
                if (typeof props.backgroundColor === "undefined") { props.backgroundColor = "#01ff70" };
                if (typeof props.margin === "undefined") { props.margin = "10px" };

                if (props.isFlexyWidth) {
                    props.isFixedWidth = false;
                    props.width = null;

                } else if (props.isFixedWidth) {
                    props.isFlexyWidth = false;
                    props.height = "250px";
                    props.width = "300px";
                    props.order = null;
                    props.flexGrow = null;
                    props.flexShrink = null;
                    props.flexBasis = null;
                    props.alignSelf = null;

                }

                this.index = ko.observable(index);
                this.model = model;
                console.log(model);
                this.iPropsCurrent = {
                    order: ko.observable(props.order),
                    flexGrow: ko.observable(props.flexGrow),
                    flexShrink: ko.observable(props.flexShrink),
                    flexBasis: ko.observable(props.flexBasis),
                    alignSelf: ko.observable(props.alignSelf),
                    height: ko.observable(props.height),
                    width: ko.observable(props.width),
                    backgroundColor: ko.observable(props.backgroundColor),
                    margin: ko.observable(props.margin)
                };

                this.isFixedWidth = ko.observable(props.isFixedWidth);
                this.isFlexyWidth = ko.observable(props.isFlexyWidth);

                this.highlightFixed = ko.computed(function() {
                    if (this.isFixedWidth()) {
                        return "1.6em"
                    }
                    else {
                        return "inherit"
                    }

                }, this);

                this.highlightFlexy = ko.computed(function() {
                    if (this.isFlexyWidth()) {
                        return "1.6em";
                    }
                    else {
                        return "inherit";
                    }

                }, this);


            }


            makeFixedWidth(): void {
                console.log('it fired');
                this.isFixedWidth(true);
                this.iPropsCurrent.flexGrow(null);
                this.iPropsCurrent.flexBasis(null);
                this.iPropsCurrent.flexShrink(null);
                this.isFlexyWidth(false);

            }

            makeFlexyWidth(): void {
                this.isFixedWidth(false);
                this.isFlexyWidth(true);
                this.iPropsCurrent.flexGrow("1");
                this.iPropsCurrent.flexBasis("200px");
                this.iPropsCurrent.flexShrink("0");
            }

            resetProps(): void {
                var currentProps = this.iPropsCurrent;
                var newProps = this.model.iPropsDefault;
                currentProps.width(newProps.width());
                currentProps.flexGrow(newProps.flexGrow());
                currentProps.flexShrink(newProps.flexShrink());
                currentProps.flexBasis(newProps.flexBasis());
                currentProps.alignSelf(newProps.alignSelf());
            }

            destroySelf(): void {
                var index = parseInt(this.index(), 10);
                this.model.destroyItem(index);

            }

        }

    }

}
