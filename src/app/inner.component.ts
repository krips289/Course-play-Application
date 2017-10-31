import { Component,Input,ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'inner-comp',
  template:`<div>
       <h1>Change Detection - Inner Component</h1>
       <p>{{ employeeObj.name }}</p>
  </div>`,
  changeDetection:ChangeDetectionStrategy.Default
})

export class InnerComponent {
	
  @Input() employeeObj:any;
}