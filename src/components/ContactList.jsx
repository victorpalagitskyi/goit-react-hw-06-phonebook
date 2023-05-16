import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { delContact } from "redux/contactSlice";




const ContactList = () => { 
    const contacts = useSelector(state => state.contacts)
    const filters = useSelector(state => state.filters)

  const dispatch = useDispatch();
  
  const onDeleteContact = e => {
    dispatch(delContact(e.target.id));
    Notiflix.Notify.success(`Сontact deleted successfully`);
  };

  const visibleContacts = filters
    ? contacts.filter(contact => contact.name.includes(filters))
    : contacts;

  return (
    <>
      {visibleContacts.length === 0 ? (
        <div>Empty</div>
      ) : (
        <ul>
          {visibleContacts.map(({ name, id, number }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button type="button" id={id} onClick={onDeleteContact}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}


export default ContactList