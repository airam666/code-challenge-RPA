const cardListPerUser = (userData) => {
        return userData.map((data, key) => {
            return (
              <div
                className="card-container"
                key={key}
              >
                <div className="card-text">
                  <h2>{data.title}</h2>
                  <p>{data.body}</p>
                  <p>{data.userId}</p>
                </div>
                <hr />
              </div>
            );
          });
    
  }
  export default cardListPerUser;