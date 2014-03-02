module flexbox {

  export module view {

    export class FlexContainer {


      items:any;
      cPropsDefault:any;
      cPropsCurrent:any;


      constructor() {

        this.items = ko.observableArray([

          new flexbox.model.FlexItem(this),
          new flexbox.model.FlexItem(this)

          ]);
        //add all of the flexbox container properties

        this.cPropsDefault = {
          display:"flex",
          flexDirection:"row",
          flexWrap:"wrap",
          justifyContent:"center",
          alignItems:"center",
          alignContent:"center"

      };

        this.cPropsCurrent = {
          display:ko.observable("flex"),
          flexDirection:ko.observable("row"),
          flexWrap:ko.observable("wrap"),
          justifyContent:ko.observable("center"),
          alignItems:ko.observable("center"),
          alignContent:ko.observable("center")
        };

  } //end constructor


newItem():void {
  var newItem = new flexbox.model.FlexItem(this);
  this.items.push(newItem);
  console.log('new item added');

}

} //end class



}

}
