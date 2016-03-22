# notetile
## Okay, What is it?

it is a simple alert notfications plugin written in pure Javascript without using any of current popular javascript libraries. which makes this piece of code less than 5kb that means a lot when we speak about performance.

## Who can use it?

Anyone out there looking for code developed in pure Javascript and not willing to import any libraries around 50 - 90 KB for showing simple alerts in their page. 

## Features
- Size is less than 5kb altogether (including Js and CSS), that means it doesn't stop page in any means while loading.
- currently there are 5 alert types Info, Warning, Success, Error and Default
- Popsup your message around all the 4 corners of the page
- auto timeout, configurable.

## Usage

##### import both minified files.
```html
<link href="/path/to/dist/notetiles.min.css" rel="stylesheet"/>
<script src="/path/to/dist/notetiles.min.js" language="javascript"> </script>
```

##### In html page write as below.

```javascript
<script>
notetile.shownote({
"message":"Hello Success note here!!",
"position":"top-right | top-left | bottom-right | bottom-left",  // any one of these
"time":5,  // time to live
"type":"success|info|warning|error|default",  // any one of these
 close:true 
});
</script>
```

> Note : Make sure the above peice of code is execued once after the DOM is loaded, otherwise run as below

```javascript
window.onload = function(){ // your code here }
```

### Screenshot

![alt tag] (https://raw.githubusercontent.com/kakurala/notetile/master/image.png)

#### Next plans
* Adding animations
* Custom HTML content in popup
