import { connect } from "react-redux";
import UI_Welcome from "./Welcome";
import { METADATA_ACTIONS } from "../../actions";

// mapStateToProps goes here
function mapStateToProps(state){
    return{
        loaded:state.metadata.loaded
    }
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
    return{
        initMetadata(){
            dispatch(METADATA_ACTIONS.getMetadata())
        }
    }
}


export default  connect(mapStateToProps,mapDispatchToProps)(UI_Welcome);


