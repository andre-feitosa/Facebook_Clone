import styles from '../../styles/stylesComponents/stories.module.css'
import {useRouter} from 'next/router'
import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined'

var photoStorie = [
            {
                profile: 'https://links.papareact.com/kxk',
                storie: 'https://links.papareact.com/4zn'
            },
            {
                profile: 'https://links.papareact.com/f0p',
                storie: 'https://links.papareact.com/k2j'
            },
            {
                profile: 'https://links.papareact.com/snf',
                storie: 'https://links.papareact.com/xql'
            },
            {
                profile: 'https://links.papareact.com/zvy',
                storie: 'https://links.papareact.com/4u4'
            }
    ];

    function Stories() {

    return (
        <>
            <div className={styles.stories}>
                <div className={styles.myStorie}>
                    <img src='https://man-westvlaanderen.be/uploads/resized/defaultimages/117/default-team_a37dba089712b268a5d483e88d5f95a6.png'
                    className={styles.myStorieimg} />

                    <AddCircleOutlined style={{
                        width: "40px",
                        height: "40px",
                        color: "blue",
                        position: "absolute",
                    }} className={styles.iconCircle}/>
                    <p>Create Storie</p>
                </div>
                <div className={styles.storiesPersons}>
                    {
                        photoStorie.map((obj:any, key:any)=>{
                            return (
                                <div className={styles.storieList} key={key}>
                                    <img src={obj.profile} alt="Photo profile" className={styles.photoImg}/>
                                    <img src={obj.storie} alt="" className={styles.storieImg}/>
                                </div>
                            )
                        })
                    } 
                </div>
            </div>
        </>
    )
}

export default Stories
