## Read 18: Socket.io

### Review, Research, and Discussion

1. What is the benefit of transforming data into packets?
   - to make it easier and more efficient to transport
1. UDP is often refereed to as a connectionless protocol. Why is this?
   - it does not have to maintain a consistent connection in order to send data. It worries about speed, so it doesn't check for errors or missing data. If data is missing, it will still continue to send
1. Can a socket server application have multiple socket connections?
   - yes
1. Can a socket connection application be connected to multiple socket servers?
   - yes
1. Can an application be both a socket server and a socket connection?
   - theoretically yes but it shouldn't

### Vocabulary Terms

- OSI Model - (Open Systems Interconnection Model) is a conceptual framework used to describe the functions of a networking system. Split into seven different abstraction layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.
- TCP Model - describe the functions of the communication system by dividing the communication procedure into smaller and simpler components. Application layer, transport layer, internet layer, network access layer
- TCP - (Transmission Control Protocol) is a standard that defines how to establish and maintain a network conversation through which application programs can exchange data. TCP works with the Internet Protocol (IP), which defines how computers send packets of data to each other.
- UDP - (User Datagram Protocol) is a communications protocol that is primarily used for establishing low-latency and loss-tolerating connections between applications on the internet. It speeds up transmissions by enabling the transfer of data before an agreement is provided by the receiving party.
- Packets - a small amount of data sent over a network, such as a LAN or the Internet. Similar to a real-life package, each packet includes a source and destination as well as the content (or data) being transferred.
- Socket - an endpoint for sending and receiving data across the network. The structure and properties of a socket are defined by an application programming interface (API) for the networking architecture. Sockets are created only during the lifetime of a process of an application running in the node. Consist of three things: an ip address, transport protocol, a port number

### Preview

1. Which 3 things had you heard about previously and now have better clarity on?
   - OSI Model
1. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
   - sockets
1. What are you most excited about trying to implement or see how it works?
   - creating realtime apps

<br>
<br>

[Back to Table of Contents](README.md)
