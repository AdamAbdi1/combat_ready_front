// import { render } from '@testing-library/react'
// import React, {useEffect, useState } from 'react'
// import { useSwipeable } from 'react-swipeable'

import Carousel from 'react-bootstrap/Carousel'

function Carousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className='d-block w-100'
                src='https://i0.wp.com/64.media.tumblr.com/5658daa6b1466b8704307cf3b3731362/tumblr_prwv32ttbj1xqepp2o1_640.gifv?resize=650,400'
                alt='First Stage'
                />
                <Carousel.Caption> 
                    <h3> First Stage </h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className='d-block w-100'
                    src='https://i.pinimg.com/originals/46/5b/ab/465bab82365aacbf3660b094805b95d7.gif'
                    alt='Second Stage'
                    />

                    <Carousel.Caption>
                        <h3> Second Stage </h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className='d-block w-100'
                    src='https://i0.wp.com/i.pinimg.com/originals/fd/eb/a1/fdeba10c58e6033205d92d811749acc2.gif?resize=160,120'
                    alt='Third Stage'
                    />

                    <Carousel.Caption>
                        <h3>Third Stage</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
               
        </Carousel>
    )
}

export default Carousel


// export const CarouselItem = ({children, width}) => {
//   return (
//     <div className='carousel-item' style={{width: width}}>
//         {children}
//     </div>
//   )
// }

// const Carousel = ({children}) => {
//     const [activeIndex, setActiveIndex] = useState(0)
//     const [paused, setPaused] = useState(false)

//     const updateIndex = (newIndex) => {
//         if (newIndex < 0) {
//             newIndex = React.Children.count(children) - 1
//         } else if (newIndex >= React.Children.count(children)){
//             newIndex = 0
//         } 

//         setActiveIndex(newIndex)
//     }

//     useEffect(() => {
//       const interval = setInterval(() => {
//         if (!paused){
//             updateIndex(activeIndex + 2)
//         }

//       }, 2000)
//       return () => {
//         if (interval) {
//             clearInterval(interval)
//         }
//       }
//     })

//     const handlers = useSwipeable({
//         onSwipedLeft: () => updateIndex(activeIndex + 1),
//         onSwipedRight: () => updateIndex(activeIndex - 1)
//     })

//   return (
//     <div 
//     {...handlers}
//     className='carousel'
//     onMouseEnter={() => setPaused(true)}
//     onMouseLeave={() => setPaused(false)}>
//         <div className='inner' style={{transform: `translateX(-${activeIndex * 100}%)`}}>
//             {React.Children.map(children,(child, index) => {
//                 return React.cloneElement(child,{width: '100%'})
//             })}
//         </div>
//         <div className='indicators'>
//             <button onClick={() => {
//                 updateIndex(activeIndex - 1)
//             }}
//             >
//                 Prev
//             </button>
//             {React.Children.map(children,(child, index) => {
//                 return (
//                     <button
//                     className={`${index === activeIndex ? 'active' : ''}`}
//                     onClick={() => {
//                         updateIndex(index)
//                     }}
//                     >
//                         {index + 1}
//                     </button>
//                 )
//             })}
//             <button onClick={() => {
//                 updateIndex(activeIndex + 1)
//             }}
//             >
//                 Next
//             </button>
//         </div>
//     </div>
//   )
// }

// export default Carousel





// 

// function ControlledCarousel() {
//     const [index, setIndex] = useState(0)

//     const handleSelect = (selectedIndex) => {
//         setIndex(selectedIndex)
//     }

//     return (
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//             <Carousel.Item>
//                 <img
//                 className='d-block w-100'
//                 src='https://static.wikia.nocookie.net/marvelvscapcom/images/e/e8/Danger_Room_Cota.png/revision/latest/scale-to-width-down/768?cb=20170908085232' 
//                 alt='First slide'
//                 />
//                 <Carousel.Caption>
//                     <h3>Select Your Stage</h3>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                 className='d-block w-100'
//                 src='https://img.wallpapersafari.com/desktop/728/410/64/65/YflnOP.gif'
//                 alt='Second Stage'
//             />

//                 <Carousel.Caption>
//                     <h3>''</h3>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                 className='d-block w-100'
//                 src='https://i.pinimg.com/originals/46/5b/ab/465bab82365aacbf3660b094805b95d7.gif'
//                 alt='Third Stage'
//             />

//             <Carousel.Caption>
//                 <h3> '' </h3>
//             </Carousel.Caption>
//         </Carousel.Item>
//         /</Carousel>
//     )
// }

// render(<ControlledCarousel/>)
