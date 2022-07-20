interface Props {
	value: string;
	handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Input = ({ value, handleClick }: Props) => {
	return (
		<button
			className={`text-3xl font-bold rounded-lg border-b-4 hover:brightness-150 ${
				value === '='
					? 'col-span-2 text-xl text-tertiary bg-tertiary-key border-tertiary-shadow'
					: value === 'RESET'
					? 'col-span-2 text-xl text-secondary bg-secondary-key border-secondary-shadow'
					: value === 'DEL'
					? 'aspect-square text-xl text-secondary bg-secondary-key border-secondary-shadow'
					: 'aspect-square text-primary bg-primary-key border-primary-shadow'
			} `}
			value={value}
			onClick={e => handleClick(e)}
		>
			{value}
		</button>
	);
};
