import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostInfoService {
  public eventEmit: any;

  constructor() {
    // 定义发射事件
    this.eventEmit = new EventEmitter();
  }
}
