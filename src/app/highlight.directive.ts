import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private elem:ElementRef){}
  highlightElement () {
    this.elem.nativeElement.style.backgroungColor = 'red';
    this.elem.nativeElement.style.color = 'highlight-highest';
  }
   
  

  @HostListener("click") onClicks(){
    this.textDeco("highlight-highest")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }

  ngOnInit ( ) {
    this.highlightElement(); 

  }
  
}