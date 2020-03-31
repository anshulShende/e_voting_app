import React, { Component } from 'react' 
import voting from '../Ethereum/voting'
import Layout from '../Components/Layout'
import {Table, Grid, Button} from 'semantic-ui-react'
import {Link, Router} from '../routes';
import RequestVotingRow from '../Components/RequestVotingRow'

class VotingTable extends Component{

    static getInitialProps = async (props) =>{
        
        const locale = props.query.locale;
        const numTransactions = await voting.methods.getNumberofTransactions().call()
        const transactions = await Promise.all(
            Array(parseInt(numTransactions))
            .fill()
            .map((element,index) => {
                return voting.methods.transactions(index).call();
            })
        )

        return{
            transactions : transactions,
            numTransactions : numTransactions,
            locale : locale
        }
    }
    
    renderRow = () =>{
        return this.props.transactions.map((transaction,index) =>{
            return <RequestVotingRow 
                key = {index}
                id = {index}
                transaction = {transaction}
            />
        });
    }

    endElection = async (event) =>{
        event.preventDefault();
        window.location.assign("http://localhost:4000/staff")
    }

    logOut = async (event) =>{
        event.preventDefault();
        window.location.replace("http://localhost:4000/election")
    }
    

    render(){

        const { Header, HeaderCell, Body, Row } = Table;
        return (
            <Layout>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route = {`/${this.props.locale}`}>
                                <a>
                                    Homepage
                                </a>
                            </Link>
                        </Grid.Column>
                        <Grid.Column floated = "right">
                            <Button primary onClick = {this.logOut}>Logout</Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Button primary floated onClick = {this.endElection}>End Election</Button>
                            <Table celled textAlign = "center">
                                <Header>
                                    <Row>
                                        <HeaderCell>Id</HeaderCell>
                                        <HeaderCell>Voter's Address</HeaderCell>
                                        <HeaderCell>Transaction's Hash</HeaderCell>
                                        <HeaderCell>Block's Number</HeaderCell>
                                        <HeaderCell>Timestamp</HeaderCell>
                                    </Row>
                                </Header>
                                <Body>
                                    {this.renderRow()}
                                </Body>
                            </Table>
                    </Grid.Row>
                </Grid>
            </Layout>
        )
    }
}

export default VotingTable;