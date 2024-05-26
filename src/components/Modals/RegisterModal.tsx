import { useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import { states } from '../Data';
import { SVGLoader } from '../SVGLoader';


const RegisterModal = ({ showTask, setShowTask }: any) => {

	const customId = "custom-id-yes";


	useEffect(() => {

	}, []);


	const onSubmitRegistration = (values: any) => {
		const value: any = values;
		// @ts-ignore 
		dispatch(userRegistration(value))
	}








	return (
		<div>
			{showTask && (
				<Modal
					size="lg"
					show={showTask}
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<div>
						{/* <ModalHeader setShow={setShowTask} headerTitle={"Registration"} />   */}
						<Modal.Body>
							<div className="pop_box">
								<div className="modal_container">
									<div className="modal_header">
										<div className="close_button">
										</div>
									</div>

									<div className="container_reg">
										<form  >
											<div className="user__details">
												<div className="input__box">
													<span className="details">First Name</span>
													<input type="text" placeholder="E.g: John Smith"
														value={"firstName"}
														required />
												</div>
												<div className="input__box">
													<span className="details">Last Name</span>
													<input type="text" placeholder="johnWC98"
														value={"LastName"}

														required />
												</div>
												<div className="input__box">
													<span className="details">Email</span>
													<input type="email" placeholder="johnsmith@hotmail.com"


														required />
												</div>
												<div className="input__box">
													<span className="details">Phone Number</span>
													<input type="text" placeholder="012-345-6789"
														value={"Phone Number"}

														required />
												</div>

												<div className="input__box">
													<span className="details">Location</span>
													<select name="country" id="register-select" >
														{states.map((state, i) => (
															<option value={state} key={i}>{state}</option>
														))}
													</select>
												</div>

												<div className="input__box">
													<span className="details">Address</span>
													<input type="text" placeholder="Address" required />
													<p className="formik-errors">{ }</p>
												</div>

												<div className="input__box">
													<span className="details">Role</span>
													<select name="country" id="register-select" >
														<option value="">Select Role</option>
														<option value="SUPER_ADMIN">Super Admin</option>
														<option value="SUPERVISOR">Supervisor</option>
														<option value="EMPLOYEE">Employee</option>
													</select>
												</div>
												<div className="input__box">
													<span className="details">Password</span>
													<input type="text" placeholder="123.eg"

														required />
												</div>
												<div className="input__box">
													<span className="details">Supervisor</span>

													<select name="country" id="register-select"
														value={""}
													>
														<option value="">Select a supervisor</option>
														{/* {supervisor?.map((option: any, index: any) => (
															<option key={index} value={option.id}>
																{`${option.firstName} ${option.LastName}`}
															</option>
														))} */}
													</select>
												</div>
											</div>
											<div className="Register-button-container">
												<button
													id='custom-btn'
													className=" mt-4"
													type="submit"
												>
													{false ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Register"}
												</button>

											</div>
										</form>
									</div>
								</div>


							</div>
						</Modal.Body>
					</div>
				</Modal>
			)
			}
		</div >
	)
}

export default RegisterModal






