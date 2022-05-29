import styles from '../../styles/stylesComponents/posts.module.css'

import { ChatAltIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { ShareIcon } from '@heroicons/react/solid'

interface AppProps {
    post: any
}

function Posts(props: AppProps) {

    return (
        <>
            <div className={styles.txt}>
                {
                    props.post !== undefined ? 
                        props.post.map((item: any, key: any)=>{

                            return (
                                <div className={styles.post} key={key}>
                                    <div style={{display: "flex"}} className={styles.profile}>
                                        <img src='https://man-westvlaanderen.be/uploads/resized/defaultimages/117/default-team_a37dba089712b268a5d483e88d5f95a6.png'/>
                                        <h4>{item.name}</h4>
                                        <p>{item.date}</p>
                                    </div>
                                   
                                    <p>{item.message}</p>
                                    <img src={item.image} alt="" style={{width: "100%"}}/>
                                    <div style={{display: "flex"}}>

                                        <div className={styles.icons}>
                                            <ThumbUpIcon style={{width: "20px"}}/>
                                            <p style={{marginLeft: '8px'}}>Like</p>
                                        </div>

                                        <div className={styles.icons} style={{marginLeft: '9em'}}><ChatAltIcon style={{width: "20px"}}/>
                                        <p style={{marginLeft: '10px'}}>Comment</p></div>

                                        <div className={styles.icons} style={{marginLeft: '8em'}}><ShareIcon style={{width: "20px"}}/>
                                        <p style={{marginLeft: '10px'}}>Share</p></div>
                                    </div>
                                </div>
                            )

                        }) 
                    : null
                }
            </div>
        </>
    )
}

export default Posts