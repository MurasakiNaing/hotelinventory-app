import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Single',
      amenities: 'TV, AC, WiFi',
      price: 100,
      photos: 'single-room.jpg',
      checkInTime: new Date('2024-11-10'),
      checkOutTime: new Date('2024-11-15'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Single',
      amenities: 'TV, AC, WiFi',
      price: 100,
      photos: 'single-room.jpg',
      checkInTime: new Date('2024-11-10'),
      checkOutTime: new Date('2024-11-15'),
      rating: 4.2
    },
    {
      roomNumber: 3,
      roomType: 'Single',
      amenities: 'TV, AC, WiFi',
      price: 100,
      photos: 'single-room.jpg',
      checkInTime: new Date('2024-11-10'),
      checkOutTime: new Date('2024-11-15'),
      rating: 3.5
    }
  ];

  constructor() {
    console.log('Rooms Service created');
    
  }

  getRooms() {
    return this.roomList;
  }
}
