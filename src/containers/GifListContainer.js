import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const URL = 'https://api.giphy.com/v1/gifs/search?q='
const KEY = '&api_key=dc6zaTOxFJmzC&rating=g'

class GifListContainer extends Component {
    state = {
        allGifs: []
    }

    handleSubmit = (e, query) => {
        e.preventDefault()
        fetch(URL + query.toUpperCase() + KEY)
        .then(response => response.json())
        .then(data => {
            this.setState({
                allGifs: data.data.slice(0, 3)
            })
        })   
    }

    render () {
        console.log(this.state.allGifs)
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit} handleQuery={this.handleQuery}/>
                <div>
                    <ul>
                        {this.state.allGifs.map(gif => <GifList key={gif.id} url={gif.images.original.url} alt={gif.title} />)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default GifListContainer