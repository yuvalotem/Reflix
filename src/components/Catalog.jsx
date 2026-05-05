import React, { Component } from 'react';
import Movie from './Movie';
import SearchBar from './SearchBar';

class Catalog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [
                { id: 0, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
                { id: 1, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
                { id: 2, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
                { id: 3, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
                { id: 4, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
            ],
            userData: JSON.parse(localStorage[this.props.match.params.id])
        }
        this.state.movieToshow = this.state.movies
    }

    rentMovie = id => {
        const newMovie = this.state.movies.find(m => m.id === id)
        newMovie.isRented = true
        const newUserData = { ...this.state.userData }
        if (this.state.userData.rentedMovies.every(m => m.id !== newMovie.id)) {
            newUserData.budget = this.state.userData.budget - 3
            if (newUserData.budget < 0) {
                alert('You need more money my friend')
                newUserData.budget = this.state.userData.budget
            } else {
                newUserData.rentedMovies.push(newMovie)
            }
        } else {
            newUserData.budget = this.state.userData.budget + 3
            newUserData.rentedMovies = newUserData.rentedMovies.filter(m => m.id !== id)
        }
        this.setState({
            userData: newUserData
        }, function () {
            localStorage.setItem(this.state.userData.id, JSON.stringify(this.state.userData))
        })
    }

    findMovies = (keys, moviesArray) => {
        let newMovies = []
        newMovies.push(...moviesArray
            .filter(m => {
                for (let i in m.title) {
                    if (m.title.substring(parseInt(i), parseInt(i) + keys.length).toLowerCase() === keys.toLowerCase()) {
                        return true;
                    }
                }
                return false
            }))
        return newMovies
    }

    handleChange = (event) => {
        let newMovies = this.findMovies(event.target.value, this.state.movies)
        let newRentedMovies = this.findMovies(event.target.value, JSON.parse(localStorage[this.props.match.params.id]).rentedMovies)
        let newUserData = {...this.state.userData}
        newUserData.rentedMovies = [...newRentedMovies]
        if (newMovies.length === 0) {
            newMovies = [...this.state.movies]
            newUserData = JSON.parse(localStorage[this.props.match.params.id])
        }
        this.setState({
            movieToshow: newMovies,
            userData: newUserData
        })
    }


    render() {
        return (
            <div className='catalog'>
                <p id='catalog-bar'>
                    <SearchBar handleChange={this.handleChange} />
                    <span>Budget: {this.state.userData.budget}$</span>
                    <span>
                        <img
                        src={this.state.userData.img}
                        style={{ width: "3.5vw", height: "3.5vw", borderRadius: "50px" }}
                        alt="" />
                    {this.state.userData.name}</span>
                </p>
                {this.state.userData.rentedMovies.length > 0 ?
                    <><h2>Rented</h2>
                        <div className='movie-container'>
                            {this.state.userData.rentedMovies.map(m => <Movie
                            key={m.id}
                            movieInfo={m}
                            rentMovie={this.rentMovie} rented={true} />)}
                        </div></> :
                    null
                }
                <h2>Catalog</h2>
                <div className='movie-container'>
                    {this.state.movieToshow.map(m => <Movie
                    key={m.id}
                    movieInfo={m}
                    rentMovie={this.rentMovie}
                    rented={this.state.userData.rentedMovies.some(rm => rm.id === m.id)} />)}
                </div>
            </div>
        );
    }
}

export default Catalog;