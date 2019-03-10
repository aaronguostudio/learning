import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: string[] = [];

  public add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
