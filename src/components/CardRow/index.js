import React from "react";
import './CardRow.css'
import Card from '../Card'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchPosts } from './../../redux/actions/postActions'

function CardRow({ data }) {
    return (
        <div className={"cardRow"}>
            {
                data.map((item, key) => {
                    if (item.isActive === true) {
                        return (<Card data={item} key={key} />)
                    }else{
                       return null 
                    }
                }
                )
            }
        </div>
    );
}

const mapStateToProps = state => ({
    data: state.posts.items
});
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(fetchPosts, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardRow)