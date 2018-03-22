import React from 'react';

//{video} = const video = props.video;
const VideoListItem = ({video, onVideoSelect}) => {
    //to get access to the video
    console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
          <div className="video-list media">
            <div className="media-left">
              <img classNae="media-object" src={imageUrl} />
            </div>
              <div className="media-body">
                <div className="media-heading">{title}</div>
              </div>
          </div>
        </li>
    );
};

export default VideoListItem;