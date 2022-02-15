import AddBirthday from "./components/addBirthday";
import Birthdays from "./components/birthdays";

const Home = () => {
	return ( 
		<div className="home-container">
			<h1 className="heading">Birthday Bash</h1>
			<AddBirthday />
			<Birthdays />
		</div>
	);
}
 
export default Home;