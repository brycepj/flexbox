module flexbox {

  export module model {

    export class FlexItem {

      model:any;
      index:number;
      iPropsDefault:{};
      iPropsCurrent:{};

      constructor(model:any,index:number) {

          this.index = index;

          this.iPropsDefault = {
            order:"1",
            flexGrow:"1",
            flexShrink:"0",
            flexBasis:"300px",
            alignSelf:"center",
            width:"300px",
            height:"300px",
            backgroundColor:"tomato",
            margin:"10px"
        };

        this.iPropsCurrent = {
            order:ko.observable("1"),
            flexGrow:ko.observable("1"),
            flexShrink:ko.observable("0"),
            flexBasis:ko.observable("100px"),
            alignSelf:ko.observable("center"),
            width:ko.observable("300px"),
            height:ko.observable("300px"),
            backgroundColor:ko.observable("tomato"),
            margin:ko.observable("10px")
          };


        //flexbox within a flexbox?



}
}

}

}
