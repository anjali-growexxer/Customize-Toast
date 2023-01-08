import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnChanges, AfterViewInit {
  @ViewChild('toast')toastDiv!:ElementRef<HTMLInputElement>;
  @ViewChild('progress')progressBar!:ElementRef<HTMLInputElement>;
  toastValue:any;
  timeoutNumber!:number;
  toastParam:any;
  cancelToast:any;
  isVisible!:boolean;
  toastPar:any;
  progressBarTimeout:any;
  timer1:any;
  timer2:any;
  @Input() toast:any;
 
 
  
 constructor(el: ElementRef) { 

}
  // ngOnInit(){
  //   this.toastParam = {
  //     message: "Hi, Team!",
  //     toastPosition:"bot-full-width",
  //     showProgressBar:true,
  //     toastType:"Success",
  //     toastColor:"#ffffff",
  //     textColor:"#0A660C",
  //     tapToDissmiss:true,
  //     closeButton:true,
  //     timeout:3000,
  //     disableTimeout:false,
  //     iconBackgroundColor:"blue",
  //     iconColor:"white",
  //     titleColor:"blue",
  //     progressBarColor:"blue",
  //     iconClass:"bi bi-check-lg"
  //   }
  //   this.triggerToast();
  //   this.changeColor();
  //   this.progressBarAnimation();
    
  // }

changeColor(){
   document.documentElement.style.setProperty('--wbToastColor', this.toastParam.toastColor);
  document.documentElement.style.setProperty('--iconBackground', this.toastParam.iconBackgroundColor);
  document.documentElement.style.setProperty('--iconColor', this.toastParam.iconColor);
  document.documentElement.style.setProperty('--textColor', this.toastParam.textColor);
  document.documentElement.style.setProperty('--titleColor', this.toastParam.titleColor);
  document.documentElement.style.setProperty('--progressBarColor', this.toastParam.progressBarColor);
}

progressBarAnimation(){
  
   //To set the value of the scss variable to run the animation of progress bar
    // if(this.toastParam.showProgressBar==true && this.toastParam.disableTimeout==false ){
    // if(this.toastParam.timeout!==null || undefined){
      
      this.timeoutNumber=parseInt(this.toastParam.timeout);
    this.timeoutNumber=Number(this.toastParam.timeout);
    this.progressBarTimeout = this.timeoutNumber/1000+'s';
    console.log(this.progressBarTimeout)
    document.documentElement.style.setProperty('--timeout', this.progressBarTimeout);
  //   }
  
  // }
}
  
  ngOnChanges(changes: SimpleChanges) {
    this.toastParam=changes['toast'].currentValue;
    if(this.toastParam ){
      this.isVisible=true;
     setTimeout(()=>{
      this.triggerToast();
      this.changeColor();
      this.progressBarAnimation();
     },250)
    
    }else{
      this.isVisible=true;
      this.toastParam = {
        message: "Hi, Team!",
        toastPosition:"top-full-width",
        showProgressBar:true,
        toastType:"Success",
        toastColor:"#E9EDF6",
        textColor:"grey",
        tapToDissmiss:true,
        closeButton:true,
        timeout:5000,
        disableTimeout:false,
        iconBackgroundColor:"blue",
        iconColor:"#ffffff",
        titleColor:"blue",
        progressBarColor:"blue",
        iconClass:"bi bi-check-lg"
      }
    
      setTimeout(()=>{
        this.triggerToast();
        this.changeColor();
        this.progressBarAnimation();
       },250)
    }
  
    
}

  ngAfterViewInit() {
    // console.log(this.toastDiv.nativeElement);
  }
  
    triggerToast(){
      
        //To open the toast
        console.log(this.toastParam)
        this.toastDiv.nativeElement.classList.add("active");
        if(this.toastParam.showProgressBar===true){
        this.progressBar.nativeElement.classList.add("active");
        }
        //Time to which toast will be open
        if(this.toastParam.timeout!==(undefined || null || "")){
        this.timer1 = setTimeout(()=>{
          this.toastDiv.nativeElement.classList.remove("active");
        }, this.toastParam.timeout);
        //Time to which progress bar will run
        this.timer2 = setTimeout(()=>{
          this.progressBar.nativeElement.classList.remove("active");
        }, this.toastParam.timeout+300);
        }
      }

      removeProgressBar(){
        this.progressBar.nativeElement.classList.remove("active");
      }
      closeToast(){
        //To close the toast
        this.toastDiv.nativeElement.classList.remove("active");
        //  clearTimeout(this.timer2);
        // clearTimeout(this.timer1);
        // this.toastDiv.nativeElement.classList.add("active");
       
        // setTimeout(() => {
        //   this.progressBar.nativeElement.classList.add("active");
        // }, 300);

        // clearTimeout(this.timer1);
        // clearTimeout(this.timer2);
      }
      stopCountDown(){
        // this.timer2 = setTimeout(() => {
        //   this.progressBar.nativeElement.classList.remove("active");
        // }, 5300);
        // clearTimeout(this.timer2);
        // clearTimeout(this.timer1);
      }

      countDown(){
        // setTimeout(() => {
        //   this.progressBar.nativeElement.classList.remove("active");
        // }, 5300);
      }     
      
      closeOnTapFunction(){
        //To close the toast
        this.toastDiv.nativeElement.classList.remove("active");
      }


}
