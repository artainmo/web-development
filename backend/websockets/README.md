# Websockets
Normally HTTP connections require the client to make a new request to the server in order to get new data, WebSocket connections require just a single request that establishes continuous, bidirectional communication between server and clients enabling real-time updates of data shared between a client and a server.<br>
It is used to follow stocks in real time, play video games online, chat, collaborative documents...

In addition to enabling uninterrupted communication between a client and a server, WebSocket connections also enable a communication pattern called broadcasting.<br>
Broadcasting is when a server sends the same message to many connected clients at once, such as in a chatroom.

In the request-response pattern, a client will open a connection to make a request and the server will send back a response, the connection will then be closed.<br>
WebSocket connections create a persistent connection, to exhange information continuously, until either the client or server closes the connection.<br>
This is also known as a publish-subscribe messaging pattern: the client can “subscribe” to the server and whenever the server “publishes” a message, the subscribers are notified.

The agreement between the client and server to establish a persistent connection is called the handshake, and is done through an initial HTTP request.<br>
In the header of the HTTP request, the client must communicate to the server that it wants to upgrade the connection from HTTP to WebSockets by using an HTTP GET request to a ws:// URI along with a set of specific headers.<br>
Once a websocket connection is established, communication can be done without HTTP headers and the need for a new TCP connection.
If the handshake is done over HTTPS instead of HTTP, TLS will also be used for the websocket, making it more secure, and it will become wss:// instead of ws.


See chat-websockets project to learn how to use the javascript ws package to create websockets.
