import React from 'react'
import "./posts.css"
import { connect } from 'react-redux'
import { fetchData } from '../../redux/actions/postActions'
import CardPost from '../cardData/CardPost'
import Create from "../../Pages/create/Create"

class Posts extends React.Component {

  componentDidMount() {
    const id = localStorage.getItem('userId');
    console.log(id);
    this.props.onFetchData(id);
  }

  render() {
    return (
      <div className='posts'>
        {(this.props.data.length != 0) ? this.props.data.map(post => (
          <CardPost key={post._id} post={post} />
        )) : <h2 className='error'>Sorry! No Blogs<br />*Create a new Blog and see all your blogs here*</h2>}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(state)
  return { data: state.data, error: state.error, isLoading: state.isLoading, dataObject: state.dataObject };
}

const mapDispatchprops = (dispatch) => {
  return { onFetchData: () => dispatch(fetchData()) }
}


export default connect(mapStatetoProps, mapDispatchprops)(Posts);


