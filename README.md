# Angular - Ng Universal Starter project
This project is created according to [Angular universal guide](https://angular.io/docs/ts/latest/guide/universal.html).

# How to use 
1. Download the project
2. Run the following 2 commands respectively in command line
```
npm build:aot
npm build:uni
```
3. Run `npm serve:uni` to run the project in local. Also, the project can be deployed to any node.js server such as Heroku.

# More Information
## Build for AOT

Run `npm build:aot` to build the project. The build artifacts will be stored in the `src/dist/` directory. Use the `-prod` flag for a production build.

## Serve for AOT

Run `npm serve:aot` to run the project. Navigate to `http://localhost:3100/`. 

## Build for Universal

Run `npm build:uni` to build the project. The server side build artifacts will be stored in the `dist/` directory.Use the `-prod` flag for a production build. 

## Serve for Universal

Run `npm serve:uni` to run the project. Navigate to `http://localhost:3200/`. 
