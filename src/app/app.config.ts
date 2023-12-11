import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule),
  importProvidersFrom(provideFirebaseApp(() => initializeApp({
    apiKey: "AIzaSyCIEHXo-nM0GkhVkyb3P-0QxxA_OpcTbQ8",
    authDomain: "fonafe-back.firebaseapp.com",
    databaseURL: "https://fonafe-back-default-rtdb.firebaseio.com",
    projectId: "fonafe-back",
    storageBucket: "fonafe-back.appspot.com",
    messagingSenderId: "927249909354",
    appId: "1:927249909354:web:74ee0fbde8b38c9b016c13",
    measurementId: "G-X1HZDDBRNH"
  })), provideAuth(() => getAuth())),
  ]
};
