import { useEffect, useState } from "react";

const Feedback = () => {


    const [count,setcount] = useState(0);
    const [timeval,settimeval] = useState(1);
    
    function next(){ 
        const result = (count > 2) ? -1  : count;   
        setcount(()=> result+1); 
        settimeval(count);                                       
    }

    function pre(){
        const result = (count < 1) ? 4 : count;   
        setcount(()=> result-1);                             
    }   
       

    var elements = document.getElementsByClassName('feedback');
    for(var i=0;i<elements.length;i++){
        elements[i].classList.remove("active");
        elements[count].classList.add("active");
    }

    return (
        <>
            <div className="container">

                <div className="feedback_wrapper">
                    <button className="feedback_button" onClick={pre}><i class="fa-solid fa-arrow-left"></i></button>
                    <div className="feedback_box">
                        <div className="feedback active">
                            <img src="https://www.hollywoodinsider.com/wp-content/uploads/2022/05/The-Hollywood-Insider-Captain-Jack-Sparrow-Johnny-Depp.png" />
                            <h2>Jack Sparrow</h2>
                            <p>Praesent porta tincidunt leo, ut fringilla mauris tristique id. Vestibulum nisi massa, gravida ut efficitur blandit, sodales ut magna.</p>
                        </div>
                        <div className="feedback ">
                            <img src="https://akns-images.eonline.com/eol_images/Entire_Site/2013924/rs_1024x759-131024111419-1024.captain-america-2.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top" />
                            <h2>Captain America</h2>
                            <p>Praesent porta tincidunt leo, ut fringilla mauris tristique id. Vestibulum nisi massa, gravida ut efficitur blandit, sodales ut magna.</p>
                        </div>
                        <div className="feedback ">
                            <img src="https://i.insider.com/679a5f64eb4be2fff9a2c025?width=1300&format=jpeg&auto=webp" />
                            <h2>Doctor Stange</h2>
                            <p>Praesent porta tincidunt leo, ut fringilla mauris tristique id. Vestibulum nisi massa, gravida ut efficitur blandit, sodales ut magna.</p>
                        </div>
                        <div className="feedback">
                            <img src="https://i.guim.co.uk/img/media/c7017e77c9be1ebd9b311832df47b7c0f9667c3f/458_42_4409_2645/master/4409.jpg?width=1300&dpr=2&s=none&crop=none" />
                            <h2>Superman</h2>
                            <p>Praesent porta tincidunt leo, ut fringilla mauris tristique id. Vestibulum nisi massa, gravida ut efficitur blandit, sodales ut magna.</p>
                        </div>
                    </div>
                    <button onClick={next} className="feedback_button"><i class="fa-solid fa-arrow-right"></i></button>
                </div>


            </div>
        </>
    )
}


export default Feedback;