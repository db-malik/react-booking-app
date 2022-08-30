import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBed,
	faCalendarDays,
	faCar,
	faPerson,
	faPlane,
	faTaxi,
} from "@fortawesome/free-solid-svg-icons";

import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Header.css";
import OptionBtn from "../UI/Buttons/OptionBtn/OptionBtn";
import { useNavigate } from "react-router";

const Header = (props) => {
	const navigate = useNavigate();
	const [openDate, setOpenDate] = useState(false);
	const [openOptions, setOpenOptions] = useState(false);
	const [destination, setDestination] = useState("");
	const [options, setOption] = useState({
		adult: 1,
		children: 0,
		roomNumber: 1,
	});

	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const handlerOptions = (option, operation) => {
		setOption((prev) => {
			return {
				...prev,
				[option]: operation === "i" ? options[option] + 1 : options[option] - 1,
			};
		});
	};
	const handlerSearch = () => {
		navigate("/hotels", { state: { destination, date, options } });
	};

	return (
		<div className={props.type !== "list" ? "header" : "header listMode"}>
			<div className="headerContainer">
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentals</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faBed} />
						<span>Attraction</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport taxis</span>
					</div>
				</div>

				{props.type !== "list" && (
					<div>
						<h1 className="headerTitle">Find your next stay</h1>
						<p className="headerDesc">
							Search low prices on hotels, homes and much more...
						</p>
						<div className="searchBar">
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faBed} className="headerIcon" />
								<input
									type="text"
									placeholder="Where are you going"
									className="headerSearchInput"
									onChange={(e) => setDestination(e.target.value)}
								/>
							</div>
							<div className="headerSearchItem headerSearchDate">
								<FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
								<span
									onClick={() => setOpenDate(!openDate)}
									className="headerSearchText"
								>
									{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
										date[0].endDate,
										"MM/dd/yyyy"
									)}`}
								</span>
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={date}
										className="dateRange"
									/>
								)}
							</div>
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faPerson} className="headerIcon" />
								<span
									className="headerSearchText"
									onClick={() => setOpenOptions(!openOptions)}
								>
									{`${options.adult}  adult . ${options.children} children . ${options.roomNumber} Room`}
								</span>
								{openOptions && (
									<div className="options">
										<div className="optionsItem">
											<span className="optionText">Adult</span>
											<div className="optionCounter">
												<OptionBtn
													clicked={() => handlerOptions("adult", "d")}
													disabled={options.adult <= 1}
												>
													-
												</OptionBtn>
												<span className="optionCounterNumber">
													{options.adult}
												</span>
												<OptionBtn
													clicked={() => handlerOptions("adult", "i")}
													disabled={options.adult > 5}
												>
													+
												</OptionBtn>
											</div>
										</div>

										<hr className="hrOptionItems" />

										<div className="optionsItem">
											<span className="optionText">Children</span>
											<div className="optionCounter">
												<OptionBtn
													clicked={() => handlerOptions("children", "d")}
													disabled={options.children === 0}
												>
													-
												</OptionBtn>
												<span className="optionCounterNumber">
													{options.children}
												</span>
												<OptionBtn
													clicked={() => handlerOptions("children", "i")}
													disabled={options.children > 5}
												>
													+
												</OptionBtn>
											</div>
										</div>
										<hr className="hrOptionItems" />
										<div className="optionsItem">
											<span className="optionText">Room</span>
											<div className="optionCounter">
												<OptionBtn
													clicked={() => handlerOptions("roomNumber", "d")}
													disabled={options.roomNumber === 0}
												>
													-
												</OptionBtn>
												<span className="optionCounterNumber">
													{options.roomNumber}
												</span>
												<OptionBtn
													clicked={() => handlerOptions("roomNumber", "i")}
													disabled={options.roomNumber >= 10}
												>
													+
												</OptionBtn>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="headerSearchItem">
								<button className="hederSearchBtn" onClick={handlerSearch}>
									search
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
