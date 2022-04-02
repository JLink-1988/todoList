import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [item, setItem] = useState("");
	const [todoList, setTodolist] = useState([]);
	return (
		<div className="container">
			<div>TODO LIST</div>
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder="Recipient's username"
					onChange={(event) => {
						setItem(event.target.value);
					}}
					value={item}
				/>
				<button
					className="btn btn-outline-secondary"
					type="button"
					onClick={() => {
						if (item.length > 0) {
							setTodolist([...todoList, item]);
							setItem("");
						}
					}}>
					Button
				</button>
			</div>
			<ul>
				{todoList.map((task, index) => {
					return (
						<li key={index}>
							{task}
							<div
								className="d-flex justify-content"
								onClick={() => {
									setTodolist(
										todoList.filter((el, i) => i !== index)
									);
								}}>
								❌
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Home;
