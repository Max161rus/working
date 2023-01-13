import { Component, useState, useEffect, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const countTotoal = (num) => {
    console.log('counting...');
    return num + 10;
}
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


const Slider = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const logging = () => {
        console.log('log!');
    }

    useEffect(() => {
        console.log('effect');
        document.title = `Slide: ${slide}`;

        window.addEventListener('click', logging);

        return () => {
            window.removeEventListener('click', logging);
        }
    }, [slide]);

    // const [state, setState] = useState({slide: 0, autoplay: false});

    // const changeSlide = i => {
    //     setState(state => ({...state, slide: state.slide + i}));
    // };

    // const toggleAutoplay = () => {
    //     setState(state => ({...state, autoplay: !state.autoplay}));
    // }

    // const {slide, autoplay} = state;

    const calcValue = () => {
        console.log('random');

        return Math.random() * (50 - 1) + 1;
    }

    const changeSlide = i => {
        setSlide(slide => slide + i);
    };

    const toggleAutoplay = () => {
        setAutoplay(autoplay => !autoplay);
    }

    const total  = useMemo(() => {
        return countTotoal(slide);
    },[slide]);

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br />
                    {autoplay ? 'auto' : null}
                </div>
                <div className="text-center mt-5">Active slide {total} <br />
                    {autoplay ? 'auto' : null}
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


function App() {
    const [slide, setSlider] = useState(true);

    return (
        <>
            <button onClick={() => setSlider(false)}>Click</button>
            {slide ? <Slider/> : null}
        </>

    );
}

export default App;
