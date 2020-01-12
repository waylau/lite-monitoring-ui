import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EChartOption } from 'echarts';

import { HostInfoService } from '../host-info.service';

@Component({
  selector: 'app-host-info',
  templateUrl: './host-info.component.html',
  styleUrls: ['./host-info.component.css']
})
export class HostInfoComponent implements OnInit {
  hosts = null;
  hostsUrl = '/api/hosts/';
  host = '127.0.0.2:63054';
  usedCpuList = [];
  usedMemList = [];

  usedCpuChartOption: EChartOption = null;
  usedMemChartOption: EChartOption = null;

  // 注入HttpClient
  constructor(private http: HttpClient, public hostInfoService: HostInfoService) { }

  ngOnInit() {

    // 监听事件接收发射过来的数据
    this.hostInfoService.eventEmit.subscribe((value: any) => {
      console.info('接收' + value);
      this.host = value;

      this.getData();
    }); 
  }

  // 获取后台接口数据
  getData() {
    return this.http.get(this.hostsUrl + this.host)
      .subscribe(data => {
        this.hosts = data;

        this.usedCpuList = [];
        this.usedMemList = [];

        for (var i = this.hosts.length - 1; i >= 0; i--) {
          this.usedCpuList.push([this.hosts[i].createTime, formatNumberToPercentage(this.hosts[i].usedCpu)]);
          this.usedMemList.push([this.hosts[i].createTime, formatNumberToPercentage(this.hosts[i].usedMemory / this.hosts[i].totalMemory)]);

          this.usedCpuChartOption =
          {
            legend: {
              data: ['CPU使用率']
            },
            xAxis: {
              type: 'time'
            },
            yAxis: {
              type: 'value',
              show: true,
              axisLabel: {
                formatter: '{value}%'
              }
            },
            series: [{
              name: 'CPU使用率',
              data: this.usedCpuList,
              type: 'line'
            }]
          };

          this.usedMemChartOption =
          {
            legend: {
              data: ['内存使用率']
            },
            xAxis: {
              type: 'time'
            },
            yAxis: {
              type: 'value',
              show: true,
              axisLabel: {
                formatter: '{value}%'
              }
            },
            series: [{
              name: '内存使用率',
              data: this.usedMemList,
              type: 'line'
            }]
          }
        }
      }
      );
  }
}

/**
 * 转为百分比.小数点保留2位.
 * @param value 原值
 */
function formatNumberToPercentage(value: number) {
  return (value * 100).toFixed(2);
}