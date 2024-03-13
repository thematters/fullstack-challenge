# Full-stack Engineer Code Challenge

We have a smart contract for donation and curation. When a user donates to a piece of content through the contract, it emits a `Curation` event that includes the corresponding IPFS CID and the amount of donation. Applications, including Matters.Town, then use the `Curation` event to discover valuable content. The source code can be found [here](https://github.com/thematters/contracts/tree/develop/src/Curation) and the deployment on Optimism can be found [here](https://optimistic.etherscan.io/address/0x5edebbdae7b5c79a69aacf7873796bb1ec664db8) (there are also historical data on [Polygon](https://polygonscan.com/address/0x5edebbdae7b5c79a69aacf7873796bb1ec664db8)).

Please write a simple web app, service, or module with the above curation contract, on any function you find interesting to build. For example:

- A web app that listens to `Curation` events and displays the content of the CIDs.
- A service using both timestamp and amount of donation as ranking criteria.
- A wrapper for the IPFS node that listens to `Curation` events and automatically pins the CID data for some time according to the donation amount.

The scoring of a submission will consider:

- Completeness (40%): How complete is it in implementing the intended functionality?
- Maintainability (30%): Is the code well-modulized and easy to read? Does it contain enough comments to describe what it does?
- Usefulness (20%): Does it correspond to real needs?
- Complexity (10%): How challenging is it to implement, and how much can you learn in the process?
