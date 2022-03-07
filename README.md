# vue-screenshot

## Description

This is a Vue project, which demonstrates taking a screenshot of a specific area of the screen.

In this project, two different methods of screenshot are shown and compared:

#### Screenshot Based on html2canvas、domtoimage Library

Their working principle is not a real "screenshot", but reading the information of the target DOM node on the web page to draw canvas. 
Sometimes some CSS attributes are not supported.
 
However, the bigger pain is that when the screenshot area is iframe which involves cross-origin, 
this kind of screenshot method will become very difficult. When the iframe is the nonparty link, this way is even more helpless.

#### Screenshot based on Chrome extension

The Chrome extension calls the chrome.tabs.captureVisibleTab method to capture the view, and then cuts and draws it on the canvas according to the coordinate parameters.

It doesn't have the cross-origin problem of drawing canvas based on DOM, which is a real screenshot.

See more: https://github.com/liduo-d/screenshot-crx

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
