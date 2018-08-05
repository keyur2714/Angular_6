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

  isSaveAction : boolean = true;
  buttonName :string = "Save";
  msg : string = '';
  menuItem : MenuItem = new MenuItem()
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
    this.getMenuItemList();
  }

  getMenuItemList(){
    this.menuItemService.getMenuItemListUsingHttpClient().subscribe(
      (menuItemList:MenuItem[])=>{
        this.menuItemList = menuItemList;
      }
    )
  }

  saveMenuItem(){
    if(this.isSaveAction){
        this.menuItemService.saveMenuItem(this.menuItem).subscribe(
        (status:number)=>{
          console.log(status);
          this.msg = "Item Save Successfully...";
          this.getMenuItemList();
        },
        (error)=>{

        }
      )
    }else{
      this.menuItemService.updateMenuItem(this.menuItem).subscribe(
        (status:number)=>{
          console.log(status);
          this.msg = "Item Updated Successfully...";
          this.getMenuItemList();
        },
        (error)=>{

        }
      )
    }
  }  

  editMenuItem(id){
    console.log(id);
    this.isSaveAction = false;
    this.buttonName = "Update";
    this.menuItemService.getMenuItemById(id).subscribe(
      (menuItem:MenuItem)=>{
        this.menuItem = menuItem;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  deleteMenuItem(id:number){
    let confirmMsg = confirm("Are you Sure do you want to delete?");
    if(confirmMsg){      
      this.menuItemService.deleteMenuItemById(id).subscribe(
        (status:number)=>{
          this.msg = "Menu Item Deleted Successfully...!";
          this.getMenuItemList();
        },
        ()=>{

        }
      )
    }
  }
}
