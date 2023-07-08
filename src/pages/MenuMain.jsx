import React from 'react'
import Menu from '../Component/Core/Menu'
import Meal from '../Component/Core/Meal'
import Menulist from '../Component/Core/Menulist'
import Navbar from '../Component/Common/Navbar'
import InnerBanner from '../Component/Core/InnerBanner'
import Footer from '../Component/Common/Footer'
const MenuMain = () => {
	return (
		<>
			<Navbar />
			<InnerBanner />
			<Meal />
			<Menu />
			<Menulist />
			<Footer/>
		</>
	)
}

export default MenuMain