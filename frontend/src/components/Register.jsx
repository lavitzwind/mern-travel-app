import { Room } from "@material-ui/icons";
import "./register.css";

const Register = () => {
	return (
		<div>
			<div className="registerContainer">
				<div className="logo">
					<Room />
					MillePin
				</div>
				<form>
					<input type="text" placeholder="username" />
					<input type="email" placeholder="email" />
					<input type="password" placeholder="password" />
					<button className="registerBtn">Register</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
