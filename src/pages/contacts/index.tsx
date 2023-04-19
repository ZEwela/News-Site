import contacts from "../api/contacts";
import Link from "next/link";
import LayoutWithMenu from "<import>/components/LayoutWithMenu";

export default function Contacts() {
  return (
    <LayoutWithMenu>
      <h1 style={{ marginBottom: 10, fontSize: 20 }}>Contacts</h1>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Link
                href={`/contacts/${contact.id}`}
                className="group rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <strong>{contact.name}</strong>
              </Link>
              <br />
              <br />
            </li>
          );
        })}
      </ul>
    </LayoutWithMenu>
  );
}
