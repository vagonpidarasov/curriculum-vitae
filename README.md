# Angular seed without cli

## what

This is a cli-free Angular Seed project.

## why

If you would you like to have more control of your build process then this seed project is for you.

## features

- basic project architecture  and scaffolds 
- routing, with router guard service
- authentication
- tslint configured
- cli-free i18n
- JIT (for development) and AOT (for production) versions of the app
- material design library included
- redux patterns implemented (using ngrx lib)
- unit tests configured (using old school karma and jasmine)
- code splitting, styles extraction, tree shaking
- roboto webfont included
- material design icons font included
- basic proxy implementation (with authentication stub implemented)
- cli-free PWA setup
- geolocation service
- reset.css from bootstrap
- firebase authentication

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
