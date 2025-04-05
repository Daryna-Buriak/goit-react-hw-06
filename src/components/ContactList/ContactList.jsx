import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contact = useSelector((state) => state.contactsItems.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contact.filter((contactCard) =>
    contactCard.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contactCard) => (
        <li key={contactCard.id}>
          <Contact contactItem={contactCard} />
        </li>
      ))}
    </ul>
  );
}
