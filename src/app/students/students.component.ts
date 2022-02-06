import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Student } from 'src/Student';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { StudentService } from '../Service/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }
  `],
  providers: [ConfirmationService],
})
export class StudentsComponent implements OnInit {
  msgs!: Message[];

  students!: Student[];

  selectedStudents!: Student[];
  
  statuses: any;

  loading: boolean = true;

  @ViewChild('dt') table!: Table;
  

  constructor(
    private studentService: StudentService, 
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {

    this.studentService.getStudents().subscribe((data)=>{
      this.students = data;
      this.loading = false;
    });

    this.statuses = [
        {label: 'Graduate', value: 'Graduate'},
        {label: 'Ungraduate', value: 'Ungraduate'},
    ]
    this.primengConfig.ripple = true;
    
  }
  onBalanceChange(event: any) {
    const value = event.target.value;
    if (value && value.trim().length) {
      this.table.filter(value, 'balance', 'lte');
    }
}

  onBDateSelect(value: any) {
      this.table.filter(this.formatDate(value), 'birthday', 'equals')
  }
  onRDateSelect(value: any) {
    this.table.filter(this.formatDate(value), 'DayRegister', 'equals')
}

  formatDate(date: any) {
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (month < 10) {
          month = '0' + month;
      }

      if (day < 10) {
          day = '0' + day;
      }

      return date.getFullYear() + '-' + month + '-' + day;
  }    

  deleteStudent(student: Student){
    
      console.log('id', student.id);
      this.studentService.deleteStudent(student.id!).subscribe((data)=>{
      console.log('delete', data);
    })
  }

  confirm(student: Student){
    let result : boolean = false;
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
            this.deleteStudent(student);
            result = true;
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
    console.log(result);
    return result;
  }

  onRowEditInit(student: Student) {
    console.log('Row edit init',student);
  }

  onRowEditSave(student: Student) {
    console.log('Row edit saved', student);
    this.studentService.updateStudent(student).subscribe(data=>{
      console.log('after edit saved', data);
      
    })
  }

  onRowEditCancel(student: Student) {
    console.log('Row edit cancelled', student);
  }

}
