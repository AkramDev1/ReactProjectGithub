import React, { Component } from 'react'

export class SearchUsers extends Component {

    state = {
        search: ''
    }
    //Methode:
    handleForm = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    SearchUsers = (e) => {
        e.preventDefault();
        this.props.getUserSearch(this.state.search)
    }

    render() {
        const { search } = this.state;
        return (
            <form onSubmit={this.SearchUsers} >
                <div className="form-group " >
                    <input onChange={this.handleForm} value={search} placeholder="Search users ..." id="search" type="text" className="form-control" />
                </div>
                <button className="btn btn-danger btn-block">Search</button>
            </form>
        )
    }
}

export default SearchUsers
