import React, { Component } from 'react';
import {
    Button
  } from 'semantic-ui-react';

class Homepage extends Component {
    render() {
        return (
        <div class=" ui container text-align'center' ">
            <div class="ui four cards">
                <div class="card">
                    <div class="content">
                        <div class="header">For Voters</div>
                        <div class="meta">Check All Voter Related Queries and Info</div>
                        <div class="ui animated  primary button" tabindex="0">
                            <div class="visible content">Next</div>
                            <div class="hidden content">
                                <i class="right arrow icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="header">Veronika Ossi</div>
                        <div class="meta">Friend</div>
                        <Button primary animated='fade'>
                            <Button.Content visible>Check the list of Candidates</Button.Content>
                            <Button.Content hidden>Voters</Button.Content>
                        </Button>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="header">Jenny Hess</div>
                        <div class="meta">Friend</div>
                        <Button primary animated='fade'>
                            <Button.Content visible>Admin Login</Button.Content>
                            <Button.Content hidden>For Staff</Button.Content>
                        </Button>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="header">Jenny Hess</div>
                        <div class="meta">Friend</div>
                        <Button primary animated='fade'>
                    <Button.Content visible>Super Admin Login</Button.Content>
                    <Button.Content hidden>For Election Commission</Button.Content>
                </Button>
                    </div>
                </div>
            </div>
             
        </div>
        )
    }
}
export default Homepage
