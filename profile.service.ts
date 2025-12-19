import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {

  getProfile(): Observable<any> {
    return of({
      name: 'Prema Varsitha Palapala',
      role: 'MCA Student | Aspiring Software Developer',
      email: 'varsithaprema@gmail.com',
      github: 'https://github.com/Varshitha-2002',
      linkedin: 'https://linkedin.com/in/varsitha-prema-700492243'
    });
  }

}
