import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { XIcon } from '@heroicons/react/solid'
import { toast } from 'react-toastify'

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

    const listuser = await axios.post('http://localhost:3001/', {
      nameLogin: loginName,
      passwordLogin: loginPassword
    })

    if(listuser.data.id) {
      dispatch(replaceUser({ pay1: loginName, pay2: loginPassword }))
      open("http://localhost:3000/home", "_self")
    } else {
      toast.error("Nome/Senha esta incorreta!")
    }
  }

  async function cadastro() {
    axios.post('http://localhost:3001/cadastro', {
      cadastName: cadastName,
      cadastPassword: cadastPassword
    }).then((res: { status: any })=>cadastState(res.status))

    if(cadast === 200) { 
      toast.success("Sua conta foi criada com sucesso!") 
    } else if (cadast === 203) { 
      toast.error("Este nome ja esta sendo utilizado, tente outro!") 
    } 

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
            <button type="button" className={styles.btnLogin} onClick={()=>{login()}}>Entrar</button>
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
          </div> 
        : null
        }
      </div>
    </>
  )
}

export default Index
