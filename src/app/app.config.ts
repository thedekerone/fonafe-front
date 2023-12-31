import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, RouterModule, provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {  provideQuillConfig } from 'ngx-quill';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);
export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes, inMemoryScrollingFeature),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: 'AIzaSyCIEHXo-nM0GkhVkyb3P-0QxxA_OpcTbQ8',
          authDomain: 'fonafe-back.firebaseapp.com',
          databaseURL: 'https://fonafe-back-default-rtdb.firebaseio.com',
          projectId: 'fonafe-back',
          storageBucket: 'fonafe-back.appspot.com',
          messagingSenderId: '927249909354',
          appId: '1:927249909354:web:74ee0fbde8b38c9b016c13',
          measurementId: 'G-X1HZDDBRNH',
        })
      ),
      provideAuth(() => getAuth()),
      provideStorage(() => getStorage())
    ),
    provideQuillConfig({
      modules: {
        syntax: false,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],

          [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction

          [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: ['MuseoSans'] }],
          [{ align: [] }],
          ['clean'], // remove formatting button
          ['link', 'video'], // link and image, video
        ],
      },
    }),
    provideClientHydration(withHttpTransferCacheOptions({
      includePostRequests: true
    }))
  ],
};
