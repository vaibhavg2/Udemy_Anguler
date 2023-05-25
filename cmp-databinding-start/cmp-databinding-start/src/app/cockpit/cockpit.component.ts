import { Component, OnInit,EventEmitter,Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
 @Output('svCreated') serverCreated =new EventEmitter<{serverName:string,ServerContent:string}>();
 @Output('bpCreated') bluePrintCreated =new EventEmitter<{serverName:string,ServerContent:string}>();
 newServerName = '';
 newServerContent = '';

  onAddServer(serverNameInput:HTMLInputElement) {
    
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      // serverName: this.newServerName,
      
      ServerContent:this.newServerContent
    });
  }

  onAddBlueprint(bluePrinInputName: HTMLInputElement) {
    console.log(bluePrinInputName.value);
    
    this.bluePrintCreated.emit({
      serverName: bluePrinInputName.value,
      ServerContent:this.newServerContent
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
