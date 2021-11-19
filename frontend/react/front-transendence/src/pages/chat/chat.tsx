import React, { useState } from 'react';
import accountType from '../../types/accountType';
// import { dataBaseChannels } from '../../types/database';


interface chatProps {
	account: accountType
	changeAccount: (newAccount: accountType) => void
  backToPage?: () => void
  chatIndex: number | null
  changeChat?: (newChat: string | null) => void
  block?: string
  back?: () => void
}

const ChannelInfo: React.FC<chatProps> = ({ account, changeAccount, chatIndex }) => {
  const [info, setInfo] = useState<boolean>(false);
  const [settings, setSettings] = useState<boolean>(false);
  const [specific, setSpecific] = useState<string>('');
  const [password, setPassword] = useState<string | null>(null);

  const changeSpecific: (newValue: string) => void = (newValue) => {
    setSpecific(newValue)
  }

  const resetSettings: () => void = () => {
    setPassword(null);
    changeSpecific('');
  }

  const onSubmitChannel: () => void = () => {
    let tmp = account.chatChannels;
    // let channelIndex = dataBaseChannels.findIndex((item)=>(item.name === account.chatChannels[chatIndex].name));

    if (specific === "password" && password === null) {
      return ;
    }
    tmp[chatIndex].specific = specific;
    tmp[chatIndex].password = password;
    // dataBaseChannels[channelIndex].specific = specific;
    // dataBaseChannels[channelIndex].password = password;
    changeAccount({chatChannels: tmp});
    setSettings(false);
    resetSettings();
  }

  const changeAdmin: (UserIndex: number) => void = (UserIndex) => {
    let tmp = account.chatChannels;
    // let channelIndex = dataBaseChannels.findIndex((item)=>(item.name === account.chatChannels[chatIndex].name));

    // dataBaseAccounts[channelIndex].users[UserIndex].administrator = !dataBaseAccounts[channelIndex].users[UserIndex].administrator;
    tmp[chatIndex].users[UserIndex].administrator = !tmp[chatIndex].users[UserIndex].administrator;
    changeAccount({chatChannels: tmp});
  }

  const ban: (UserIndex: number) => void = (UserIndex) => {
    let tmp = account.chatChannels;
    // let channelIndex = dataBaseChannels.findIndex((item)=>(item.name === account.chatChannels[chatIndex].name));

    // dataBaseAccounts[channelIndex].users = dataBaseAccounts[channelIndex].users.filter((item, index)=>index !== UserIndex);
    tmp[chatIndex].users = tmp[chatIndex].users.filter((item, index)=>index !== UserIndex);
    changeAccount({chatChannels: tmp});
  }

  const mute: (UserIndex: number) => void = (UserIndex) => {
    let tmp = account.chatChannels;
    // let channelIndex = dataBaseChannels.findIndex((item)=>(item.name === account.chatChannels[chatIndex].name));

    // dataBaseAccounts[channelIndex].users[UserIndex].mute = !dataBaseAccounts[channelIndex].users[UserIndex].mute;
    tmp[chatIndex].users[UserIndex].mute = !tmp[chatIndex].users[UserIndex].mute;
    changeAccount({chatChannels: tmp});
  }

  return (<div>
            <button onClick={()=>{setInfo(!info); setSettings(false); resetSettings();}}>Channel Info</button><>&nbsp;&nbsp;&nbsp;</>
            {account.chatChannels[chatIndex].owner === account.name && <button onClick={()=>{setSettings(!settings); setInfo(false); resetSettings();}}>Settings</button>}
            {info && <>
                      <ul>
                        <li>{`Type: ${account.chatChannels[chatIndex].specific}`}</li>
                        <li>{`Owner: ${account.chatChannels[chatIndex].owner}`}</li>
                        {account.chatChannels[chatIndex].specific === "password" && <li>{`Password: ${account.chatChannels[chatIndex].password}`}</li>}
                        <li>{account.chatChannels[chatIndex].users.find((elem)=>elem.name === account.name).administrator ?
                            "You have administrator rights in this channel" : "You have no rights in this channel"}</li>
                      </ul>
                      <ul>
                        <label>Users</label>
                        {account.chatChannels[chatIndex].users.map((item, index)=>{return (<div>
                                                                                              {item.name !== account.name && <li>{item.name + " --- " + (item.administrator ? "administrator" : "user") + (item.mute ? " --- mute   " : "   ")}
                                                                                              {account.chatChannels[chatIndex].owner === account.name && <button onClick={(e)=>changeAdmin(index)}>Change Status</button>}
                                                                                              {account.chatChannels[chatIndex].users.find((elem)=>elem.name === account.name).administrator && <button onClick={(e)=>ban(index)}>Ban</button>}
                                                                                              {account.chatChannels[chatIndex].users.find((elem)=>elem.name === account.name).administrator && <button onClick={(e)=>mute(index)}>{item.mute ? "Unmute" : "mute"}</button>}</li>}
                                                                                            </div>);})}
                      </ul>
                    </>}
            {settings && <>
                          <br/><br/>
                          <label>public</label>
                          <input type="radio" name="specific" value="on" onChange={()=>changeSpecific("public")} required/><>&nbsp;&nbsp;&nbsp;</>
                          <label>private</label>
                          <input type="radio" name="specific" onChange={()=>changeSpecific("private")} required/><>&nbsp;&nbsp;&nbsp;</>
                          <label>password</label>
                          <input type="radio"name="specific" onChange={()=>changeSpecific("password")} required/><br/><br/>
                          {specific === "password" && <><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/><br/><br/></>}
                          <input type="submit" onClick={()=>onSubmitChannel()}/>
                          <br/>
                        </>}
            <br/><br/>
          </div>)
}

