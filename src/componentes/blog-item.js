import React, { Component } from "react";

class BlogItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div className="column">
            <article className="is-grey notification" >
                <p className="title">{this.props.titulo}</p>
                <p className="subtitle">{this.props.subtitulo}</p>
                <figure className="image is-4by3">
                    <img src={this.image}/>
                </figure>
            </article>
        </div>;
    }
}

class BlogItems extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let items_elem=this.props.items.map((it,i)=>{
            return (<BlogItem key={i} titulo={it.titulo} subtitulo={it.fecha} image={it.image} />);
        })
        return <div className="columns">{items_elem}</div>
    }
}
export default BlogItems