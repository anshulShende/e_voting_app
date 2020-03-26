import React, { Component } from 'react';

export class Navbar extends Component {
    render() {
        return (
            <div class="ui inverted segment">
                <div class="ui inverted secondary pointing menu">
                     <div class="item active">
                        Home
                    </div>
                    <div class="item">
                         Messages
                     </div>
                    <div class="item">
                        Friends
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
