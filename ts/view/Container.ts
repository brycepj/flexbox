module flexbox {

  export module view {

    export class FlexContainer {


      items:any;
      rando:any;

      constructor() {

        this.rando = ko.observable("RANDO BANDO");
        this.items = ko.observableArray([

          new flexbox.model.FlexItem("Bryce"),
          new flexbox.model.FlexItem("Bryce")

          ]);
        //add all of the flexbox container properties



  }


    newItem() :void {
      var name = this.rando();
      this.items.push(new flexbox.model.FlexItem(name));
      console.log(this.items());

    }
}

}

}
