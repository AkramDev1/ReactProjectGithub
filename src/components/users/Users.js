import React, { Component } from 'react'
import User from "./user";
import SearchUsers from "./SearchUsers"
import axios from 'axios';





export class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    getUsers = () => {
        axios.get("https://api.github.com/users")
            .then(Response => this.setState({ users: Response.data }))
    }
    componentDidMount() {
        this.getUsers();
    }

    SearchUsersFromGit = (data) => {
        if (data !== '') {
            axios.get(`https://api.github.com/search/users?q=${data}`)
                .then(response => {
                    this.setState({
                        users: response.data?.items
                    })
                })
        }
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <SearchUsers getUserSearch={this.SearchUsersFromGit} />
                    </div>
                </div>
                <div className="row">
                    {this.state.users?.map(user => (
                        <div className="col-md-4" key={user.id}>
                            <User user={user} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Users
