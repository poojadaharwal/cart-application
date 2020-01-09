import React, { Component } from 'react'

export default class SortComponent extends Component {
    render() {
        return (
            <div className="sort-container">
                <div className="row">
                    <div className="col-2">
                    <span><b>Sort By</b></span>
                    </div>
                    <div className="col-3">
                     Price -- High Low
                    </div>
                    <div className="col-3">
                     Price -- Low High
                    </div>
                    <div className="col-2">
                     Discount
                    </div>
                </div>
               
                
            </div>
        )
    }
}
