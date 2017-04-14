import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
    
    isLoggedIn: boolean;
    // private url: string = 'https://web-template-ravuthz.c9users.io/';
    private url: string = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: Http) {}
    
    login(username, password) {
        return this.http.get(this.url + '?username=' + username)
            .subscribe(res => {
                this.isLoggedIn = true;
                let user = res.json();
                if (user) {
                    window.localStorage.setItem('auth', username);
                }
            });
        
        
        // this.isLoggedIn = false;
        // var headers = new Headers();
        // var params = 'username=' + username + '&password=' + password;
        
        // headers.append('Content-Type', 'application/X-www-form-urlencode');
        
        // return new Promise(resolve => {
        //     this.http.post('/auth', params, {headers: headers})
        //     .subscribe(res => {
        //         if (res.json().success) {
        //             window.localStorage.setItem('auth', res.json().token);
        //             this.isLoggedIn = true;
        //             resolve(this.isLoggedIn);
        //         }
        //     });
        // })
    }
    
    logout() {
        this.isLoggedIn = false;
        window.localStorage.removeItem('auth');
    }
        

}
