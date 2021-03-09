import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cmp-viewchild',
  templateUrl: './cmp-viewchild.component.html',
  styleUrls: ['./cmp-viewchild.component.css']
})
export class CmpViewchildComponent implements OnInit {

  @ViewChild('videoRef') videoRef;
  // @ViewChild('modal') modalRef;

  constructor() { }

  ngOnInit(): void {
  }

  // fn() {
  //   this.modalRef.display()
  //   this.modalRef.hide()
  // }

  play() {
    this.videoRef.nativeElement.play();
  }

  pause() {
    this.videoRef.nativeElement.pause()
  }

}
