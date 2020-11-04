/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/** @private */
export const DatePickerHelper = class VaadinDatePickerHelper {
  /**
   * Get ISO 8601 week number for the given date.
   *
   * @param {Date} Date object
   * @return {Number} Week number
   */
  static _getISOWeekNumber(date) {
    // Ported from Vaadin Framework method com.vaadin.client.DateTimeService.getISOWeekNumber(date)
    var dayOfWeek = date.getDay(); // 0 == sunday

    // ISO 8601 use weeks that start on monday so we use
    // mon=1,tue=2,...sun=7;
    if (dayOfWeek === 0) {
      dayOfWeek = 7;
    }
    // Find nearest thursday (defines the week in ISO 8601). The week number
    // for the nearest thursday is the same as for the target date.
    var nearestThursdayDiff = 4 - dayOfWeek; // 4 is thursday
    var nearestThursday = new Date(date.getTime() + nearestThursdayDiff * 24 * 3600 * 1000);

    var firstOfJanuary = new Date(0, 0);
    firstOfJanuary.setFullYear(nearestThursday.getFullYear());

    var timeDiff = nearestThursday.getTime() - firstOfJanuary.getTime();

    // Rounding the result, as the division doesn't result in an integer
    // when the given date is inside daylight saving time period.
    var daysSinceFirstOfJanuary = Math.round(timeDiff / (24 * 3600 * 1000));

    return Math.floor((daysSinceFirstOfJanuary) / 7 + 1);
  }

  /**
   * Check if two dates are equal.
   *
   * @param {Date} date1
   * @param {Date} date2
   * @return {Boolean} True if the given date objects refer to the same date
   */
  static _dateEquals(date1, date2) {
    return date1 instanceof Date && date2 instanceof Date &&
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
  }

  /**
   * Check if the given date is in the range of allowed dates.
   *
   * @param {Date} date The date to check
   * @param {Date} min Range start
   * @param {Date} max Range end
   * @return {Boolean} True if the date is in the range
   */
  static _dateAllowed(date, min, max) {
    return (!min || date >= min) && (!max || date <= max);
  }

  /**
   * Get closest date from array of dates.
   *
   * @param {Date} date The date to compare dates with
   * @param {Array} dates Array of date objects
   * @return {Date} Closest date
   */
  static _getClosestDate(date, dates) {
    return dates.filter(date => date !== undefined)
      .reduce((closestDate, candidate) => {
        if (!candidate) {
          return closestDate;
        }

        if (!closestDate) {
          return candidate;
        }

        var candidateDiff = Math.abs(date.getTime() - candidate.getTime());
        var closestDateDiff = Math.abs(closestDate.getTime() - date.getTime());
        return candidateDiff < closestDateDiff ? candidate : closestDate;
      });
  }

  /**
   * Extracts the basic component parts of a date (day, month and year)
   * to the expected format.
   */
  static _extractDateParts(date) {
    return {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    };
  }
};
