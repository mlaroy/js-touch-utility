# Touch Utility for ES6
A tiny library to detect touch and swipe, and emit events.

## Initialize
Import and initialize the touch utility.
```
import TouchUtil from './touch-utility';

let el = document.querySelector('.touch-el');
new TouchUtil( el ); 
```

## Basic Usage
```
el.addEventListener('tap', function(){
  // do stuff on tap
});

el.addEventListener('swipe', function(){
  // do stuff on swipe
});

el.addEventListener('swipeleft', function(){
  // do stuff on swipe left
});

el.addEventListener('swiperight', function(){
  // do stuff on swipe right
});

```
