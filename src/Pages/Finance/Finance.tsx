import React from 'react'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav'

const Finance = () => {
	return (
		<div id="page-wrapper">
			<SideNav />
			<Header pageTitle={"Finance"} />
			<main id="dashboard">
				Finance
			</main>

		</div>
	)
}

export default Finance
