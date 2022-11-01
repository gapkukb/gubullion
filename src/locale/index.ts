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
		zh_hans: "简体中文",
		zh_hant: "繁体中文",
		en: "English",
		th: "泰语",
	},
};
export default createI18n({
	locale: localStorage.getItem(key) || getLocale(),
	messages: {
		en,
		th,
		"zh-Hans": zhHans,
		"zh-Hant": zhHant,
	},
	sharedMessages: {
		"en": lang,
		"th": lang,
		"zh-Hans": lang,
		"zh-Hant": lang,
	},
});
