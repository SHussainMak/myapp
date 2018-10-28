import React, {Component} from 'react';
import {FaSearch, FaPlane} from 'react-icons/fa'

class Body extends Component{
    state= {
        isLoaded: true,
        repos: [
            "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
            "https://i.pinimg.com/474x/22/58/dd/2258ddc6e6be0315a1f7f20888631540--thailand.jpg",
            "https://i.pinimg.com/474x/d3/7b/fe/d37bfea8fa734e3dc8757d1deeea2ca0--thai-islands-places-to-travel.jpg",
            "https://i.pinimg.com/474x/52/ef/a8/52efa89cebb565f20744aca770c9402a--thailand-adventure-thailand-travel.jpg",
            "https://i.pinimg.com/474x/ff/14/30/ff14303c3d77c487544dc701d294b588--thailand-beach-islands-phuket-thailand-map.jpg",
            "https://i.pinimg.com/474x/63/12/a2/6312a2e381e3672d20c1d384f8edd692.jpg",
            "https://i.pinimg.com/474x/23/74/3f/23743ff64343d60bdc5d4e7bfaa3dcdd--the-beach-beach-fun.jpg",
            "https://i.pinimg.com/474x/91/e5/69/91e56914f932aff0cec51d1e8b4c2c18--mexico-vacation-vacation-spots.jpg",
            "https://i.pinimg.com/474x/71/65/87/716587da4c7f4ab6c53a78c8fada362a.jpg",
            "https://i.pinimg.com/474x/97/04/5f/97045f63ab9736c0068fd29e075baac4--thailand-vacation-thailand-honeymoon.jpg",
            "https://i.pinimg.com/474x/15/47/d5/1547d5bf8f291a772c1c6119c7bd056d--phuket-thailand-outfit-puket-thailand.jpg",
            "https://i.pinimg.com/474x/20/04/37/200437d8e95b9a8bbec6d026e2c2f8bf--thailand-travel-in-thailand.jpg",
            "https://i.pinimg.com/474x/34/45/1f/34451fe0aa0508a76e3555dd1c74a99a--phi-phi-island-phuket-thailand.jpg",
            "https://i.pinimg.com/474x/ca/80/b5/ca80b553bacc53ebd8f4791cc626fffa--travel-in-thailand-backpacking-thailand.jpg",
            "https://i.pinimg.com/474x/41/e6/95/41e695852cbdb908bbadf8320d9e21f5--places-to-visit-beautiful-places.jpg",
            "https://i.pinimg.com/474x/ea/88/26/ea8826fabc9929a0ce34d28303908637.jpg",
            "https://i.pinimg.com/474x/9b/03/cc/9b03cc917ed41dd8449b157a7a775a46--maya-beach-thailand-ko-phi-phi-thailand.jpg",
            "https://i.pinimg.com/474x/a8/ae/4a/a8ae4a518b03445dd5e91eadc8641794--krabi-thailand-thailand-hiking.jpg",
            "https://i.pinimg.com/474x/e8/0a/d8/e80ad8ed167766e35326e433825d9b96--phi-phi-thailand-thailand-vacation.jpg",
            "https://i.pinimg.com/474x/65/4f/df/654fdf3a7f93a785f8c8bc42b7f562ec.jpg",
            "https://i.pinimg.com/474x/62/20/46/62204660c8dbd495614bd8137f82ef85--adventure-awaits-adventure-travel.jpg"
        ],
        error: null
    };

    /*componentDidMount() {
        fetch("https://api.github.com/repos/SAP/aker/contributors")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        repos: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }*/
    render() {
        const { error, isLoaded } = this.state;
        if(error) {
            return <div>Error: {error.message}</div>;
        } else if(!isLoaded) {
            return <div>Loading...</div>;
        } else {

            return (
                <div className="_bd-container">
                    <div className="_img-container">
                        {this.state.repos.map(repo => <div className="_img-div" key={repo}>
                            <img className="_img" src={repo}/>
                            <div><a href="">Read More....</a></div>
                        </div>)}
                    </div>
                    <div className="_aside-container">
                        <div>
                            <h3>Search flights </h3>
                            <div className="search-container">
                                <input type="text" placeholder="Search.." name="search" />
                                <button type="submit"><FaSearch /></button>
                            </div>
                        </div>
                        <div className="_rec-div">
                            <h3>Recommended</h3>
                            <div className="_as-img-con">
                                {this.state.repos.map(repo => <div className="_as-img-div" key={repo}>
                                    <img className="_as-img" src={repo}/>
                                    <div className="_pl-name"><a href="">Place Name</a></div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Body;