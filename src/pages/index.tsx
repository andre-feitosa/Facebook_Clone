import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { XIcon } from '@heroicons/react/solid'

import { replaceUser } from '../redux/user'

import styles from '../styles/stylesComponents/login.module.css'

const Index = () => {

  const [loginName, loginNameState] = useState("")
  const [loginPassword, loginPasswordState] = useState("")
  const [cadastName, cadastNameState] = useState("")
  const [cadastPassword, cadastPasswordState] = useState("")

  const [cadast, cadastState] = useState(Number)
  const [hiddenVisi, hiddenVisiState] = useState("rgba(255, 0, 0, 0)")

  const [element, elementState] = useState(false)
  const [filt, filtState] = useState("0px")

  const dispatch = useDispatch()

  var stylingObject = {
    index: {
      filter: `blur(${filt})`
    }
  }

  function elementCadast() {
  
    if(!element) {
      elementState(true)
      filtState("2px")
    }else{
      elementState(false)
      filtState("0px")
    }
  }

  async function login() {
    dispatch(replaceUser({ pay1: loginName, pay2: loginPassword }))

    const listuser = await axios.post('http://localhost:3001/', {
      nameLogin: loginName,
      passwordLogin: loginPassword
    })
  }

  async function cadastro() {
    axios.post('http://localhost:3001/cadastro', {
      cadastName: cadastName,
      cadastPassword: cadastPassword
    }).then((res: { status: any })=>cadastState(res.status))
  }

  return (
    <>
      <div className={styles.body}>
        <div style={stylingObject.index}>
          <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />

          <h2 className={styles.title}>O Facebook ajuda você a se conectar e <br/> compartilhar com as pessoas que <br/> fazem parte da sua vida.</h2>
          
          <div className={styles.login}>

            <input type="text" name="name" placeholder='Nome' onChange={(ev)=>{loginNameState(ev.target.value)}}/>
            <input type="password" name='password' placeholder='Senha' onChange={(ev: { target: { value: any } })=>{loginPasswordState(ev.target.value)}} />
            <Link href='/home'>
              <button type="submit" className={styles.btnLogin} onClick={()=>{login()}}>Entrar</button>
            </Link>
            <p style={{color: hiddenVisi}}>Nome/Senha está incorreto !</p>
            <div className={styles.bar}></div>
            <button type="button" className={styles.btnCadast} onClick={()=>{elementCadast();}} >Criar nova conta</button>
          </div>

        </div>

        {
          element ? <div className={styles.cadast}>
            <XIcon style={{marginLeft: "20em", width: "30px", position: "absolute", marginTop: "25px", cursor: "pointer"}} onClick={()=>elementCadast()}
            />
            <h2>Cadastre-se</h2>
            <p>É rápido e fácil.</p>
            <input type="text" placeholder='Nome' onChange={(ev)=>{cadastNameState(ev.target.value)}} />
            <input type="password" placeholder='Senha' id="" onChange={(ev)=>{cadastPasswordState(ev.target.value)}} />
            <button className={styles.btnCad} onClick={()=>cadastro()}>Cadastre-se</button>
            {
              cadast === 200 ? <p style={{color: "green", marginLeft: "100px"}}>Sua conta foi criada!</p> : null
            }
            {
              cadast === 203 ? <p style={{color: "red", marginLeft: "20px"}}>Este nome ja esta sendo utilizado, tente outro!</p> : null
            }
          </div> 
        : null
        }
      </div>
    </>
  )
}

export default Index
