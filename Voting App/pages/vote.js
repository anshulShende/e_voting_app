import React, { Component } from 'react'
import Layout from '../Components/Layout'
import {Link, Router} from '../routes'
import { Grid, Card, Input, Button, Message } from 'semantic-ui-react'
import voting from '../Ethereum/voting'
import web3 from '../Ethereum/web3'

class votingPage extends Component {

    state = {
        id : 0,
        Loading : false,
        errorMessage : ''
    }

    static getInitialProps = async (props) =>{

        const locale = props.query.locale;
        const numCandidates = await voting.methods.getNumCandidate().call()

        const candidates = await Promise.all(
            Array(parseInt(numCandidates))
            .fill()
            .map((element,index) =>{
                return voting.methods.candidates(index).call()
            })
        )

        return {
            numCandidates : numCandidates,
            candidates : candidates,
            locale : locale
        }
    }

    renderCandidates = () =>{
        const items =  this.props.candidates.map((candidate,index) =>{
            return{
                header : candidate.name,
                meta : index,
                description : candidate.partyName
            }
        });

        return <Card.Group textAlign = "center" centered items = {items} />
    }
    
    onSubmit = async(event) =>{
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();

        this.setState({Loading : true, errorMessage : ''})
        try{
            const transaction = await voting.methods.vote(this.state.id).send({from : accounts[0]})

            const timestamp = await web3.eth.getBlock(transaction.blockNumber);
            const unix_t = timestamp.timestamp;
            const date = new Date(unix_t * 1000);
            const hours = date.getHours();
            const minutes = "0" + date.getMinutes();
            const seconds = "0" + date.getSeconds();

            const time = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            const bN = (transaction.blockNumber).toString();
            const tH = transaction.transactionHash;
            const bH = transaction.blockHash;
            const sA = transaction.from;

            await voting.methods.addTransactions(
                sA,tH, bH, bN, time).send({from : accounts[0]})

            Router.pushRoute(`/${this.props.locale}/votingTable`)
        }catch(err){
            this.setState({errorMessage : err.message})
        }
        
        this.setState({Loading : false, id : ''})
    }
    
    render(){
        return(
            <Layout>
                <Grid textAlign = "center">
                    <Grid.Row>
                        <Grid.Column>
                            <Link route = {`/${this.props.locale}`}>
                                <a>
                                    Homepage
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            {this.renderCandidates()}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Input 
                                value = {this.state.id}
                                onChange = {event => this.setState({id : event.target.value})}
                                fluid
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Button primary loading = {this.state.Loading} onClick = {this.onSubmit}>
                                Vote
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        )
    }
}

export default votingPage;