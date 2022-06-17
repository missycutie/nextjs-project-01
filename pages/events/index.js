import { getAllEvents } from "../../dummy-data";
import {useRouter} from "next/router"
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { Fragment } from "react";
export default function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </Fragment>
  );
}
