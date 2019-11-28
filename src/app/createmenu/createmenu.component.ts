import { Component, OnInit } from '@angular/core';
import { Item, } from '../modal';
import { CreateService } from './createService';
import { FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createmenu',
  templateUrl: './createmenu.component.html',
  styleUrls: ['./createmenu.component.css']
})

export class CreatemenuComponent implements OnInit {

  items: Item[];
  selItems: Item[] = [];
  ids: string[] = [];
  form;
  cuisineid:string[]=[];
  user = {
    skills: [
      { name: "NI", selected: false, },
      { name: "SI", selected: false, },
      { name: "Chinese", selected: false, },
    ]
  }
  constructor(private itemService: CreateService, private fb: FormBuilder) {
    this.form = this.fb.group({
      skills: this.buildSkills()

    });
    console.log(this.form.get("skills"))

  }

  get skills() {
    return this.form.get('skills');
  };

  ngOnInit() {
    this.itemService.getItems().subscribe(response => this.handleSuccessfulResponse(response));

  }
  buildSkills() {
    const arr = this.user.skills.map(skill => {
      return this.fb.control(skill.selected);
    });
    return this.fb.array(arr);
  }


  handleSuccessfulResponse(response) {
    this.items = response;
    console.log(this.items)
  }



  createmenulist(Itemid) {
    if (!(this.ids.includes(Itemid))) {
      this.ids.push(Itemid)
      for (var i = this.ids.length - 1; i < this.ids.length; i++) {
        this.itemService.getItemById(this.ids[i]).subscribe(response => this.SuccessfulResponse(response));
      }
    }

  }
  SuccessfulResponse(response) {
    this.selItems.push(response);
  }

  confirm() {
    console.log((this.ids.length))
    if (this.ids.length) {
      alert("Once submitted Not able to change!!!!")
      this.itemService.createMenu(this.ids).subscribe(data => {
        alert("created!");
      });
    }
    else {
      alert("No Items Added in Menu")
    }
  }

  deletelist(Itemid, obj) {

    this.ids = this.ids.filter(i => i !== Itemid)
    this.selItems = this.selItems.filter((item) => item.id !== Itemid);

  }
  submit(form) {
    const formValue = Object.assign({}, form, {
      
      skills: form.skills.map((selected, i) => {
        console.log(this.user.skills[i].selected)
       
        return {
          id: this.user.skills[i].name,
          selected,
         
        }
      }),
    })
    console.log("Skills in Submit" + formValue);
    console.log(formValue);
    skills: form.skills.map((selected, i) => {
      console.log(formValue.skills[i].selected)
      console.log(formValue);
    if(formValue.skills[i].selected==true){
      
      console.log(formValue.skills[i].id)
       this.cuisineid.push(formValue.skills[i].id)
       console.log("after push "+this.cuisineid)}
       console.log("after push"+typeof(this.cuisineid))
       this.itemService.getItemsbyCuisine(this.cuisineid).subscribe(response => this.handleSuccessfulResponse(response));
      

  }
 
    )
}

 
  }




