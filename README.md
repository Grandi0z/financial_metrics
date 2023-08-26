<a name="readme-top"></a>

<div align="center">
<img src="./src/assets/icon/Grandiose.png" alt="logo" width="140"  height="auto" />
  <br/>

  <h3><b>Companies metrics</b></h3>

</div>


# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Companies metrics ](#-companies-metrics-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo](#-live-demo)
  - [🚀 Video Demo](#-video-demo)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
        - [Note :](#note-)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ (OPTIONAL) ](#-faq-optional-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Companies metrics <a name="about-project"></a>

This application takes companies as input and gives you financial data about them. You receive results such as market capitalization, growth rate, dividend yield, and more. This application is easy to use, fast, and reliable. It is a great tool for investors, analysts, students, and anyone who is interested in the financial world.  

**Companies metrics** 

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

The following stacks were used

<details>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a></li>
    <li><a href="https://react-redux.js.org/">React Redux</a></li>
    <li><a href="https://react.dev/t">React</a></li>
    <li><a href="https://webpack.js.org/">Webpack</a></li>
  </ul>
</details>


<!-- Features -->

### Key Features <a name="key-features"></a>

- **Browse the companies list**
- **Shows updated financial data of a selected company**



<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🚀 Live Demo 
<a name="live-demo" href="https://companies-metrics-xscn.onrender.com/">Demo</a>

## 🚀 Video Demo 
<a name="live-demo" href="https://www.loom.com/share/df7c39a66b0a46f2b7db8194fb38ab52?sid=34a85a37-0dec-4e9d-a7b8-6e6aa106d488">Video</a>




<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

### Prerequisites

In order to run this project you need to have a browser and of course a code editor



### Setup

Clone this repository to your desired folder, you can also set up HTML, CSS and JavaScript linters, for this you will need node installed. you can follow the steps [here](https://github.com/microverseinc/linters-config/tree/master/html-css) and [here](https://github.com/microverseinc/linters-config/tree/master/javascript) to setup the linters


### Install

Once you cloned this project you are done !


### Usage

To run the project follow these steps :
1. Install `Node.js` and `npm` on your computer (If you don't have them yet).
2. Open your terminal and navigate to the root directory of your project.
3. Run the command ```$npm start ``` in your terminal.
4. Your default browser should open automatically and display your React app
5. Because it's a mobile application,
you will need to <a href="https://www.geeksforgeeks.org/browser-developer-tools/" target="_blank"> access your browser's developer </a> mode and reduce the screen size to that of a mobile phone.
6. This project uses data provided by: financial modelling prep, as this project uses a free version of their API, which contains several restrictions, including:
- Limiting requests to 250 per day
- Use of data on US companies only.
- No-authorization to retrieve companies by region.
Therefore, You will find a sample of 43 US companies we used for our projects.
But to limit the number of requests sent to the API, a function was finally created to retrieve 10 companies randomly from the 42 but you can change this configuration in the `FilterCompanyProfiles.js` component on line 11 by changing the value of the variable `count`.

##### Note : 
We provide profile keys here so that you can use them if you reach the number of requests allowed. Inside the `util` folder change the value of `key` variable in the `fetchAPI.js` file :

- ```$
  47145a2a30df9038b45fe0f3f2b783bd
  ```
- ```$
  5332f3c13f9457e917e1098f3c882b81
  ```
- ```$
  80bc438fc35b49b690e55443727ede71
  ```
- ```$
  a7bdf39e8d91e9da68c667e23ecc6127
  ```

### Run tests

If you follow the tutorial above to setup linters then you can run these tests

```$
  npx hint .
```
```$
  npx stylelint "**/*.scss"
```

or if you use css then run this instead of the latter command above

```$
  npx stylelint "**/*.{css,scss}"
```

### Deployment

You can deploy this project using: GitHub Pages Netifly or Render 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Joseph L Kausi**

- GitHub: [@Grandi0z](https://github.com/Grandi0z)
- Twitter: [@Joseph_LSK](https://twitter.com/Joseph_LSK)
- LinkedIn: [Joseph L Kausi](https://www.linkedin.com/in/joskal/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>


- [ ] **Filter data by various criteria, such as market capitalization, growth rate, dividend yield, and more**
- [ ] **Add a login page for user**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Grandi0z/financial_metrics/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project you can follow me on github for more.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

thanks to Microverse for providing the necessary resources.
And special thanks to <a href='https://www.behance.net/sakwadesignstudio' target="_blank">Nelson Sakwa</a> the author of the original design




<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ (OPTIONAL) <a name="faq"></a>

- **Are the linters necessary?**

  - It is a good practice to install and use them as they guide you towards best practice, but yes you can do without. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](https://github.com/Grandi0z/financial_metrics/blob/dev/LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
