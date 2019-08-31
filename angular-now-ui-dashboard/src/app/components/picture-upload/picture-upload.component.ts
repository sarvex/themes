import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.css']
})
export class PictureUploadComponent implements OnInit {
  @Input() image: string;
  state: any = {};
  constructor() {
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  ngOnInit() {
    this.state = {
      file: null,
      imagePreviewUrl: "assets/img/default-avatar.png"
    };
  }
  handleImageChange($event) {
    $event.preventDefault();
    let reader = new FileReader();
    let file = $event.target.files[0];
    reader.onloadend = () => {
      this.state.file = file;
      this.state.imagePreviewUrl = reader.result;
      // this.state.imagePreviewUrl1 = reader.result;
    };
    reader.readAsDataURL(file);
  }
  handleSubmit($event) {
    $event.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  }
}
