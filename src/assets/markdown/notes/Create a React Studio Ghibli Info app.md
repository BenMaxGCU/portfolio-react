# Create a React Studio Ghibli Info app

Studio Ghibli has created some of the most awe inspiring and charming films that I have ever seen, so what's better than combining two of my
favourite things, React and Studio Ghibli.

In this tutorial, we will be exploring the React framework and creating a React app that will make use of components and an API for movie info.

## Setup & Getting Started

Before we can create our React app, we will need the following installed:

- Node.js
- NPM
- Visual Studio Code

Node.js can be downloaded from the [Node JS website](https://nodejs.org/en/) and NPM will be included by default in the Node installation.

Now that everything is installed and ready to go, let's get started.

We'll need to create our React app first which we will be doing using Vite and NPM, other options like Create-react-app are bundled with webpack by default and my preference with React apps tends to stick with Vite as it's quick and easy to use.

In your command prompt, go to the desired project folder and run the following command:

![Vite bootstrapping command](https://i.ibb.co/Zz88dSw/Vite-bootstrapping.png)

This command specifies what template we want to use (react) and what our project name will be (ghibli-app). Once Vite has completed scaffolding the project, let's enter the code with the following:

`cd ghibli-app`\
`code .`

This will place us into our React app project then `code .` will open the project within Visual Studio Code.

## Let's Get Our Data

There is a vital element of every application that we can't forget, data. Every website relies on some form of data, even plain HTML pages contain data.

For our project, we're going to be using the [Studio Ghibli API](https://ghibliapi.herokuapp.com/). All of the documentation for the API is available from the link.
