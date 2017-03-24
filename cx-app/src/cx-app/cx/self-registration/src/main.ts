import { platformBrowserDynamic } from 'ng-metadata/platform-browser-dynamic';
import { enableProdMode } from 'ng-metadata/core';
import { AppModule } from './app';
import './main.css';
import './ux_access.css';

if ( ENV === 'production' ) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule( AppModule );
