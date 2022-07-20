interface Props {
	changeTheme: (theme: string) => void;
    theme: string;
}

export const Header = ({ changeTheme, theme }: Props) => {
	return (
		<header className='flex justify-between'>
			<h1 className='text-2xl font-bold'>calc</h1>
			<div className='flex items-end'>
				<h2 className='text-xs font-semibold tracking-wider mr-6'>
					THEME
				</h2>
				<form className='relative flex justify-between h-6 w-16 bg-secondary py-1 px-3 rounded-2xl'>
					<label className='flex flex-col items-center'>
						<span className='absolute top-[-1.25rem] text-xs'>1</span>
						<input
							type='radio'
							name='theme'
                            id='1'
							value='dark'
                            className='hidden'
							onClick={e => changeTheme(e.currentTarget.value)}
						></input>
                        <label htmlFor='1' className='w-3.5 h-3.5 absolute top-[.3rem] rounded-full '></label>
					</label>
					<label className='flex flex-col items-center'>
						<span className='absolute top-[-1.25rem] text-xs'>2</span>
						<input
							type='radio'
							name='theme'
                            id='2'
							value='light'
                            className='hidden'
							onClick={e => changeTheme(e.currentTarget.value)}
						></input>
                        <label htmlFor='2' className='w-3.5 h-3.5 absolute top-[.3rem] left-6.5 rounded-full '></label>
					</label>
					<label className='flex flex-col items-center'>
						<span className='absolute top-[-1.25rem] text-xs'>3</span>
						<input
							type='radio'
							name='theme'
                            id='3'
							value='contrast'
                            className='hidden'
							onClick={e => changeTheme(e.currentTarget.value)}
						></input>
                        <label htmlFor='3' className='w-3.5 h-3.5 absolute top-[.3rem] rounded-full '></label>
					</label>
                    <div className={`w-3.5 h-3.5 absolute top-[.3rem] bg-tertiary-key rounded-full ${theme === 'light' ? 'left-6' : theme === 'contrast' ? 'right-1.5' : 'left-1.5'}`}></div>
				</form>
			</div>
		</header>
	);
};
