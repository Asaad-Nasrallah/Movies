import axios from "axios";
const url ="https://api.themoviedb.org/3/discover/movie"

export async function getMovies(pageNumber)
{
    try{
        axios.defaults.headers.common['Authorization'] = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWM2M2MzNTFiNmU1MmVkNmYxMjU0NDE1Mjg5NWRkYSIsIm5iZiI6MTcyMDA4OTE4NC43NjI5NDgsInN1YiI6IjY2ODY2ZjJhNzM4Y2Q0YmNiYmNhMzFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wZGoJtj641s6QdAZFxOv6sLr_XnEnYpnxwHjXBqtpUc";

        return await axios.get(
            url,{
            params: {
                page: pageNumber,
              },   
              headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWM2M2MzNTFiNmU1MmVkNmYxMjU0NDE1Mjg5NWRkYSIsIm5iZiI6MTcyMDA4OTE4NC43NjI5NDgsInN1YiI6IjY2ODY2ZjJhNzM4Y2Q0YmNiYmNhMzFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wZGoJtj641s6QdAZFxOv6sLr_XnEnYpnxwHjXBqtpUc',
              }
            }
          );
    }catch(err){
        console.log(err)
    }

}

export async function getMovie(id){
  try{
    axios.defaults.headers.common['Authorization'] = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWM2M2MzNTFiNmU1MmVkNmYxMjU0NDE1Mjg5NWRkYSIsIm5iZiI6MTcyMDA4OTE4NC43NjI5NDgsInN1YiI6IjY2ODY2ZjJhNzM4Y2Q0YmNiYmNhMzFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wZGoJtj641s6QdAZFxOv6sLr_XnEnYpnxwHjXBqtpUc";

    return await axios.get(
        (`https://api.themoviedb.org/3/movie/${id}`),{ 
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWM2M2MzNTFiNmU1MmVkNmYxMjU0NDE1Mjg5NWRkYSIsIm5iZiI6MTcyMDA4OTE4NC43NjI5NDgsInN1YiI6IjY2ODY2ZjJhNzM4Y2Q0YmNiYmNhMzFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wZGoJtj641s6QdAZFxOv6sLr_XnEnYpnxwHjXBqtpUc',
          }}
        
      );
}catch(err){
    console.log(err)
}
}

export async function searchByName(word)
{
  try{
      axios.defaults.headers.common['Authorization'] = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWM2M2MzNTFiNmU1MmVkNmYxMjU0NDE1Mjg5NWRkYSIsIm5iZiI6MTcyMDA4OTE4NC43NjI5NDgsInN1YiI6IjY2ODY2ZjJhNzM4Y2Q0YmNiYmNhMzFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wZGoJtj641s6QdAZFxOv6sLr_XnEnYpnxwHjXBqtpUc";

    return await axios.get( (`https://api.themoviedb.org/3/search/movie`),{ 
      params : {
        "query" : word
      },
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWM2M2MzNTFiNmU1MmVkNmYxMjU0NDE1Mjg5NWRkYSIsIm5iZiI6MTcyMDA4OTE4NC43NjI5NDgsInN1YiI6IjY2ODY2ZjJhNzM4Y2Q0YmNiYmNhMzFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wZGoJtj641s6QdAZFxOv6sLr_XnEnYpnxwHjXBqtpUc',
      }}
    
  );
  }catch(err){
    console.log(err)
  }

}

