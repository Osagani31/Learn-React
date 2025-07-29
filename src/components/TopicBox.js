import React from 'react';
import '../components/topicbox.css';

//Learn react component creation
//Learn React component styling

export default function TopicBox(props)
 {
  const topic="My favourite movie series is Harry Potter"
  const name="Deadly Hallows"
  return (
    
    <div className="topic-box">
      <span className="topic-box-text">
        {topic} {props.movie1}
      </span>
    </div>
  );
}
