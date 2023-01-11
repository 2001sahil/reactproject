import React, { Component } from 'react'
import Card from './components/Card';
// import Navbar from './components/Navbar';
import Load from './components/Load';
export default class News extends Component {
      // category=this.props

      constructor(){
        super();
        this.state={articles:[],Image:"",page:1,loding:0,disable:false,info:"WELCOME TO MY FIRST NEWS WEB"};
      }
      
      check=()=>{
        
        if(this.state.page===1){
            return true
        }
        return false
      }
      prev=async ()=>{
        
        this.setState({loding:0,disable:true,info:"Loading please wait"})
        await this.setState({page:this.state.page-1});
        let api=await fetch( `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=3a84fc9a12d946a8955b46729d4903ce&pageSize=5&page=${this.state.page}&category=${this.props.category}`);
        let data= await api.json();
        this.setState({articles:data.articles,loding:1,disable:false,info:"WELCOME TO MY FIRST NEWS WEB"})
        // console.log("gupta")
      }
      next=async ()=>{
        this.setState({loding:0,disable:true,info:"Loading please wait"})
        await this.setState({page:this.state.page+1})
        let api=await fetch( `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=3a84fc9a12d946a8955b46729d4903ce&pageSize=5&page=${this.state.page}&category=${this.props.category}`);
        let data= await api.json();
        // console.log("sahil",this.state.page)
        this.setState({articles:data.articles,loding:1,disable:false,info:"WELCOME TO MY FIRST NEWS WEB"})
      }
      checknext=()=>{if(5*this.state.page>this.state.total){
        return true
      }return false}
      async componentDidMount(){
        this.setState({loding:0,disable:true,info:"Loading please wait"})
        let api=await fetch( `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=3a84fc9a12d946a8955b46729d4903ce&pageSize=5&page=${this.page}&category=${this.props.category}`);
        let data= await api.json();
        await this.setState({articles:data.articles,total:data.totalResults,loding:1,disable:false,info:"WELCOME TO MY FIRST NEWS WEB"})
        // console.log((data.totalResults),"sa")
      }
      a=()=>{if(this.state.loding===0){
       if(this.state.disable===true){
         return <Load/>; 
       }
      }}
      render() {        
        return (
          <div>
            <div className='info d-flex align-items-center justify-content-center mt-4'>{this.state.info}</div>
            {this.a()}
        <div >       
          <div className="ALLNEWS row ">
            {this.state.articles.map((element)=>{if(!this.state.disable){
              return (<Card key={element.url}  title={element.title} image={element.urlToImage} description={element.description} url={element.url}/>) } return null })}
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-between mb-5 ' >
            <button type="button" disabled={(this.check())&&1}  className="btn btn-primary" onClick={this.prev}>Previous</button>
            <button type="button" disabled={this.checknext()&&1} className="btn btn-primary" onClick={this.next}>Next</button>
          </div>
      </div>
    )
  }
}
