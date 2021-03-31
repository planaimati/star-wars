import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [page, setPage] = useState(10);
  const [actualPage, setActualPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState(0);
  const [popupItem, setPopupItem] = useState([]);
  const [films, setFilms] = useState([]);
  const [searchItems, setSearchItems] = useState([]);

  const url = "https://swapi.dev/api/people";
  //fetch data from api
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setItems(data.results);
        setSearchItems(data.results);
        setNextUrl(data.next);
        setLoading(false);
        setActualPage((prevState) => prevState + 1);
      });
  }, []);
  //add onScroll listener
  useEffect(() => {
    window.addEventListener("scroll", scrollData);

    return () => window.removeEventListener("scroll", scrollData);
  }, [actualPage]);

  // check document position and invoke getMoreItems()
  const scrollData = () => {
    setPopup(0);

    if (
      window.innerHeight + window.scrollY === document.body.scrollHeight &&
      actualPage > 1
    ) {
      getMoreItems();
    }
  };

  // search items using input

  const handleSearch = (e) => {
    const search = items.filter((item) =>
      item.name.toLowerCase().includes(e.target.value)
    );

    setSearchItems(search);
  };
  // handle all event linked with popup

  const handleSetPopup = (e) => {
    if (popup === 0) {
      setPopup(1);
      const newPopupItem = items.find((item) => item.name === e.target.id);

      setPopupItem(newPopupItem);

      newPopupItem.films.forEach((item) =>
        fetch(item)
          .then((response) => response.json())
          .then((data) => setFilms((prevState) => [...prevState, data.title]))
      );
    } else {
      setFilms([]);
      setPopup(0);
    }
  };

  // getch more items from api

  const getMoreItems = () => {
    if (nextUrl !== null) {
      fetch(`http://swapi.dev/api/people/?page=${actualPage}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setItems((prevState) => [...prevState, ...data.results]);
          setSearchItems((prevState) => [...prevState, ...data.results]);
          setPage((prevState) => prevState + 5);
          setNextUrl(data.next);
          setActualPage((prevState) => prevState + 1);
        });
    } else return;
  };

  return (
    <AppContext.Provider
      value={{
        getMoreItems,
        items,
        page,
        loading,
        handleSetPopup,
        popupItem,
        popup,
        films,
        handleSearch,
        searchItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
