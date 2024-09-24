import "./App.css";
import Header from "./Sections/Header";
import Landing from "./Sections/Landing";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Landing />
			{/* <About />
			<Experience />
			<Projects />
			<Contact /> */}
			{/* <SocialMedia /> */}
		</div>
	);
}

export default App;
