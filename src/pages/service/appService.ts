import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WalkinServices {

    constructor(private http: HttpClient) { }

    getInterviewDetails(): Observable<any> {
        return this.http.get(`https://walkin-interview.firebaseio.com/Bangalore`);
    }

} 