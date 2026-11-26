import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShowMarks =  () => {
    const [marks, setMarks] = useState()

    useEffect(() => {
    
            const token = localStorage.getItem("token");
    
           
    
             
            if (!token) {
                navigate("/login");
                return;
            }
    
             showMarks();
    
        }, []);
    
        const showMarks = async () => {
    
            try {
    
                const token = localStorage.getItem("token");
    
                const response = await axios.get(
                    "http://localhost:3000/marks",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
    
                console.log(response.data.marks)

                setMarks(response.data.marks)
    
                
    
            } catch (error) {
    
                console.log(error);
    
                alert("Session Expired");
    
                localStorage.removeItem("token");
    
                navigate("/login");
            }
        };


  return (
    <div>
        <div>ShowMarks</div>

        <div>
            {
                  marks.map((item,i)=>{
                  return <div>
                      <p>Marks : {item.marks}</p>
                    <p>Name: {item.name}</p>
                  </div>
                  })
            }
        </div>
    </div>
  )
}

export default ShowMarks