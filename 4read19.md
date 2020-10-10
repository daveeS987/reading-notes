## Read 19: Message Queues

### Review, Research, and Discussion

1. What does it mean that web sockets are bidirectional? Why is this useful?  
   -- data can be sent both ways from server and client at the same time. It allows for realtime interactions between server and client.
1. Does socket.io use HTTP? Why?  
   -- kind of, not really? The initial connection setup is done using HTTP.
1. What happens when a client emits an event?  
   -- The server will listen to it, and can choose to emit back to other clients.
1. What happens when a server emits an event?  
   -- The clients that are in the same namespace can listen and react accordingly.
1. What happens if a client “misses” an event?  
   -- not sure
1. How can we mitigate this?  
   -- maybe add to some kind of queue

### Vocabulary Terms

- Web Socket - a new type of communications protocol that is different from HTTP. WebSocket allows a single TCP socket connection to be hijacked so that the client-server relationship can relay bi-directional, full-duplex (or sometimes also referred to as double-duplex) messages instantaneously.
- Socket.io -JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers.
- Client - a computer or program receiving data
- Server - a computer or program sending data

### Preview

1. Which 3 things had you heard about previously and now have better clarity on?  
   -- websockets

1. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?  
   -- maybe seeing how databases play into this system

1. What are you most excited about trying to implement or see how it works?  
   -- building a chat app

<br>
<br>

[Back to Table of Contents](README.md)
