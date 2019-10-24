# react-my-news
A simple app to fetch and show the news from different sources

## Getting Started

This is a simple App to get news from https://newsapi.org/ .

You will need a token to start.
If you don't have one [click here](https://newsapi.org/register) to create one.

After it please paste your token in the .env file.

```CLI
REACT_APP_NEWS_API_KEY=123sample123token3210
```

You can access the production ready project here:
https://react-my-news.now.sh .


### Prerequisites

* Node.js v8 or above

You can check your node version using the command:

```CLI
node --version
```

### Installing

Install dependencies and start using [yarn](https://yarnpkg.com):

```CLI
yarn install
yarn start
```

## Running the tests

You can run your tests using:

```CLI
yarn test
```

### Production build

You can generate an optimized distribution bundle. To do this run the command:

```CLI
yarn build
```
## Built With

* [Create React App](https://create-react-app.dev/) - React's starter boilerplate
* [React](https://babeljs.io/) - JavaScript library for building user interfaces
* [Redux](https://redux.js.org/) - State management
* [AirBnB Lint](https://github.com/airbnb/javascript) - AirBnB ESLint Javascript Style guidelines
* [News API](https://newsapi.org) - News from all over the world

## Contributing

To contribute please send a Pull Request following the pattern of commits of this project.



## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. Sample:

```CLI
feature: add new component
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Considering the use of Styled Components or Bulma
* A simple graphql server would be usefull for advanced filters and hiding the generated token
* Since requests are lightweight it was not paginated. Considering to paginate using the graphql server.
* Unit tests still to be implemented
