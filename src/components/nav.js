import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(){
	return(
		<nav>
			<ul>
				<li><NavLink to='/dashboard' exact activeClassName='is-active'>
						Home
					</NavLink>
				</li>
				<li><NavLink to='/add' exact activeClassName='is-active'>
						New Question
					</NavLink>
				</li>
			</ul>
		</nav>
	)

}