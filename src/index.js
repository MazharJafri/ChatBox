import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail
            author="Sam"
            timeAgo="Today at 2:00PM"
            message="Thats really cool!"
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail
            author="Alex"
            timeAgo="Yesterday at 12:35AM"
            message="Nice blog post!"
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail
            author="Jane"
            timeAgo="Today at 5:24PM"
            message="Keep it up!"
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))