import React from 'react'
import SideNav from '../../components/SideNav'
import Header from '../../components/Header'

const User = () => {
	return (
		<div id="page-wrapper">
			<SideNav />
			<Header pageTitle={"Users"} />
			<main id="dashboard">
				User
			</main>

		</div>
	)
}

export default User
