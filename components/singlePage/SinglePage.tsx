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
                    </div>
                </div>
                <div className='feature'>
                    <img src="./pet.png" alt=""/>
                    <div className='featureText'>
                        <span>Pet Policy</span>
                    </div>
                </div>
                <div className='feature'>
                    <img src="./fee.png" alt=""/>
                    <div className='featureText'>
                        <span>Property Fees</span>
                    </div>
                </div>
            </div>
            <p className='title'>Sizes</p>
            <div className='sizes'>
                <div className='size'>
                    <img src="./size.png" alt=""/>
                    <span>sqft</span>
                </div>
                <div className='size'>
                    <img src="./bed.png" alt=""/>
                    <span>2</span>
                </div>
                <div className='size'>
                    <img src="./bath.png" alt=""/>
                    <span>2</span>
                </div>
            </div>
            <p className='title'>Nearby Place</p>
            <div className='list-horizontal'>
                <div className='feature'>
                    <img src="./school.png" alt=""/>
                    <div className='featureText'>
                        <span>School</span>
                        <p>90m away</p>
                    </div>
                </div>
                <div className='feature'>
                    <img src="./pet.png" alt=""/>
                    <div className='featureText'>
                        <span>Bus Stop</span>
                        <p>90m away</p>
                    </div>
                </div>
                <div className='feature'>
                    <img src="./fee.png" alt=""/>
                    <div className='featureText'>
                        <span>Restaurant</span>
                        <p>90m away</p>
                    </div>
                </div>
            </div>
            <p className='title'>Location</p>
            <div className='mapConatiner'>
                {/* <Map item={}/> */}
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