import React, { useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const containerStyle = {
	backgroundColor: '#F4FDFB',
	height: '100%'
}

const Dashboard = () => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [appointments, setAppointments] = useState([]);
	const handleDateChange = date => {
		setSelectedDate(date);
	}

	useEffect(() => {
		fetch('http://localhost:7000/appoinmentByDate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ date:selectedDate })
		})
			.then(res => res.json())
			.then(data => setAppointments(data))
	},[selectedDate])
	console.log(appointments);
	return (
		<div style={containerStyle} className="container-fluid row">
			<div className="col-md-2">
				<Sidebar></Sidebar>
			</div>
			<div className="col-md-5 d-flex justify-content-center">
				<Calendar
					onChange={handleDateChange}
					value={new Date()}
				/>
			</div>
			<div className="col-md-5">
				<AppointmentByDate appointments={appointments}></AppointmentByDate>
			</div>
		</div>
	);
};

export default Dashboard;