import { Calculator } from './components/calculator';
import { Header } from './components/header';

export const App = () => {
	return (
		<div className='flex justify-center h-screen p-8 bg-dark-background-main text-white'>
			<div className='flex flex-col space-y-8 w-full max-w-lg'>
				<Header />
				<Calculator />
			</div>
		</div>
	);
};
