import Header from './components/header'
import PageLeft from './components/left'
import Stories from './components/stories'
import Posts from './components/posts'
import Right from './components/right'
import { selectUser } from '../redux/user'
import { selectPost, replacePost } from '../redux/post'

import { CameraIcon, VideoCameraIcon, DocumentAddIcon, XIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import axios from 'axios'

import style from '../styles/stylesComponents/home.module.css'

const FormData = require('form-data')

function PageHome() {

    const dispatch = useDispatch()

    var formdata = new FormData()

    const [ element, elementState ] = useState(true)
    const [ imgRef, imgRefState ] = useState(null)
    const [ fileUrl, fileUrlState ] = useState(null)
    const [ msgTxt, msgState ] = useState(null)
    const [ filt, filtState ] = useState("0px")
    const [ arrayFile, arrayFileState ] = useState([])

    const select = useSelector(selectUser)
    const selectPosts = useSelector(selectPost)

    var stylingObject = {
        index: {
          filter: `blur(${filt})`
        }
    }
    
    function openPost() {
        if(element) {
            elementState(false)
            filtState("2px")
        } else {
            elementState(true)
            filtState("0px")
        }
    }

    async function handleFile(ev) {
        let files = ev.target.files[0];

        if(files) {
            imgRefState(URL.createObjectURL(files))

            formdata.append("file", files)

            const linkFile = await axios.post('http://localhost:3001/teste', formdata)

            fileUrlState(linkFile)
        }
    }

    useEffect(()=>{

        async function loadFile() {

            if(true) {
                const allPosts = await axios.post('http://localhost:3001/allpost')

                arrayFileState(allPosts)
            }
        }

        loadFile()
    })

    console.log(selectPosts)

    async function newPoste() {
        dispatch(replacePost({ pay1: msgTxt, pay2: fileUrl?.data }))
        
        await axios.post('http://localhost:3001/newpost', {nameBody: select.loginName, msgBody: msgTxt, fileBody: fileUrl?.data})
        .then((res)=>{
            console.log(res)
        }).catch(res=>{
            console.log(res)
        })
    }

    return (
        <>
            {
            select.loginName !== '' ? 
                <div>
                    <div style={stylingObject.index}>
                        <Header/>
                        <PageLeft/>
                        <Stories/>
                    </div>
                    <div className={style.posts} style={stylingObject.index}>
                            <img src="https://man-westvlaanderen.be/uploads/resized/defaultimages/117/default-team_a37dba089712b268a5d483e88d5f95a6.png"
                            alt="" />
                            <input type="button" value={`What's on your mind, ${select.loginName}?`} onClick={()=>openPost()} className={style.inputPost}/>
                            <div className={style.bar}></div>
                            <ul>
                                <li>
                                    <VideoCameraIcon style={{color: "red", width: '30px'}}/>
                                    <p style={{marginLeft: "5px"}}>
                                        Live video
                                    </p>
                                    
                                </li>
                                <li style={{marginLeft: "80px"}} onClick={()=>openPost()}>
                                    <CameraIcon style={{color: "green", width: '30px'}}/>
                                    <p style={{marginLeft: "5px"}}>
                                        Photo/video
                                    </p> 
                                </li>
                                <li style={{marginLeft: "70px", width: "150px"}}>
                                    <EmojiHappyIcon style={{color: "rgb(177, 174, 0)", width: '30px'}}/>
                                    <p style={{marginLeft: "5px"}}>
                                        Feeling/Activity
                                    </p> 
                                </li>
                            </ul>
                    </div>
                    <div className={style.createPost}>
                    {
                        element == false ? 
                            <div className={style.newPost}>
                                <XIcon style={{marginLeft: "31em", width: "30px", position: "absolute", marginTop: "20px", cursor: "pointer"}} onClick={()=>openPost()}
                                />
                                    <p>Create Post</p>
                                    <div className={style.barPost}></div>
                                    <form action="" method='get'>
                                            <input type="hidden" name="token"  />
                                            <input type="hidden" name="fileimg" value={`${fileUrl?.data}`} />
                                            <input type="text" name='msg' className={style.inputText} onChange={(ev)=>{msgState(ev.target.value)}} placeholder={`What's on your mind, ${select.loginName}?`}/>
                                            <label htmlFor="img" className={style.textFile}>
                                            <DocumentAddIcon className={style.addFile}/>
                                            Adicione uma Imagem
                                        </label>
                                        <input type="file" accept='image/*' id='img' name='' onChange={(ev)=>{handleFile(ev)}} className={style.inputFile} />
                                        <img src={imgRef} alt="" className={style.imgPost} />
                                        <Link href='/home' >
                                            <input type="submit" value="Publish" className={style.inputSubmit} onClick={()=>{newPoste()}}/>
                                        </Link>
                                    </form>
                                </div> 
                            : null
                        }
                    </div>
                    <div>
                        <Posts post={arrayFile.data}/>
                    </div>
                    <div>
                        <Right />
                    </div>
                </div> : 
                <p>Ops! Parece que voce nao fez login</p>
            }
        </>
    )
}

const Home = () => {

    const [check, checkState] = useState()
    
    const select = useSelector(selectUser)

    async function teste() {
        await axios.post('http://localhost:3001/', {
            nameLogin: select.loginName,
            passwordLogin: select.loginPassword
        }).then(res=>{checkState(res.status)})
    }
    teste()
    
    return (
      <>
        {   
            check == 203 ? open('http://localhost:3000/', "_self") : <PageHome/>
        }
      </>
    )
}

export default Home
