import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  public message  = '';
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getMessageSubject().subscribe(
      (message: string) => {
         this.message = message
        });
  }

  removeMessage() {
    this.messageService.clear();
  }

}
