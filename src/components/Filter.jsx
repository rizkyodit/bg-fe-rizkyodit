import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { provinces, categories } from '../querries/';
import { useDispatch } from 'react-redux';

const Filter = () => {
	const [filter, setFilter] = useState([]);
	const [isFilterScreen, setIsFilterScreen] = useState(false);
	const dispatch = useDispatch();

	const { data: A, loading: B } = useQuery(categories);
	const { data: D, loading: E } = useQuery(provinces);

	const checked = (e) => {
		filter.push(e.target.value);
		console.log(e.target.name);
		if (e.target.name === 'category')
			dispatch({ type: 'ADD_CATEGORY', data: e.target.value });
		if (e.target.name === 'province')
			dispatch({ type: 'ADD_PROVINCES', data: e.target.value });
	};

	const resetFilter = () => {
		setFilter([]);
		document.getElementById('filter').reset();
		dispatch({ type: 'SET_CATEGORY', data: [] });
		dispatch({ type: 'SET_PROVINCES', data: [] });
	};

	const checker = (el) => {
		for (let i = 0; i < filter.length; i++) {
			if (filter[i] == el) return true;
		}
		return false;
	};

	const filterDelete = (e) => {
		const tmp = filter.filter((el) => el !== e);
		setFilter(tmp);
		dispatch({ type: 'REMOVE_CATEGORY', data: e });
		dispatch({ type: 'REMOVE_PROVINCES', data: e });
	};

	if (B || E) return <h1 style={{ textAlign: 'center' }}>loading</h1>;
	if (filter.length > 0)
		return (
			<>
				<div className="bar">
					<div className="filterField" style={{ justifyContent: 'start' }}>
						{filter.map((el, i) => (
							<div
								className="btn btn-outline-danger filterCard"
								onClick={() => filterDelete(el)}
								key={i}>
								{el}
								<div className="cardDelete tk-futura-pt">X</div>
							</div>
						))}
					</div>
					<div
						className="filterButton"
						onClick={() => setIsFilterScreen(!isFilterScreen)}>
						Filter
					</div>
				</div>
				<div
					className="filterBG"
					style={isFilterScreen ? { display: 'block' } : { display: 'none' }}>
					<div
						className="closeForm tk-futura-pt"
						onClick={() => setIsFilterScreen(false)}>
						X
					</div>
					<form id="filter">
						<div className="filterModal">
							<div className="filterContentHeader">
								<div className="tk-futura-pt">Filter Merchant</div>
								<div
									className="filterModalReset tk-futura-pt"
									style={{ cursor: 'pointer' }}
									onClick={resetFilter}>
									Reset
								</div>
							</div>
							<div className="filterContentBody">
								<div className="filterContentHead">
									<div className="filterContentHeadItem tk-futura-pt">
										Kategori
									</div>
									<div
										className="filterContentHeadItem tk-futura-pt"
										style={{ marginLeft: '155px' }}>
										Provinsi
									</div>
								</div>
								<div className="filterContentContent">
									<div className="filterContent tk-futura-pt">
										{A.Categories.data.map((el) => (
											<div key={el.id} className="borderContent">
												{el.name}
												<input
													type="radio"
													name="category"
													value={el.name}
													checked={checker(el.name)}
													onChange={checked}
												/>
											</div>
										))}
									</div>
									<div className="filterContent tk-futura-pt">
										{D.Provinces.map((e, i) => {
											if (i <= 20)
												return (
													<div key={e.id} className="borderContent">
														{e.name}
														<input
															type="radio"
															name="province"
															value={e.name}
															checked={checker(e.name)}
															onChange={checked}
														/>
													</div>
												);
										})}
									</div>
									<div className="filterContent tk-futura-pt">
										{D.Provinces.map((e, i) => {
											if (i > 20)
												return (
													<div key={e.id} className="borderContent">
														{e.name}
														<input
															type="radio"
															name="province"
															value={e.name}
															checked={checker(e.name)}
															onChange={checked}
														/>
													</div>
												);
										})}
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</>
		);

	return (
		<>
			<div className="bar">
				<div className="alphabetBar">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
				<div
					className="filterButton"
					onClick={() => setIsFilterScreen(!isFilterScreen)}>
					Filter
				</div>
			</div>
			<div
				className="filterBG"
				style={isFilterScreen ? { display: 'block' } : { display: 'none' }}>
				<div
					className="closeForm tk-futura-pt"
					onClick={() => setIsFilterScreen(false)}>
					X
				</div>
				<form id="filter">
					<div className="filterModal">
						<div className="filterContentHeader">
							<div className="tk-futura-pt">Filter Merchant</div>
							<div
								className="filterModalReset tk-futura-pt"
								style={{ cursor: 'pointer' }}
								onClick={resetFilter}>
								Reset
							</div>
						</div>
						<div className="filterContentBody">
							<div className="filterContentHead">
								<div className="filterContentHeadItem tk-futura-pt">
									Kategori
								</div>
								<div
									className="filterContentHeadItem tk-futura-pt"
									style={{ marginLeft: '155px' }}>
									Provinsi
								</div>
							</div>
							<div className="filterContentContent">
								<div className="filterContent tk-futura-pt">
									{A.Categories.data.map((el) => (
										<div key={el.id} className="borderContent">
											{el.name}
											<input
												type="radio"
												value={el.name}
												name="category"
												checked={checker(el.name)}
												onChange={checked}
											/>
										</div>
									))}
								</div>
								<div className="filterContent tk-futura-pt">
									{D.Provinces.map((e, i) => {
										if (i <= 20)
											return (
												<div key={e.id} className="borderContent">
													{e.name}
													<input
														type="radio"
														value={e.name}
														name="province"
														checked={checker(e.name)}
														onChange={checked}
													/>
												</div>
											);
									})}
								</div>
								<div className="filterContent tk-futura-pt">
									{D.Provinces.map((e, i) => {
										if (i > 20)
											return (
												<div key={e.id} className="borderContent">
													{e.name}
													<input
														type="radio"
														value={e.name}
														name="province"
														checked={checker(e.name)}
														onChange={checked}
													/>
												</div>
											);
									})}
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default Filter;
