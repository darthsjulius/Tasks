function throttle(f, ms) {
    let isThrottled = false, 
    savedArgs, 
    savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments,
            savedThis = this;
        }
        f.apply(this, arguments);

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}