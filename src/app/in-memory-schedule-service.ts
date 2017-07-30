import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let flows = [
      {
        id: 1,
        name: 'Chatarungas',
        instructor: 'Tiffany Velasquez',
        days: 'Monday-Wednesday',
        time: '3:00-4:00 pm'
      },
      {
        id: 2,
        name: 'Poses',
        instructor: 'Dexter Douglas',
        days: 'Tuesday-Thursday',
        time: '2:00-3:00 pm'
      },
      {
        id: 3,
        name: 'Smudging',
        instructor: 'Tiffany Velasquez',
        days: 'Tuesday and Friday',
        time: '5:00-6:00 pm'
      },
      {
        id: 4,
        name: 'Everlong Flow',
        instructor: 'Tiffany Velasquez',
        days: 'Monday, Wednesday, Friday',
        time: '4:00-5:00 pm'
      },
      {
        id: 5,
        name: 'SUP Yoga',
        instructor: 'Mark and Tiffany Velasquez',
        days: 'Sunday and Wednesday',
        time: '10:00-11:00 am'
      }
    ];
    return {flows};
  }
}
