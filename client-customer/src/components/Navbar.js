import React, {  useState, useEffect } from 'react';
import Menu from './MenuComponent';
import Inform from './InformComponent';

// class Nav extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//           currentY: window.scrollY
//         }
//     };
//     componentDidMount() {
//         window.addEventListener("scroll", () => {
//             this.setState({currentY: window.scrollY})
//             console.log(window.scrollY);
//         })
//         // window.removeEventListener("scroll")
//     }
 
//     render() {
//         console.log(this.state.currentY)
//         return (
//             <div className={`body-customer ${this.state.currentY === 0 ? `` : `fixed-top`} `}>
//                 <Menu />
//                 <Inform />
//             </div>
//         );
//     }
    
// }

const Nav = () => {
    const [currentY, setCurrentY] = useState(window.scrollY);
    useEffect(() => {
        const handleScroll = window.addEventListener("scroll", () => {
            setCurrentY(window.scrollY);
        })
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    return (
        <div className={`body-customer shadow-2xl ${currentY <= 50 ? `` : `fixed-top`} `}>
               <Menu />
                <Inform />
        </div>
    )
}



export default Nav;