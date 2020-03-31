import React, { Component } from 'react';
import Layout from '../Components/Layout'
import voting from '../Ethereum/voting'
import {Card, Grid, Button, Table, Popup} from 'semantic-ui-react'
import {Link, Router} from '../routes';
import RequestRow from '../Components/RequestRow'
import axios from 'axios';
import web3 from '../Ethereum/web3'

class votingInstance extends Component{

    state ={
        message : '',
        Loading : false,
        errorMessage : '',
        addLoading : false,
        isButtonDisabled : false,
        popupContent : 'Click this button to add candidates'
    }

    static getInitialProps = async (props) =>{

        const numCandidates = await voting.methods.getNumCandidate().call();
        const locale = props.query.locale;
        
        const candidates = await Promise.all(
            Array(parseInt(numCandidates))
            .fill()
            .map((element, index) =>{
                return voting.methods.candidates(index).call()
            })
        )

        return{
            address : voting.options.address,
            number : numCandidates,
            candidates : candidates,
            locale : locale
        }
    }

    renderRow(){
        return this.props.candidates.map((candidate,index) =>{
            return <RequestRow 
                key = {index}
                id = {index}
                candidate  = {candidate}
            />
        });
    }

    onAddCandidates = async(event) =>{

        if(!this.state.isButtonDisabled){
            event.preventDefault();

            const accounts = await web3.eth.getAccounts();
            const res = await axios.get(`http://localhost:5000/candidates/${this.props.locale}`);
            console.log(res.data);
            console.log(accounts[0]);
            
            for( var i = 0; i < res.data.length; i++ ){
                try{
                    this.setState({addLoading : true, errorMessage : ''})
                    await voting.methods.addCandidate(res.data[i].name,res.data[i].partyName)
                    .send({from : accounts[0]})
                    Router.pushRoute(`/${this.props.locale}`);
                } catch(err){
                    this.setState({errorMessage : err.message})
                }
                this.setState({addLoading : false})
            }     
            this.setState({isButtonDisabled : true})
        }
        else{
            this.setState({popupContent : 'The Candidates have been added'})
        }
        
    }

    onClick = async(event) =>{
        event.preventDefault();
        
        var largest = 0;
        var index;

        for ( var i = 0 ; i < this.props.number ; i++ ){
            
            if(this.props.candidates[i].voteCount > largest){
                largest = this.props.candidates[i].voteCount;
                index = i;
            }
            
        }

        const winningCandidate = await voting.methods.candidates(index).call();
        console.log(winningCandidate);
        this.setState({message : winningCandidate[0] + " belonging to the party " + winningCandidate[1] + " has won with " + winningCandidate[2] + " votes "})
        
    }

    render(){

        const { Header,Row, HeaderCell, Body } = Table; 
        return(
            <Layout>
                <Grid>
                    <Grid.Row>
                        <Grid.Column floated = "left" width = {8}>
                            <Card fluid>
                                <Card.Content >
                                    <Card.Header>{this.props.address}</Card.Header>
                                    <Card.Meta>Election Address And Number of Candidates : {this.props.number}</Card.Meta>
                                    <Card.Description>This the Address on which the Election Contract has been deployed</Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column floated = 'right' width = {2}>
                                <Link route = {`/${this.props.locale}/votingTable`}>
                                    <a>
                                        <Button primary>Voter's Info</Button>
                                    </a>
                                </Link>
                            </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Popup
                                content = {this.state.popupContent}
                                on = "click"
                                pinned
                                trigger = {<Button 
                                    primary 
                                    icon = "add circle"
                                    content = "Add Candidate"
                                    onClick = {this.onAddCandidates}
                                    loading = {this.state.addLoading}
                                    />}
                            />
                            <Link route = {`/${this.props.locale}/vote`}>
                                <a>
                                    <Button  floated = "right" primary>Go to Vote</Button>    
                                </a>
                            </Link>
                            
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Table celled textAlign = "center">
                                <Header>
                                    <Row>
                                        <HeaderCell>Candidate's ID</HeaderCell>
                                        <HeaderCell>Candidate's Name</HeaderCell>
                                        <HeaderCell>Candidate's Party</HeaderCell>
                                        <HeaderCell>Count</HeaderCell>
                                    </Row>
                                </Header>
                                <Body>
                                    {this.renderRow()}
                                </Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Button 
                                primary 
                                loading = {this.state.Loading} 
                                onClick = {this.onClick}
                            >
                                Pick a Winner
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <h3>{this.state.message}</h3>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>    
            </Layout>
        );
    }
}

export default votingInstance;