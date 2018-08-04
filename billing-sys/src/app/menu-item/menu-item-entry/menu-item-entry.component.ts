import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item.model';
import { MenuItemService } from '../menu-item.service'; 
@Component({
  selector: 'app-menu-item-entry',
  templateUrl: './menu-item-entry.component.html',
  styleUrls: ['./menu-item-entry.component.css']
})
export class MenuItemEntryComponent implements OnInit {

  msg : string = '';
  menuItem : MenuItem = new MenuItem()

  constructor(private menuItemService:MenuItemService) { }

  ngOnInit() {
  }

  saveMenuItem(){
    this.menuItemService.saveMenuItem(this.menuItem).subscribe(
      (status:number)=>{
        console.log(status);
        this.msg = "Item Save Successfully...";
      },
      (error)=>{

      }
    )

    
  }
}
