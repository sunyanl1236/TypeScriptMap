/*
User and Company can be used to create a instance of a user or refer to the User type or Company type.
*/
// import {User} from './User';
// import {Company} from './Company';

//instructions on how to be an argument to 'addMaker'
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap{
    //prevent other prople call any functions in google.maps.Map and crash the application
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        /*
        Map(Element, optional object)
        opts?: MapOptions, '?:' means optional
        */
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    /*
    ts will do implicit check to see if the object passed in is Mappable object
    */
    addMarker(mappable: Mappable): void { //method 2
        //Marker(opts?: MarkerOptionsObj)
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            //open(map, marker) show the popup window above which marker and in which map
            infoWindow.open(this.googleMap, marker);
        });
    }
}