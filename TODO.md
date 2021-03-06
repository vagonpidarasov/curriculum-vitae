+ setup i18n without angular cli
    https://github.com/ocombe/i18n-demo-no-cli
    https://stackoverflow.com/questions/48426608/angular-5-extract-i18n-and-create-messages-xlf-without-angular-cli

+ refactor webpack config files

+ move header container to the header module

+ move sign-in dialog somewhere

+ don't call dialog.open directly - update authRequest

+ rename public-page to private-page

+ add some simple angular animation

+ add geolocation
    https://github.com/robisim74/angular-maps/blob/master/src/app/services/geolocation.service.ts

+ rename *-container.component.* to *.container.*

+ clean node_modules and use the latest node

- translate the app into es
    - have en and es versions using firebase
    - https://stackoverflow.com/questions/47782396/how-to-serve-effective-aot-language-angular-app-in-firebase-hosting

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
    - update .firebaserc
    - firebase use projectname

+ contentful

- docker image with firebase ci/cd
    - Dockerfile
    - build

+ do proper sign-out: call corresponding firebase method

+ ngrx persist
    https://github.com/btroncone/ngrx-store-localstorage

- webpack visualizer https://chrisbateman.github.io/webpack-visualizer/

+ body background
+ persist body background url
+ github link
+ contacts
- rounded border for accordion
+ convert skillset into modal with search or add search input 
- collapse all accordion's tabs
+ convert to pdf
+ companies as links
+ icons as svg
- skeleton loader
+ add facebook, linkedin, soundcloud links
+ theme
    https://material.angular.io/guide/theming
- optimise css selectors
    - avoid using generic selectors, a (link) for example 
    
+ pdf component <pdf-download [filename]="filename"><content/></pdf-download>
+ move powered by and social link to contentful
+ media query padding for accordion content  
+ remove links from accordion title
+ media query for titles (Education, Position etc)
- add introduction section
- lazy load some code/routes
+ add animation to the skillset collapse/expand
- add UP button to the interview question page
+ split employee module into employee, education, position, experience
    + split education
    + refactor employee
    + pdf
    + split experience
