import React, {Component} from 'react'

class GifList extends Component {
    render () {
        console.log(this.props)
        return (
            <li>
                <img src={this.props.url} alt={this.props.title} />
            </li>
        )
    }
}

export default GifList