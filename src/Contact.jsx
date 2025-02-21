const Contact = ()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="title">
                <p>Contact Us</p>
            </div>

            <div className="container">
                <div className="contact_container">
                    <div className="contact1">
                        <p>
                            Karupatti Bench <br></br>
                            <p>Guindy <br></br>
                            Chennai</p>
                        </p>
                    </div>
                    <div className="contact2">
                        <div className="contact_box">
                            <div className="contact_field">
                                <label>Name</label>
                                <input type='text' name="" placeholder="Enter Your Name"></input>
                            </div>
                            <div className="contact_field">
                                <label>Name</label>
                                <input type='text' name="" placeholder="Enter Your Name"></input>
                            </div>
                            <div className="contact_field">
                                <label>Name</label>
                                <input type='text' name="" placeholder="Enter Your Name"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        </>
    )
}

export default Contact;