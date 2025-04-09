import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  registerEmployee(): void {
    if (!this.name) {
      Swal.fire('Missing Name', 'Please enter your name', 'error');
      return;
    }

    if (!this.email || !this.validateEmail(this.email)) {
      Swal.fire('Invalid Email', 'Please enter a valid email address', 'error');
      return
    }

    if (!this.validatePassword(this.password)) {
      Swal.fire(
        'Weak Password',
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
        'error'
      );
      return;
    }

    if (this.password !== this.confirmPassword) {
      Swal.fire('Password Mismatch', 'Passwords do not match', 'error');
      return;
    }

    Swal.fire('Registered', 'Employee registered successfully', 'success').then(
      () => this.dialogRef.close(this.data)
    );
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  private validatePassword(password: string): boolean {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  }
}
