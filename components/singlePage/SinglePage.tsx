import Map from '../map/Map'
import Slider from '../slider/Slider'
import './SinglePage.scss'
import { singlePostData, userData } from '@/lib/dummyData'

const SinglePage = () => {
    return (
      <div className='singlePage'>
        <div className='details'>
            <div className='wrapper'>
                <Slider images={singlePostData.images}/>
                <div className='info'>
                    <div className='top'>
                        <div className='post'>
                                <h1>{singlePostData.title}</h1>
                            <div className='address'>
                                <img src="./pin.png" alt=""/>
                                <span>{singlePostData.address}</span>
                            </div>
                            <div className='price'>
                                $ {singlePostData.price}
                            </div>
                        </div>
                        <div className='user'>
                            <img src={userData.img}/>
                            <span>{userData.name}</span>
                        </div>
                    </div>

                    <div className='bottom'>
                        {singlePostData.description}
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
                        <p>Rental is responsible</p>
                    </div>
                </div>
                <div className='feature'>
                    <img src="./pet.png" alt=""/>
                    <div className='featureText'>
                        <span>Pet Policy</span>
                        <p>Pets allowed</p>
                    </div>
                </div>
                <div className='feature'>
                    <img src="./fee.png" alt=""/>
                    <div className='featureText'>
                        <span>Property Fees</span>
                        <p>Must have 3x the rent in total household income</p>
                    </div>
                </div>
            </div>
            <p className='title'>Sizes</p>
            <div className='sizes'>
                <div className='size'>
                    <img src="./size.png" alt=""/>
                    <span>{singlePostData.size} sqft</span>
                </div>
                <div className='size'>
                    <img src="./bed.png" alt=""/>
                    <span>{singlePostData.bedRooms}</span>
                </div>
                <div className='size'>
                    <img src="./bath.png" alt=""/>
                    <span>{singlePostData.bathroom}</span>
                </div>
            </div>
            <p className='title'>Nearby Place</p>
            <div className='list-horizontal'>
                <div className='feature'>
                    <img src="./school.png" alt=""/>
                    <div className='featureText'>
                        <span>School</span>
                        <p>{singlePostData.school}</p>
                    </div>
                </div>
                <div className='feature'>
                    <img src="./pet.png" alt=""/>
                    <div className='featureText'>
                        <span>Bus Stop</span>
                        <p>{singlePostData.bus}</p>
                    </div>
                </div>
                <div className='feature'>
                    <img src="./fee.png" alt=""/>
                    <div className='featureText'>
                        <span>Restaurant</span>
                        <p>{singlePostData.restaurant}</p>
                    </div>
                </div>
            </div>
            <p className='title'>Location</p>
            <div className='mapConatiner'>
                <Map item={[singlePostData]}/>
            </div>
            <div className='buttons'>
                <button>
                    <img src="./chat.png" alt=""/>
                    Send a Message
                </button>
                <button>
                    <img src="./save.png" alt=""/>
                    Save
                </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default SinglePage