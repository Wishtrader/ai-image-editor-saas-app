import { env } from '~/env'


const HomePage = () => {
	return (
		<div className='underline'>Home Page{env.BETTER_AUTH_URL}</div>
	)
}

export default HomePage