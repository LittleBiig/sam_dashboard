import React, { Component } from 'react';

class RobotDetailBigCard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={"robot-details "}>
                    <p className={"text-center h2"}>MONEY SAVED</p>
                    <p className={"text-center display-2"}>CHF 12k</p>
                <p className={"text-center"}><small>what does this mean?</small></p>
                    <p className={"text-center"}>Saved labour costs through viewings accomplished by SAM</p>
            </div>
        );
    }
}

export default RobotDetailBigCard;
