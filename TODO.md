+ setup i18n without angular cli
https://github.com/ocombe/i18n-demo-no-cli
https://stackoverflow.com/questions/48426608/angular-5-extract-i18n-and-create-messages-xlf-without-angular-cli

- refactor webpack config files

+ move header container to the header module

+ move sign-in dialog somewhere

+ don't call dialog.open directly - update authRequest

+ rename public-page to private-page

+ add some simple angular animation

+ add geolocation https://github.com/robisim74/angular-maps/blob/master/src/app/services/geolocation.service.ts

+ rename *-container.component.* to *.container.*

+ clean node_modules and use the latest node

- translate the whole app
    - have en and ru versions as a subdirectories

+ PWA
https://medium.com/@nsmirnova/creating-pwa-with-angular-5-part-2-progressifying-the-application-449e3a706129
https://alligator.io/angular/service-workers/
https://blog.angular-university.io/angular-service-worker/
    + touch manifest.json
    + make it appear in the output dir (some webpack magic)
    +  <link rel="manifest" href="manifest.json">
    + npm install @angular/service-worker --save
    + touch src/ngsw-config.json
    + enable sw in angular cli
    + ServiceWorkerModule.register('ngsw-worker.js') 

- angular universal

+ firebase
    - add some documentation about how to connect to a specific firebase project

+ contentful

- docker image with firebase ci/cd

- do proper sign-out: call corresponding firebase method
