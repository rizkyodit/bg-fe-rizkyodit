import React, { useState } from 'react';

import './App.css';
import './font.css';
import user from './assets/ComponentTMP_0-image9.jpg';
import fashion from './assets/ComponentTMP_0-image2.jpg';
import craft from './assets/ComponentTMP_0-image3.jpg';
import fnb from './assets/ComponentTMP_0-image4.jpg';
import health from './assets/ComponentTMP_0-image5.jpg';
import tourism from './assets/ComponentTMP_0-image6.jpg';
import hobby from './assets/ComponentTMP_0-image7.jpg';
import telco from './assets/ComponentTMP_0-image8.jpg';
import twitter from './assets/MaskGroup26.png';
import instagram from './assets/MaskGroup27.png';
import facebook from './assets/MaskGroup28.png';
// import search from './assets/search.png';

import Data from './components/Data';
import Filter from './components/Filter';

const App = () => {
	const [select, setSelected] = useState({
		home: false,
		merchant: false,
		promo: false,
		kegiatan: false,
		kontak: false,
	});

	const isSelected = (e) => {
		const key = e.target.id;
		setSelected({ [key]: true });
	};

	return (
		<>
			<nav>
				<div
					id="home"
					className="navItem tk-futura-pt"
					onClick={(e) => isSelected(e)}>
					Home
					<div className={select.home ? 'selected' : ''} />
				</div>
				<div
					id="merchant"
					className="navItem tk-futura-pt"
					onClick={(e) => isSelected(e)}>
					Merchant
					<div className={select.merchant ? 'selected' : ''} />
				</div>
				<div
					id="promo"
					className="navItem tk-futura-pt"
					onClick={(e) => isSelected(e)}>
					Promo
					<div className={select.promo ? 'selected' : ''} />
				</div>
				<div
					id="kegiatan"
					className="navItem tk-futura-pt"
					onClick={(e) => isSelected(e)}>
					Kegiatan
					<div className={select.kegiatan ? 'selected' : ''} />
				</div>
				<div
					id="kontak"
					className="navItem tk-futura-pt"
					onClick={(e) => isSelected(e)}>
					Kontak Kami
					<div className={select.kontak ? 'selected' : ''} />
				</div>
				<input
					type="text"
					className="navSearch tk-futura-pt"
					placeholder="Cari jam tangan kayu.."
				/>
				<img className="navImage" src={user} alt="user" />
			</nav>
			<div className="category">
				<p className="categoryTitle tk-futura-pt" style={{ marginTop: 30 }}>
					Kategori Merchant
				</p>
				<div className="wave" />
				<label
					className="itemLabel tk-futura-pt"
					style={{ marginLeft: '19vw' }}>
					<img className="catItem" src={fashion} alt="Fashion" />
					Fashion
				</label>
				<label className="itemLabel tk-futura-pt">
					<img className="catItem" src={craft} alt="Craft" />
					Craft
				</label>
				<label className="itemLabel tk-futura-pt">
					<img className="catItem" src={fnb} alt="F & B" />
					F&B
				</label>
				<label className="itemLabel tk-futura-pt">
					<img className="catItem" src={hobby} alt="Hobby & Lifestyle" />
					Hobby & Lifestyle
				</label>
				<label className="itemLabel tk-futura-pt">
					<img className="catItem" src={health} alt="Health & Beauty" />
					Health & Beauty
				</label>
				<label className="itemLabel tk-futura-pt">
					<img className="catItem" src={tourism} alt="Tourism" />
					Tourism
				</label>
				<label className="itemLabel tk-futura-pt">
					<img className="catItem" src={telco} alt="Telco" />
					Telco
				</label>
			</div>
			<div>
				<Filter />
			</div>
			<div style={{ width: '100vw', height: '650px' }}>
				<Data />
			</div>
			<div className="borderLine" />
			<div className="footer">
				<p style={{ marginLeft: '350px', cursor: 'pointer' }}>
					Term and Condition
				</p>
				<p style={{ marginLeft: '60px', cursor: 'pointer' }}>Privacy Policy</p>
				<div style={{ marginLeft: '850px' }}>
					<img
						style={{ marginRight: '20px', cursor: 'pointer' }}
						src={twitter}
						alt="twitter"
					/>
					<img
						style={{ marginRight: '20px', cursor: 'pointer' }}
						src={instagram}
						alt="instagram"
					/>
					<img style={{ cursor: 'pointer' }} src={facebook} alt="facebook" />
				</div>
			</div>
		</>
	);
};

export default App;
