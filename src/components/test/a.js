import React from 'react'
import { connect } from 'react-redux'
const AppTest=(props)=>{
    return(<div>
                {/* {console.log(props.json_data)} */}
           </div>)
}
const mapStateToProps=(state)=>({
    json_data:state.json_data.JSON_DATA
})
export default connect(mapStateToProps)(AppTest)