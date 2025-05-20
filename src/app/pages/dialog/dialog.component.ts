import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  imports: [NgClass],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Output() closed = new EventEmitter<boolean>();
  showing = false;

  ngOnInit() {
    // ให้แสดง dialog พร้อม animation
    setTimeout(() => {
      this.showing = true;
    }, 10);
  }

  closeDialog(confirm: boolean) {
    this.showing = false;

    // รอให้ animation จบก่อนค่อย emit
    setTimeout(() => {
      this.closed.emit(confirm);
    }, 300); // ต้องตรงกับ duration-300 ใน Tailwind
  }
}
