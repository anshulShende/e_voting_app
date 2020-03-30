import React, { Component } from 'react';
import Layout from '../Components/Layout'
import voting from '../Ethereum/voting'
import {Card, Grid, Button, Table} from 'semantic-ui-react'
import {Link} from '../routes';
import RequestRow from '../Components/RequestRow'
import web3 from '../Ethereum/web3'

class votingInstance extends Component{

    state ={
        message : '',
    }

    static getInitialProps = async () =>{

        const numCandidates = await voting.methods.getNumCandidate().call();
        
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
            candidates : candidates
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
                                <Link route = '/votingTable'>
                                    <a>
                                        <Button primary>Voter's Info</Button>
                                    </a>
                                </Link>
                            </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route = '/candidates/new'>
                                <a>
                                    <Button 
                                        primary 
                                        icon = "add circle"
                                        content = "Add Candidate" 
                                    />
                                </a>
                            </Link>
                            <Link route = '/vote'>
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