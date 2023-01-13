import files from "./files.json";

const load = (lang) => {
	let locale = {};
	files.map(async f => {
		const j = require(`./${lang}/${f}`)
		console.log(j)
		locale = Object.assign(locale, j);
	})
	console.log(locale);
	return locale;
};

export default load;
