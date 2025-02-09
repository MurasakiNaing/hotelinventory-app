import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output, signal, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule, NgFor],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent {

  rooms = input<RoomList[]>();
  selectedRoom = output<RoomList>();
  title = input<string>('');
  titleSignal = signal<string>('');

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']) {
      this.titleSignal.set(this.title().toUpperCase());      
    }
  }
}
