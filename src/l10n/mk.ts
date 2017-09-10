/* Macedonian locals for flatpickr */
import { CustomLocale } from "types/locale";
import { FlatpickrFn } from "types/instance";

const fp: FlatpickrFn = ((window as any).flatpickr as FlatpickrFn) || {
  l10ns: {},
};

export const Macedonian: CustomLocale = {
  weekdays: {
    shorthand: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Са", "Не"],
    longhand: [
      "Недела",
      "Понеделник",
      "Вторник",
      "Среда",
      "Четврток",
      "Петок",
      "Сабота",
      "Недела",
    ],
  },

  months: {
    shorthand: [
      "Јан",
      "Фев",
      "Мар",
      "Апр",
      "Мај",
      "Јун",
      "Јул",
      "Авг",
      "Сеп",
      "Окт",
      "Ное",
      "Дек",
    ],
    longhand: [
      "Јануари",
      "Февруари",
      "Март",
      "Април",
      "Мај",
      "Јуни",
      "Јули",
      "Август",
      "Септември",
      "Октомври",
      "Ноември",
      "Декември",
    ],
  },

  firstDayOfWeek: 1,
  weekAbbreviation: "Нед.",
  rangeSeparator: " до ",
};

fp.l10ns.mk = Macedonian;

export default fp.l10ns;