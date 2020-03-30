import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'

class RequestVotingRow extends Component{
      
    render(){

        const { Row, Header, Cell } = Table;

        return(
            <Row>
                <Cell>
                    {this.props.id}
                </Cell>
                <Cell width ={2}>
                    {this.props.transaction.sA}
                </Cell>
                <Cell>
                    {this.props.transaction.tH}
                </Cell>
                <Cell>
                    {this.props.transaction.bN}
                </Cell>
                <Cell>
                    {this.props.transaction.tS}
                </Cell>
            </Row>
        )
    }
}

export default RequestVotingRow;