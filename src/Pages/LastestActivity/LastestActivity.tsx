import React from 'react'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav'

const LastestActivity = () => {
	return (
		<div id="page-wrapper">
			<SideNav />
			<Header pageTitle={"Notification & Lastest Activity"} />
			<main id="dashboard">
				Notification & Lastest Activity
			</main>

		</div>
	)
}

export default LastestActivity