import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

export default function SignUpModal({setModalState} : {setModalState : React.Dispatch<React.SetStateAction<boolean>>}){
    return(
        <Wrapper>
            <div className="container">
                <div className="top">
                    <h1>Sing Up</h1>
                    <h2>It's quick and easy</h2>
                    <div className='icon' onClick={()=> setModalState(false)}>
                        <IoMdClose className='close-icon'/>
                    </div>
                </div>
                <form>
                    <div className="names">
                        <input 
                        type="text" 
                        name="name" 
                        id="name"
                        placeholder='First Name'
                        />
                        <input 
                        type="text" 
                        name="surname" 
                        id="surname"
                        placeholder='Surname'
                        />   
                    </div>
                    <input 
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder='Email adress'
                    />
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Password'
                    />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    z-index: 25;
    width: 100%;
    min-height: 100vh;
    background-color: #e9e0e089;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    @keyframes appear {
        0%{
            transform: scale(0);
        }100%{
            transform: scale(1);
        }
    }

    .container{
        width: 80%;
        height: fit-content;
        position: relative;
        align-items: center;
        animation: appear .4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 normal both;
        .top{
            display: flex;
            flex-direction: column;
            text-align: left;
            position: relative;
            .icon{
                position: absolute;
                right: 0;
            }
            h1{
                font-size: 16px;
            }
            h2{
                font-size: 14px;
            }
        }
        form{
            width: 100%;
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            height: 10em;
            justify-content: space-between;
            input{
                width: 100%;
                height: 2.5em;
                border: 1px solid #82898ab7;
                outline: none;
                background-color: #c6c2e4b7;
                position: relative;
                padding: 0 10px;
            }
            .names{
                display: flex;
                justify-content: space-between;
                input{
                    width: 48%;
                }
            }
        }
    }
`