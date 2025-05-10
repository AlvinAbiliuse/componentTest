import "./styles.css";

export function Component() {
	return (
		<>
			<h1>Membership, and other stuff</h1>
			<div className="card">
				<h2>Membership</h2>
				<p>
					Become part of the club, explore unique offers, and enjoy uparralleled
					access to our exclusive club.
				</p>
				<button
					onClick={() => {
						window.location = "https://youtu.be/dQw4w9WgXcQ";
					}}
					className="actionBtn"
				>
					ACTION BUTTON!
				</button>
			</div>
		</>
	);
}
