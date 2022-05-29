import {SearchIcon, HomeIcon, FlagIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon} from '@heroicons/react/outline'
import {ViewGridIcon, ChatIcon, BellIcon, ChevronDownIcon} from '@heroicons/react/solid'
import { useSelector } from 'react-redux'

import { selectUser } from '../../redux/user'

import styles from '../../styles/stylesComponents/header.module.css'

interface AppProps {
    name: ''
}

function Header() {

    const select = useSelector(selectUser)

    return (
        <>
            <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img src="https://links.papareact.com/5me" width="40" height={40} style={{position: "fixed"}}/>
                <div className={styles.search}>
                    <SearchIcon className={styles.iconFacebook}/>
                    <input type="text" placeholder='Search Facebook'/>
                </div>
                <div className={styles.bar}></div>
            </div>
            <div className={styles.headerCenter}>
                <HomeIcon className={styles.iconLeft}/>
                <FlagIcon className={styles.iconLeft}/>
                <PlayIcon className={styles.iconLeft}/>
                <ShoppingCartIcon className={styles.iconLeft}/>
                <UserGroupIcon className={styles.iconLeft}/>
            </div>
            <div className={styles.headerRight}>
                <img src="https://man-westvlaanderen.be/uploads/resized/defaultimages/117/default-team_a37dba089712b268a5d483e88d5f95a6.png" 
                    width={30}
                    height={30}
                alt="" />
                <p>{select.loginName}</p>

                <ViewGridIcon className={styles.iconRight}/>
                <ChatIcon className={styles.iconRight}/>
                <BellIcon className={styles.iconRight}/>
                <ChevronDownIcon className={styles.iconRight}/>
            </div>
            </div>
        </>
    )
}

export default Header