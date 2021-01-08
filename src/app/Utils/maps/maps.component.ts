import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker } from 'leaflet';
import { Coordinates, CoordinatesWithMesage } from '../maps/position'

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  @Input()
  InitPosition: CoordinatesWithMesage[] = [];
  @Input()
  readOnly: boolean = false

  @Output()
  coordinate: EventEmitter<Coordinates> = new EventEmitter<Coordinates>()
  markers: Marker<any>[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.InitPosition)
    this.markers = this.InitPosition.map((value) => {
      let m = marker([value.Latitude, value.Longitude])
      if (value.message) {
        m.bindPopup(value.message, { autoClose: false, autoPan: false })
      }
      return m
    });


  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 10,
    center: latLng(36.099841946748, -80.24422645568849)
  };

  HandlingClick(event: LeafletMouseEvent) {
    const lat = event.latlng.lat;
    const lon = event.latlng.lng;

    if (!this.readOnly) {
      const lat = event.latlng.lat;
      const lon = event.latlng.lng;
      this.markers = [];
      this.markers.push(marker([lat, lon]))

      this.coordinate.emit({ Latitude: lat, Longitude: lon })
    }

  }
}
