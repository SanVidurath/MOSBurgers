import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { EmployeeService } from '../../services/EmployeeService';
import { Employee } from '../../models/Employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [FormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(public modalRef: MdbModalRef<ModalComponent>, private employeeService: EmployeeService) {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.listOfEmployees = data;
    }
    );
  }

  listOfEmployees: Employee[] = [];
  customer={
    name: '',
    email: '',
    phoneNumber: '',
  }

  selectedEmployeeId: number|null=null;
  selectedEmployeeName: string = '';

  onEmployeeChange():void{
    const emp = this.listOfEmployees.find(e=>e.id===Number(this.selectedEmployeeId)); 
    this.selectedEmployeeName = emp?emp.name:'';
  }
}
