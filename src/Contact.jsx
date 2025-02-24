import karupatti_bench_footer1 from "./images/karupatti_bench_footer1.jpg";
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
                        <h3>Karupatti Bench</h3>
                        <div className="">
                            <h4>Location:</h4>
                            <p>CTI Campus, TVK Industrial Estate,<br></br>
                            Guindy, Chennai - 600032 Tamil Nadu, India</p>
                        </div>
                        <div className="">
                            <h4>Email:</h4>
                            <p>Sundarrajcs1@gmail.com</p>
                        </div>
                        <div className="">
                            <h4>Call & Whatsapp:</h4>
                            <p>9486947738</p>
                        </div>
                    </div>
                    <div className="contact2">         
                    <h2>Feedback</h2>
                    <p>You are encouraged to use the online feedback form below, to send us your valuable comments and suggestions as well as any queries about our products and services.</p>               
                        <div className="contact_field">                        
                            <label>Name</label>
                            <input type='text' name="" placeholder="Enter Your Name"></input>
                        </div>
                        <div className="contact_field">
                            <label>Email</label>
                            <input type='text' name="" placeholder="Enter Your Name"></input>
                        </div>
                        <div className="contact_field">
                            <label>Mobile</label>
                            <input type='text' name="" placeholder="Enter Your Name"></input>
                        </div>
                        <button>Submit</button>                        
                </div>
                </div>
            </div>
            <div className="contact_footer_image">
                <img src={karupatti_bench_footer1}></img>
            </div>
        </div>
        
        </>
    )
}

export default Contact;