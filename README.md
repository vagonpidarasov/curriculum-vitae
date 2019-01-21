# Angular seed without cli [![Build Status](https://travis-ci.org/vagonpidarasov/angular-seed.svg?branch=master)](https://travis-ci.org/vagonpidarasov/angular-seed)

## what

This is a cli-free Angular Seed project.

## why

If you would you like to have more control of your build process then this seed project is for you.

## features

- basic project architecture  and scaffolds 
- routing, protected routes
- tslint configured
- cli-free i18n
- JIT (for development) and AOT (for production) versions of the app
- material design library included
- redux patterns implemented (using ngrx lib), redux persist, effects
- unit tests configured (using old school karma and jasmine)
- code splitting, styles extraction, tree shaking
- roboto webfont included
- material design icons font included
- basic proxy implementation (with authentication stub implemented)
- cli-free PWA setup
- geolocation service
- reset.css from bootstrap
- firebase authentication and deploy
- contentful data

## scripts

- `npm run dev` runs webpack development server, builds dev version of the app, watches files changes
- `npm run proxy` runs backend api
- `npm run prod` builds prod version of the app (doesn't watch for files change)
- `npm run server` runs http server to serve prod version of the app
- `npm run extract` extracts i18n keys into i18n/messages.xlf

## prod

Production version of the app includes:
- i18n messages file with translations
- service worker (script and config) for PWA support
- tree shaking
- angular AOT

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
