import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PageOneModule } from '../pages/action-sheet/page-one.module';
//import { PageOne } from '../pages/action-sheet/page-one';


@NgModule({
  declarations: [
    MyApp,
    //PageOne
    //PageOneModule
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PageOneModule
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //PageOne
    //PageOneModule
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
