import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipe/to-fahrenheit.pipe';
import { ConvertTempPipe } from './pipe/convert-temp.pipe';
import { ConvertTimePipe } from './pipe/convert-time.pipe';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe
  ]
})
export class SharedModule { }
