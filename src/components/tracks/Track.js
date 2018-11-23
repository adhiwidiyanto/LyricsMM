import React from 'react'
import { Link } from 'react-router-dom'

const Track = (props) => {
  const track = props
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{ track.track.artist_name }</h5>
          <p className="card-text">
            <strong><i className="fas fa-play"></i>Track</strong>: {track.track.track_name}
            <br/>
            <strong><i className="fas fa-compact-disk"></i>Album name</strong>: {track.track.album_name}
          </p>
          <Link to={`lyrics/track/${track.track.track_id}`} className="btn btn-primary btn-block">
            <i className="fas fa-chevron-right"></i> View lyrics
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Track
