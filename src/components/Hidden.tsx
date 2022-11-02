import config from "tailwindcss/defaultTheme";
import { ref } from "vue";

let current = ref(window.innerWidth);
let timer = 0;
const keys = Object.keys(config.screens);
const values = Object.values(config.screens).map(parseFloat);

window.addEventListener(
	"resize",
	() => {
		window.clearTimeout(timer);
		timer = window.setTimeout(() => {
			current.value = window.innerWidth;
		}, 1000 / 30);
	},
	false
);

function find(value: number) {
	return current.value <= value;
}

export default (props: { xs?: boolean; sm?: boolean; md?: boolean; lg?: boolean; xl?: boolean; less?: boolean }, context: any) => {
	const points = keys.slice(0, values.findIndex(find));
	const matched = Object.keys(props).some((i) => points.includes(i));

	if (props.less !== undefined) {
		if (matched) return h(context.slots.default);
		return null;
	}
	if (matched) return null;

	return h(context.slots.default);
};
