export function randomNumberPlease(max: number, min: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;

  return function () {
    function later() {
      timeout = null;
      func.apply(this, arguments);
    }

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function throttle(func: Function, limit: number) {
  let inThrottle = false;

  return function () {
    if (!inThrottle) {
      func.apply(this, arguments);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
