var ua = navigator.userAgent;
var ios = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
var safari = ua.toLowerCase().indexOf('safari/') > -1 && ua.toLowerCase().indexOf('chrome/') == -1;
var android = /(android)/i.test(ua);
var ie11 = /Trident/.test(ua);

function getDefaultI18n() {
  return {
    monthNames: [
      'January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    firstDayOfWeek: 0,
    week: 'Week',
    calendar: 'Calendar',
    clear: 'Clear',
    today: 'Today',
    cancel: 'Cancel',
    formatDate: function(d) {
      return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
    },
    formatTitle: function(monthName, fullYear) {
      return monthName + ' ' + fullYear;
    }
  };
}

function listenForEvent(elem, type, callback) {
  var listener = function() {
    elem.removeEventListener(type, listener);
    callback();
  };
  elem.addEventListener(type, listener);
}

function open(datepicker, callback) {
  listenForEvent(datepicker, 'iron-overlay-opened', callback);

  // IE11 causes an 'Error thrown outside of test function: Unspecified error' after running
  // tests that open the overlay, and just when the polyfill executes the `disconnectedCallback`
  // phase when the fixture is removed.
  // The problem seems to be in the `this._nativeInput.focus()` call in the mixin, changing
  // the `focus()` call to the custom element `this._inputElement.focus()`, or sending a 'focus'
  // event to the input to move the focus, do not fix the problem.
  if (ie11) {
    datepicker._focus = () => {};
  }
  datepicker.open();
}

function close(datepicker, callback) {
  listenForEvent(datepicker, 'iron-overlay-closed', callback);
  datepicker.close();
}

function tap(element) {
  Polymer.Base.fire('tap', {}, {
    bubbles: true,
    node: element
  });
}

function monthsEqual(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
}

function getFirstVisibleItem(scroller, bufferOffset) {
  var children = [];
  bufferOffset = (bufferOffset || 0);

  scroller._buffers.forEach(function(buffer) {
    [].forEach.call(buffer.children, function(itemWrapper) {
      children.push(itemWrapper);
    });
  });
  var scrollerRect = scroller.getBoundingClientRect();
  return children.reduce(function(prev, current) {
    return (Math.floor(current.getBoundingClientRect().top) - Math.floor(scrollerRect.top + bufferOffset) <= 0) ? current : prev;
  });
}

function isFullscreen(datepicker) {
  return datepicker.$.overlay.getAttribute('fullscreen') !== null;
}

function describeSkipIf(bool, title, callback) {
  bool = typeof bool == 'function' ? bool() : bool;
  if (bool) {
    describe.skip(title, callback);
  } else {
    describe(title, callback);
  }
}

function waitUntilScrolledTo(overlay, date, callback) {
  if (overlay.$.scroller.position) {
    overlay._onMonthScroll();
  }
  var monthIndex = overlay._differenceInMonths(date, new Date());
  if (overlay.$.scroller.position === monthIndex) {
    Polymer.RenderStatus.afterNextRender(overlay, callback);
  } else {
    setTimeout(waitUntilScrolledTo, 10, overlay, date, callback);
  }
}
