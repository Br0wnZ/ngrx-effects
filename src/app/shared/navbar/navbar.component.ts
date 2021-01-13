import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  @ViewChild('txtInput') txtInput: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchUser = (id: string) =>
    id
      ? (this.router.navigate(['/user', id]),
        (this.txtInput.nativeElement.value = null))
      : '';
}
