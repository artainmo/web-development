import React, { useState } from 'react';
import Chat from './chat';
import accountType from '../../types/accountType';
import chatChannelsClass from '../../types/chatChannelsClass';
import { dataBaseAccounts, dataBaseChannels } from '../../types/database';

interface chatProps {
	account: accountType
	changeAccount: (newAccount: accountType) => void
  backToPage?: () => void
  changeChat?: (newChat: string | null) => void
}

const JoinChannel: React.FC<chatProps> = ({ account, changeAccount, changeChat }) => {
  const [searchResults, setSearchResults] = useState<[][]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSearch: (searchValue: string) => void = (searchValue) => {
    let searchResults: number[] = [];

    dataBaseChannels.forEach((item, index) => searchValue.length !== 0 && item.specific !== "private"
                            && !account.chatChannels.some((elem)=> elem.dmOrChannel === "channel" && elem.name === item.name)
                            && item.name.includes(searchValue) && searchResults.push(index))
    setSearchText(searchValue);
    setSearchResults(searchResults);
  }

  const onSubmitDM: (channelIndex: number) => void = (channelIndex) => {
      let tmp = account.chatChannels;

      if (dataBaseChannels[channelIndex].specific === "password" && dataBaseChannels[channelIndex].password !== password) {
          setPassword('');
          return ;
      }
      dataBaseChannels[channelIndex].users.push({name: account.name, administrator: false, mute: false});
      tmp.push(dataBaseChannels[channelIndex]);
      changeAccount({chatChannels: tmp});
      changeChat(account.chatChannels.length - 1);
  }

  return (<div>
            <br/>
            <input type="text" value={searchText} onChange={(e) => handleSearch(e.target.value)}/><br/>
            {searchResults.map((item) => <div>
                                            <br/>
                                            <span>{dataBaseChannels[item].name}</span><>&nbsp;&nbsp;&nbsp;</>
                                            <button onClick={(e)=>{onSubmitDM(item)}}>Join</button><>&nbsp;&nbsp;&nbsp;</>
                                            {dataBaseChannels[item].specific === "password" && <><label>Password: </label>
                                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/></>}
                                         </div>)}
          </div>);
}

const NewChannel: React.FC<chatProps> = ({ account, changeAccount, changeChat }) => {
  const [name, setName] = useState<string>('');
  const [nameAlreadyInUse, setNameAlreadyInUse] = useState<boolean>(false);
  const [specific, setSpecific] = useState<string>('');
  const [password, setPassword] = useState<string | null>(null);

  const onSubmitChannel: () => void = () => {
      if (account.chatChannels.some((elem)=> elem.dmOrChannel === "channel" && elem.name === name)
          || dataBaseChannels.some((elem)=> elem.name === name)) {
        setName('');
        setNameAlreadyInUse(true);
      } else {
        let newChannel = new chatChannelsClass("channel", specific, password, name, [], account.name, [{name: account.name, administrator: true, mute: false}]);
        let tmp = account.chatChannels;

        tmp.push(newChannel);
        // dataBaseChannels.push(newChannel); //Real database should exist so that no error occurs when leaving created channel
        changeAccount({chatChannels: tmp});
        changeChat(account.chatChannels.length - 1);
        setNameAlreadyInUse(false);
      }
  }

  const changeSpecific: (newValue: string) => void = (newValue) => {
    setSpecific(newValue)
  }

  return (<div>
            <form>
              <br/>
              <label>Channel name: </label>
              <input type="text" value={name} name="channelname" onChange={(e)=>setName(e.target.value)} required/><br/><br/>
              <label>public</label>
              <input type="radio" name="specific" onChange={()=>changeSpecific("public")} required/><>&nbsp;&nbsp;&nbsp;</>
              <label>private</label>
              <input type="radio" name="specific" onChange={()=>changeSpecific("private")} required/><>&nbsp;&nbsp;&nbsp;</>
              <label>password</label>
              <input type="radio"name="specific" onChange={()=>changeSpecific("password")} required/><br/><br/>
              {specific === "password" && <><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/></>}
              {nameAlreadyInUse && <p>Name already exists try another one</p>}
              <input type="submit" onClick={()=>onSubmitChannel()}/>
            </form>
          </div>)
}

