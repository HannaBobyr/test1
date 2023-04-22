import { useEffect } from "react";
import { Spin } from "antd";
import Posts from "./components/Posts";
import Header from "./components/Header";
import { fetchHttp } from "./store/actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { items, isFetching, isError, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHttp());
  }, [dispatch]);

  if (isFetching === true) {
    return (
      <div className="loarding-centered">
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </div>
    );
  }

  if (isError === true) {
    return <h3>Oop..., {error}</h3>;
  }

  if (items.length === 0) {
    return <h3>No Posts</h3>;
  }

  return (
    <div className="App">
      <Header />
      <Posts />
    </div>
  );
}

export default App;
