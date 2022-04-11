import React from 'react'
import "./posts.css"
import {connect} from 'react-redux'
import {fetchData} from '../../redux/actions/postActions'
import CardPost from '../cardData/CardPost'

class Posts extends React.Component {

  componentDidMount(){
    this.props.onFetchData();
  }
  
  render(){
    return (
      <div className='posts'>
        {this.props.isLoading ? this.props.data.map(post => (
          <CardPost key={post._id} post={post} />
        )): <h2 className='error'>Sorry! unable to show blogs this time.<br/>*This is due to network problem,Refresh this page again or check your internet connection*</h2>}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(state)
  return { data:state.data, error: state.error , isLoading: state.isLoading , dataObject: state.dataObject};
}

const mapDispatchprops = (dispatch) => {
  return { onFetchData: () => dispatch(fetchData()) }
}


export default connect(mapStatetoProps, mapDispatchprops)(Posts);


