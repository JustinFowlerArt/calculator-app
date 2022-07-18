interface Props {
	value: string;
	handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Input = ({ value, handleClick }: Props) => {
	return (
		<button
			className={`text-3xl font-bold rounded-lg border-b-4 ${
				value === '='
					? 'col-span-2 text-xl bg-dark-key-red-background border-dark-key-red-shadow'
					: value === 'RESET'
					? 'col-span-2 text-xl bg-dark-key-blue-background border-dark-key-blue-shadow'
					: value === 'DEL'
					? 'aspect-square text-xl bg-dark-key-blue-background border-dark-key-blue-shadow'
					: 'aspect-square bg-dark-key-orange-background text-dark-text-blue border-dark-key-orange-shadow'
			} `}
			value={value}
			onClick={e => handleClick(e)}
		>
			{value}
		</button>
	);
};
