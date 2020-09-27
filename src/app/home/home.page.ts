import { Component, ViewChild, NgZone } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions,CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('myvideo') myVideo: any;
  mediaFiles = [];

  story_type;// story type:"Image" , "Video"
  flag_play = false;

  media_image;  
  media_video;

  constructor(public mediaCapture: MediaCapture,    private camera: Camera)  {}

  ionViewDidLoad() {
    this.story_type = "Image";
    this.flag_play = false;    
  }

  
  takePicture() {
    let options: CameraOptions = {
      quality: 100,
      destinationType:0,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 1,
      correctOrientation: true,
      allowEdit: true
    };

    this.camera.getPicture(options).then((imageData) => {
     console.log("imagedata----------",imageData)
       this.media_image="data:image/jpeg;base64," + imageData;
      console.log("Take photo ok:" + this.media_image);
      this.story_type = "Image";
      this.media_video = "";

    }).catch((error) => {
      console.log(error);
    });

  }
  recordVideo() {
    let options: CaptureVideoOptions = {
      limit: 1,
      // duration: 30,
      quality: 0
    }
   this.mediaCapture.captureVideo(options).then(async (res: MediaFile[]) => {
      console.log(res[0].fullPath);
      this.media_video = res[0].fullPath;
      let video = this.myVideo.nativeElement;
      this.story_type = "Video";
      this.media_image = "";
      let win: any = window; 
     video.src =win.Ionic.WebView.convertFileSrc(this.media_video);

      video.play();
   }).catch(err => console.log('Something went wrong', JSON.stringify(err)));  
  }


}
