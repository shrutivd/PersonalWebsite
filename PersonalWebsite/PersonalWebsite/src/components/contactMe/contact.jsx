import "../../css/style.css";
import "../../css/contactMe/contact.css";

function Contact() {
	return (
		<div className="about">
		<form className="form" id="form" action="#">
			
			<div className="name" id="name">
				<label htmlFor="username">Name:</label>
				<input id="username" name="username" type="text" />
			</div>
			<div className="mail" id="mail">
				<label htmlFor="email">Email:</label>
				<input id="email" name="email" type="email" />
			</div>
			<div className="phn" id="phn">
				<label htmlFor="phone">Phone:</label>
				<input id="phone" name="phone" type="tel" />
			</div>
			
				<label id="text" htmlFor="textarea">Message:</label>
				<textarea id="textarea" name="textarea">
					{" "}
				</textarea>
			
			<div className="btn" id="btn">
				<input
					className="btn-primary"
					id="btn_primary"
					type="submit"
					value="Send"
				/>
				<input
					className="btn-secondary"
					id="btn_secondary"
					type="reset"
					value="Reset"
				/>
			</div>
		</form>
		</div>
	);
}

export default Contact;
