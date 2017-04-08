# 1. Create a Ionic 2 blank project:

$ ionic start DataPicker blank --v2

# 2. Add the necessary platforms:

$ cd DataPicker

$ ionic platform add android

$ ionic platform add ios

# 3. This step is not necessary, but to help us work with dates we will install moment. More information can be found [here](https://momentjs.com/docs/#/displaying/).

$ npm install moment --save

# 4. Install data picker. More information can be found [here](https://ionicframework.com/docs/native/date-picker/).

$ ionic plugin add cordova-plugin-datepicker --save

$ npm install --save @ionic-native/date-picker --save

# 5. Add the data picker provider to src\app\app.module.ts. The file will looks like this:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
```

# 6. Change src\pages\home\home.ts file. It will looks like this:

```typescript
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

// Load data picker.
import { DatePicker } from '@ionic-native/date-picker';

// Load moment.
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

private date: any;

  constructor(
  private navCtrl: NavController,
  private datePicker: DatePicker) { }
	
	public showDataPicker(): void {
		this.datePicker.show({
  date: new Date(),
  mode: 'datetime',
  is24Hour: true,
  androidTheme: this.datePicker.ANDROID_THEMES.THEME_TRADITIONAL
}).then(
  date => { this.date = moment(new Date(date)).format('YYYY-MM-DD kk:mm'); },
  err => { alert('Error occurred while getting date: ' + err); }
);
}

}
```

# 7. Change src\pages\home\home.html file. It will looks like this:

```html
<ion-header>
<ion-navbar>
<ion-title>Ionic Blank</ion-title>
</ion-navbar>
</ion-header>

<ion-content padding>

<label>Date: {{date}}</label>
<button ion-button round (click)="showDataPicker()">Edit</button>

</ion-content>
```

# 8. Well done! Run the project on a real device using:

$ ionic run android

or 

$ ionic run ios

Attention: Data Picker is a cordova plugin so will not works using ionic serve.