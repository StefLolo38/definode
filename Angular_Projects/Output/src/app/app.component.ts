import { Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Output';
  onomatopiaList: string[] = [];
onReceiveNewOnomatopia(newOnomatopia: string) {
this.onomatopiaList.push(newOnomatopia);
}

}
