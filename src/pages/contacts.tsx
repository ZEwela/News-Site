import contacts from "./api/contacts";
import Link from "next/link";
import LayoutWithMenu from "<import>/components/LayoutWithMenu";

export default function Contacts() {
  return (
    <>
      <LayoutWithMenu />

      <h1 style={{ marginBottom: 10, fontSize: 20 }}>Contacts</h1>

      {contacts.map((contact) => {
        return (
          <>
            <h3>
              <strong>{contact.name}</strong>
            </h3>
            <p>{contact.country}</p>

            <Link
              href={`/contacts/${contact.id}`}
              className="group rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              Go to Contact
            </Link>
            <br />
            <br />
          </>
        );
      })}
    </>
  );
}
