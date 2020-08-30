
import faker from 'faker'; 
import {Mappable} from './CustomMap';

export class User implements Mappable{
    //define the type
    name: string;
    location: { 
        lat: number;
        lng: number;
    };

    //initialize in the constructor
    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}