import React, { useState } from 'react';
import './StudentForm.css'

function StudentForm(props) {
	const [Name, setName] = useState('');
	const [EmailId, setEmailId] = useState('');
	const [Phone, setPhone] = useState('');
	const [Street, setStreet] = useState('');
	const [City, setCity] = useState('');
	const [State, setState] = useState('');
	const [Country, setCountry] = useState('');
	const [Postalcode, setPostalcode] = useState('');

	const changeName= (event) => {
		setName(event.target.value);
	};
	const changeEmailId = (event) => {
		setEmailId(event.target.value);
	};
	const changePhone = (event) => {
		setPhone(event.target.value);
	};
	const changeStreet = (event) => {
		setStreet(event.target.value);
	};
	const changeCity = (event) => {
		setCity(event.target.value);
	};
	const changeState = (event) => {
		setState(event.target.value);
	};
	const changeCountry = (event) => {
		setCountry(event.target.value);
	};
	const changePostalcode = (event) => {
		setPostalcode(event.target.value);
	};


	const transferValue = (event) => {
		event.preventDefault();
		const val = {
			Name,
			EmailId,
			Phone,
			Street,
			City,
			State,
			Country,
			Postalcode,
		};
		props.func(val);
		clearState();
	};

	const clearState = () => {
		setName('');
		setEmailId('');
		setPhone('');
		setStreet('');
		setCity('');
		setState('');
		setCountry('');
		setPostalcode('');
	};

	return (
		<div className="container">
			<h2 style={{ textAlign: "center" }} >Employee Information Form </ h2>
			<div class="d-flex">
				<div class="row gy-5">
					<div class="col-3">
						<label>Name       </label>
						<input type="text" value={Name} placeholder="Your name.." onChange={changeName} />
					</div>
					<div class="col-3">
						<label>EmailId     </label>
						<input type="text" value={EmailId} placeholder="Your EmailId." onChange={changeEmailId} />
					</div>
					<div class="col-3">
						<label>Phone       </label>
						<input type="text" value={Phone} placeholder="Your Phone number." onChange={changePhone} />
					</div>
					<div class="col-3">
						<label>Street                 </label>
						<input type="text" value={Street} placeholder="Your Street name." onChange={changeStreet} />
					</div>
					<div class="col-3">
						<label>City                   </label>
						<input type="text" value={City} placeholder="Your City." onChange={changeCity} />
					</div>
					<div class="col-3">
						<label>State                 </label>
						<input type="text" value={State} placeholder="Your State." onChange={changeState} />
					</div>
					<div class="col-3">
						<label>Country               </label>
						<input type="text" value={Country} placeholder="Your Country." onChange={changeCountry} />
					</div>
					<div class="col-3">
						<label>Postalcode            </label>
						<input type="text" value={Postalcode} placeholder="Your Postalcode." onChange={changePostalcode} />
					</div>
					<button type="Add" onClick={transferValue}> Add </button>
				</div>
			</div>
		</div>
	);
}

export default StudentForm;
