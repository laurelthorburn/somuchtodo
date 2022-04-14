const NewTodoListForm = () => {

    const handleSave = (e) => {
        e.preventDefault();
        console.log("You clicked save")
    }
  return (
    <>
      <form onSubmit={handleSave}>
        <input />
        <button>Save</button>
      </form>
    </>
  );
};

export default NewTodoListForm;
