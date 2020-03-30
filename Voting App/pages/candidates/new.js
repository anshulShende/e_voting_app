import React, { Component } from 'react'
import Layout from '../../Components/Layout'
import {Link, Router} from '../../routes'
import {Form, Button, Input, Message} from 'semantic-ui-react'
import voting from '../../Ethereum/voting'
import web3 from '../../Ethereum/web3'

class newCandidate extends Component{

    state = {
        name : '',
        partyName : '',
        Loading : false,
        errorMessage : ''
    }

    onSubmit = async(event) =>{
        event.preventDefault();

        this.setState({Loading : true, errorMessage : ''})

        try{
            const accounts = await web3.eth.getAccounts();
            await voting.methods.addCandidate(
                this.state.name,
                this.state.partyName
            ).send({
                from : accounts[0]
            })
            Router.pushRoute('/');
        } catch(err){
            this.setState({errorMessage : err.message})
        }
        this.setState({Loading : false, name : '', partyName : ''})
    }

    render(){
        return(
            <Layout>
                <Link route = '/index'>
                    <a>
                        Homepage
                    </a>
                </Link>
                <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Candidate Name</label>
                        <Input 
                            value = {this.state.name}
                            onChange = {event => this.setState({name : event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Candidate's Party's Name</label>
                        <Input 
                            value = {this.state.partyName}
                            onChange = {event => this.setState({partyName : event.target.value})}
                        />
                    </Form.Field>
                    <Message error header = 'Oops!' content = {this.state.errorMessage}/>
                    <Button primary loading = {this.state.Loading}>Submit</Button>
                </Form>
                
            </Layout>
        )
    }
}

export default newCandidate