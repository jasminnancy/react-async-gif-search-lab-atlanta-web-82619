import React, {Component} from 'react'

class GifSearch extends Component {
    state = {
        input: ""
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    render () {
        return (
            <div>
                <form onSubmit={(e) => this.props.handleSubmit(e, this.state.input)}>
                    <label>Enter a Search Term:</label>
                    <input type="text" value={this.state.input} placeholder="Search..." onChange={this.handleChange} />
                    <input type="submit" value="Find Gifs" />
                </form>
            </div>
        )
    }
}

export default GifSearch