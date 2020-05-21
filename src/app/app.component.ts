import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              './first/first.component.css']
})
export class AppComponent {
  title = 'angularCards';
  info=[{
    packName:"FREE",
    amount:"$0",
    per:"/month",
    liText:["Single User","5GB Storage","Unlimited Public Projects",
          "Community Access","Unlimited Private Projects","Dedicated Phone Support",
          "Free Subdomain","Monthly Status Reports"],
    button:"Button"
  },
{
  packName:"PLUS",
  amount:"$9",
  per:"/month",
  liText:["Single User","5GB Storage","Unlimited Public Projects",
        "Community Access","Unlimited Private Projects","Dedicated Phone Support",
        "Free Subdomain","Monthly Status Reports"],
 button:"Button"
},
{
  packName:"PRO",
  amount:"$49",
  per:"/month",
  liText:["Single User","5GB Storage","Unlimited Public Projects",
        "Community Access","Unlimited Private Projects","Dedicated Phone Support",
        "Free Subdomain","Monthly Status Reports"],
button:"Button"
}]
}
