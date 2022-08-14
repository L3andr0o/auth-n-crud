import React, { useState } from 'react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import styled from 'styled-components';
import SignUpModal from '../components/SignUpModal';


export default function Login(){

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [modalState, setModalState] = useState<boolean>(false);
    
    const getEmail = (e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const getPassword = (e : React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    // const [focus, setFocus] = useState<string>();

    // const focusIn = () =>{
    //     setFocus('focusin');
    // }
   

    return(
        <Wrapper >
            <GlobalStyles />
            <div className='container'>
                <form>
                    <input 
                    type="email" 
                    name='email' 
                    id='email' 
                    autoComplete='off'
                    onChange={e=>getEmail(e)}                        
                    placeholder='Email'
                    />
                    <input 
                    type="password" 
                    name='password' 
                    id='password'
                    autoComplete='off' 
                    onChange={e=>getPassword(e)}
                    placeholder='password'
                    />
                    <button type='submit' className='login-btn'>Log In</button>
                </form>
                <span>Forgotten Password?</span>
                <button className='signin-btn' onClick={()=>setModalState(true)}>Create New Account</button>
            </div>


            {(modalState) && <SignUpModal setModalState={setModalState} />}
        </Wrapper>
    )
};




const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 100vh;
    position: relative;
    background-color: #a59dd8;
    display: flex;
    justify-content: center;
    align-items: center;

    .container{
        width: 80%;
        padding: 20px;
        background-color: #fff;
        text-align: center;
        form{
            input{
                width: 100%;
                height: 2.5em;
                border: 1px solid #82898ab7;
                outline: none;
                background-color: #c6c2e4b7;
                position: relative;
                padding: 0 10px;  
                margin-top: 10px;
                }
            button{
                width: 100%;
                height: 2.5em;
                background-color: #2f7;
                text-align: center;
                margin-top: 10px;
                border: none;
                outline: none;
            }
        }
        span{
            color: #3cf;
            font-size: 14px;
            margin: 10px auto;
            width: fit-content;
            display: block;
        }
        button{
            width: 10em;
            margin: 0 auto;
            height: 2.5em;
            color: #fff;
            background-color: #38f;
            border: none;
            outline: none;
        }
    }
`
