export interface DatePickerDate {
  day: number;
  month: number;
  year: number;
}

export interface DatePickerI18n {
  monthNames: string[];
  weekdays: string[];
  weekdaysShort: string[];
  firstDayOfWeek: number;
  week: string;
  calendar: string;
  clear: string;
  today: string;
  cancel: string;
  parseDate: (date: string) => DatePickerDate;
  formatDate: (date: DatePickerDate) => string;
  formatTitle: (monthName: string, fullYear: number) => string;
}
