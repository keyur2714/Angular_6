import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { MenuItem } from './menu-item.model';
import { MenuItemService } from './menu-item.service';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']  
})
export class MenuItemComponent implements OnInit {

  menuItemList: MenuItem[] = [];

  constructor(private menuItemService:MenuItemService) { }

  ngOnInit() {
    // this.menuItemService.getMenuItemList().subscribe(
    //   (response:Response)=>{
    //     console.log(response.json());
    //     this.menuItemList = response.json();
    //   },
    //   (error)=>{

    //   }
    // )
    this.menuItemService.getMenuItemListUsingHttpClient().subscribe(
      (menuItemList:MenuItem[])=>{
        this.menuItemList = menuItemList;
      }
    )
  }

}
