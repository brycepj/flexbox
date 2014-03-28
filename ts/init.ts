module flexbox {

    (function(){
        $(document).ready(function(){
            var flexboxApp = new flexbox.view.FlexContainer();
            ko.applyBindings(flexboxApp, document.getElementById('flexbox-app'));


            var slideBtn = document.getElementById('mh-slide-btn');

            slideBtn.addEventListener('click',function(){
               sayHi();
            });

            function sayHi() {
                console.log('hi');
            }
        });
    })()

}
