import { useState } from 'react';
import { Calculator } from './components/calculator';
import { Header } from './components/header';

export const App = () => {
	const [theme, setTheme] = useState('dark');

	const changeTheme = (theme: string) => {
		setTheme(theme);
	};

	return (
		<div className={`flex justify-center h-screen p-8 bg-primary ${theme === 'light' ? 'light text-primary' : theme === 'contrast' ? 'contrast text-primary' : 'text-white'}`}>
			<div className='flex flex-col space-y-8 w-full max-w-lg'>
				<Header changeTheme={changeTheme} theme={theme}/>
				<Calculator />
			</div>
		</div>
	);
};
