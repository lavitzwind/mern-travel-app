import { Cancel, Room } from "@material-ui/icons";
import { useRef, useState } from "react";
import axios from "axios";
import "./login.css";

const Login = ({ setShowLogin }) => {
	const [error, setError] = useState(false);
	const nameRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = {
			username: nameRef.current.value,
			password: passwordRef.current.value,
		};

		try {
			await axios.post("/users/login", user);
			setError(false);
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className="loginContainer">
			<div className="logo">
				<Room />
				MillePin
			</div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="username" ref={nameRef} />
				<input type="password" placeholder="password" ref={passwordRef} />
				<button className="registerBtn">Login</button>

				{error && <span className="failure">Something went wrong!</span>}
			</form>
			<Cancel className="loginCancel" onClick={() => setShowLogin(false)} />
		</div>
	);
};

export default Login;
