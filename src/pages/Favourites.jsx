import "../css/Favourites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { SimpleGrid } from "@mantine/core";

function Favourites() {
    const {favourites} = useMovieContext();
    
    if (favourites) {
        return (
            <div className="favourites">
                <h2>Your Favourites</h2>
                <SimpleGrid cols={{ base: 1, sm: 3, lg: 5 }}>
                    {favourites.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
                </SimpleGrid>
            </div>
        );
    } else {
        return (
            <div className="favourites-empty">
                <h2>No Favourites yet!</h2>
                <p>Start adding movies to your favourites to view them here.</p>
            </div>
        );
    }
}

export default Favourites