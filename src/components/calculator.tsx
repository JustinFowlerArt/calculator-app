import { useState } from 'react';
import { Input } from './input';

export const Calculator = () => {
	const [operator, setOperator] = useState('');
	const [firstOperand, setFirstOperand] = useState(0);
	const [secondOperand, setSecondOperand] = useState(0);
	const [currentValue, setCurrentValue] = useState('0');

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		let { value } = e.currentTarget;
		switch (value) {
			case '=': {
				const newValue = evaluate();
				setCurrentValue(newValue);
				break;
			}
			case '+':
			case '-':
			case 'x':
			case '/': {
				if (value === 'x') {
					value = '*';
				}
				if (currentValue.search(/[+\-*/]+/) > 0) {
					const newValue = evaluate();
					setCurrentValue(newValue + value);
				} else {
					setCurrentValue(currentValue + value);
				}
				setOperator(value);
				break;
			}
			case '.': {
				const values = currentValue.split(/[+\-*/]+/);
				if (values.length > 1) {
					if (values[1].indexOf('.') > -1) {
						break;
					} else {
						setCurrentValue(currentValue + value);
					}
				} else if (values[0].indexOf('.') > -1) {
					break;
				} else {
					setCurrentValue(currentValue + value);
				}
				break;
			}
			case 'DEL': {
				if (currentValue.length <= 1 || currentValue === `Can't divide by 0`) {
					reset();
				} else {
					const values = currentValue.split(/[+\-*/]+/);
					if (values.length > 1) {
						setSecondOperand(
							parseFloat(values[1].slice(0, values[1].length - 1))
						);
					} else {
						setFirstOperand(
							parseFloat(values[0].slice(0, values[0].length - 1))
						);
					}
					setCurrentValue(currentValue.slice(0, currentValue.length - 1));
				}
				break;
			}
			case 'RESET': {
				reset();
				break;
			}
			default: {
				let values = [];
				if (currentValue === '0' || currentValue === `Can't divide by 0`) {
					setCurrentValue(value);
					values.push(value);
				} else if (currentValue.startsWith('-')) {
                    setCurrentValue(currentValue + value);
                    values = (currentValue + value).split(/[+\-*/]+/);
                    values = values.slice(1, values.length)
                    values[0] = '-' + values[0]
				} else {
					setCurrentValue(currentValue + value);
					values = (currentValue + value).split(/[+\-*/]+/);
				}
				setFirstOperand(parseFloat(values[0]));
				if (values.length > 1) {
					setSecondOperand(parseFloat(values[1]));
				}
				break;
			}
		}
	};

	const reset = () => {
		setOperator('');
		setFirstOperand(0);
		setSecondOperand(0);
		setCurrentValue('0');
	};

	const evaluate = () => {
		let newValue: number | string = 0;
		if (operator === '+') {
			newValue = firstOperand + secondOperand;
		} else if (operator === '-') {
			newValue = firstOperand - secondOperand;
		} else if (operator === '*') {
			newValue = firstOperand * secondOperand;
		} else if (operator === '/') {
			if (secondOperand === 0) {
				newValue = `Can't divide by 0`;
				reset();
			} else {
				newValue = firstOperand / secondOperand;
			}
		}
		if (newValue !== `Can't divide by 0`) {
			setFirstOperand(parseFloat(newValue.toString()));
		}
		return newValue.toString();
	};

	const inputs = [
		'7',
		'8',
		'9',
		'DEL',
		'4',
		'5',
		'6',
		'+',
		'1',
		'2',
		'3',
		'-',
		'.',
		'0',
		'/',
		'x',
		'RESET',
		'=',
	];

	return (
		<main className='flex flex-col space-y-6'>
			<div className='flex bg-dark-background-screen p-6 rounded-xl justify-end'>
				<span className='text-4xl font-bold'>
					{currentValue === '0'
						? parseFloat(currentValue).toLocaleString('en-US')
						: currentValue}
				</span>
			</div>
			<div className='grid grid-cols-4 grid-rows-5 gap-4 bg-dark-background-keyboard p-6 rounded-xl'>
				{inputs.map(input => (
					<Input key={input} value={input} handleClick={handleClick} />
				))}
			</div>
		</main>
	);
};
