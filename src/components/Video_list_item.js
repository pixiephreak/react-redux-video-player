import React from 'react';

const VideoListItem = ({video, onSelect}) => {
  const videoImage = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;
  return(
    <li onClick={()=> onSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={videoImage}/>
        </div>
        <div className='media-body'>
          <div className='media-heading'>
            {videoTitle}
          </div>
        </div>
      </div>
    </li>
  )

}

export default VideoListItem;
