function f() {
    alert("Hello!");
  }
  
  f.defer(1000);

  Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  }