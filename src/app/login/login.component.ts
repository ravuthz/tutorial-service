import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    
    username = 'Bret';
    password = 'Bret';
    
    constructor(private auth:AuthService, private router: Router) { 
      
    }

    ngOnInit() {
      
    }
    
    login() {

        this.auth.login(this.username, this.password);
        
        console.log(window.localStorage);
  
        // this.auth.login(this.username, this.password).then(res => {
        //     if (res) {
        //         this.router.navigate(['Dashboard']);
        //     } else {
        //         console.log(res);
        //     }
        // });
    }
    
    clearField() {
        this.username = '';
        this.password = '';
    }

}
