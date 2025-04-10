import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login():void{
    this.http.post<any>('http://localhost:8080/login', {email: this.email, password: this.password}).subscribe({
      next: response => Swal.fire('Successfully logged In',response.message, 'success'),
      error: error => Swal.fire('Error',error.error?.error||'Login failed', 'error')
  })}
}
