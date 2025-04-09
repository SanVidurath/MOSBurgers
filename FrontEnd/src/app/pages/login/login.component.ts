import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(public dialog:MatDialog){}

  openModal(): void {
    const dialogRef = this.dialog.open(RegisterComponent,{
      width: '50%',
      height: 'auto',
      disableClose: true,
      panelClass: 'no-radius-dialog',
    })

  }
}
