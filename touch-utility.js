export default class TouchUtil {

  constructor(el) {
    this.el = el;
    this.defaults = {
      threshold: 10
    }
    this.touchVars = {
      touchStartX: 0,
      touchMoveX: 0,
      touchStarted: false
    }
    this.init();
  }

  init() {
    this.el.addEventListener('touchstart', this.touchStart.bind(this) );
    this.el.addEventListener('touchmove', this.touchMove.bind(this)  );
    this.el.addEventListener('touchend', this.touchEnd.bind(this)  );
  }

  //A reset method used after each detection is calculated
  touchReset() {
    this.touchVars.touchStarted = false;
    this.touchVars.touchMoveX = 0;
  }

  //Fired when a user first touches the screen
  touchStart(e) {
    e.stopPropagation();
    if(!this.touchVars.touchStarted) {
      this.touchVars.touchStarted = true;
      let touch = e.changedTouches[0];
      this.touchVars.touchStartX = touch.clientX;
    }
  }

  //Fired when a user moves while touching the screen
  touchMove(e) {
    e.stopPropagation();
    let touch = e.changedTouches[0];
    this.touchVars.touchMoveX = touch.clientX;
  }

  touchEnd(e) {
    //Stop the click event from happening.
    //This is what speeds up the touch interaction.
    e.preventDefault();

    //Now emit the events be it a swipe or a touch
    const diff = Math.abs(this.touchVars.touchStartX - this.touchVars.touchMoveX);

    if(diff > this.defaults.threshold && this.touchVars.touchMoveX !== 0) {
      // swipe right
      if( this.touchVars.touchMoveX > this.touchVars.touchStartX ){
        let swiperight = new Event('swiperight');
        this.el.dispatchEvent(swiperight);
      }
      // swipe left
      else {
        let swipeleft = new Event('swipeleft');
        this.el.dispatchEvent(swipeleft);
      }
      this.touchReset();
      // generic swipe
      let swipe = new Event('swipe');
      this.el.dispatchEvent(swipe);
    } else {
      this.touchReset();
      let tap = new Event('tap');
      this.el.dispatchEvent(tap);
    }
  }
}
