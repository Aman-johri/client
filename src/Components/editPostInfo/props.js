import { deleteData, getData, updateData } from '../../redux/actions/postActions'
const mapStateToProps = (state) => ({
    Postdata: state.singleData
})

const mapDispatchToProps = (dispatch) => ({

    deleteData: (postId) => dispatch(deleteData(postId)),
    getData: (postId) => dispatch(getData(postId)),
    updateData: (postId, post) => dispatch(updateData(postId, post))

})

export {
    mapStateToProps,
    mapDispatchToProps
}