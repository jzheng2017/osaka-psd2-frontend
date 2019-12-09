import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() {
    }

    isAuthenticated() {
        const token = localStorage.getItem('token');

        return token !== null && token.length > 0;
    }

}
