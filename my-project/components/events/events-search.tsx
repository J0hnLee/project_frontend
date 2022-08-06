import {useRef} from 'react';


function EventSearch(props:any) {
    const yearInputRef = useRef();
    const monthInputRef = useRef();    
    
    function submitHandler(event:any) {
        event.preventDefault();
        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;
        console.log(yearInputRef);
        props.onSearch(selectedYear, selectedMonth);


    }
    return (
    <form onSubmit={submitHandler}>
        <div>
        <label htmlFor='year'>Year</label>
        <select id='year' ref={yearInputRef}>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
        </select>
        </div>
        <div>
        <label htmlFor='month'>Month</label>
        <select id='month' ref={monthInputRef}>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
        </select>
        <button>submit</button>
        </div>




    </form >
    )
}


export default EventSearch;