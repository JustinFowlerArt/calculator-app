import { useState } from 'react';
import { Input } from './input';
import { format, regex } from './utils';

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
				if (currentValue.search(regex) > 0) {
					const newValue = evaluate();
					setCurrentValue(newValue + value);
				} else if (currentValue.startsWith('-')) {
                    const number = currentValue.substring(1);
                    if (number.search(regex) > 0) {
                        const newValue = evaluate();
                        setCurrentValue(newValue + value);
                    } else {
                        setCurrentValue(currentValue + value);
                    }
                }
                else {
                    setCurrentValue(currentValue + value);
                }
				setOperator(value);
				break;
			}
			case '.': {
				const values = currentValue.split(regex);
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
					const values = currentValue.split(regex);
					if (values.length > 1) {
                        let newValue = 0
                        if (values[1].length > 1) {
                            newValue = parseFloat(values[1].slice(0, values[1].length - 1));
                        }
                        setSecondOperand(newValue);
					} else {
                        let newValue = 0
                        if (values[0].length > 1) {
                            newValue =  parseFloat(values[0].slice(0, values[0].length - 1))
                        }
						setFirstOperand(newValue);
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
					values = (currentValue + value).split(regex);
					values = values.slice(1, values.length);
					values[0] = '-' + values[0];
				} else {
					setCurrentValue(currentValue + value);
					values = (currentValue + value).split(regex);
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

    const displayResult = () => {
        let split = 0
        if (currentValue.startsWith('-')) {
            const negative = currentValue.substring(1)
            split = currentValue.search(negative)
        } else {
            split = currentValue.search(regex)
        }
        const first = currentValue.substring(0, split)
        const second = currentValue.substring(split + 1)
        return `${first ? format(first) : ''}${split > 0 ? currentValue[split] : ''}${second ? format(second) : ''}`
    }

	return (
		<main className='flex flex-col space-y-6'>
			<div className='flex bg-tertiary p-6 rounded-xl justify-end'>
				<span className='text-4xl font-bold w-full break-words text-right'>
                    {displayResult()}
				</span>
			</div>
			<div className='grid grid-cols-4 grid-rows-5 gap-4 bg-secondary p-6 rounded-xl'>
				{inputs.map(input => (
					<Input key={input} value={input} handleClick={handleClick} />
				))}
			</div>
		</main>
	);
};
