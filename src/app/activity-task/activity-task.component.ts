import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityTaskService } from '../services/activity-task.service';

@Component({
  selector: 'app-activity-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity-task.component.html',
  styleUrls: ['./activity-task.component.scss']
})
export class ActivityTaskComponent {
constructor(private activityservice:  ActivityTaskService){
}

}
