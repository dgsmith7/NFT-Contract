# NFT-Contract

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dgsmith7/NFT-Contract">
    <img src="./images/solidity_icon.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">NFT Contract</h3>

  <p align="center">
    This is a solidity contract for a basic NFT with mint price, token supply limit, and royalties based on OpenZeppelin ERC721 and extensions. It is built with node js, npm, and hardhat and includes unit tests.

<!--
<br/>
<a href="https://github.com/dgsmith7/NFT-Contract"><strong>Explore the docs »</strong></a>
<br />
-->
<br />
<!--
<a href="https://github.com/dgsmith7/NFT-Contract">View Demo</a>
· -->
<a href="https://github.com/dgsmith7/NFT-Contract/issues">Report Bug</a>
·
<a href="https://github.com/dgsmith7/NFT-Contract/issues">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <!--
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    -->
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](./images/opensea.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Solidity][Solidity]][Solidity-url]
- [![Hardhat][Hardhat]][Hardhat-url]
- [![Ethers][Ethers]][Ethers-url]
- [![Node][Node]][Node-url]
- [![Npm][NPM]][NPM-url]
- [![Mocha][Mocha]][Mocha-url]
- [![Chai][Chai]][Chai-url]
- [![OpenZeppelin][OpenZeppelin]][OpenZeppelin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may set up this project locally, if you like. To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

### Installation

Feel free to use the contract without going through all of these steps. But, follow the instructions below if you would like to install the project on your local machine so you can see the unit testing results, generate gas reports, see testing coverage, and deploy to a testnet or real net with this code, or just tinker around with hardhat (see the Patrick Collins video link in the acknowledgments at bottom).

1. Create a directory on your local machine where you want the project, then navigate to that directory.

2. Clone the repo

```sh
git clone https://github.com/your_username_/Project-Name.git
```

3. Install NPM packages. This command will look in the package.json folder and install the needed dependencies.

```sh
npm install
```

4. Make your own .env file as depicted below, substituting the real info where you see lowercase in the example below. Then save it in the top level of the directory. The gitignore file contains .env so this info will not go to the repo. You will need to obtain API keys from several websites to accomplish this. Security: Notice that you DO NOT see my .env file pushed to the repo. This is for a reason. Keep these values secret and DO NOT push them to github. And PLEASE DO NOT use a Metamask wallet that has real currency in it. Make a new wallet that will never hold real currency and use it for the testing. If you are only planning to use the hardhat network, and not a testnet, there is no need to provide any of the info in this file (unless you want gas reports in USD, then provide the coinmarketcap info).

```sh
REPORT_GAS=true
ETHERSCAN_API_KEY=enter you etherscan api key here
ALCHEMY_API_KEY=enter your Alchemy api key here
STUNT_WALLET_ADDRESS=enter your Metamask testing wallet address here (don't use a wallet with real currency)
STUNT_WALLET_PRIVATE_KEY=enter your Metamask testing wallet private key here (don't use a wallet with real currency)
COINMARKETCAP_API_KEY=enter your coinmarketcap api key here
POLYGONSCAN_API_KEY=enter you polygonscan API api here
```

5. To compile the contract:

```sh
npx hardhat compile
```

6. To run unit tests:

```sh
npx hardhat test
```

The results will be displayed in the terminal window. A gas report will be generated and written to .gas-report.txt'. If you have provided a coinmarketcap api key, then USD values will be provided.

7. To generate coverage report:

```sh
npx hardhat coverage
```

The results will be displayed in the terminal window. Fancier reports will be stored in a directory called 'coverage'. A great way to view them is the spin up a local http server and open index.html in the 'coverage' directory.

8. To deploy:

```sh
npm run deploy
```

The terminal will display several messages as the contract deploys, verifies (if on a testnet), and mints three tokens. You should then be able to search that contract address on OpenSea testnet and view the tokens. Look in notes.txt to see the results from my attempt in late July. You can try the links there, but they may not persist.

9. Please provide feedback to me if you see any errors in these instructions, the code, or the repo at large. Happy hardhatting!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

You may confidently download and use this contract (courseNFTContract.sol), which has been verified, in your own NFT projects. This is really designed to be used from a front end that will make the appropriate calls to compile, deploy and interact with the contract, generate the digital art and upload it to IPFS, and pass in the proper IPFS URLs to the contract and to each token as minted.

_See my other repo for a full stack working project - coming soon. [Full stack project](https://github.com/dgsmith7?tab=repositories)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Set NFT price at depoyment
- [x] Set token supply limit at deployment
- [x] Set metadata (IPFS link) at deployment
- [x] Unit tested with Hardhat toolbox
- [x] Staging tested on Mumbai and OpenSea test network

See the [open issues](https://github.com/dgsmith7/NFT-Contract/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

David G. Smith - [@davidgailsmith](https://twitter.com/@davidgailsmith) - david@davidgailsmith.com

Project Link: [https://github.com/dgsmith7/NFT-Contract](https://github.com/dgsmith7/NFT-Contract)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [FreeCodeCamp - Patrick Collins Full Stack Web3 Dev Course](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=85023s)
- [Microsoft VS Code](https://code.visualstudio.com)
- [Remix](https://remix.ethereum.org)
- [Southern Methodist University - Center of Creative Computation](https://www.smu.edu/Meadows/AreasofStudy/CreativeComputation/Center)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/dgsmith7/NFT-Contract.svg?style=for-the-badge
[contributors-url]: https://github.com/dgsmith7/NFT-Contract/contributors
[forks-shield]: https://img.shields.io/github/forks/dgsmith7/NFT-Contract.svg?style=for-the-badge
[forks-url]: https://github.com/dgsmith7/NFT-Contract/network/members
[stars-shield]: https://img.shields.io/github/stars/dgsmith7/NFT-Contract.svg?style=for-the-badge
[stars-url]: https://github.com/dgsmith7/NFT-Contract/stargazers
[issues-shield]: https://img.shields.io/github/issues/dgsmith7/NFT-Contract.svg?style=for-the-badge
[issues-url]: https://github.com/dgsmith7/NFT-Contract/issues
[license-shield]: https://img.shields.io/github/license/dgsmith7/NFT-Contract.svg?style=for-the-badge
[license-url]: https://github.com/dgsmith7/NFT-Contract/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/david-gail-smith/
[product-screenshot]: images/screenshot.png
[Solidity]: https://img.shields.io/badge/Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black
[Solidity-url]: https://soliditylang.org
[Hardhat]: https://img.shields.io/badge/hardhat-blue.svg?style=for-the-badge&logo=ethereum&logoColor=yellow
[Hardhat-url]: https://www.hardhat.org
[Node]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org
[NPM]: https://img.shields.io/badge/NPM.js-CB3837?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://www.npmjs.com
[Mocha]: https://img.shields.io/badge/Mocha.js-8D6748?style=for-the-badge&logo=Mocha&logoColor=white
[Mocha-url]: https://mochajs.org
[Chai]: https://img.shields.io/badge/chai.js-A30701?style=for-the-badge&logo=chai&logoColor=white
[Chai-url]: https://www.chaijs.com
[Ethers]: https://img.shields.io/badge/ethers.js-blue.svg?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMTYycHgiIHZpZXdCb3g9IjAgMCAyNTYgMTYyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KICAgIDx0aXRsZT5FdGhlcnM8L3RpdGxlPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTI1NiwxMzguNzM4Njg3IEMxMjIuMTYwOTY0LDE1Ni4yMzAwODYgMjYuNjMzNDMwNywxNzcuMjM4NjA2IDI1LjIyMDMwMTUsOTEuMDA2MzIyNyBDMjUuMjIwMzAxNSw5MS4wMDYzMjI3IDI4LjE0MDc2ODUsNTcuNTkzNjY4IDY5LjEyMTUxNSw1NS40ODk2NzU3IEM2OS4xMjE1MTUsNTUuNDg5Njc1NyA3MC41MDMyNDE0LDI1LjgxMzk2MjYgMTAxLjgxMTkwNCwyMi40NTM4NTU1IEMxMTguNjQzODQzLDIwLjYzMjQ4ODkgMTM3Ljc2ODE5MSwzNy45NjY4NzM3IDEzOS44NDA3OCw1Ni4yMTE5NDE3IEMxMzkuODQwNzgsNTYuMjExOTQxNyAxODEuMjYxMTY3LDQ4LjU0OTY0MTIgMTgzLjA1MTEzMSw4OC45MzM3MzMyIEMxODMuNjc5MTg4LDEwMy4wMDIyMTkgMTgwLjUwNzQ5OCwxMjYuOTMxMjA3IDE0MC41NjMwNDYsMTI1Ljg5NDkxMiBDMTQwLjU2MzA0NiwxMjUuODk0OTEyIDExNy40NTA1MzMsMTIyLjc1NDYyNSAxMTQuMzEwMjQ2LDg3LjAxODE1ODEgQzEwNy44MDk4NTIsMTU2LjE5ODY4MyAyMDcuODI3OTk2LDE1Mi4xNzkxMTUgMjA5LjI3MjUyOCw4OS4zNDE5NzA2IEMyMDkuOTAwNTg1LDYyLjE3ODQ4NzIgMTkyLjUwMzM5NSwzNC4yMjk5MzIxIDE1My4zMTI2MTIsMzkuNDc0MjExNSBDMTMxLjgzMzA0OCwtMTQuNTcwMTI5NCA3NC42NDg0MjAzLC0xMS40NjEyNDUyIDUzLjM1NzI3MzgsMzguNjU3NzM2OSBDMjIuOTI3ODkxOSwzOC42NTc3MzY5IC0wLjM0MTYzNTQ3Niw2Mi4wODQyNzg2IDAuMDAzNzk2MTA0MTcsOTIuNjcwNjc0OSBDMS4xNjU3MDIzMywxOTEuMTE4Njc1IDEzOC4xNzY0MjgsMTYxLjQ0Mjk2MiAyNTYsMTM4LjczODY4NyBaIiBmaWxsPSIjMjQzMzlCIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==&logoColor=%2324339B
[Ethers-url]: https://ethers.org
[OpenZeppelin]: https://img.shields.io/badge/Open%20Zeppelin-4E5EE4?logo=OpenZeppelin&logoColor=fff&style=for-the-badge
[OpenZeppelin-url]: https://www.openzeppelin.com
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
