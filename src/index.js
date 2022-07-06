module.exports = reverse = (n) => {
	let result = 0;
	let t = n;
	while (t) {
		result = result * 10 + t % 10;
		t = Math.floor(t / 10);
	}
	return result;
}
