// your ImageSlider code here!
import React, {Component} from 'react'

export default class ImageSlider extends Component{
    constructor(props){
        super(props);
        this.state ={
            currentSlideIndex: 0
        }
    }
    render(){
        console.log(this.state.currentSlideIndex)
        return <div className = 'image-slider'>
            {"I am on slide " + this.state.currentSlideIndex}
        </div>
    }
}