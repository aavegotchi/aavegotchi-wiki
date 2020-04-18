---
author: Daniel Mathieu
date: '2020-04-18T07:00:00.000Z'
hero_image: /alfons-taekema-bali.jpg
title: 'Achieve Seamless Dapp UX Using Blocknative Notifications and Firebase Cloud Functions'
description: 'Learn how to use the Blocknative SDK to effortlessly synchronize blockchain transaction states with a traditional backend database'
tags: ["Dapp", "UX", "Blocknative"]
---
_In this tutorial, you’ll learn how to use the Blocknative SDK to effortlessly synchronize blockchain transaction states with a traditional backend database, ensuring your end users are_ **never** _left hanging with pending transactions._

**Difficulty:** Intermediate  
**Required skills:** Basic knowledge of Web3 and Firebase  
**Link to the Github repo:** [blocknative-notify-firebase](https://github.com/cinnabarhorse/blocknative-notify-firebase)  
**View a demo:** [https://blocknative-notify-firebase.now.sh/](https://blocknative-notify-firebase.now.sh/)

# Introduction

Dapp UX has come a long way in the past few years, with services like Metamask, Fortmatic, and Trust wallet offering easy onboarding experiences for users new to Ethereum and cryptocurrency in general.

However, smooth onboarding is only one piece of the UX puzzle. For a truly seamless dapp experience, users should be confident that their dapp is giving them the most up-to-date information, with the least amount of effort. Anyone who has used a dapp has seen a situation where the transaction has confirmed, but does not display correctly on the dapp’s front-end.

Luckily, using Blocknative notifications, we can solve this problem with a robust and elegant solution.

> **Who is Blocknative? (From the blocknative.com website):**  
> Blocknative’s mission is to provide easy to use tools for developers to monitor transactions in real-time.*

> *Our team is comprised of a unique combination of experienced entrepreneurs and leading blockchain technologists. And we’re backed by a leading VC firm.*

## But wait… If I’m creating a dapp, is it even necessary to use a traditional database?

While new protocols such as TheGraph and IPFS are helping dapp developers move away from storing information in traditional databases, in many cases it is quicker and more efficient to store data such as transaction hashes in a database, assuming that data can remain in sync with the blockchain.

_This tutorial will show you how to ensure your traditional back-end remains in sync with the blockchain. Let’s begin!_

# **Tutorial : Achieving a Seamless Dapp UX Using Blocknative Notifications and Firebase Cloud Functions**


## Step 0: Setup a new React project.

I use NextJS for almost all of my projects, but a simple Create React App works too.

```
## NextJS
npm init next-app blocknative-notifications  
OR  
yarn create next-app blocknative-notifications

## Create React App
npm init react-app blocknative-notifications
```


## Step 1: Configure Firebase in your project

First, navigate to your newly-created React project and install the required dependencies for our project, web3 and firebase:

```
cd blocknative-notifications  
npm install --save web3 firebase
```

Next, create a new Firebase project using the [Firebase console](https://firebase.google.com/) and add Firebase to your Web app.

After adding the SDK to your web app, Firebase gives you a list of variables you need to initialize your client with.

I typically create a separate firebase.js page to load these variables, so let’s do that!

```
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export default async function loadFirebase() {

	try {
		firebase.initializeApp({
			apiKey: process.env.FIREBASE_APIKEY,
			authDomain: process.env.FIREBASE_AUTHDOMAIN,
			databaseURL: process.env.FIREBASE_DATABASEURL,
			projectId: process.env.FIREBASE_PROJECTID,
			storageBucket:process.env.FIREBASE_STORAGEBUCKET,
			messagingSenderId:
			process.env.FIREBASE_MESSAGINGSENDERID,
			appId: process.env.FIREBASE_APPID,
			measurementId: process.env.FIREBASE_MEASUREMENTID
		});

	} catch (err) {
		// we skip the "already exists" message which is
		// not an actual error when we're hot-reloading
		if (!/already exists/.test(err.message)) {
			console.error('Firebase initialization error', 
			err.stack);
		}
	}
return firebase
}
```

You can replace all of the environment variables with your real data, but for production or public code, it’s best to hide that sensitive data using environment variables.

_Now that our Firebase is configured properly, let’s set up a simple front-end to interact with our database and Blocknative transactions!_

----------

## Step 2: Create a simple front-end

Our React front-end doesn’t need to do much — just allow us to post a transaction to the blockchain using a Web3 wallet, and then display all of our transactions with their current statuses.

For my Web3 provider, I’m using Metamask, but you can choose whichever one you like.

Let’s begin by initializing a web3 instance when our page loads, and saving that web3 instance to local state. Add this code within your Index function on index.js.

```
# index.js

const Index = () => {  
     const [web3, setWeb3] = useState()  
      
     useEffect(() => {  
          loadWeb3()  
     }, [])

     async function loadWeb3() {  
          const web3 = await getWeb3()  
          setWeb3(web3.web3)  
     }

     ...the rest of Index function
}
```

In our loadWeb3 function, we load the Web3 from an async function called getWeb3. Create a file called getWeb3.js in the root of your project with a default export of getWeb3, as shown below:

```
import Web3 from 'web3'
declare var window: any;

export default function getWeb3() {
    let getWeb3: any = new Promise(async function (resolve, reject) {

        // Wait for loading completion to avoid race conditions with web3 injection timing.
        var results;
        let _web3;
        try {
            if (typeof window !== 'undefined' && window.ethereum) {

                console.log("Eth enable");
                _web3 = new Web3(window.ethereum);

                console.log('_web3:', _web3)
                await window.ethereum.enable();
                results = {
                    web3: _web3
                };
                let net;
                await _web3.eth.net.getId().then(res => {
                    console.log("inside net id");
                    console.log(res);
                    net = res;
                });
                // console.log(net);
            }
            // Checking if Web3 has been injected by the browser (Mist/MetaMask)
            else if (typeof window !== 'undefined' && window.web3) {
                // Use Mist/MetaMask's provider.
                _web3 = new Web3(window.web3.currentProvider);

                console.log("Injected web3 detected.");
                let net;
                await _web3.eth.net.getId().then(res => {
                    net = res;
                });
                // console.log(net);

                results = {
                    web3: _web3
                };
            } else {
                // Fallback to localhost if no web3 injection. We've configured this to
                // use the development console's port by default.
                _web3 = new Web3(
                    new Web3.providers.HttpProvider(
                        process.env.INFURA_URL
                    )
                );
                // _web3 = new Web3(provider);
                // console.log(_web3);
                results = {
                    web3: _web3
                };

                resolve(results);
                console.log("No web3 instance injected, using Infuria web3.");
            }

            resolve(results);
        } catch (e) {
            console.log('error:', e)
            // throw new Error(e.message || e);
        }
    });

    return getWeb3
}
```

Now that we’ve loaded a Web3 object into local state, we can now use our Web3 wallet to make a transaction.

Create a button on index.js that takes a function _handleClick()_ as its argument for onClick, and give the button a title.

```
return (  
     <button onClick={() => handleClick()}>Send 0.001 ETH</button>  
)
```

Now let’s fill out the body of our _handleClick()_ function.

First, ensure Web3 has been loaded, and if so, start by loading our Firebase object from above by calling:

```
async function handleClick() {  
     const firebase = await loadFirebase()  
}
```

Then get all accounts from our Web3 provider adding this line:
```
const accounts = await web3.eth.getAccounts()
```
Next, create the transaction object that we’ll use to send our transaction.
```
const txObject = {  
     from: accounts[0],  
     to: "0xyourdestinationaddress",  
     value: web3.utils.toWei("0.001", "ether"),  
     gas: 21000,  
     gasPrice: web3.utils.toWei("20", "gwei")  
}
```
Finally, let’s send our transaction!
```
await web3.eth.sendTransaction(txObject)
```
Web3 has several callback functions we can listen for while the transaction gets processed. For this tutorial, since we’ll be relying on Blocknative notifications to update our backend, we will just use the first one, _.on(‘transactionhash’)._ Use it like this:
```
await web3.eth.sendTransaction(txObject)  
 .on('transactionHash', async function (hash: string) {  
     //Do something here   
}
```
Within that handler, we will add a row to our Firebase table, and also notify Blocknative to start looking for a new transaction.

Use the hash from the callback as the unique documentID for your Firebase row, and set the _status_ field to _pending_:
```
firebase.firestore().collection("transactions")  
.doc(hash)  
.set({status: "pending"})  
.then(async (result) => {  
     await postToBlockNative(hash)  
})
```
After the update is finished, our client will post a notification to Blocknative, alerting it to start monitoring that transaction hash for updates.

Create a new file called blocknative.js and paste in the following code:
```
export default async function postToBlockNative(transactionHash) {  
     var url = "https://api.blocknative.com/transaction"  
     var apikey = process.env.BLOCKNATIVE_API_KEY  
     const payload = {  
          apiKey: apikey,  
          hash: transactionHash,  
          blockchain: "ethereum",  
          network: "ropsten"  
     }

     try {  
          const response = await fetch(url, {  
          method: 'post',  
          headers: {  
               "Content-Type": "application/json",  
          },  
          body: JSON.stringify(payload)  
     })  
          const data = await response.json()  
          return { status: "success", data: data }}  
           
     catch (error) {  
          return { status: "error", error: error }  
     }  
}
```
The Blocknative Transaction API takes a simple POST, with the body payload consisting of your API key, the transaction hash you want to observe, the blockchain, and the network. Since our demo is using Ropsten, we use _ethereum_ for the blockchain, and _ropsten_ for the network.

**Almost done!**

There’s just one last thing we need to setup before our front-end React app is complete.

In our useEffect hook from above, we’ll call another function to fetch a live snapshot of the _transactions_ table in our database, and we’ll display that in our UI. Whenever the _transactions_ table is updated, our app will be notified and will automagically update the state!

Your new useEffect hook should look like this:
```
useEffect(() => {  
     loadWeb3()  
     loadTransactions()  
}, [])
```
And the loadTransactions() method looks like this:
```
async function loadTransactions() {  
     const firebase = await loadFirebase()  
     firebase.firestore().collection("transactions")  
     .onSnapshot((snapshot) => {  
          setTransactions(snapshot.docs)  
     })  
}
```
Just under our web3 useState hook, we need to add another useState hook to maintain a transactions array. Our local state now looks like this:
```
const [web3, setWeb3] = useState(undefined)  
const [transactions, setTransactions] = useState(undefined)
```
Finally, we need to display transactions in our UI.

Under our button, let’s add a map of all the transactions from our useState hook.

Your UI should now look something like this:  
(you can style it however you like):
```
return (  
     <div className="container">  
     Hello  
     <button onClick={() => handleClick()}>Send 0.001 ETH  
     </button>       
     {transactions && transactions.map((txSnapshot) => {  
          const data = txSnapshot!.data()  
          return (  
               <div>  
               {txSnapshot.id} - {data.status}  
               </div>  
          )  
     })}  
)
```

_That’s it for the front-end! Now let’s move on to configuring our webhook._

----------

## Step 3: Configure Blocknative webhook

Now that our front-end is set up, it’s time to configure the webhook that will get called whenever our transaction status changes!

First, initialize cloud functions in your app using this [Firebase guide](https://firebase.google.com/docs/functions/get-started). Make sure you add the Admin SDK (we’ll need that to update our database from the webhook).

Once you’ve initialized cloud functions in your app, navigate to the index.js (or index.ts if you’re using TypeScript) within the newly-created functions folder.

Import the Firebase Admin SDK. Your index.js should look like this:
```
# index.js

import * as functions from 'firebase-functions';  
const admin = require('firebase-admin')  
admin.initializeApp()
```
Now under admin.initializeApp(), let’s add a function called _handleNotifications()_ that will be invoked whenever a new Blocknative Notification comes through.
```
# index.js

exports.handleNotification = functions.https.onRequest(async (req, res) => {  
     console.log('request:', req)  
     res.send("Hello Blocknative!")  
})
```
Now deploy your new function to Firebase using this command:
```
firebase deploy --only functions
```
After deploying, you can find the invoke URL in the Functions section of your Firebase console. It should look something like this:
```
https://us-central1-your-project-name.net/handleNotification
```
Now that you have the invoke URL, head over to the [Blocknative](https://blocknative.com) website and create a new account.

Log in to Blocknative and navigate to the API Keys section. Generate a new API key.

Next to your generated API Key, click the button “Add a Webhook”.

Paste in the invoke URL of the _handleNotification()_ function, select _Ethereum_ as the blockchain, and _Ropsten_ as the network. Ignore the username and password fields.

Once the webhook has been generated, click the “Watch Address” button underneath. Paste in the **origin** address from your Ethereum transfer.

Return to your React front-end now, and click the Send ETH button we added above. Confirm the transaction, and navigate to the Cloud Function logs section of Firebase console.

If everything is set up properly, you should see logs incoming from Blocknative. 

**Great job!**

#### Troubleshooting:

> Don’t see any logs? Make sure you have configured your Blocknative API key in the _postToBlockNative()_ function!

> By default, Cloud functions are **not** publicly callable. You will need to configure your Cloud function to be public in order to be invoked by Blocknative. [Here’s how to do that.](https://cloud.google.com/functions/docs/securing/managing-access-iam#allowing_unauthenticated_function_invocation)

> Note: Public permission should only be given for testing. Proper authentication should be performed in a production environment.

Now that we’ve set up Blocknative notifications to trigger our AWS lambda, it’s time to actually update our app’s backend when the transaction status changes!

----------

## Step 4: Update Firebase Backend

Make sure you’ve followed the steps above and included the Admin SDK in the cloud function index.js file.

Update your _handleNotification()_ function with this new code:
```
exports.handleNotification = functions.https.onRequest(async (req, res) => {  
     const hash = req.body.hash  
     const status = req.body.status  
       
     try {  
          await admin.firestore().collection("transactions")  
          .doc(hash)  
          .set({status: status})  
          res.send({ status: 200 })  
     } catch (error) {  
          console.log('error:', error)  
          res.send({ status: 400, error:error })  
     }  
})
```
Now every time the Blocknative notification is received, our database will update with the latest status.

Head back over to your React front-end, and create a new transaction. Then watch in awe as it magically updates! 🔥🔥

----------

**And that’s it, we’re done, right?**

Well, blockchain transactions aren’t that simple. Sometimes a user may send a transaction with very low gas, which makes the transaction fail. Sometimes they may also speedup their transaction, which replaces the old txhash with a new one.

This can be problematic because the row in your backend linked to the old txhash will never be updated.

Blocknative to the rescue!

----------

## Step 5: Handle blockchain edge cases

In the above step, we simply updated the new status of our row using the txhash from the Blocknative transaction, but for edge cases like speedup and cancel, this will not work.

Luckily, Blocknative solves this problem by including a ‘replaceHash’ field when the status is speedup or cancel.

Go back to your _handleNotification()_ function, and update it with this new code:
```
exports.handleNotification = functions.https.onRequest(async (req, res) => {  
     const hash = req.body.hash  
     const status = req.body.status

     //Handle the cancel and speedup states  
     if (status === "cancel" || status === "speedup") {

          const replaceHash = req.body.replaceHash

          try {  
               await admin.firestore().collection("transactions")  
               .doc(hash)  
               .delete()

               await admin.firestore().collection("transactions")  
               .doc(replaceHash)  
               .set({ status: req.body.status })

               res.send({ status: 200 })

          } catch (error) {  
               console.log('error:', error)  
               res.send({ status: 400, error: error })  
          }  
     }

     else {  
          try {  
               await admin.firestore().collection("transactions")  
               .doc(hash)  
               .set({ status: status })  
          res.send({ status: 200 })  
     } catch (error) {  
          console.log('error:', error)  
          res.send({ status: 400, error: error })  
     }  
}  
})
```
This new code checks if the status equals cancel or speedup and acts accordingly.

For cancel or speedup transactions, we can first delete the old transaction row from the database, and replace it with a new one, setting the documentID to the replaceHash provided by Blocknative.

In a production environment, in addition to storing the transaction status, we may also be storing some data relevant to our transaction, so before deleting the old row, it would be necessary to fetch it into memory first and save it alongside our new replaceHash.

> What happens if the Blocknative status is “dropped” or “failed”?

> In those cases, the transaction failed completely, and you can either remove the item from your database, or set the status to “dropped” or “failed”. That’s your choice as a backend architect.

Now you have a fully functioning dapp that effortlessly handles the fickle permutations of blockchain state using Blocknative notifications! 🚀

View the working demo [here](https://blocknative-notify-firebase.now.sh/).  
See all the code used in this tutorial [here](https://github.com/cinnabarhorse/blocknative-notify-firebase).

_If you liked this tutorial, follow me on Twitter for more tutorials about Web3, dapps, and great UX, and don’t forget to 👏👏!_