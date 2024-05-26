import React from 'react'
import SideNav from '../../components/SideNav'
import Header from '../../components/Header'

const Events = () => {
	return (
		<div id="page-wrapper">
			<SideNav />
			<Header pageTitle={"Events"} />
			<main id="dashboard">
				Events
			</main>

		</div>
	)
}

export default Events