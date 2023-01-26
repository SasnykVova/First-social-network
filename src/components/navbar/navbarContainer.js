import Navbar from "./navbar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

const NavbarContainer = (props) => {
    return (
        <Navbar auth={props.auth}/>
    )
}

export default connect (mapStateToProps, {})(NavbarContainer);