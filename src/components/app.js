import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import SearchBar from './Search_bar';
import VideoList from './Video_list';
import VideoDetail from './Video_detail'
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyByvNQjxyS0odX1ieNFQSxuYUAWxTuTBWk';

// import helper from '../util/helper'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state  = {
      videos: [],
      selectedVideo: null,
      term:''
    };
    this.videoSearch('palestine')
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term: term}, data => {
      this.setState({
        videos:data,
        selectedVideo: data[0]
      });
    });
  }
  // componentDidMount: () => this.setState({videos:helper.runQuery()});
  // this.setState({videos:videos}) -> this.setState({videos})

  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onSelect ={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>

      </div>
    );
  }
}
