import { Component } from 'react';
import Head from 'next/head'

class Video extends Component {
  render() { 
    return (
      <div>
        <video
          ref={(el) => { this.videoContainer = el; }}
          className="video"
          loop
          muted
          playsInline
          autoPlay
        >
          <source src="/static/sample/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <style jsx>{`
          .video {
            display: block;
            will-change: transform;
            position: absolute;
            top:0;
            left:0;
          }

          @media (min-aspect-ratio: 16/9) {
            .video {
              width: 100%;
              height: auto;
            }
          }

          @media (max-aspect-ratio: 16/9) {
            .video {
              width: auto;
              height: 100%;
            }
          }
        `}</style>
      </div>
    );
  }
}
 
export default Video;