const Message: React.FC<chatProps> = ({ account, changeAccount, chatIndex, block }) => {
  const [message, setMessage] = useState<string>('');

  const changeMessage: (newMessage: string) => void = (newMessage) => {
    setMessage(newMessage);
  }

  const submitMessage: () => void = () => {
    let tmp = account.chatChannels;

    tmp[chatIndex].history.push({name: account.name, message: message})
    changeAccount({chatChannels: tmp});
    changeMessage('');
  }

  return (<div>
            {account.chatChannels[chatIndex].history.map((elem)=> <p>{`${elem.name} --- ${elem.message}`}</p>)}
            <input type="text" value={message} onChange={(e)=>changeMessage(e.target.value)}/>
            {block !== "block" ? <input type="submit" value="Send" onClick={(e)=>submitMessage()}/>
                                : <input type="submit" value="Send" onClick={(e)=>submitMessage()} disabled/>}
          </div>);
}

const Chat: React.FC<chatProps> = ({ account, changeAccount, backToPage, chatIndex, changeChat }) => {
  let dm: boolean;
  account.chatChannels[chatIndex].dmOrChannel === "dm" ? dm = true : dm = false;

  const back: () => void = () => {
    changeChat(null);
    // backToPage("chat");
  }

  const setBlock: () => void = () => {
    let tmp = account.chatChannels;
    tmp[chatIndex].specific === "non-block" ?
          tmp[chatIndex].specific = "block" : tmp[chatIndex].specific = "non-block";
    changeAccount({chatChannels: tmp});
  }

  const leaveChannel: () => void = () => {
    let tmp = account.chatChannels;
    // let channelIndex = dataBaseChannels.findIndex((item)=>(item.name === account.chatChannels[chatIndex].name));

    // dataBaseChannels[channelIndex].users = dataBaseChannels[channelIndex].users.filter((item)=>item.name !== account.name);
    // if (dataBaseChannels[channelIndex].users.length === 0) {
    //   dataBaseChannels.filter((item, index)=> index !== channelIndex);
    // } else {
    //   dataBaseChannels[channelIndex].owner = dataBaseChannels[channelIndex].users[0];
    //   dataBaseChannels[channelIndex].users[0].administrator = true;
    // }
    tmp = tmp.filter((item)=> (item.name !== tmp[chatIndex].name || item.dmOrChannel === "dm"));
    changeAccount({chatChannels: tmp});
    back();
  }

  return (<div>
            <button onClick={()=>back()}>Back</button>
            {dm && <button onClick={()=>setBlock()}>{account.chatChannels[chatIndex].specific === "non-block" ? "Block" : "Unblock"}</button>}
            {!dm && <><>&nbsp;&nbsp;&nbsp;</><button onClick={()=>leaveChannel()}>Leave Channel</button></>}
            <h1>{account.chatChannels[chatIndex].name}</h1>
            {!dm && <ChannelInfo account={account} changeAccount={changeAccount} chatIndex={chatIndex}/>}
            <Message account={account} changeAccount={changeAccount} chatIndex={chatIndex} block={account.chatChannels[chatIndex].specific}/>
          </div>);
}

export default Chat
