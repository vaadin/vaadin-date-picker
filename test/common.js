var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var finnishI18n = {
  monthNames: [
    'tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu',
    'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu',
    'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'
  ],
  weekdays: ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
  firstDayOfWeek: 1,
  today: 'Tänään',
  cancel: 'Peruuta',
  formatDate: function(date) {
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  }
};

function tap(element) {
  Polymer.Base.fire('tap', {}, {
    bubbles: true,
    node: element
  });
}

function waitUntilLocaleAvailable(locale, callback) {
  if (moment.localeData(locale)) {
    callback();
  } else {
    setTimeout(waitUntilLocaleAvailable, 10, locale, callback);
  }
}

function monthsEqual(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
}

function getFirstVisibleItem(scroller, bufferOffset) {
  var children = [];
  bufferOffset = (bufferOffset || 0);

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
