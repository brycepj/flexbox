(function (flexbox) {
    (function (model) {
        var Tour = (function () {
            function Tour() {
                this.index = ko.observable("0");
                this.currentMessage = ko.observable("this is the message");
                this.tour = [
                    'Here is the first of the greetings',
                    'Here is the second of the greetings',
                    'Here is the third of the greetings'];
            }
            Tour.prototype.next = function () {
                var array = this.tour;
                var index = this.index();
                index++;
                this.currentMessage(array[index]);
            };

            Tour.prototype.previous = function () {
                var array = this.tour;
                var index = this.index();
                index++;
                this.currentMessage(array[index]);
            };
            return Tour;
        })();
        model.Tour = Tour;
    })(flexbox.model || (flexbox.model = {}));
    var model = flexbox.model;
})(exports.flexbox || (exports.flexbox = {}));
var flexbox = exports.flexbox;
