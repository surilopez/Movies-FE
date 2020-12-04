import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../helpers';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {

  constructor() { }

  imgBase64: string=""

  @Input()
  UrlImage?:string
  @Output()
  uploadFile: EventEmitter<File> = new EventEmitter<File>()

  ngOnInit(): void {
  }

  change(event: any) {

    if (event.target.files.length > 0) {
      const file: File = event.target.files[0]
      toBase64(file).then((value: any) => this.imgBase64 = value)
      .catch(error=>console.log(error));

      this.uploadFile.emit(file);
      this.UrlImage=""
    }
  }
}
