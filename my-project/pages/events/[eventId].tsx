import { Fragment } from 'react';
import {useRouter} from 'next/router';
import {getEventById} from '../../dummy-data';

import EventSummary from '../../components/events/event-summary';
import EventLogistics from '../../components/events/event-logistics';
import EventItem from '../../components/events/event-item';

function EventDetailPage(){
    const router = useRouter();
    const eventId =router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return <p>Loading...</p>
    }
    
    return (
        <div>
        <Fragment>
            <EventSummary title={event.title} />
        </Fragment>
        <div>{event.title}</div>
        </div>
    )
}

export default EventDetailPage;