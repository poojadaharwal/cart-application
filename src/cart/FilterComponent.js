import React, {Component} from 'react'
import {Typography,Slider} from '@material-ui/core';


class FilterComponent extends Component{
  constructor(){
    super();
    this.state={
      range1:100,
      range2:10000
    }
  }

  handleFilter=(e)=>{
    // let {name,value}=e.target;
    // console.log(name,value);
    // this.setState({
    //   [name]:value
    // })

  }
   valuetext=(value)=> {
    return `${value}°C`;
  }

render(){
    let {range1,range2}=this.state;
  return(
    <div className="filter-Container">
    <Typography id="range-slider" gutterBottom>
    Filters
  </Typography>
  <Slider
  value={range1}
  onChange={this.handleFilter}
  valueLabelDisplay="auto"
  aria-labelledby="range-slider"
  getAriaValueText={this.valuetext}
  />


    {/* // <p>Filters</p>
    // <span>{this.state.range1}</span>
    //   <input type="range" name="range1" value={this.state.range1} step="100" min="100" max="10000" onChange={this.handleFilter} popup-enabled="true"/>
    //   <input type="range" name="range2" value={this.state.range2} step="100" min="100" max="10000" onChange={this.handleFilter}/>
    //   <span>{this.state.range2}</span>
    //   <br/>
    //   <button type="button">Apply</button> */}
    </div>
  )
}
}

export default FilterComponent;
