import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA8u2R0aqJ9EpBLiPGsng5uvfFcq0Z-8TM';

class App extends Component  {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('surfboards');
    }

    videoSearch(term){
        //downwards data flow - most parent component in application should 
        //be responsible for fetching data
        YTSearch({key: API_KEY, term: term}, (videos) => {
            //when we have {videos : videos} - same name for key and value we can use
            //ES6 shortcut which is videos
            this.setState({ videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    
    render(){
        //this function is implemented so to defer execution of on change
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300 );

               //JSX
               //passing data from parent to child component is passing props like in VideoList object instance
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
                    videos= {this.state.videos}  />
            </div>
            );
    }     
}


//<App/> creates instance of class App and pass it to ReactDOM render function
ReactDOM.render(<App />, document.querySelector('.container')); 