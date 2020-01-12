import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HostInfoService } from '../host-info.service';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {
  myControl = new FormControl();
  hosts = null;
  hostsUrl = '/api/hosts';
  selectedHost: string; 

  // 注入HttpClient
  constructor(private http: HttpClient, public hostInfoService: HostInfoService) { }

  ngOnInit() {
    this.getData();
  }

  // 获取后台接口数据
  getData() {
    return this.http.get(this.hostsUrl)
      .subscribe(data => this.hosts = data);
  }

  // 选中事件处理
  onSelect(host: string): void { 
    this.selectedHost = host; 
    this.hostInfoService.eventEmit.emit(this.selectedHost);
  }
}
