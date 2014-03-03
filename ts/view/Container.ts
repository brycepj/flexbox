module flexbox {

  export module view {

    export class FlexContainer {


      items:any;
      cPropsDefault:any;
      cPropsCurrent:any;
      flexDirectionOptions:any;
      flexWrapOptions:any;
      justifyContentOptions:any;
      alignItemsOptions:any;
      alignContentOptions:any;

      constructor() {

        this.items = ko.observableArray([

          new flexbox.model.FlexItem(this,1),
          new flexbox.model.FlexItem(this,2)

          ]);
        //add all of the flexbox container properties

        this.cPropsDefault = {
          display:"flex",
          flexDirection:"row",
          flexWrap:"wrap",
          justifyContent:"center",
          alignItems:"center",
          alignContent:"center",
          backgroundColor:"yellow"
      };

        this.cPropsCurrent = {
          display:ko.observable("flex"),
          flexDirection:ko.observable("row"),
          flexWrap:ko.observable("wrap"),
          justifyContent:ko.observable("center"),
          alignItems:ko.observable("center"),
          alignContent:ko.observable("center"),
          width:ko.observable("75%")

        };

        this.flexDirectionOptions = ['row','column'];
        this.flexWrapOptions = ['wrap','nowrap'];
        this.justifyContentOptions = ['flex-start','flex-end','center','space-between','space-around'];
        this.alignItemsOptions = ['flex-start','flex-end','center','baseline','stretch'];
        this.alignContentOptions = ['flex-start','flex-end','center','space-between','space-around','stretch'];

  } //end constructor


newItem():void {
  var index = this.getItemIndex();
  var newItem = new flexbox.model.FlexItem(this,index);
  this.items.push(newItem);
  console.log('new item added');

}

oneLessItem():void {

  this.items.pop();
  console.log('newest item removed');

}

getItemIndex():number {
  var currentLength = this.items().length;
  return currentLength + 1;
}


resetContainerProps():void {}
//setIndividualContainer props (this is several methods)
//print out code samples for group and individual styles
//
} //end class



}

}
