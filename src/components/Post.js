import { Card } from "antd";
import { useEffect, useState } from "react";
import Comments from "./Comments";
import { Button, Spin, Divider } from "antd";

function Post({ post }) {
  const [comments, setComments] = useState([]);
  const [more, setMore] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [post.id]);

  if (!comments)
    return (
      <Spin tip="Loading">
        <div className="content spin" />
      </Spin>
    );

  return (
    <Card
      title={post.title}
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <p>{post.body}</p>
      {!more && (
        <Button block type="primary" onClick={() => setMore(true)}>
          Read Comments
        </Button>
      )}
      {more && (
        <>
          <Divider orientation="left">Comments</Divider>
          {comments.map((comment) => (
            <Comments key={comment.id} comment={comment} />
          ))}
          <Button block type="primary" onClick={() => setMore(false)}>
            Close Comments
          </Button>
        </>
      )}
    </Card>
  );
}
export default Post;
