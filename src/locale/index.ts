import { createI18n } from "vue-i18n";
import en from "./en";
import th from "./th";
import zhHans from "./zh-Hans";
import zhHant from "./zh-Hant";

const key = "locale";
const getLocale = () => {
	const lang = navigator.language;
	let locale = "zh-Hant";
	if (lang == "zh-CN") {
		locale = "zh-Hans";
	} else if (lang.startsWith("en")) {
		locale = "en";
	} else if (lang === "th") {
		locale = "th";
	}
	localStorage.setItem(key, locale);
	return locale;
};
const lang = {
	lang: {
		"zh-Hans": "简体中文",
		"zh-Hant": "繁体中文",
		"en": "English",
		"th": "泰语",
	},
};
export default createI18n({
	locale: localStorage.getItem(key) || getLocale(),
	legacy: false,
	messages: {
		"en": Object.assign(en, lang),
		"th": Object.assign(th, lang),
		"zh-Hans": Object.assign(zhHans, lang),
		"zh-Hant": Object.assign(zhHant, lang),
	},
});

export function changeLocale(code: string) {
	localStorage.setItem(key, code);
	window.location.reload();
}
