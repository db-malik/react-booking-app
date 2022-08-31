import React, { useState } from "react";
import { useLocation } from "react-router";

import Header from "../../components/header/Header";
import NavBar from "../../components/navBar/NavBar";

import { DateRange } from "react-date-range";
import { format } from "date-fns";

import classes from "./List.module.css";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
	const location = useLocation();
	const [openDate, setOpenDate] = useState(false);
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [options, setOptions] = useState(location.state.options);
	return (
		<div>
			<NavBar />
			<Header type={"list"} />
			<div className={classes.listContainer}>
				<div className={classes.listWrapper}>
					<div className={classes.listSearch}>
						<h1 className={classes.lsTitle}>Search</h1>
						<div className={classes.lsItem}>
							<label htmlFor="">Destination</label>
							<input type="text" placeholder={destination} />
						</div>

						<div className={classes.lsItem}>
							<label>Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								date[0].startDate,
								"MM/dd/yyyy"
							)} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDate([item.selection])}
									minDate={new Date()}
									ranges={date}
								/>
							)}
						</div>
						<div className={classes.lsItem}>
							<label>Options</label>
							<div className={classes.lsOptions}>
								<div className={classes.lsOptionItem}>
									<span className={classes.lsOptionText}>
										Min price <small>per night</small>
									</span>
									<input type="number" className={classes.lsOptionInput} />
								</div>
								<div className={classes.lsOptionItem}>
									<span className={classes.lsOptionText}>
										Max price <small>per night</small>
									</span>
									<input type="number" className={classes.lsOptionInput} />
								</div>
								<div className={classes.lsOptionItem}>
									<span className={classes.lsOptionText}>Adult</span>
									<input
										type="number"
										min={1}
										className={classes.lsOptionInput}
										placeholder={options.adult}
									/>
								</div>
								<div className={classes.lsOptionItem}>
									<span className={classes.lsOptionText}>Children</span>
									<input
										type="number"
										min={0}
										className={classes.lsOptionInput}
										placeholder={options.children}
									/>
								</div>
								<div className={classes.lsOptionItem}>
									<span className={classes.lsOptionText}>Room</span>
									<input
										type="number"
										min={1}
										className={classes.lsOptionInput}
										placeholder={options.room}
									/>
								</div>
							</div>
						</div>
						<button>Search</button>
					</div>
					<div className={classes.listResult}>
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
