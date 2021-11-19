import React, { useState } from 'react';
import accountType from '../../types/accountType';
import { MdOutlinePersonOutline } from "react-icons/md";
import { dataBaseAccounts } from '../../types/database';

let g_copyAccount: accountType;

interface profileProps {
	account: accountType
	changeAccount: (accountType) => void
	unlog?: () => void
  backToPage: () => void
}

interface FriendsProps {
  account: accountType
  changeAccount: (newAccount: accountType) => void
  changeAccountOwner?: () => void
  ownAccount?: boolean
}

const FindFriends: React.FC<FriendsProps> = ({ account, changeAccount }) => {
  const [searchResults, setSearchResults] = useState<[][]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch: (searchValue: string) => void = (searchValue) => {
    let searchResults: string[][] = [];

    dataBaseAccounts.forEach((item) => searchValue.length !== 0 && !account.friends.includes(item)
                              && item[0].includes(searchValue) && item[0] !== account.name && searchResults.push(item))
    setSearchText(searchValue);
    setSearchResults(searchResults);
  }

  return (<div>
            <input type="text" value={searchText} onChange={(e) => handleSearch(e.target.value)}/><br/>
            {searchResults.map((item) => <div>
                                            <br/>
                                            <span>{item[0]}</span><>&nbsp;&nbsp;&nbsp;</>
                                            <button onClick={(e)=> {
                                                                    let tmp = account.friends;
                                                                    tmp.push(item);
                                                                    changeAccount({friends: tmp});
                                                                    handleSearch("");}}>Add Friend</button>
                                         </div>)}
          </div>);
}

const Friends: React.FC<FriendsProps> = ({ account, changeAccount, changeAccountOwner, ownAccount }) => {

  const seeFriendProfile: (friendInfo: string[]) => void = (friendInfo) => {
    g_copyAccount = account;
    changeAccountOwner();
    changeAccount({name: friendInfo[0], password: '', avatar: null, victories: 0, losses: 0, matchHistory: [], friends: []});
  }

  return (<div>
            <h3>Friends</h3>
            {account.friends.length ? account.friends.map((elem) => <p onClick={()=>seeFriendProfile(elem)}>{`${elem[0]}: ${elem[2]}`}</p>) : <p>No friends</p>}
            {ownAccount && <FindFriends account={account} changeAccount={changeAccount}/>}
          </div>);
}

const Profile: React.FC<profileProps> = ({ account, changeAccount, unlog, backToPage }) => {
  const [ownAccount, setOwnAccount] = useState<boolean>(true);

  const changeAccountOwner: () => void = () => {
    setOwnAccount(!ownAccount);
  }

  return (<div>
              {ownAccount && <><button onClick={()=>{backToPage("home")}}>Back</button><>&nbsp;&nbsp;&nbsp;</></>}
              {ownAccount && <button onClick={()=>{unlog()}}>Log out</button>}
              {!ownAccount && <><button onClick={()=>{backToPage("profile"); changeAccount(g_copyAccount); changeAccountOwner();}}>Back</button><>&nbsp;&nbsp;&nbsp;</></>}
              <h1>Profile</h1>
              {account.avatar ? <img src={account.avatar} alt={"avatar"} height='50em' width='50em'/> : <MdOutlinePersonOutline size='3em'/>}
              <p>Name: {account.name}</p>
              <h3>Stats</h3>
              <p>Victories: {account.victories}</p>
              <p>Losses: {account.losses}</p>
              <p>Ratio: {(account.victories / account.losses) ? (account.victories / account.losses) : 0}</p>
              <h3>Match History</h3>
              {account.matchHistory.length ? account.matchHistory.map((elem)=><p>{elem}</p>) : <p>No matches</p>}
              <Friends account={account} changeAccount={changeAccount} changeAccountOwner={changeAccountOwner} ownAccount={ownAccount}/>
          </div>);
}

export default Profile;
