import React, { useEffect, useState } from 'react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import styled from 'styled-components';


export default function Login(){

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    
    const getEmail = (e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const getPassword = (e : React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const [focus, setFocus] = useState<string>();

    const focusIn = () =>{
        setFocus('focusin');
    }
   

    return(
        <Wrapper >
            <GlobalStyles />
            <div className='container'>
                <form>
                    <div>
                        <label htmlFor="email" className={focus}>Email</label>
                        <input 
                        type="email" 
                        name='email' 
                        id='email' 
                        autoComplete='off'
                        onChange={e=>getEmail(e)}
                        onFocus={focusIn}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        name='password' 
                        id='password'
                        autoComplete='off' 
                        onChange={e=>getPassword(e)}
                        />
                    </div>
                    <button type='submit' className='login-btn'>Log In</button>
                </form>
                <span>Forgotten Password?</span>
                <button className='signin-btn' >Create New Account</button>
            </div>
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
        form{
            div{
                width: 100%;
                height: 3em;
                background-color: #c6c2e4b7;
                margin-top: 15px;
                display: flex;
                align-items: flex-end;
                position: relative;
                label{
                    position: absolute;
                    z-index: 20;
                    font-size: 14px;
                    bottom: 8px;
                    left: 8px;
                }
                .focusin{
                    animation: focusin .3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s 1 normal forwards;
                }
                @keyframes focusin {
                    100%{
                        transform: translateY(-22px);
                    }   
                }
                input{
                    position: relative;
                    width: 100%;
                    height: 75%;
                    background-color: transparent;
                    border: none;
                    outline: none;
                }
            }

        }
    }
`