import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCUE70ANVO5-hTkqpD_gZMZKjqrrfEAvxw';

//Step 1- Create a new component.
//This component should produce some HTML

class App extends Component {
    
    constructor(props){
        super(props);
        
        this.state={ 
            videos: [],
            selectedVideo: null
        }; 
        this.videoSearch('');
    }
    
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos, 
                selectedVideo : videos[0]
            });
        });
    }
    
    render() {
    const videoSearch= _.debounce((term) => { this.videoSearch(term) }, 0)
        return (
            <div>
                <SearchBar onSearchTermChange ={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos = { this.state.videos} />
            </div>
        );
    }
};

//Step 2- Take this component's HTML and put it 
//in the DOM (the page)



ReactDOM.render(<App />, document.querySelector('.container'));