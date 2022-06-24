import { useEffect, useState } from "react";
import "./Card.css";
import cardListPerUser from "./CardListPerUser";

function ContentApp() {
  const [userData, setUserData] = useState([]);
  const [userNumber, setUserNumber] = useState(1);

  useEffect(()=>{
    fetchPost(userNumber);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    window.addEventListener('scroll', function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
           //console.log("you're at the bottom of the page ", userNumber);
           setUserNumber(userNumber+1)
           fetchPost(userNumber);
           // Show loading spinner and make fetch request to api
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

  return cardListPerUser(userData);
}
export default ContentApp;
