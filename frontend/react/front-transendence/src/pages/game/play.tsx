import React, { useState, useEffect } from 'react';
import accountType from '../../types/accountType';
import { dataBaseGames } from '../../types/database';

const dataBaseMaps = ['black', 'white', 'winter', 'summer', 'night'];

interface gameType {
  ballSpeed: number
  map: string
  players: (string | null)[]
}

interface playProps {
  account: accountType
  changeAccount: (newAccount: accountType) => void
  backToPage?: () => void
  getGame?: "create" | "join" | null
  changeGetGame?: (page: string | null) => void
  changeGame?: (newGame: gameType | null) => void
  game?: gameType | null
}

const PreGamePage: React.FC<playProps> = ({ account, changeAccount, getGame, changeGetGame, changeGame, game }) => {
  let myGame: gameType = game;

  // const verifySecondPlayer: () => void = () => {
  //   while (dataBaseGames!.find((item)=>item.players[0] === account.name)!.players[1] === null) {}
  //   myGame.players[1] = dataBaseGames!.find((item)=>item.players[0] === account.name)!.players[1];
  //   changeGame(myGame);
  // }

  // useEffect(()=>verifySecondPlayer());
  return (<div>
            <button onClick={()=>{changeGame(null); (getGame === "join" && changeGetGame(null))}}>Back</button>
            <h1>Waiting for a second player..</h1>
            <p>{`Game ball speed: ${game.ballSpeed}`}</p>
            <p>{`Game map: ${game.map}`}</p>
          </div>)
}

const JoinGame: React.FC<playProps> = ({ account, changeAccount, changeGetGame, changeGame }) => {
  let game: gameType | undefined = undefined;

  const findGame: () => void = () => {
    while (game === undefined) {
      game = dataBaseGames.find((item)=>item.players[1] === null);
    }
    game!.players[1] = account.name;
    console.log(game);
    changeGame(game);
  }

  useEffect(()=>findGame());
  return (<div>
            <button onClick={()=>{changeGetGame(null)}}>Back</button>
            <h1>Searching Game</h1>
          </div>)
}

const CreateGame: React.FC<playProps> = ({ account, changeAccount, changeGetGame, changeGame }) => {
  const [ballSpeed, setBallSpeed] = useState<number>(1);
  const [map, setMap] = useState<string | null>("black");

  const onSubmit: () => void = () => {
    let game: gameType;

    game = {ballSpeed: ballSpeed, map: map, players: [account.name, null]};
    dataBaseGames.push({ballSpeed: ballSpeed, map: map, players: [account.name, null]});
    changeGame(game);
  }

  const changeMap: (newMap: string) => void = (newMap) => {
    setMap(newMap);
  }

  return (<form>
            <button onClick={()=>{changeGetGame(null)}}>Back</button>
            <h1>Create Game</h1>
            <label>Ball Speed: </label><>&nbsp;&nbsp;&nbsp;</>
            <input type="number" step="1" min="1" max="3" value={ballSpeed} onChange={(e)=>setBallSpeed(e.target.value)} required/>
            <br/><br/>
            <label>Map: </label><>&nbsp;&nbsp;&nbsp;</>
            <select onChange={(e)=>changeMap(e.target.value)} required>
              {dataBaseMaps.map((item)=> <option>{item}</option>)}
            </select>
            <br/><br/>
            <button type="submit" onClick={()=>onSubmit()}>Create Game</button>
          </form>)
}

const Play: React.FC<playProps> = ({ account, changeAccount, backToPage }) => {
  const [getGame, setGetGame] = useState<"create" | "join" | null>(null);
  const [game, setGame] = useState<gameType | null>(null);

  const changeGetGame: (page: string | null) => void = (page) => {
    setGetGame(page)
  }

  const changeGame: (newGame: gameType | null) => void = (newGame) => {
    setGame(newGame);
  }

  if (game !== null && game.players[1] !== null) {
    return (<div>
              <button onClick={()=>{changeGame(null); changeGetGame(null);}}>Back</button>
              <h1>GAME</h1>
              {/* <GamePong account={account} changeAccount={changeAccount} backToPage={backToPage} game={game}/> */}
            </div>);
  } else if (game !== null) {
    return <PreGamePage account={account} changeAccount={changeAccount} getGame={getGame} changeGetGame={changeGetGame} changeGame={changeGame} game={game}/>;
  } else if (getGame === null) {
    return (<div>
              <button onClick={()=>{backToPage("home")}}>Back</button>
              <h1>Play Pong</h1>
              <button onClick={()=>changeGetGame("create")}>Create Game</button><>&nbsp;&nbsp;&nbsp;</>
              <button onClick={()=>changeGetGame("join")}>Join Game</button>
            </div>);
  } else if (getGame === "create") {
    return <CreateGame account={account} changeAccount={changeAccount} changeGetGame={changeGetGame} changeGame={changeGame}/>
  } else {
    return <JoinGame account={account} changeAccount={changeAccount} changeGetGame={changeGetGame} changeGame={changeGame}/>
  }
}


export default Play
