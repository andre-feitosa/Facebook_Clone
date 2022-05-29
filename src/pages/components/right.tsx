import styles from '../../styles/stylesComponents/Right.module.css'
import { VideoCameraIcon, SearchIcon, DotsHorizontalIcon } from '@heroicons/react/solid'

var photoStorie = [
            {
                profile: 'https://links.papareact.com/kxk',
                name: 'Elon Musk'
            },
            {
                profile: 'https://links.papareact.com/zvy',
                name: 'Bill Gates'
            },
            {
                profile: 'https://links.papareact.com/snf',
                name: 'Mark Zuckerberg'
            },
            {
                profile: 'https://links.papareact.com/f0p',
                name: 'Jeff Bezos'
            },
            {
                profile: 'https://links.papareact.com/r57',
                name: 'James Bond'
            }
    ];

function Right() {

    return (
        <>
            <div className={styles.profiles}>
                <div className={styles.icons}>
                <h4>Contacts</h4>
                    <VideoCameraIcon style={{width: "30px", marginLeft: "40px", cursor: "pointer"}}/>
                    <SearchIcon style={{width: "30px", marginLeft: "5px", cursor: "pointer"}}/>
                    <DotsHorizontalIcon style={{width: "30px", marginLeft: "5px", cursor: "pointer"}}/>
                </div>
                <div className={styles.persons}>
                    {
                        photoStorie.map((obj:any, key:any)=>{
                            return (
                                <div className={styles.profilePersons} key={key}>
                                    <img src={obj.profile} alt="Photo profile" className={styles.photoImg}/>
                                    <p>{obj.name}</p>
                                </div>
                            )
                        })
                    }
                </div> 
            </div>
        </>
    )
}

export default Right
