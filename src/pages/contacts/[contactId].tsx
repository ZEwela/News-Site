import { useRouter } from "next/router";
import contacts from "../api/contacts";
import LayoutWithMenu from "<import>/components/LayoutWithMenu";
export default function Contact() {
  const router = useRouter();
  const contactId = router.query.contactId;

  const contact:
    | {
        id: string;
        name: string;
        country: string;
      }
    | any = contacts.find((contact) => contact.id === contactId);

  const [first, last] = contact.name.split(" ");

  return (
    <LayoutWithMenu>
      <div>
        <h3>
          <strong>
            {last.toUpperCase()}, {first}
          </strong>
        </h3>
        <p>{contact.country}</p>
      </div>
    </LayoutWithMenu>
  );
}
