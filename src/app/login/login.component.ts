import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    username = 'ravuthz@gmail.com';
    password = '!@#123123';

    constructor(private auth:AuthService, private router: Router) {}

    ngOnInit() {}
    
    login() {
        this.auth.login(this.username, this.password);
    }
    
    logout() {
        this.auth.logout();
    }

}
