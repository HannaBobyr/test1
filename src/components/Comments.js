function Comments({ comment }) {
  return (
    <>
      <h5>{comment.name}</h5>
      <p>{comment.body}</p>
    </>
  );
}
export default Comments;
