import React from 'react'
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from 'react-loading-skeleton';

export default function About() {
    
    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                {/* <div className="col-md-6"style={{lineHeight:2}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75}  />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50}  />
                    <Skeleton height={150}  />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft:6}}/>
                </div> */}
            </>
        )
    }
    const about=()=>{
        return(
            <>
            <div class="card" style="width: 18rem;">
                {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                        <h5 class="card-title">About</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
            </div>
            </>
        )
    }
    return (
        <div>
            <div>
            <div className="container py-5">
                <div className="row py-4">
                    {<Loading /> && <about />}
                </div>
            </div>
        </div>

            
        </div>
    )
}
