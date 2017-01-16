# Touch Utility for ES6
A tiny library to detect touch and swipe, and emit events.

## Initialize
Import and initialize the touch utility.
```
import TouchUtil from './touch-utility';

const el = document.querySelector('.touch-el');
const touchEl = new TouchUtil( el ); 
```

## Basic Usage
```
touchEl.on('tap', function(){
  // do stuff on tap
});

touchEl.on('swipe', function(){
  // do stuff on swipe
});

touchEl.on('swipeleft', function(){
  // do stuff on swipe left
});

touchEl.on('swiperight', function(){
  // do stuff on swipe right
});

```


#### To Do
Add mouse/drag events.


---
Find me on [twitter](https://twitter.com/laroymike), and on the regular old [web](http://mikelaroy.ca)
