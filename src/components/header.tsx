export const Header = () => {
	return (
		<header className='flex justify-between'>
			<h1 className='text-2xl font-bold'>calc</h1>
			<div className='flex items-end'>
				<h2 className='text-xs font-semibold tracking-wider mr-6'>THEME</h2>
				<form className='relative flex space-x-2 bg-dark-background-keyboard py-1 px-1.5 rounded-2xl'>
					<label className='flex flex-col items-center'>
						<span className='absolute top-[-1.25rem] text-xs'>1</span>
						<input type='radio' name='theme' value='1'></input>
					</label>
					<label className='flex flex-col items-center'>
						<span className='absolute top-[-1.25rem] text-xs'>2</span>
						<input type='radio' name='theme' value='2'></input>
					</label>
					<label className='flex flex-col items-center'>
						<span className='absolute top-[-1.25rem] text-xs'>3</span>
						<input type='radio' name='theme' value='3'></input>
					</label>
				</form>
			</div>
		</header>
	);
};
