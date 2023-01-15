import React, { useEffect,useState} from 'react'
import Card from './components/Card';
// import Navbar from './components/Navbar';
import Load from './components/Load';
import InfiniteScroll from 'react-infinite-scroll-component';
const News =(props)=> {
  
      const [articles,setarticles]=useState([])
      const [Image,setImage]=useState("")
      const [page,setpage]=useState(1)
      const [loding,setloding]=useState(0)
      const [disable,setdisable]=useState(false)
      const [info,setinfo]=useState("WELCOME TO MY FIRST NEWS WEB")
      const [total,settotal]=useState(0)
  

  // constructor() {
  //   super();
    
  //   this.state = { articles: [], Image: "", page: 1 ,loding: 0, disable: false, info: "WELCOME TO MY FIRST NEWS WEB" };
  
    
  // }
  const check = () => {
    if (page==1) {
      return true
    }
    return false
  }
  const prev = async () => {

    // this.setState({ loding: 0, info: "Loading please wait" })
    setloding(0)
    setinfo("Loading please wait")
    await setpage(page-1)
    // await this.setState({ page: this.state.page - 1 });


    let api = await fetch(`https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=3a84fc9a12d946a8955b46729d4903ce&pageSize=5&page=${page}&category=${props.category}`);
    let data = await api.json();
    // this.setState({ articles: data.articles, loding: 1, disable: false, info: "WELCOME TO MY FIRST NEWS WEB" })
    setarticles(data.articles)
    setloding(1)
    setdisable(false)
    setinfo("WELCOME TO MY FIRST NEWS WEB")
  }
  const next = async () => {
    // this.setState({ loding: 0, info: "Loading please wait" })
    setloding(0)
    setinfo("Loading please wait")

    // await this.setState({ page: this.state.page + 1 })
    await setpage(page+1)
    let api = await fetch(`https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=3a84fc9a12d946a8955b46729d4903ce&pageSize=5&page=${page}&category=${props.category}`);
    let data = await api.json();
    // this.setState({ articles: data.articles, loding: 1, disable: false, info: "WELCOME TO MY FIRST NEWS WEB" })
    setarticles(data.articles)
    setloding(1)
    setdisable(false)
    setinfo("WELCOME TO MY FIRST NEWS WEB")
  }
  const fetchMoreData=async ()=>{
    
    // this.props.Setstate=0
    // this.setState({page:this.page+1});
    // await this.setState({ page: this.state.page + 1 })
    setpage(page+1)

    let api = await fetch(`https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=3a84fc9a12d946a8955b46729d4903ce&pageSize=5&page=${page}&category=${props.category}`);
    let data = await api.json();
    // this.setState({articles:this.state.articles.concat(data.articles)})
    setarticles(articles.concat(data.articles))

  }
  const checknext = () => {
    if (5 *page > total) {
      return true
    } return false
  }
  const fun=async ()=>{
    props.click(0)
    setloding(0)
    setdisable(true)
    setinfo("Loading please wait")
    let api = await fetch(`https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=3a84fc9a12d946a8955b46729d4903ce&pageSize=5&page=${page}&category=${props.category}`);
    let data = await api.json();
    props.click(100)
    // await this.setState({ articles: data.articles, total: data.totalResults, loding: 1, disable: false, info: "WELCOME TO MY FIRST NEWS WEB" })
    setarticles(data.articles)
    settotal(data.totalResults)
    setloding(1)
    setdisable(false)
    setinfo("WELCOME TO MY FIRST NEWS WEB")
  }
  useEffect( () => {
      fun();
  },[])
  const a = () => {
    if (loding === 0) {
      if (disable === true) {
        return <Load />;
      }
    }
  }
  let st=1;
  
    return (
      <div>
        <div className='info d-flex align-items-center justify-content-center mt-4'>{info}</div>
        <div >
          <InfiniteScroll 
            dataLength={articles.length}
            next={fetchMoreData}
            
            hasMore={!((5 * page) > total)}
            loader={<h4><Load /></h4>}
            scrollableTarget="scrollableDiv"
          >
            <div className="ALLNEWS row container m-auto d-flex  justify-content-center">
              {articles.map((element) => {
                if (!disable) {
                  return (<Card key={st++} title={element.title} image={element.urlToImage} description={element.description} url={element.url} />)
                } return null
              })}
            </div>
          </InfiniteScroll>
        </div>
        {/* <div className='d-flex align-items-center justify-content-between mb-5 ' >
          <button type="button" disabled={(this.check()) && 1} className="btn btn-primary" onClick={this.prev}>Previous</button>
          <button type="button" disabled={this.checknext() && 1} className="btn btn-primary" onClick={this.next}>Next</button>
        </div> */}
      </div>
    )
  
}
export default News
