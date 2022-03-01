<h1 align="center"> <b>HYPE. The Furniture Store.</b> </h1>

![Front-Page](src/assets/banner.png)

<br/>

<p align="center">
  <a href="https://github.com/docflex" target="_blank">
    <img alt="made-by-rehber" src="https://img.shields.io/badge/MADE%20BY-Rehber-blue?style=for-the-badge" />
  </a>
    <img alt="license" src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" />
  <a href="https://hype-the-furniture-store.netlify.app/" target="_blank">
    <img alt="made-by-rehber" src="https://img.shields.io/badge/Hosted%20HERE-NETLIFY-blue?style=for-the-badge&logo=netlify" />
  </a>
</p>
<br/>

---

<b>HYPE</b> is the result of my love for high-end furnitures, modern design, and the art of Web Development. The purpose of this project was to push the limits of my understanding of the <b>React Framework and library.</b> It stands as an ode to <u>Minimal and Material Design</u>.

This repository contains all necessary information about the development of this project, how you can run it natively from your system, and what all can be improved in the future versions of this project.

---

<br/>
<br/>

<h2 align="center"><b>Technologies and APIs</b></h2>
<br>
<p align="center">
    <a href="https://github.com/facebook/react/blob/main/CHANGELOG.md#1702-march-22-2021" target="_blank">
        <img alt="react-version" src="https://img.shields.io/badge/React-17.0.2-blue?style=flat-square&logo=react" />
    </a>
    <a href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V16.md#16.14.0" target="_blank">
        <img alt="node-version" src="https://img.shields.io/badge/Node-16.13.2-green?style=flat-square&logo=node.js" />
    </a>
    <a href="https://auth0.com/releases/2202" target="_blank">
        <img alt="auth0-version" src="https://img.shields.io/badge/Auth0-2.40.0-red?style=flat-square&logo=auth0" />
    </a>
    <a href="https://stripe.com/docs/upgrades#api-changelog" target="_blank">
        <img alt="stripe-version" src="https://img.shields.io/badge/Stripe-8.205.0-blue?style=flat-square&logo=stripe" />
    </a>
    <a href="https://docs.netlify.com/cli/get-started/" target="_blank">
        <img alt="netlify-version" src="https://img.shields.io/badge/Netlify-11.0.0-teal?style=flat-square&logo=netlify" />
    </a>
</p>

<br/>

# Installation

## Getting [Node](https://nodejs.org/)

You can download the package directly via bash

```properties
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

Alternatively, you can use Homebrew

```properties
brew install node
```

## Getting [Auth0 React SDK](https://auth0.com/docs/quickstart/spa/react/01-login)

You can download the package using `npm` commands

```properties
npm install @auth0/auth0-react
```

## Getting [Netlify CLI](https://docs.netlify.com/cli/get-started//)

You can download the package using `npm` commands

```properties
npm install netlify-cli -D
```

## Getting Extra Dependencies

You can download the packages using `npm` commands

```properties
npm install dotenv@8.2.0 stripe@8.130.0 @stripe/react-stripe-js@1.1.2 @stripe/stripe-js@1.11.0 netlify@6.0.12
```
<br/>
<br/>

# Running the Project Locally or Via Netlify

## Clone this [Repository](https://github.com/docflex/hype-the-furniture-store.git)

```properties
git clone https://github.com/docflex/hype-the-furniture-store.git
```


## Install Node Modules

```properties
npm install
```

## Set up the .env Variables

```
REACT_APP_AUTH_DOMAIN = [Your Auth0 Domain]
REACT_APP_CLIENT_ID = [Your Auth0 ClientID]
REACT_APP_STRIPE_PUBLIC_KEY = [Your Stripe Public Key]
REACT_APP_STRIPE_SECRET_KEY = [Your Stripe Secret Key]
```

## Running a Local Development Server

You can either use React's LocalHost Functionality or use Netlify

```properties
npm start
```

Alternatively

```properties
ntl dev
```