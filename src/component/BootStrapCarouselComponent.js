// import React from 'react'
// import { Carousel } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import React, {BootstrapCarouselComponent} from 'react'
// import {
//     Carousel,
//     CarouselItem,
//     CarouselControl,
//     CarouselIndicators,
//     CarouselCaption
// } from 'reactstrap'

// const items = [
//     {
//         src: 'https://static.wikia.nocookie.net/marvelvscapcom/images/e/e8/Danger_Room_Cota.png/revision/latest/scale-to-width-down/768?cb=20170908085232',
//         altText: 'Slide 1',
//         caption: 'Slide 1'

//     },
//     {
//         src: 'https://i.pinimg.com/originals/46/5b/ab/465bab82365aacbf3660b094805b95d7.gif',
//         altText: 'Slide 2',
//         caption: 'Slide 2'

//     },
//     {
//         src: 'https://i0.wp.com/i.pinimg.com/originals/fd/eb/a1/fdeba10c58e6033205d92d811749acc2.gif?resize=160,120',
//         altText: 'Slide 3',
//         caption: 'Slide 3'

//     }
// ]

// class Stages extends BootstrapCarouselComponent {
//     constructor(props) {
//         super(props)
//         this.state = {activeIndex: 0 }
//         this.next = this.next.bind(this)
//         this.previous = this.previous.bind(this)
//         this.goToIndex = this.goToIndex.bind(this)
//         this.onExiting = this.onExiting.bind(this)
//         this.onExited = this.onExited.bind(this)
//     }

//     onExiting() {
//         this.animating = true
//     }

//     onExited() {
//         this.animating = false
//     }

//     next() {
//         if (this.animating) return
//         const nextIndex = this.state.activeIndex === items.lendth - 1 ? 0 : this.state.activeIndex + 1
//         this.setState({ activeIndex: nextIndex })
//     }

//     previous() {
//         if (this.animating) return
//         const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
//         this.setState({ activeIndex: nextIndex })
//     }

//     goToIndex(newIndex) {
//         if (this.animating) return
//         this.setState({ activeIndex: newIndex })
//     }

//     render() {
//         const { activeIndex } = this.state

//         const slides = items.map((items) => {
//             return (
//                 <CarouselItem
//                 onExiting={this.onExiting}
//                 onExited={this.onExited}
//                 key={items.src}
//                 >
//                 <img src={item.src} alt={item.altText}/>
//                 <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
//                 </CarouselItem>
//             )
//         })

//         return (
//             <Carousel
//             activeIndex={activeIndex}
//             next={this.next}
//             previous={this.previous}
//             >
//             <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
//             <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
//             </Carousel>
//         )
//     }
// }


// export default BootstrapCarouselComponent


// // class BootstrapCarouselComponent extends React.Compo
// // render() {
// //     return (
// //     <>
// //         <div>
// //         <div className='container-fluid'>
// //         <div className='row'>
// //         <div className='col-sm-12'>
// //         <h3>React Bootstrap Carousel</h3>
// //         </div>
// //         </div>
// //         <div className='row'>
// //         <div className='col-12'>
// //         <Carousel>
// //         <Carousel.Item>
// //         <img
// //         className='d-block w-100'
// //         src='https://static.wikia.nocookie.net/marvelvscapcom/images/e/e8/Danger_Room_Cota.png/revision/latest/scale-to-width-down/768?cb=20170908085232'
// //         alt='First slide'
// //         />
// //         <Carousel.Caption>
// //         <h3> Stage 1 </h3>
// //         <p>''</p>
// //         </Carousel.Caption>
// //         </Carousel.Item>
// //         <Carousel.Item>
// //         <img
// //         className='d-block w-100'
// //         src=''
// //         </>
// //     )
// // }

