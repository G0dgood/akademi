import { FiPlus } from "react-icons/fi";
import SideNav from '../../components/SideNav'
import Header from '../../components/Header'
import SearchInput from '../../components/SearchInput'
import { FaCaretDown } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Phone from "../../assets/svg/Phone";
import Mail from "../../assets/svg/Mail";

const Teachers = () => {

	const teachers = [
		{ name: "Dimitres Viga", subject: "Mathematics" },
		{ name: "Tom Housenburg", subject: "Science" },
		{ name: "Dana Benevista", subject: "Art" },
		{ name: "Salvadore Morbeau", subject: "Biology" },
		{ name: "Maria Historia", subject: "History" },
		{ name: "Jack Sally", subject: "Physics" },
		{ name: "Lula Beatrice", subject: "Algorithm" },
		{ name: "Nella Vita", subject: "English" },
		{ name: "Nadia Laravela", subject: "Programming" },
		{ name: "Dakota Farral", subject: "Science" },
		{ name: "Miranda Adila", subject: "Art" },
		{ name: "Indiana Barker", subject: "Biology" },
	];
	const TeacherCard = ({ name, subject }: any) => (
		<div className="teachers_card_container">
			<BsThreeDots className="bs_threedots" />
			<div className="teachers_card_circle"></div>
			<h3>{name}</h3>
			<p>{subject}</p>
			<div className="teachers_container_icon_sub">
				<div className="teachers_container_icon">
					<Phone />
				</div>
				<div className="teachers_container_icon">
					<Mail />
				</div>
			</div>
		</div>
	);

	return (
		<div id="page-wrapper">
			<SideNav />
			<Header pageTitle={"Teachers"} />
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

				<div className="teachers_card_container_main">
					{teachers.map((teacher, index) => (
						<TeacherCard key={index} name={teacher.name} subject={teacher.subject} />
					))}
				</div>
			</main>

		</div>
	)
}

export default Teachers
