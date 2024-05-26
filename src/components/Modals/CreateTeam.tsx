import Modal from 'react-bootstrap/Modal';
import { InputField, customId } from '../TableOptions';

import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import { SVGLoader } from '../SVGLoader';
import ModalHeader from '../ModalHeader';


const CreateTeam = ({ showTeam, setShowTeam, supervisorId }: any) => {


	const navigate = useNavigate();
	const handleClose = () => setShowTeam(false);





	const handleCreateTeam = (values: any) => {
	}

	return (
		<>
			<Modal show={showTeam} onHide={handleClose} centered>
				<ModalHeader setShow={setShowTeam} headerTitle={"Create Team"} />
				<Modal.Body>

					<form  >
						<div className='mb-4'>

							<InputField
								label={"Team Name"}
								placeholder={"Design new draft"}
							// onChange={handleChange("teamName")} 
							/>
						</div>

						<InputField
							label={"Description"}
							placeholder={"@john"}
							className={" "}
							value={"description"}
						/>
						<button
							type="submit"
							id='custom-btn'
							className='mt-4'
						>
							{false ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Create"}</button>
					</form>

				</Modal.Body>
			</Modal >
		</>
	);
}

export default CreateTeam;

