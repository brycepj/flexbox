module flexbox {

    export module model {

        export class devLorem {

            wordCount: any;
            chosenWords: any;
            words: any;
            text: any;

            constructor(wordCount) {

                this.wordCount = wordCount;
                this.chosenWords = [];
                this.text = "";
                this.words = ['flexbox','device agnostic', 'breaks in ie6', 'paul irish', 'web standards', 'grok', 'crufty', 'angular', 'MV*', 'addy osmani','custom elements', 'paralax', 'performance budget', 'offline first', 'gulp', 'node', 'ie6 countdown', 'progressive enhancement', 'the Industry','svg','machine code','rails','django','google','indexDB','webgl','ux/ui','tim kadlec','retina','fixed header','minimalist','simplicity is not the absense of clutter','QR codes','art directed blog posts','masonry','infinite scrolling','lazy load','mobile navigation toggle', 'api','spa','ember','backbone','mvc','require','the open web','server farm', 'bash','free as in beer','nosql','how long does it take to learn javascript', 'gui','fortran','server-side','back-end', 'groovy on grails','haskell','erlang','continuous integration','capistrano','typescript','coffeescript','google dart','yehuda katz'];

                //random word,choose random number between 0 and words.length. get it's value from the array, push it to another array
                //create new, passing in index, from Item.ts, return string array.joi  
                //initialize in constructor, return only text
                // prototypal method that returns strin  

                var min = 0;
                var max = this.words.length;

                var length = this.wordCount;
                for (var i = 0; i < this.wordCount; i++) {
                    var rando = Math.floor(Math.random() * (max - min + 1)) + min;
                    this.chosenWords.push(this.words[rando]);
                    this.words.splice(rando,1);
                }

                this.text = this.chosenWords.join(' ');

                return this.text;

            }

        }

    }

}
