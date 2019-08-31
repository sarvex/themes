import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-file-input",
  templateUrl: "./file-input.component.html",
  styleUrls: ["./file-input.component.css"]
})
export class FileInputComponent implements OnInit {
  private state: any = {};

  @Input() multiple: boolean;
  @ViewChild("input") input: ElementRef;

  constructor() {}

  ngOnInit() {}
  onFocus(e) {
    this.input.nativeElement.click(e);
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  }
  addFile(e) {
    let fileNames = "";
    let files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
      if (i !== e.target.files.length - 1) {
        fileNames = fileNames + ", ";
      }
    }
    this.state.fileNames = fileNames;
    this.state.files = files;
  }
}
