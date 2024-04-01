import { Component, NgModule } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg } from '@ionic/angular/standalone';
import { PhotoService } from '../services/photo.service';
import { addIcons } from 'ionicons'
import { camera } from 'ionicons/icons'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg],
})
export class HomePage {
  constructor(public photoService: PhotoService) {
    addIcons({camera});
   }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
