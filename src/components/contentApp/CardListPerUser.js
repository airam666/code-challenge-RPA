const cardListPerUser = (userData) => {
        return userData.map((data, key) => {
            return (
              <div
                className="card"
                key={key}
              >
                <div className="card-text">
                  <h2>{data.title}</h2>
                  <p>{data.body}</p>
                  <p>{data.userId}</p>
                </div>
              </div>
            );
          });
    
  }
  export default cardListPerUser;