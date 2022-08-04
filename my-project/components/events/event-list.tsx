import EventItem from "./event-item";
//import classes from "./event-list.module.css";


function EventList(props:any){
    const {items}=props;


    return (
      <ul>
        {items.map( (event:any) => <EventItem 
        key={event.id}
        id={event.id} 
        title={event.tilte}
        location={event.location}
        date={event.date}
        image={event.image}
        />)}
      </ul>
      )


}



export default EventList;