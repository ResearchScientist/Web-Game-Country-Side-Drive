window.addEventListener('load',function() {


class KeyPressed {
  constructor() {
    this.keys = [];
    window.addEventListener('keydown',e => {
      console.log(e.key);
      if ((e.key === ' ' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') && !this.keys.includes(e.key)) {
        this.keys.push(e.key);
      }
      console.log(e.key,this.keys);
    });
    window.addEventListener('keyup',e => {
      if (e.key === ' ' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' ) {
        this.keys.splice(this.keys.indexOf(e.key),1);
      }
      console.log(e.key,this.keys);
  });
}
}

const input = new KeyPressed();

});
