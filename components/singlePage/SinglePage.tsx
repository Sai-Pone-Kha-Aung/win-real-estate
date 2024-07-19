'use client'
import { useContext, useEffect, useState } from 'react'
import Slider from '../slider/Slider'
import apiRequest from '@/lib/apiRequest'
import Map from '../map/Map'
import { useParams, useRouter } from 'next/navigation'
import { getDefaultPostData } from '@/constants/data'
import { AuthContext } from '@/context/AuthContext'
import { PostData } from '@/types'
import './SinglePage.scss'

const SinglePage = () => {
    const [post, setPost] = useState<PostData>(
        getDefaultPostData(),
    );
    const {currentUser} = useContext(AuthContext)!;
    const [saved, setSaved] = useState(false);
    const {id} = useParams();
    const router = useRouter();

    const handleSave = async () => {
        if(!currentUser) {
            router.push("/sign-in");
            return;
        }

        setSaved((prev) => !prev);
        try {
            await apiRequest.post("/users/save", {postId: post.id});
        } catch (error) {
            console.log(error)
            setSaved((prev) => !prev);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await apiRequest.get(`/posts/${id}`);
                setPost(res.data);
                setSaved(res.data.isSaved);
            } catch(error){
                console.log("failed to fetch data", error);
            }
        }
        fetchData();
    }, [])
    console.log(post)

    return (
      <div className='singlePage'>
        <div className='details'>
            <div className='wrapper'>
                <Slider images={post.images}/>
                <div className='info'>
                    <div className='top'>
                        <div className='post'>
                                <h1>{post.title}</h1>
                            <div className='address'>
                                <img src="./pin.png" alt=""/>
                                <span>{post.address}</span>
                            </div>
                            <div className='price'>
                                $ {post.price}
                            </div>
                        </div>
                        <div className='user'>
                            <img src={post.user.avatar}/>
                            <span>{post.user.username}</span>
                        </div>
                    </div>

                    <div className='bottom'
                    dangerouslySetInnerHTML={{ __html: post.postDetail.desc }}
                    >
                    </div>
                </div>
            </div>
        </div>
        <div className='features'>
          <div className='wrapper'>
            <p className='title'>General</p>
            <div className='list-vertical'>
                <div className='feature'>
                    <img src="./utility.png" alt=""/>
                    <div className='featureText'>
                        <span>Utility</span>
                        {post.postDetail.utilities === "owner" ? (
                            <p>Owner is responsible</p>
                        ):(
                            <p>Renter is responsible</p>
                        )}
                    </div>
                </div>
                <div className='feature'>
                    <img src="./pet.png" alt=""/>
                    <div className='featureText'>
                        <span>Pet Policy</span>
                        {post.postDetail.pet === "allow" ? (
                            <p>Pets allowed</p>
                        ) : (
                            <p>Pets not allowed</p>
                        )}
                    </div>
                </div>
                <div className='feature'>
                    <img src="./fee.png" alt=""/>
                    <div className='featureText'>
                        <span>Property Fees</span>
                        <p>{post.postDetail.income}</p>
                    </div>
                </div>
            </div>
            <p className='title'>Sizes</p>
            <div className='sizes'>
                <div className='size'>
                    <img src="./size.png" alt=""/>
                    <span>{post.postDetail.size} sqft</span>
                </div>
                <div className='size'>
                    <img src="./bed.png" alt=""/>
                    <span>{post.bedroom}</span>
                </div>
                <div className='size'>
                    <img src="./bath.png" alt=""/>
                    <span>{post.bathroom}</span>
                </div>
            </div>
            <p className='title'>Nearby Place</p>
            <div className='list-horizontal'>
                <div className='feature'>
                    <img src="./school.png" alt=""/>
                    <div className='featureText'>
                        <span>School</span>
                        <p>{post.postDetail.school > 999 
                            ? post.postDetail.school / 1000 + "km" 
                            : post.postDetail.school + "m"}    
                        </p>
                    </div>
                </div>
                <div className='feature'>
                    <img src="./bus.png" alt=""/>
                    <div className='featureText'>
                        <span>Bus Stop</span>
                        <p>{post.postDetail.bus}m away</p>
                    </div>
                </div>
                <div className='feature'>
                    <img src="./fee.png" alt=""/>
                    <div className='featureText'>
                        <span>Restaurant</span>
                        <p>{post.postDetail.restaurant}m away</p>
                    </div>
                </div>
            </div>
            <p className='title'>Location</p>
            <div className='mapConatiner'>
                <Map item={[post]}/>
            </div>
            <div className='buttons'>
                <button>
                    <img src="./chat.png" alt=""/>
                    Send a Message
                </button>
                <button onClick={handleSave}
                    style={{backgroundColor: saved ? "#fece51" : "white"}}
                >
                    <img src="./save.png" alt=""/>
                    {saved ? "Place Saved" : "Save the Place"}
                </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default SinglePage