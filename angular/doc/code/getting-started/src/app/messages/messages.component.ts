import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.styl']
})
export class MessagesComponent implements OnInit {

  // Using public here because need to use it in template
  constructor(public messageService: MessageService) { }

  ngOnInit() {
    //
  }

  public onClearAll (): void {
    this.messageService.clear()
  }

}
