import { CommonModule, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  imports: [NgIf, CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent  {

  hotelName: string = 'Hilton';
  numberOfRooms: number = 10;
  hidden = false;
  rooms: Room = {
    totalRooms: 10,
    availableRooms: 5,
    bookedRooms: 5
  }
  roomsList: RoomList[] = []
  selectedRoom!: RoomList;
  title = 'Room List';

  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

  constructor(private roomsService: RoomsService) {

  }

  ngOnInit() {
    this.roomsList = this.roomsService.getRooms();
  }

  ngAfterViewInit() {
    console.log(this.headerComponent);
    
  }

  toggle() {
    this.hidden = !this.hidden;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Double',
      amenities: 'TV, AC, WiFi',
      price: 400,
      photos: 'double-room.jpg',
      checkInTime: new Date('2024-11-10'),
      checkOutTime: new Date('2024-11-15'),
      rating: 4.8
    }
    this.roomsList = [...this.roomsList, room];
  }
}
