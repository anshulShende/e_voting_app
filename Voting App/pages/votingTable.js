import React, { Component } from 'react'
import {Table, Grid} from 'semantic-ui-react'
import voting from '../Ethereum/voting'
import Layout from '../Components/Layout'
import {Link} from '../routes';
import RequestVotingRow from '../Components/RequestVotingRow'

class VotingTable extends Component{

    static getInitialProps = async () =>{

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
            numTransactions : numTransactions
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
    

    render(){

        const { Header, HeaderCell, Body, Row } = Table;
        return (
            <Layout>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route = '/'>
                                <a>
                                    Homepage
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
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