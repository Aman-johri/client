import {createData } from "../../redux/actions/postActions";


const mapDispatchToProps = dispatch => ({
      createData: (data) => dispatch(createData(data))
})

export  {
    mapDispatchToProps
}
  