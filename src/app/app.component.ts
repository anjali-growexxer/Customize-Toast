import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  toast:any;
  message!:string;
  toastColor:any;
  timeout!:number;
  tapToDissmiss!:boolean;
  showProgressBar!:boolean;
  toastform!: FormGroup;
  closeButton!:boolean;
  selectedValue: string = '';
  textColor:any;

  radioItems: any = [
    { value: 'Increasing', key: 'inc' },
    { value: 'Decreasing', key: 'dec' },
  ];
  toastType: any = [
    {value:'Success',key:'Success'}, 
    {value:'Info',key:'Info' },
    {value:'Warning',key:'Warning'},
     {value:'Error',key:'Error'}
    ];
  toastPosition: any = [
    { value: 'Top Right', key: 'top-right' },
    { value: 'Bottom Right', key: 'bot-right' },
    { value: 'Bottom Left', key: 'bot-left' },
    { value: 'Top Left', key: 'top-left' },
    { value: 'Top Full Width', key: 'top-full-width' },
    { value: 'Bottom Full Width', key: 'bot-full-width' },
    { value: 'Top Center', key: 'top-center' },
    { value: 'Bottom Center', key: 'bot-center' },
  ];
  disableTimeout: any = [
    { value: 'disableTimeout'},
    // { value: 'disableTimeout = false', key: false },
    // { value: 'timeOut only', key: 'timeout only' },
    // { value: 'extendedTimeOut only', key: 'ext timeout only' },
  ];


  multipleSelections: any = [
    { name: 'Tap to dismiss', key: 'M' },
    { name: 'Close button', key: 'P' },
    { name: 'Prevent duplicates', key: 'R' },
    { name: 'New toasts on top', key: 'N' },
    { name: 'Progress bar', key: 'B' },
  ];

  constructor() {}

  ngOnInit() {
    this.toastform = new FormGroup({
      message: new FormControl('Hi, Team!', Validators.required),
      tapToDissmiss: new FormControl(true, Validators.required),
      closeButton: new FormControl(true, Validators.required),
      showProgressBar: new FormControl(true, Validators.required),
      timeout: new FormControl(5000, Validators.required),
      disableTimeout: new FormControl(false, Validators.required),
      toastType: new FormControl('Success', Validators.required),
      toastPosition: new FormControl('bot-right', Validators.required),
      toastColor: new FormControl('#E9EDF6', Validators.required),
      textColor: new FormControl('grey', Validators.required),
      iconClass: new FormControl('bi bi-check-lg', Validators.required),
      titleColor: new FormControl('blue', Validators.required),
      iconBackgroundColor: new FormControl('blue', Validators.required),
      progressBarColor: new FormControl('blue', Validators.required),
      iconColor: new FormControl('#ffffff', Validators.required)
    });
    // this.toastform = new FormGroup({
    //   message: new FormControl(null, Validators.required),
    //   tapToDissmiss: new FormControl(null, Validators.required),
    //   closeButton: new FormControl(null, Validators.required),
    //   showProgressBar: new FormControl(null, Validators.required),
    //   timeout: new FormControl(null, Validators.required),
    //   disableTimeout: new FormControl(null, Validators.required),
    //   toastType: new FormControl(null, Validators.required),
    //   toastPosition: new FormControl(null, Validators.required),
    //   toastColor: new FormControl(null, Validators.required),
    //   textColor: new FormControl(null, Validators.required),
    //   iconClass: new FormControl(null, Validators.required),
    //   titleColor: new FormControl(null, Validators.required),
    //   iconBackgroundColor: new FormControl(null, Validators.required),
    //   progressBarColor: new FormControl(null, Validators.required),
    //   iconColor: new FormControl(null, Validators.required)
    // });
  }

  

  radioProgressBar(event: any) {
    console.log(this.selectedValue);
  }

  onSubmit(): void {
    // console.log(this.toastform.value);
    this.toast = this.toastform.value;
   
  }

  // onClose(){
  //  this.closeTheToast = true
  // }
}


