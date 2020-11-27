import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dst-login';

  OnToggleMode() {
    this.Mode = !this.Mode;
    //sign_up_btn.addEventListener("click", () => {
    //  container.classList.add("sign-up-mode");
    //});
    
    //sign_in_btn.addEventListener("click", () => {
    //  container.classList.remove("sign-up-mode");
    //});
  }

  Mode: any;

  get ModeClass() {
    if (this.Mode) {
      return 'sign-up-mode';
    } else {
      return '';
    }
  }
}
