# crypto-hackathon
1618 Cryptocurrencies &amp; Cryptowallets Hackathon

1.) Add your GitHub username and/or e-mail to the list below to get credit for your attendace.


Crypto Night 1
------------------
1. SalMac86

2. Crystal

3. DustyBest

4. dmlsthe1

5. mtgoodrich

6. shark-bit

7. think3d

8. dlim87

-----------
The Challenge
We're building a Cryptocurrency, with a supporting blockchain and a digital wallet. This is a pretty ambitious goal, so let's unpack that a bit. We'll have to:

Create a server to manage our custom blockchain
Implement our new Cryptocurrency on our blockchain
Create a wallet that allows us to transfer our currency between parties
This all means we need at least 3 components to this project: 1) a custom blockchain, and 2) a custom Cryptocurrency and 3) a digital wallet.

The Challenge this week is to build a custom Cryptocurrency using the JavaScript blockchain that we made last session.
We're going to use the following definition of a Cryptocurrency for the purposes of this session - from Jan Lanksy's paper Possible State Approaches to Cryptocurrencies

(1) The system does not require a central authority, distributed achieve consensus on its state.
(2) The system keeps an overview of cryptocurrency units and their ownership.
(3) The system defines whether new cryptocurrency units can be created. If new cryptocurrency units can be created, the system defines the circumstances of their origin and how to determine the ownership of these new units.
(4) Ownership of cryptocurrency units can be proved exclusively cryptographically.
(5) The system allows transactions to be performed in which ownership of the cryptographic units is changed. A transaction statement can only be issued by an entity proving the current ownership of these units.
(6) If two different instructions for changing the ownership of the same cryptographic units are simultaneously entered, the system performs at most one of them.


To keep things simple, we'll continue to use Node.JS for our server. We'll use Cloud9 as the IDE (Integrated Development Environment) for the server, and host it on AWS. Each mob will share a Cloud9 / EC2 instance, and everydev is sponsoring it. 

For the digital wallet app, we recommend that each mob uses Visual Studio Code today, but your IDE of choice will do just fine.

Step-by-step Challenge for today:

Get your development environment up to date with the master branch
https://github.com/everydev1618/crypto-hackathon
Implement a Cryptocurrency that will operate on our custom blockchain
Make sure your cryptocurrency
Has a defined method of creation
Is cryptographically secured
Can be exchanged
Start by...
Registering for 1618, so we can create you an everydev gitlab account and track your progress:

https://www.everydev.com/1618-registration/ 

Get together with a facilitator to get your GitHub account added to the 1618 Hackathon team on the everydev organization.

Once you have added your GitHub account, you should have access to the Crypto Hackathon repo here:

=================
Cryptocurrency Implementation
Now that we have a server with a blockchain running, it's time for us to craft our currency.
This could be tricky! I'd recommend taking more than a few minutes to have some round-table discussion to clarify the requirements and features you want to implement for our currency.
In the end, it's up to you, but your currency should be using some kind of cryptographic public/private key setup and it should be relatively hard to make bogus transactions.
It might be helpful to take a look at ERC-20 here
and keep these concepts in mind as you implement your cryptocurrency:

(1) The system does not require a central authority, distributed achieve consensus on its state.
(2) The system keeps an overview of cryptocurrency units and their ownership.
(3) The system defines whether new cryptocurrency units can be created. If new cryptocurrency units can be created, the system defines the circumstances of their origin and how to determine the ownership of these new units.
(4) Ownership of cryptocurrency units can be proved exclusively cryptographically.
(5) The system allows transactions to be performed in which ownership of the cryptographic units is changed. A transaction statement can only be issued by an entity proving the current ownership of these units.
(6) If two different instructions for changing the ownership of the same cryptographic units are simultaneously entered, the system performs at most one of them.


Also, this may be a good time to make sure that our blockchain implementation is able to Validate the Integrity of the blocks!

If you are looking for a bit more of challenge - make our blockchain run on multiple nodes, on different machines! (While still staying in sync.)


