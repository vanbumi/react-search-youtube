# React Search Youtube

[img-react-search-ytub](http://res.cloudinary.com/medio/image/upload/c_scale,h_1100,w_800/v1512036851/final_app_react_search_ycvr6k.jpg)


**Repo name GITHUB : react-search-youtube**


## Project setup

Run server

    npm start

    localhost:8080

## Taste of JSX

#### Delete or folder boilerplate

#### Create new folder src

#### Create new file src/index.js

## More JSX

## ESX import statements

## React DOM vs React

### Diff Component instant and Component ...

    this is an instant "<App />" of JSX.

### Render Targets

    ReactDOM.render(<App, />, document.querySelector('.container'));

### Component Structure

* Create new folder: src/components

* Create new file : components/search_bar.js

* Create new file : components/video_detail.js    

* Create new file : components/video_list.js    

* Create new file : components/video_list_item.js

### Youtube Search API signup

console.developers.google.com

go to Dashboard > klik Library

search for "youtube" > click YouTube Data API v3

Click Enable API

Go left handsite > click Credentials

Click new credential > API key > Chose browser key and copy it.

Add it into index.js

    const API_KEY = 'AIzaSyBaKNWnjwmKDcFjm4ECO8ydA7mpn6DF6jg';

Install npm package for youtube search:

    npm install --save youtube-api-search    

Open file package.json youtube search has there.

## Export Statement

search_bar.js:

    import React from 'react';

    const SearchBar = () => {
        return <Input />
    };

    export default SearchBar;

**Import SearchBar**:

    import SearchBar from './components/search_bar';

Update return nya:

    const App = () => {
        return (
            <div>
                <SearchBar />
            </div>
        )
    };

Test di browser        

## Class Based Components

Change search_bar to become class base 

    class SearchBar extends Component {
        render() {
            return (
            <input />
            );
        }
    }

## Handling User Event

Handle event di React ada 2 step:

* Kita declare event handler, event handler adalah sebuha function.
* Melewatkan event handler tsb ke dalam element event.

Ada 2 cara membuat event handler:

Step 1 :

    import React, {Component}  from 'react';

    class SearchBar extends Component {
        render() {
            return (
                <input onChange={this.onInputChange} />
            );
        }

        onInputChange(event) {
            return console.log(event.target.value)
        }
    }

    export default SearchBar;

Step 2 refactor menjadi 1 baris:

    import React, {Component}  from 'react';

    class SearchBar extends Component {
        render() {
            return (
                <input onChange={event => console.log(event.target.value)} />
            );
        }
    }

    export default SearchBar;         

## Introduction to state

## More on State       


