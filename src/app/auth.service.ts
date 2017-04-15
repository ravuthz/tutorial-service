import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
    public isLoggedIn: boolean = false;
    private url: string = 'https://web-template-ravuthz.c9users.io:8081/auth/login';

    constructor(private http: Http, private router: Router) {}
    
    login(username, password) {
        return this.http.post(this.url, {email: username, password: password})
            .map(res => {
                let auth = res.json();
                if (auth && auth.token) {
                    this.isLoggedIn = true;
                    window.localStorage.setItem('auth', auth.token);
                }
                return res;
            }).subscribe(res => {
                this.router.navigate(['/dashboard']);
            });
    }
    
    logout() {
        this.isLoggedIn = false;
        this.router.navigate(['/']);
        window.localStorage.removeItem('auth');
    }
        

}
