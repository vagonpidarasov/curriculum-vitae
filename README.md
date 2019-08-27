# Curriculum Vitae App [![Build Status](https://travis-ci.org/vagonpidarasov/angular-seed.svg?branch=master)](https://travis-ci.org/vagonpidarasov/angular-seed)

## demo

https://stanislav-beresnev.web.app/

## features

- angular 8
- angular ivy
- routing, protected routes
- tslint configured
- i18n
- JIT (for development) and AOT (for production) versions of the app
- redux patterns implemented (using ngrx lib), redux persist, effects
- unit tests configured using jest
- code splitting, styles extraction, tree shaking
- roboto webfont included
- material design icons font included
- Progressive Web App setup
- reset.css from bootstrap
- firebase authentication and deploy
- contentful integration
- travis ci integration
- material design library included
- custom material theme
- geolocation service
- reverse geolocation

## env

Before running or building the app `.env` file should be created:
```
FIREBASE_API_KEY=your-firebase-api-key
CONTENTFUL_ACCESS_TOKEN=your-contentful-api-key
```

## scripts

- `npm run dev` or `npm start` runs webpack development server, builds dev version of the app, watches files changes
- `npm run prod` runs webpack development server, builds prod version of the app, watches files changes
- `npm run prod:build` builds prod version of the app
- `npm run dev:build` builds dev version of the app
- `npm run extract` extracts i18n keys into i18n/messages.xlf
- `npm run deploy` deploys the app into firebase hosting
- `npm run test` runs tslint + jest

## testing

### `async/await`

In order to use `async/await` with jasmine it is required to `"noEmitHelpers": false,` in tsconfig.json

https://stackoverflow.com/questions/42415450/awaiter-is-not-defined-when-using-async-await-in-typescript/42426996#42426996

https://blog.mariusschulz.com/2016/12/16/typescript-2-1-external-helpers-library

NOTE that this will increase the size of the bundle.

### `async` and `fixture.whenStable()`

`fixture.whenStable()` is used in conjunction with `import {async} from '@angular/core/testing';`
otherwise it is not needed: 

https://stackoverflow.com/questions/53479998/does-fixture-whenstable-actually-do-anything-in-my-angular-tests-if-not-within

### `fakeAsync` and `tick`

`fakeAsync()` should be used in conjunction with `tick()` or `flush()`

https://alligator.io/angular/testing-async-fakeasync/

### `createComponent`

`TestBed.createComponent(BannerComponent);` requests external files (template and css)
using XHR, so it should be wrapper into async:
```
beforeEach(async() => {
    fixture = TestBed.createComponent(SignInFormComponent);
});
```
https://angular.io/guide/testing#calling-compilecomponents

It is not required if `angular2-template-loader` is used since it inlines template (with the help of webpack) 
https://github.com/TheLarkInn/angular2-template-loader#before
