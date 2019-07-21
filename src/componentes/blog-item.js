import React, { Component } from "react";
import RSSParser from "rss-parser"

class BlogItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div className="column">
            <article className="is-grey notification" >
                <p className="title title-blog"><a href={this.props.link}>{this.props.titulo}</a></p>
                <p className="subtitle">{this.props.subtitulo}</p>
                <p>{this.props.content}</p>
            </article>
        </div>;
    }
}

class BlogItems extends Component{
    
    constructor(props){
        super(props)
        this.urlFeed=this.props.feed;
        this.state={items:[]};
    }

    componentDidMount(){
        let rssparser=new RSSParser();
        const proxi="https://cors-anywhere.herokuapp.com/"
        rssparser.parseURL(proxi+this.urlFeed,(err,feed)=>{
            //limitar el feed
            let nuearr=feed.items.slice(0,this.props.limit);
            console.log(nuearr);
            this.setState({
                items:nuearr
            });
        });
        

    }

    render(){
        let items_elem=this.state.items.map((it,i)=>{
            return (<BlogItem key={i} titulo={it.title} subtitulo={it.pubDate} link={it.link} content={it.contentSnippet}/>);
        })
        return <div className="columns">{items_elem}</div>
    }
}
export default BlogItems