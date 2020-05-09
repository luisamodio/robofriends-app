import React, {Component} from 'react';

import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox.js'
import { render } from '@testing-library/react';
import './App.css'
import Scroll from '../components/Scroll.js'
import ErrorBoundary from '../components/ErrorBoundary.js'



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [] ,
            searchfield: ''
        }
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }


    onSearchChange = (event) =>  {
        this.setState({searchfield:event.target.value})
    }


    render() {
        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        if (!robots.length) {
            return (
                <div className='tc f2'>
                    <h1>LOADING...</h1>
                </div>
            )
        } else {
                return (
                    <div className='tc'>
                        <h1 className='f2'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundary>
                        </Scroll>
                    </div>       
                );
        }
     }
}

export default App;