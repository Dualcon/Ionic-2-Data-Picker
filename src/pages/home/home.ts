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
