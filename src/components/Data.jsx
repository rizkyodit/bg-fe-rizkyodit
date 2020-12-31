import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { merchant } from '../querries/';
import { useSelector } from 'react-redux';

const Data = () => {
	const [arrA, setArrA] = useState([]);
	const [arrB, setArrB] = useState([]);
	const [arrC, setArrC] = useState([]);
	const [page, setPage] = useState('');
	const category = useSelector((state) => state.category);
	const province = useSelector((state) => state.provinces);

	const goToPage = (page) => {
		setPage(page);
		setArrA([]);
		setArrB([]);
		setArrC([]);
		refetch();
	};

	const { data, loading, refetch } = useQuery(merchant, {
		variables: {
			page: page || 1,
			category,
			province,
		},
	});

	if (loading)
		return (
			<h1
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '100px',
				}}>
				loading
			</h1>
		);

	if (!data)
		return (
			<>
				<div className="data filterError">
					Oops, Hasil Filter tidak ditemukan
				</div>
				<div className="btn btn-danger buttonError">Ganti Pilihan Filter</div>
			</>
		);

	let obj = {};
	for (const [i, el] of data.Merchants.data.entries()) {
		if (i === 0) {
			obj[el.name[0]] = [];
		} else if (el.name[0] !== data.Merchants.data[i - 1].name[0]) {
			obj[el.name[0]] = [];
		}
		obj[el.name[0]].push(el.name);
	}

	Object.keys(obj).forEach((e) => {
		if (arrA.length <= 12) {
			arrA.push(e);
			obj[e].forEach((el) => {
				if (arrA.length <= 12) arrA.push(el);
				else if (arrB.length <= 12) arrB.push(el);
				else if (arrC.length <= 12) arrC.push(el);
			});
		} else if (arrB.length <= 12) {
			arrB.push(e);
			obj[e].forEach((el) => {
				if (arrB.length <= 12) arrB.push(el);
				else if (arrC.length <= 12) arrC.push(el);
			});
		} else if (arrC.length <= 12) {
			arrC.push(e);
			obj[e].forEach((el) => {
				arrC.push(el);
			});
		}
	});

	return (
		<>
			<div className="data">
				<div className="dataPart">
					{arrA.map((e, i) => (
						<div
							key={i}
							className={
								e.length === 1 ? 'word tk-futura-pt' : 'regular tk-futura-pt'
							}>
							{e}
						</div>
					))}
				</div>
				<div className="dataPart">
					{arrB.map((e, i) => (
						<div
							key={i}
							className={
								e.length === 1 ? 'word tk-futura-pt' : 'regular tk-futura-pt'
							}>
							{e}
						</div>
					))}
				</div>
				<div className="dataPart">
					{arrC.map((e, i) => (
						<div
							key={i}
							className={
								e.length === 1 ? 'word tk-futura-pt' : 'regular tk-futura-pt'
							}>
							{e}
						</div>
					))}
				</div>
			</div>
			<div className="pagination">
				<p onClick={() => goToPage(1)} style={{ cursor: 'pointer' }}>
					1
				</p>
				<p onClick={() => goToPage(2)} style={{ cursor: 'pointer' }}>
					2
				</p>
				<p onClick={() => goToPage(3)} style={{ cursor: 'pointer' }}>
					3
				</p>
				<p onClick={() => goToPage(4)} style={{ cursor: 'pointer' }}>
					4
				</p>
				<p onClick={() => goToPage(5)} style={{ cursor: 'pointer' }}>
					5
				</p>
				<p onClick={() => goToPage(6)} style={{ cursor: 'pointer' }}>
					6
				</p>
				<p onClick={() => goToPage(7)} style={{ cursor: 'pointer' }}>
					7
				</p>
				<p onClick={() => goToPage(8)} style={{ cursor: 'pointer' }}>
					8
				</p>
				<p onClick={() => goToPage(9)} style={{ cursor: 'pointer' }}>
					9
				</p>
				<p
					onClick={() => goToPage(10)}
					style={{ cursor: 'pointer', letterSpacing: '0px' }}>
					10
				</p>
			</div>
		</>
	);
};

export default Data;
