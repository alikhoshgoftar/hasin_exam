import React from "react";
import './CardRow.css'
// import mydata from './../../mockData/products.json'
import Card from '../Card'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {fetchPosts} from './../../redux/actions/postActions'

 function CardRow({data}) {
    console.log("posts",data)
    return (
        <div className={"cardRow"}>
        {
            data.map((item,key)=>
                <Card data={item} key={key}/>
            )
        } 
        </div>
    );
}

const mapStateToProps = state => ({
    data: state.posts.items
  });
  const mapDispatchToProps=(dispatch)=> {
    return bindActionCreators(fetchPosts, dispatch)
  }
export default connect(mapStateToProps,mapDispatchToProps)(CardRow)