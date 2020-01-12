import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule} from '@angular/material/input';
import { NgxEchartsModule } from 'ngx-echarts';
import { HostsComponent } from './hosts/hosts.component';
import { HostInfoComponent } from './host-info/host-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HostsComponent,
    HostInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, // HTTP客户端
    FormsModule, // 表单
    ReactiveFormsModule, // 响应式表单
    MatAutocompleteModule, // 下拉框
    MatInputModule, // 输入框
    NgxEchartsModule // ECharts库
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
