/* import React, {Component} from "react";
class EventPractice extends Component{
    state ={
        username :'',
        message:''
    }
    // render(){
    //     return(
    //         <div>
    //             <h1>이벤트 연습</h1>
    //             <input 
    //                 type="text"
    //                 name = "message"
    //                 placeholder="입력해보세요"
    //                 value ={this.state.message}
    //                 onChange={
    //                     (e)=>{
    //                         // console.log(e.target.value);
    //                         this.setState({
    //                             message :e.target.value
    //                         })
    //                     }
    //                 }/>
            
    //             <button onClick={
    //                 ()=>{
    //                     alert(this.state.message);
    //                     this.setState({
    //                         message:''
    //                     });
    //                 }
    //             }>확인</button>
    //             </div>
    //     );
    // }
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        this.setState({
            // message:e.target.value
            [e.target.name] : e.target.value
        });
    }
    handleClick(){
        alert(this.state.message+': '+this.state.message);
        this.setState({
            message:'',
            username:''
        });
    }
    handleKeyPress(e){
        if(e.key ==='Enter'){
            this.handleClick();
        }
    }
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name = "username"
                    placeholder="사용자명"
                    value ={this.state.username}
                    onChange ={this.handleChange}
                />
                <input 
                    type="text"
                    name = "message"
                    placeholder="입력해보세요"
                    value ={this.state.message}
                    onChange ={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />

                  <button onClick={this.handleClick}>확인</button>  
                </div>
        );
    }

}
export default EventPractice; */

import React, {useState} from "react";
const EventPractice =() =>{
    const[username, setUsername]=useState('');
    const[message,setMessage]=useState('');
    const onChangeUsername =e=>setUsername(e.target.value);
    const onChangeMessage = e =>setMessage(e.target.value);
    const onClick =()  =>{
        alert(username +': '+message);
        setUsername('');
        setMessage('');
    };

    const onKeyPress = e =>{
        if(e.key ==='Enter'){
            onClick();
        }
    ;}
    return(
        <div>
            <h1>이벤트 연습</h1>
            <input 
                type="text"
                name ="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력"
                value={message}
                onChange={onChangeMessage}
                onKeyPress = {onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}
export default EventPractice;