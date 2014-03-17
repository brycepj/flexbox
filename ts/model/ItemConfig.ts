module flexbox {

    export module model {

        interface ItemConfig {

            height:string = "250px";
            width:string = "300px";
            flexGrow:string = null;
            flexShrink:string = null;
            flexBasis:string = null;
            alignSelf:string = "center";
            backgroundColor:string = "#01ff70";
            isFlexy:boolean = true;
            isFixed:boolean = false;

        }
    }
}