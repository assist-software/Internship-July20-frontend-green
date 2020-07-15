import React, {Component} from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import '../Common/Styles.css';


class Layout extends Component {
    state = {
        showLeftSidebar: true
    }

    render () {
        return (
           <div className="layout">
             <LeftSidebar 
                open={this.state.showLeftSidebar} 
                closed={this.LeftSideBarClosedHandler} /> 

            <main>
                {this.props.children}
            </main>
            </div>
        );

    }
} 
    
export default Layout;