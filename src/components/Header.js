/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Button, Modal } from "antd";
import AddPost from "./Form";
import { addPost } from "../store/actions";
import { useDispatch } from "react-redux";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (value) => {
    setIsModalOpen(false);
    dispatch(addPost(value));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        Posts
      </a>
      <Button type="primary" onClick={showModal}>
        Add Post
      </Button>
      <Modal
        title="Adding New Post"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <AddPost submit={handleOk} />
      </Modal>
    </header>
  );
}
export default Header;
