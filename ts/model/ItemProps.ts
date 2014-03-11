module flexbox {

    export module model {

        export interface ItemProps {
            viewSettings?:boolean;
            viewContent?:boolean;
            content?:string;
            isFlexyWidth?: boolean;
            isFixedWidth?: boolean;
            height?: any;
            width?: any;
            order?: any;
            flexGrow?: any;
            flexShrink?: any;
            flexBasis?: any;
            alignSelf?: string;
            backgroundColor?: string;
            margin?: string;

        }

    }

}
