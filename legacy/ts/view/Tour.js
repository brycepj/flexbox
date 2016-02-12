module flexbox {

	export module model {

		export class Tour {

			index:any;
			currentMessage:any;
			tour:any;
			currentXUrl:any;
			currentXText:any;
			hasButton:any;
			tourProgress:any;
			currentAction:any;
			clickAction:any;

			constructor() {


				this.tour = new TourModel();
				this.index = ko.observable(0);

				this.currentMessage = ko.computed(function () {
					var index = this.index();

					return this.tour.messages[index].text;

				}, this);

				this.currentXUrl = ko.computed(function () {
					var index = this.index();

					return this.tour.messages[index].xUrl;

				}, this);

				this.currentXText = ko.computed(function () {
					var index = this.index();

					return this.tour.messages[index].xText;

				}, this);

				this.hasButton = ko.computed(function () {
					var index = this.index();

					return this.tour.messages[index].hasButton;

				}, this);

				this.currentAction = ko.computed(function () {


					var index = this.index();
					var action = this.tour.messages[index].action;

					if (action) {
						return true;
					}

				}, this);


				this.tourProgress = ko.computed(function () {

					var currentIndexNum = this.index() + 1;

					var currentIndex = currentIndexNum.toString();
					var tourLength = this.tour.messages.length.toString();
					var progressString = currentIndex + " / " + tourLength;

					return progressString;

				}, this);


			}


			next():void {
				var arrayLength = this.tour.messages.length;
				var current = this.index();
				var self = this;

				$('.mb-content').fadeOut('fast', function () {

					if (current === (arrayLength - 1)) {
						return;
					}
					else {
						current++;
						self.index(current); //increment index up one

					}


				}).fadeIn('fast');


			}

			previous():void {
				var arrayLength = this.tour.messages.length;
				var current = this.index();
				var self = this;

				$('.mb-content').fadeOut('fast', function () {
					if (current === 0) {
						return;
					}
					else {
						current--;
						self.index(current); //increment index up one

					}

				}).fadeIn('fast');
			}


			test():void {
				$('.flex-container').hide();
			}

			resizeContainer():void {

				var $el = $('.flex-container');
				var width = $el.width();

				if ($('.flex-item').length > 0) {


					$el.css('width', width.toString() + "px");

					$el.animate({
						width: "250px"
					}, {
						duration: 3000,
						easing: "swing"

					});

					$el.animate({
						width: "100%"
					}, {
						duration: 3000,
						easing: "swing"
					});

					$el.css('width', null);
				} else {
				}
			}

		}

	}

}
