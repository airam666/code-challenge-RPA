import {  useEffect, useState } from "react";
import "./Card.css";
import cardListPerUser from "./CardListPerUser";

function ContentApp() {
  const [userData, setUserData] = useState([]);
  const [userNumber, setUserNumber] = useState(1);

  useEffect(() => {
    fetchPost(userNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [results, setResults] = useState([]);

  useEffect(() => {
    setUserData(results);
  }, [results]);

  const filterTitles = (term) => {
    let searchResult = userData.filter((element) => {
      if (element.title.toString().toLowerCase().includes(term.toLowerCase())) {
        return element;
      } else if (!term) {
        return userData;
      }
    });
    setResults(searchResult);
  };

  const handleChange = (e) => {
    filterTitles(e.target.value);
  };

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if(userNumber<=10){
          setUserNumber(userNumber + 1);
          fetchPost(userNumber);
        }
      }
    }); 
  }, [userNumber]);

  const fetchPost = async (user) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user}/posts`
    );
    const data = await response.json();
    localStorage.setItem([data.userId], data);
    setUserData(data);
  };
  return (
    <>
      <div className="topnav">
        <div className="textTitle">Minuto a Minuto</div>
        <input
          type="text"
          className="search"
          placeholder="Search.."
          onChange={handleChange}
        />
      </div>
      {cardListPerUser(userData)}
    </>
  );
}
export default ContentApp;
