import "../../css/style.css";
import "../../css/contactMe/contact.css";

function Contact() {
	return (
		<div className="about">
			<div className="contact">
			<h2 className="label">Email Id:</h2>
			<h3 className="information">svd@pdx.edu</h3>
			<h2 className="label">Mobile No:</h2>
			<h3 className="information">(971)506-9385</h3>
			<h2 className="label">Linkedin</h2>
			<a className="information" href="https://www.linkedin.com/in/shruti-deshmukh-b42592110/">
							<i ></i> Go to Linkedin
						</a>
			
			</div>		
		</div>
	);
}

export default Contact;
