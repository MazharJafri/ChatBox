import React from 'react';


const CommentDetail = props => {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metaData">
            <span className="date">{props.timeAgo}</span>
          </div>
          <div className="text">{props.message}</div>
        </div>
      </div>
    );
};

export default CommentDetail;

