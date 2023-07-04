import "./App.css"


const sectionStyle = {
  textAlign: "center",
  padding: "1.5rem",
};

function Reservations() {
    return (
        <div className="row" style={sectionStyle}>
            <h1 className="title">Reservations</h1>
        <form method="POST">
            <div>
                <label for="booking_date">Booking Date</label><br></br>
                <input type="date" id="booking_date" name="booking_date" />
            </div>
            <div>
                <label for="booking_people">Number of People</label> <br></br>
                <input type="range" id="booking_people" name="booking_people" min="1" max="10" value="4" oninput="this.nextElementSibling.value = this.value" />
                <output>4</output>
            </div>

            <div>
                <label for="booking_location">Location</label><br></br>
                <input id="booking_location" name="booking_location" list="locations" placeholder="Choose a Location..."/>
                <datalist id="locations" name="locations" >
                    <option value="Downtown"></option>
                    <option value="Uptown"></option>
                </datalist>     
            </div>
            <div style={{marginTop: "1rem"}}>
            <input className="button-sec" type="reset" />
            <button type="submit">Book table</button>
            </div>
        </form>
        </div>
    )
}

export default Reservations;