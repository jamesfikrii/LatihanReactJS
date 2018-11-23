import React from 'react'
import {connect} from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import {onUserLogin} from '../actions'


class login extends React.Component {
      onClickBtn = () => {
        let user = this.refs.tbUsername.refs.username.value
        let pass = this.refs.tbpassword.refs.password.value
        this.props.onUserLogin({user , pass}) 
    }
    render(){
        if(this.props.username === ''){
            return(
                <center>
                    <h1>Ini Login Page</h1>
                    <div className="col-3">
                    <Form>
                          
                        <FormGroup>
                            {/* <Label for="exampleEmail">Username</Label> */}
                            <Input type="text" name="username" id="exampleEmail" ref="tbUsername" innerRef = "username" placeholder="Username" />
                        </FormGroup>
                        <FormGroup>
                            {/* <Label for="examplePassword">Password</Label> */}
                            <Input type="password" name="password" id="examplePassword" ref="tbpassword" innerRef="password" placeholder="password" />
                        </FormGroup>
                            <Button color = 'primary' onClick={this.onClickBtn}>Submit</Button> 
                            {/* <InputKu type ="text" ref = "Inputku" innerRef = "InnerKu" /> */}
                    </Form>
                    </div>
                </center>            
            )
        }
        return <Redirect to ="/" /> 
        
    }
}

const mapStateToProps = (state) => {
    return {username : state.username}
}

export default connect(mapStateToProps, { onUserLogin })(login);