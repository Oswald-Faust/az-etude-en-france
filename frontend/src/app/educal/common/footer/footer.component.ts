import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input () footerPadd : string | undefined

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
}
