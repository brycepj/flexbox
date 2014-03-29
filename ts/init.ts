module flexbox {

    (function () {
        $(document).ready(function () {
            var flexboxApp = new flexbox.view.FlexContainer();
            ko.applyBindings(flexboxApp, document.getElementById('flexbox-app'));


        //make height on
        //make this sucker responsive once and for all
        //integrate jasmine and karma so it's testable
        });
    })()

}
