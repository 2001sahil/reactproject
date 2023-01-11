import React, { Component } from 'react'
import Card from './components/Card';
// import Navbar from './components/Navbar';
import Load from './components/Load';
export default class News extends Component {
  
    News=[
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "NHS pay dispute: Health Secretary Steve Barclay hints at revised offer to unions",
            "description": "Writing in the Sunday Telegraph, Steve Barclay says he remains \"ready to engage\" with unions.",
            "url": "https://www.bbc.co.uk/news/uk-politics-64201200",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7780/production/_128229503_819f2c593a05fc43eb7f5e3e1cb074c527672408.jpg",
            "publishedAt": "2023-01-08T05:22:32Z",
            "content": "Health Secretary Steve Barclay has suggested striking health workers could receive a revised pay offer - if they agree to \"efficiencies\" in the NHS.\r\nWriting in the Sunday Telegraph, Mr Barclay said … [+2448 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "2023/01/08 05:00 GMT",
            "description": "The latest five minute news bulletin from BBC World Service.",
            "url": "https://www.bbc.co.uk/programmes/w172ykqh462ncfc",
            "urlToImage": "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
            "publishedAt": "2023-01-08T05:06:00Z",
            "content": "The latest five minute news bulletin from BBC World Service."
          }
        ]
      constructor(){
        super();
        this.state={articles:this.News,Image:"",page:1,loding:0,disable:false,info:"WELCOME TO MY FIRST NEWS WEB"};
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
        let api=await fetch( `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=3a84fc9a12d946a8955b46729d4903ce&pageSize=5&page=${this.state.page}`);
        let data= await api.json();

        this.setState({articles:data.articles,loding:1,disable:false,info:"WELCOME TO MY FIRST NEWS WEB"})
        // console.log("gupta")
      }
      next=async ()=>{
        this.setState({loding:0,disable:true,info:"Loading please wait"})
        await this.setState({page:this.state.page+1})
        let api=await fetch( `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=3a84fc9a12d946a8955b46729d4903ce&pageSize=5&page=${this.state.page}`);
        let data= await api.json();
        // console.log("sahil",this.state.page)
        this.setState({articles:data.articles,loding:1,disable:false,info:"WELCOME TO MY FIRST NEWS WEB"})
      }
      checknext=()=>{if(5*this.state.page>this.state.total){
        return true
      }return false}
      async componentDidMount(){
        this.setState({loding:0,disable:true,info:"Loading please wait"})
        let api=await fetch( `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=3a84fc9a12d946a8955b46729d4903ce&pageSize=5&page=${this.page}`);
        let data= await api.json();
        this.setState({articles:data.articles,total:data.totalResults,loding:1,disable:false,info:"WELCOME TO MY FIRST NEWS WEB"})
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
            {/* <div className="col-sm col-4 col-sm-6"> */}
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
