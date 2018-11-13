import React, {Component} from 'react';
import Songlist from '../songslistbar/songslist';
import PlayerBar from '../PlayerBar/PlayerBar';
import './contentbar.css';

class Contentbar extends Component {
    render() {
        return(
            <div className = "contentbar">
                <Songlist />
                <PlayerBar />
            </div>
        );
    }
}

export default Contentbar;