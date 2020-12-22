import React, { useEffect, useState } from 'react'

import { getAll } from "../api/BooksAPI"

import NavBar from "../components/header/NavBar"

import { useRefresh } from "../providers/RefreshProvider"
import Loading from "../components/loading/Loading"
import Shelf from "../components/shelf/Shelf"

const Home = () => {
    const [bookList, setBookList] = useState([]);
    const { refresh, setRefresh } = useRefresh();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
        try {
            setIsLoading(true);
            const books = await getAll();
            setBookList(books);
        } catch (err) {
            alert(err.message);
        }
        window.scrollTo(0, 0);
        setIsLoading(false);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
        try {
            setIsLoading(true);
            const books = await getAll();
            setBookList(books);
        } catch (err) {
            alert(err.message);
        }
        window.scrollTo(0, 0);
        setIsLoading(false);
        }
        fetchData();
        return () => {
        setRefresh(false);
        };
    }, [refresh, setRefresh, setIsLoading]);

    return (
        <>
          <NavBar />
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Shelf
                bookList={bookList}
                shelfName={"currentlyReading"}
                title={"Lendo Atualmente"}
              />
              <Shelf
                bookList={bookList}
                shelfName={"wantToRead"}
                title={"Quero ler"}
              />
              <Shelf
                bookList={bookList}
                shelfName={"read"}
                title={"Leitura Concluída"}
              />
              <div className="row mb-4">
                <div className="col-10"></div>
                <div className="col-2">
                </div>
              </div>
            </>
          )}
        </>
    );
}

export default Home;