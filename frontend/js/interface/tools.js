
export function getElemByName(name, elems) {
	let e_ = {};
	elems.forEach((e) => {
		if (e.name == name) e_ = e;
	});
	return e_;
}