const NewDM: React.FC<chatProps> = ({ account, changeAccount, changeChat }) => {
  const [searchResults, setSearchResults] = useState<[][]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch: (searchValue: string) => void = (searchValue) => {
    let searchResults: string[][] = [];

    dataBaseAccounts.forEach((item) => searchValue.length !== 0
                            && !account.chatChannels.some((elem)=> elem.dmOrChannel === "dm" && elem.name === item[0])
                            && item[0].includes(searchValue) && item[0] !== account.name && searchResults.push(item))
    setSearchText(searchValue);
    setSearchResults(searchResults);
  }

  const onSubmitDM: (name: string) => void = (name) => {
      let tmp = account.chatChannels;
      tmp.push(new chatChannelsClass("dm", "non-block", null, name, [], null, [{name: account.name, administrator: false, mute: false}, {name: name, administrator: false, mute: false}]));
      changeAccount({chatChannels: tmp});
      changeChat(account.chatChannels.length - 1);
  }

  return (<div>
            <br/>
            <input type="text" value={searchText} onChange={(e) => handleSearch(e.target.value)}/><br/>
            {searchResults.map((item) => <div>
                                            <br/>
                                            <span>{item[0]}</span><>&nbsp;&nbsp;&nbsp;</>
                                            <button onClick={(e)=> {onSubmitDM(item[0])}}>Start DM</button>
                                         </div>)}
          </div>);
}

const ChatChannelsView: React.FC<chatProps> = ({ account, changeAccount, backToPage }) => {
    const [newdm, setNewdm] = useState<boolean>(false);
    const [newchannel, setNewchannel] = useState<boolean>(false);
    const [joinchannel, setJoinchannel] = useState<boolean>(false);
    const [currentChat, setCurrentChat] = useState<string | null>(null);

    const changeChat: (newChat: number | null) => void = (newChat) => {
      setNewchannel(false);
      setNewdm(false);
      setJoinchannel(false);
      setCurrentChat(newChat);
    }

    if (currentChat !== null) {
      return (<Chat account={account} changeAccount={changeAccount} changeChat={changeChat} backToPage={backToPage} chatIndex={currentChat}/>);
    } else {
      return (<div>
                <button onClick={()=>{backToPage("home")}}>Back</button>
                <h1>Chat</h1>
                <button onClick={()=> {setNewdm(!newdm); setNewchannel(false); setJoinchannel(false);}}>New DM</button><>&nbsp;&nbsp;&nbsp;</>
                <button onClick={()=>{setNewchannel(!newchannel); setNewdm(false); setJoinchannel(false);}}>New Channel</button><>&nbsp;&nbsp;&nbsp;</>
                <button onClick={()=> {setJoinchannel(!joinchannel); setNewchannel(false); setNewdm(false);}}>Join Channel</button>
                {newdm && <NewDM account={account} changeAccount={changeAccount} changeChat={changeChat}/>}
                {newchannel && <NewChannel account={account} changeAccount={changeAccount} changeChat={changeChat}/>}
                {joinchannel && <JoinChannel account={account} changeAccount={changeAccount} changeChat={changeChat}/>}
                <br/><br/>
                {account.chatChannels.length ? account.chatChannels.map((item, index)=><p onClick={()=>changeChat(index)}>{`${item.name} -- ${item.dmOrChannel}`}</p>) : <p>No chats</p>}
              </div>);
    }
}


export default ChatChannelsView

// • Through the chat interface users should be able to ask other players to do a Pong
// match
// • Through the chat interface users must be able to see other players profiles
