import React, {useState} from "react"
function SideBar()
{
	const [isOpen, setIsOpen] = useState(false)
	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}
	
	return(
		<><button onClick={toggleSidebar} className="items-center">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
				<path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
			</svg>
		</button>
		<div id="sidebar" className={`bg-white fixed right-0 top-0 h-screen w-3/4 items-start justify-start shadow-md shadow-black z-50 ${isOpen ? 'hidden' : 'flex'}`}>
				<nav className=" font-mono p-2 m-0">
					<ul className="text-start text-3xl m-0 p-5">
						<li>
							<button id="toggle-sidebar" className="transition ease-in-out delay-75 hover:scale-105 hover:text-red-500" type="button" onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg> </button>
						</li>
						<li className="transition ease-in-out delay-75 hover:text-red-500 hover:scale-105">
							<a href="/">
								About Me
							</a>
						</li>
						<li className="transition ease-in-out delay-75 hover:text-red-500 hover:scale-105">
							<a href="/portforlio/">
								Portfolio
							</a>
						</li>
						<li className="transition ease-in-out delay-75 hover:text-red-500 hover:scale-105">
							<a href="mailto:wizktec@gmail.com">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div></>
	)

}

export default SideBar;

	