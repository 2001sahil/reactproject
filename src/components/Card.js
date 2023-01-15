import React  from 'react'
const  Card =(props)=> {
 
        let {image,text,title,url}=props;
        return (
      <div className='ml-3 mr-3 mt-5 mb-5'>
        <div className="card " style={{width: "18rem"}}>
        <img className="card-img-top" src={image} alt="Card cap"/>
        <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href={url} target="__blank" className="btn btn-primary">Go To News</a>
        </div>
    </div> 
      </div>
    )
  
}
export default Card
