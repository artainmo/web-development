import chatChannelsClass from "./chatChannelsClass";

const dataBaseAccounts = [["artainmo", 'pass4', "online"], //In the real database those should be accountType[]
                          ["ymanzi", 'pass3', "offline"],
                          ["gkiss", 'pass2', "online"],
                          ["cochapel", 'pass1', "offline"],
                          ["cochapelis", "123", 'game']];

const dataBaseChannels = [new chatChannelsClass("channel", "public", null, "warriors", [], "georges", [{name: "georges", administrator: true}, {name: "jan", administrator: true}, {name: "Jo", administrator: false}]),
                          new chatChannelsClass("channel", "private", null, "teambg", [], "joa", [{name: "joa", administrator: true}, {name: "jan", administrator: true}, {name: "Jo", administrator: false}]),
                          new chatChannelsClass("channel", "password", "secret", "secrets", [], "ella", [{name: "ella", administrator: true}, {name: "jan", administrator: true}, {name: "Jo", administrator: false}])];

const dataBaseGames = [{ballSpeed: 1, map: 'dark', players: ["Georges", null]}, {ballSpeed: 2, map: 'white', players: ["joa", null]}, {ballSpeed: 3, map: 'winter', players: ["ella", null]}];

export { dataBaseAccounts, dataBaseChannels, dataBaseGames }


//In relational databases make sure the Accounts and channels overlap so that if one is changed the other is changed too (as account contains channels and vice versa)
