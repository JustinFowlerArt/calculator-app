import { useState } from 'react';
import { Input } from './input';

export const Calculator = () => {
    const [operand, setOperand] = useState('')
	const [currentValue, setCurrentValue] = useState('0');

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const { value } = e.currentTarget;
		switch (value) {
			case '7':
			case '8':
			case '9':
			case '4':
			case '5':
			case '6':
			case '1':
			case '2':
			case '3':
			case '0': {
				if (currentValue === '0') {
					setCurrentValue(value);
				} else {
					setCurrentValue(currentValue + value);
				}
				break;
			}
			case '.': {
				if (currentValue.indexOf('.') > -1) {
					break;
				} else {
					setCurrentValue(currentValue + value);
				}
				break;
			}
			case 'DEL': {
				if (currentValue.length <= 1) {
					setCurrentValue('0');
				} else {
					setCurrentValue(currentValue.slice(0, currentValue.length - 1));
				}
				break;
			}
			case 'RESET': {
				setCurrentValue('0');
				break;
			}
			case '=': {
                const values = currentValue.split(/[+\-*/]+/)
                let newValue = 0;
                if (operand === '+') {
                    newValue = parseFloat(values[0]) + parseFloat(values[1])
                } else  if (operand === '-') {
                    newValue = parseFloat(values[0]) - parseFloat(values[1])
                } else  if (operand === '*') {
                    newValue = parseFloat(values[0]) * parseFloat(values[1])
                } else  if (operand === '/') {
                    newValue = parseFloat(values[0]) / parseFloat(values[1])
                } 
                setCurrentValue(newValue.toString())
				break;
			}
			case '+': {
                setOperand('+')
                setCurrentValue(currentValue + value);
				break;
			}
            case '-': {
                setOperand('-')
                setCurrentValue(currentValue + value);
				break;
			}
            case 'x': {
                setOperand('*')
                setCurrentValue(currentValue + '*');
				break;
			}
            case '/': {
                setOperand('/')
                setCurrentValue(currentValue + value);
				break;
			}
			default: {
				break;
			}
		}
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
				<span className='text-4xl font-bold'>{currentValue}</span>
			</div>
			<div className='grid grid-cols-4 grid-rows-5 gap-4 bg-dark-background-keyboard p-6 rounded-xl'>
				{inputs.map(input => (
					<Input key={input} value={input} handleClick={handleClick} />
				))}
			</div>
		</main>
	);
};
