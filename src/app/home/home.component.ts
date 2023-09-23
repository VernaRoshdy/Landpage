import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'app';
  ids: Array<String> = ['one', 'two', 'three', 'four']
constructor(public translate:TranslateService,private router: Router,private route: ActivatedRoute){
  translate.addLangs(['en', 'ar']);
  translate.setDefaultLang('en');

  // Get User Language from Browser
  const browserLang = translate.getBrowserLang();
  translate.use(browserLang?.match(/en|ar/) ? browserLang : 'en');

}
  forceNavigate(name: string) {
    this.router.navigate(['/content'], { fragment: name });
  }
switchLanguage(language: string) {
  this.translate.use(language);
}
  ngOnInit() {
    AOS.init();
    this.route.fragment.subscribe(f => {
      const element = document.querySelector('#' + f);
      if (element) element.scrollIntoView();
    });
    
  } }