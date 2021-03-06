import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import teeth from '../../../images/teeth.png'
import ServicesDetail from '../ServicesDetail/ServicesDetail';

const serviceData = [
	{
		name: 'Fluoride Treatment',
		img:fluoride
	},
	{
		name: 'Cavity Filling',
		img: cavity
	},
	{
		name: 'Teeth Treatment',
		img: teeth
	},
]
const Services = () => {
	return (
		<section>
			<div className='text-center mt-5'>
				<h5 style={{ color:'#1CC7C1'}}>OUR SERVICES</h5>
				<h2>Services We Provid</h2>
			</div>
			<div className="d-flex justify-content-center">
				<div className='w-75 row mt-5 pt-5'>
					{
						serviceData.map(services=><ServicesDetail services={services}></ServicesDetail>)
					}
				</div>
			</div>
		</section>
	);
};

export default Services;