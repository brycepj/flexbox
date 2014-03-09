module flexbox {

    export module model {

        export class TourModel {
            messages: any;

            constructor() {


                this.messages = [

                    {
                        "text": 'Welcome!  It is much longer than I thought it would be given the circumstances. Maybe I will try to do soemthing about it.',
                        "hasButton": true,
                        "xUrl": null,
                        "xText": "Resources"

                    },
                    {
                        "text": 'Here is the first of the greetings',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'Here is the second of the greetings',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    },
                    {
                        "text": 'Here is the third of the greetings',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "Next text"
                    },
                    {
                        "text": 'Here is the fourth of the greetings',
                        "hasButton": true,
                        "xUrl": "http://www.nothing.com",
                        "xText": "anoher text"
                    },
                    {
                        "text": 'The End!',
                        "hasButton": false,
                        "xUrl": null,
                        "xText": null
                    }


                ];





            }

        }

    }

}
