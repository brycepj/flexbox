module flexbox {

    (function () {
        $(document).ready(function () {
            var flexboxApp = new flexbox.view.FlexContainer();
            ko.applyBindings(flexboxApp, document.getElementById('flexbox-app'));
            
            flexboxApp.masthead.resetContent();
            flexboxApp.masthead.setResizeListener();
           
        });
    })()

}
