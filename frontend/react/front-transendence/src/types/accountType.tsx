import chatChannelsClass from './chatChannelsClass'

interface accountType {
     name: string
     password: string
     avatar: null | string
     victories: number
     losses: number
     matchHistory: string[]
     friends: string[][]
     chatChannels: chatChannelsClass[]
}

export default accountType;
