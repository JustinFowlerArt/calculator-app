export const regex = /[+\-*/]/

export const format = (num: string, per = 3) => {
	// SPLIT WHOLE & DECIMAL NUMBERS
	const operator = num.search(regex);
	const negative = num.startsWith('-');
	const string = num.replace(regex, ''),
		dot = string.indexOf('.');
	let whole = '',
		decimal: string | number = '';
	if (dot == -1) {
		whole = string;
		decimal = '';
	} else {
		whole = string.substring(0, dot);
		decimal = string.substring(dot + 1);
        decimal = ('.' + decimal);
	}

	// ADD COMMAS TO WHOLE NUMBER
	let wholeCommas = '',
		count = 0;
	if (whole.length > per) {
		for (let i = whole.length - 1; i >= 0; i--) {
			wholeCommas = whole.charAt(i) + wholeCommas;
			count++;
			if (count == per && i != 0) {
				wholeCommas = ',' + wholeCommas;
				count = 0;
			}
		}
	} else {
		wholeCommas = whole;
	}

	if (negative) {
		return '-' + (operator > 1 ? wholeCommas + decimal + num[operator] : wholeCommas + decimal);
	} else {
		return operator > 1 ? wholeCommas + decimal + num[operator] : wholeCommas + decimal;
	}
};