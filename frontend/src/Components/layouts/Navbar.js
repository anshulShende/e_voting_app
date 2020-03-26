import React, { Component } from 'react';

export class Navbar extends Component {
    render() {
        return (
            <div class="ui inverted segment">
                <div class="ui inverted secondary pointing menu">
                    <a class="item" href="../pages/Homepage.js">
                        <i class=" large blue ethereum icon"></i>
                        E-Voting App
                    </a>
                    <div class="item active">
                        <i class="large home icon"></i>
                        Home
                     </div>
                    <a class="item" href="../pages/About.js">
                        About
                    </a>
                    <div class="item right ui category search">
                    <div class="ui left icon input">
                        <input class="prompt" type="text" placeholder="Search .."/>
                        <i class="search icon"></i>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Navbar
