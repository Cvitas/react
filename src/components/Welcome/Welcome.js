/**
 * Created by cx on 2018/1/10.
 * Include
 * description
 */
import React,{ Component } from "react";
import classnames from "classnames";
import style from "./style.scss";
import PropTypes from "prop-types";

export default class Welcome extends Component{
    componentDidMount () {
        this.init();
    }
    init(){
        this.initDishesAndType();
    }
    initDishesAndType(){
        let { initMetadata } = this.props;
        initMetadata();
    }
    render(){
        const loading = classnames({
            [style.flashScreen]: true,
            [style.loaded]: this.props.loaded
        });
        return(
            <div className="box">
                <div className={loading}></div>
            </div>

        )
    }
}

Welcome.propTypes = {
    loaded: PropTypes.bool.isRequired,
    initMetadata: PropTypes.func.isRequired,
}