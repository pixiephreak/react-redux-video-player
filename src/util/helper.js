import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyByvNQjxyS0odX1ieNFQSxuYUAWxTuTBWk';


const helper = {
  runQuery: function(term){
    YTSearch({key:API_KEY, term: term}, data => {
      this.setState({
        videos:data,
        selectedVideo: data[0]
      });
    });
  }
}


export default helper
