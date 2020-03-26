import React, { Component } from 'react';
class Homepage extends Component {
    render() {
        return (
        <div class="ui container text-align'center'">
            <div class="ui four cards">
                <div class="card">
                    <div class="content">
                        <div class="header">Voter Services</div>
                        <div class="description">
                            All voter Related Information and Queries
                        </div>
                    </div>
                    <div class="ui primary bottom attached buttons">
                        <div class="ui right labeled icon button">
                            <i class="right arrow icon"></i>
                            Voters
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                    <div class="header">Candidate Services</div>
                    <div class="description">
                        Check List of All Candidates
                    </div>
                    </div>
                    <div class="ui primary bottom attached buttons">
                        <div class="ui right labeled icon button">
                            <i class="right arrow icon"></i>
                                Candidates
                        </div>
                    </div>
                 </div>
                <div class="card">
                    <div class="content">
                    <div class="header">Staff Login</div>
                    <div class="description">
                        All Staff Management services
                    </div>
                    </div>
                    <div class="ui primary bottom attached buttons">
                        <div class="ui right labeled icon button">
                            <i class="right arrow icon"></i>
                            Staff Login
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                    <div class="header">Admin Login</div>
                    <div class="description">
                        Contains all Administrative Functionalities and Services
                    </div>
                    </div>
                    <div class="ui primary bottom attached buttons">
                        <div class="ui right labeled icon button">
                            <i class="right arrow icon"></i>
                            Admin Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Homepage
