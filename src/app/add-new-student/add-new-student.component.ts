import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Student } from 'src/Student';
import { StudentService } from '../Service/student.service';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
})
export class AddNewStudentComponent implements OnInit {

    cities!: any[];

    statuses: any[];

    filteredCities: any[] = [];

    name: any;

    city: any;

    address: any;

    birthday: any;

    DayRegister: any;

    status: any;

    balance: any;

    password: any;
    
    notes: any;

    constructor(private studentService: StudentService, 
        private primengConfig: PrimeNGConfig,
        private router: Router,
        ) {
        this.statuses = [
            {name: 'Graduate', code: 'GD'},
            {name: 'Ungraduate', code: 'UGD'},
        ];
    }

    ngOnInit() {
        this.studentService.getCities().subscribe(data => {
            const temp: any[] = [];
            data.forEach((element: any) => {
                temp.push(element.name);
            });
            this.cities = temp;
            console.log('huhucity', temp);
            console.log('ciii', this.cities);
        });
        
        this.primengConfig.ripple = true;
    }

    filterCities(event: any) {
        console.log('acity', this.cities);
        let filtered : any[] = [];
        let query = event.query;
        for(let i = 0; i < this.cities.length; i++) {
            let city = this.cities[i];
            if (city.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(city);
            }
        }
        
        this.filteredCities = filtered;
        console.log('fcity', this.filteredCities);

    }

    Submit(){
        const newStudent:Student = this.addNew();
        this.studentService.addNewStudent(newStudent).subscribe(data=>{
            console.log('real-add', data);
        })
        this.router.navigate(['students']);

    }

    addNew(){
        const newStudent:Student = {};
        newStudent['name'] = this.name;
        newStudent['city'] = this.city;
        newStudent['address'] = this.address;
        newStudent['birthday'] = this.birthday;
        newStudent['DayRegister'] = this.DayRegister;
        newStudent['status'] = this.status.name;
        newStudent['balance'] = this.balance;
        return newStudent;
    }
}
