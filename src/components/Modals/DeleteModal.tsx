import { useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { SVGLoader } from '../SVGLoader';
import { BsXLg } from "react-icons/bs";
import { customId } from '../TableOptions';

const DeleteModal = ({ id, show, setShow }: any) => {








	const handelfalse = () => {
		setShow(false)
	}
	const handeltrue = () => {
		// @ts-ignore 
		dispatch(deleteTask(id))
	}


	return (
		<div >

			<Modal show={show} centered>
				<div className='exit-modal' onClick={() => setShow(false)}>
					<BsXLg size={20} className='close-span-icon' />
				</div>
				<div className="popup__container">
					<div className="popup__modal">
						<div className="popup__modal_header">
							<div className="popup__modal_title_accent">
								<h5>Delete  Task?</h5>
							</div>
						</div>
						<div className="popup__modal_footer">
							<button id="button-modal-cancel" className="popup__modal_button" onClick={handelfalse}>Cancel</button>
							<button id="button-modal-continue" className="popup__modal_button_accent" onClick={handeltrue}>
								{false ? <SVGLoader width={"40px"} height={"40px"} color={"#fff"} /> : 'Continue'}</button>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default DeleteModal

