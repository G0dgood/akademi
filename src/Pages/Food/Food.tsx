import React from 'react'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav'

const Food = () => {
	return (
		<div id="page-wrapper">
			<SideNav />
			<Header pageTitle={"Food"} />
			<main id="dashboard">
				Event
			</main>

		</div>
	)
}

export default Food