import React, { Component } from 'react';
import {easePolyOut} from 'd3-ease';
import Animate from 'react-reveal/Animation'

export default class Stripes extends Component {
    showStripes = ()=>(
           <div>
               Stripes
           </div>
    )
    render() {
        return (
            <div className="featured_stripes">
                {this.showStripes()}
                
            </div>
        )
    }
}
