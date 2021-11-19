import React, { useState } from 'react';
import accountType from '../../types/accountType';
import Profile from '../userAccount/profile';
import ChatChannelsView from '../chat/chatChannelsView';
import Play from '../game/play'

type menuType = "home" | "play" | "chat" | "profile";

interface homeProps {
	account: accountType
	changeAccount: (newAccount: accountType) => void
	unlog: () => void
}

const HomeDisplay: React.FC<homeProps> = ({ changeMenuPage }) => {
	return (<div>
				<h1>Welcome to the Pong Game</h1>
				<button onClick={()=>{changeMenuPage('play')}}>Play</button><>&nbsp;&nbsp;&nbsp;</>
				<button onClick={()=>{changeMenuPage('chat')}}>Chat</button><>&nbsp;&nbsp;&nbsp;</>
				<button onClick={()=>{changeMenuPage('profile')}}>Profile</button>
			</div>);
}

const Home: React.FC<homeProps> = ({ account, changeAccount, unlog }) => {
	const [menuPage, setMenuPage] = useState<menuType>("home");

	const changeMenuPage: (newMenuType: menuType) => void = (newMenuType) => {
		setMenuPage(newMenuType);
	}

	const backToPage: (page: string) => void = (page) => {
		setMenuPage(page);
	}

	if (menuPage === "home") {
		return (<HomeDisplay changeMenuPage={changeMenuPage}/>);
	} else if (menuPage === "play") {
		return <Play account={account} changeAccount={changeAccount} backToPage={backToPage}/>;
	} else if (menuPage === "chat") {
		return <ChatChannelsView account={account} changeAccount={changeAccount} backToPage={backToPage}/>;
	} else if (menuPage === "profile") {
		return <Profile account={account} changeAccount={changeAccount} unlog={unlog} backToPage={backToPage}/>;
	} else {
		return <h1>Home Error</h1>;
	}
}

export default Home;
