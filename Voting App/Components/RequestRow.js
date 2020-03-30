import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'

class RequestRow extends Component{
    render(){

        const {Header,Row,Cell} = Table;

        return(
            <Row>
                <Cell>
                    {this.props.id}
                </Cell>
                <Cell>
                    {this.props.candidate.name}
                </Cell>
                <Cell>
                    {this.props.candidate.partyName}
                </Cell>
                <Cell>
                    {this.props.candidate.voteCount}
                </Cell>
            </Row>
        )
    }
}

export default RequestRow;