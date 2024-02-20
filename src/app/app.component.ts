import { Component, ElementRef, OnInit } from '@angular/core';
import { Operation } from './models/myModels';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  operation: Operation = {
    arg1: 0,
    arg2: 0,
    operation: '',
    result: 0
  };

  constructor(private elementRef: ElementRef){}

  ngOnInit(): void {
      const radioInputs = this.elementRef.nativeElement.querySelectorAll('input[name="operation"]');
      radioInputs.forEach((element: { addEventListener: (arg0: string, arg1: (event: { target: { value: any; }; }) => void) => void; }) => {
        element.addEventListener('change', (event: { target: { value: any; }; }) => {
          console.log(event.target.value);
          this.operation.operation = event.target.value;
        })
      });
  }


  onSubmit() {
    console.log(this.operation.arg1);
    console.log(this.operation.operation);
    
    
  }

  title = 'calcApp';
}
