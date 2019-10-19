import React from "react";
import {
    Link
} from "react-router-dom";
import './Card.css'
import { connect } from 'react-redux';
import { deletePostById } from './../../redux/actions/deletePostById'

 function Card({deletePostById,props}) {
    let data = props.data
    return (
        <div className={"card"}>
            <Link className="cardLink" to={"/posts?id=" + data.id}  >
                <div className="imageWrapper">
                    <img src={data.imageUrl} alt={data.title} />
                </div>
                <h3>{data.title}</h3>
                <p className={'description'}>{data.description}</p>
            </Link>
            <div className="deletebox">
                <button onClick={()=>deletePostById(data.id)} className="deletePostBTN">حذف</button>
                </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch,props) => {
    return {
      props,
      deletePostById: (id) =>  dispatch(deletePostById(id)),

    }
  }
  
export default connect(null, mapDispatchToProps)(Card)