import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");


//don't worry its just a package for modal. just go and explore https://www.npmjs.com/package/react-modal

const UpdateModal = ({ id, isReload, setIsReload }) => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#fff";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    fetch(`http://localhost:5000/product/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      setIsReload(!isReload);
  }

  return (

    <div>
      <button onClick={openModal} className="color-801336 btn-sm btn">
        {" "}
        Update
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="btn btn-sm btn-warning">
          close
        </button>
        <div>Please insert your text</div>
        <div className=" p-3 color-4D4C7D">
          <form className='d-flex flex-column w-100 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
            <input className="form-control mb-3" placeholder='Product Name' {...register("productName")} />
            <input className="form-control mb-3" type="number" placeholder='Price' {...register("price")} />
            <input className="form-control mb-3" type="url" placeholder='img' {...register("img")} />
            <input className="form-control" type="submit" value="Add product" />
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default UpdateModal;
