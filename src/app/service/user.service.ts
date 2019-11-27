import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private router: Router) {
    }


    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
}
