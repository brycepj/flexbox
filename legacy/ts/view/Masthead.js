module flexbox {

	export module view {

		export class Masthead {

			$el:any;
			model:flexbox.view.FlexContainer;
			monitor:any;


			constructor(model:flexbox.view.FlexContainer) {

				var self = this;
				var window = $(window);
				this.$el = $('.masthead');
				this.model = model;

				self.$el.fadeIn();


				this.monitor = model.items.subscribe(function (items) {
					if (items.length === 0) {
						self.$el.fadeIn();
					} else {
						self.$el.hide();
					}
				});

				//check for local storage
				var confirm = localStorage.getItem('items');

				if (confirm === "0") {
					this.$el.fadeIn();
				}


				//coming on small screen for first time


				//resizing the page


			}//end constructor

			resetContent(content?:any) {

				var $contentWrap = $('.mh-cond-content');
				var wHeight = $(window).innerWidth();
				var noFlexbox = "Heads up! Your browser doesn't fully support flexbox. So it\'s likely this flexbox demo isn't going to look very good. Sorry about that!";
				var smallScreen = "User beware! This layout is usable on small screens, but not nearly as useful. I\'d recommend checking back when you\'re on a larger device :)";
				var warning = "";

				var oldContent = content ? content : $contentWrap.html();

				if (Modernizr.flexbox) {
					warning = smallScreen;
				} else {
					warning = noFlexbox;
				}

				if (wHeight > 730) {
					var newContent = '<p class="mh-warning">' + warning + '</p>';
					$contentWrap.html(oldContent);
				}

				if (wHeight < 730) {
					var newContent = '<p class="mh-warning">' + warning + '</p>';
					$contentWrap.html(newContent);
				}
			}

			setResizeListener() {
				var self = this;
				var content = $('.mh-cond-content').html();
				$(window).resize(function () {
					self.resetContent(content);
				});
			}
		}

	}

}
