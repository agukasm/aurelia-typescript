import {inject, customElement, bindable} from 'aurelia-framework';
import 'bootstrap-datepicker';
import * as moment from '../node_modules/moment';
import * as jQuery from '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css';
declare var $;

@inject(Element)
export class DatePicker {

  @bindable value: string;

  constructor(private element: HTMLElement) {
  }

  attached() {
    this.initLanguage($);
    $(this.element)
      .find('.datepicker')
      .datepicker({
        weekStart: 1,
        todayBtn: "linked",
        language: "et",
        autoclose: true,
        todayHighlight: true
      })
      .on('changeDate',
      (e) => {
        this.value = this.formatDate(e.date);
      });
  }

  private formatDate(date: Date): string {
    return moment(date).format("DD.MM.YYYY");
  }

  private initLanguage(jQuery) {
    jQuery.fn.datepicker.dates.et = {
      days: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"],
      daysShort: ["Pühap", "Esmasp", "Teisip", "Kolmap", "Neljap", "Reede", "Laup"],
      daysMin: ["P", "E", "T", "K", "N", "R", "L"],
      months: [
        "Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November",
        "Detsember"
      ],
      monthsShort: ["Jaan", "Veebr", "Märts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
      today: "Täna",
      clear: "Tühjenda",
      weekStart: 1,
      format: "dd.mm.yyyy"
    }
  }
}