import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBaKNWnjwmKDcFjm4ECO8ydA7mpn6DF6jg';

// create new component. This component should produce 
// some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    // fetching youtube
    // YTSearch ({key: API_KEY, term: 'resep ikan bakar'}, function(videos) {
    //YTSearch({key: API_KEY, term: 'resep ikan bakar'}, (videos) => {
      //console.log(videos);
      //this.setState({videos: data})
      //this.setState({
        //videos: videos,
        //selectedVideo: videos[0] // default video detail
      //})
    //});

    this.videoSearch('ikan bakar');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0] // default video detail
      })
    });
  }

  render() {
    // create debounds
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return (
      <div>
        {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)} /> */}
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo}) } 
          videos={this.state.videos} 
        />
      </div>
    )
  }
};

// take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));


