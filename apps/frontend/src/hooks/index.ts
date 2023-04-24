import { useQuery } from "vue-query"

export function usePlaylists() {

    const { data: playlists, isLoading } = useQuery(
        "playlists",
        () =>
            fetch("http://127.0.0.1:3000/playlists")
                .then((response) => response.json())
                .then(({ data }) => data),
        {
            staleTime: 60 * 1000,
        }
    );
    return {
        playlists,
        isLoading
    }
}