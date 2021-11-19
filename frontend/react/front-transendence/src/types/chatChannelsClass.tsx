interface chatChannelsInterface {
  dmOrChannel: "dm" | "channel"
  specific: "non-block" | "block" | "public" | "private" | "password"
  password: string | null
  name: string
  history: { name: string, message: string }[]
  owner: string | null
  users: {name: string, administrator: boolean, mute: boolean}[]
}

class chatChannelsClass implements chatChannelsInterface {
  dmOrChannel: "dm" | "channel"
  specific: "non-block" | "block" | "public" | "private" | "password"
  password: string | null
  name: string
  history: { name: string, message: string }[]
  owner: string | null
  users: {name: string, administrator: boolean, mute: boolean}[]
  constructor(dmOrChannel, specific, password, name, history, owner, users) {
    this.dmOrChannel = dmOrChannel;
    this.specific = specific;
    this.password = password;
    this.name = name;
    this.history = history;
    this.owner = owner;
    this.users = users;
  }
}

export default chatChannelsClass
