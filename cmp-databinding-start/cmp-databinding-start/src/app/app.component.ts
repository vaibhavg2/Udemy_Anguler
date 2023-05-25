import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [{type:'server', name:'Testserver',content:'just a test!'}];
  onServerAdded(serverData : {serverName:string,ServerContent:string}) {
 
    this.serverElements.push({
      type: 'server',
      name:serverData.serverName,
      content: serverData.ServerContent
      
    });
  }

  onAddBlueprint(bluePrintData : {serverName:string,ServerContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name:bluePrintData.serverName,
      content: bluePrintData.ServerContent
    });
  }

 
}
