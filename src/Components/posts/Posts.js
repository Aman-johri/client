import React from 'react'
import "./posts.css"
import Post from '../post/Post'
import {connect} from 'react-redux'
import {fetchData} from '../../redux/actions/postActions'

class Posts extends React.Component {

  componentDidMount(){
    this.props.onFetchData();
  }

  render(){
    return (
      <div className='posts'>
        {this.props.data.map(post => (
          <Post key={post._id} post={post} />
        ))}
        </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return { data: state.data, error: state.error };
}

const mapDispatchprops = (dispatch) => {
  return { onFetchData: () => dispatch(fetchData()) }
}


export default connect(mapStatetoProps, mapDispatchprops)(Posts);




