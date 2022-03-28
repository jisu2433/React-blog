import React,{useState} from 'react';

function PostCard({postTitle, postDate}){
    const [title, setTitle] = useState(postTitle);
    const [date, setDate] = useState(postDate);
    const [heart, setHeart] = useState(0);

    function addHeart(){
        setHeart((current) => current +1);
    }
    return (<div>
        <h3>{title}</h3>
        <p>{date}</p>
        <button onClick={()=>{addHeart();}}>💕</button>
        <p>{heart}</p>
    </div>)
}

export default PostCard;