/// <reference path="../typings/tsd/systemjs/systemjs.d.ts"/>

import {provide} from '../../node_modules/angular2/core.d';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from '../../node_modules/angular2/router.d';
import {AppCmp} from './../../app/components/app/app';

System.import('//localhost:<%= HOT_LOADER_PORT %>/ng2-hot-loader')
  .then(loader => {
    loader.ng2HotLoaderBootstrap(AppCmp, [
      ROUTER_PROVIDERS,
      provide(LocationStrategy, { useClass: HashLocationStrategy })
    ]);
  });
