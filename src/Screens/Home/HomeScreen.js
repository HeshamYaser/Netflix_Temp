import React from 'react';
import requests from '../../axios/Requests';
import Banner from '../../Banner/Banner';
import NavBar from '../../NavBar/NavBar';
import Row from '../../Row/Row';
import "./Home.css";


const HomeScreen = () => {
  return (
    <div className='home'>
        <NavBar />
        <Banner />
        <Row title="NETFLIX ORIGINALS"
          fetchUrl = {requests.fetchNetflixOriginals}
          isLargeRow/>
        <Row title="Trending Now" fetchUrl = {requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} />
        <Row title="Action Movie" fetchUrl = {requests.fetchActionMovies} />
        <Row title="Comidy Movie" fetchUrl = {requests.fetchComedyMovies} />
        <Row title="Horror Movie" fetchUrl = {requests.fetchHorrorMovies} />
        <Row title="Romance Movie" fetchUrl = {requests.fetchRomanceMovies} />
        <Row title="Documentsaria" fetchUrl = {requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen ;