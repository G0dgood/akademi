import React from 'react'
import SideNav from '../../components/SideNav'
import Header from '../../components/Header'
import SearchInput from '../../components/SearchInput'
import { FaCaretDown } from 'react-icons/fa6'
import { FiPlus } from 'react-icons/fi'

const Students = () => {
	return (
		<div id="page-wrapper">
			<SideNav />
			<Header pageTitle={"Students"} />
			<main id="dashboard">
				<div className='title_search_container'>
					<SearchInput />
					<div className='title_search_student_container'>
						<div className='title_newest_container'>
							<p>Newest</p>
							<FaCaretDown />
						</div>
						<div className='title_student_container'>
							<FiPlus />
							<p>New Student</p>
						</div>
					</div>
				</div>

				<div>

				</div>
			</main>

		</div>
	)
}

export default Students
