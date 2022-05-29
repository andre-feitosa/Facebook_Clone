import { CalendarIcon, ClockIcon, DesktopComputerIcon, ShoppingBagIcon, UserGroupIcon, UsersIcon} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'

import { selectUser } from '../../redux/user'

import styles from '../../styles/stylesComponents/left.module.css'

interface AppProps {
    name: ''
}

function PageLeft() {

    const select = useSelector(selectUser)

    return (
        <>
            <div className={styles.bodyLeft}>
                <div className={styles.profile}>
                    <img src="https://man-westvlaanderen.be/uploads/resized/defaultimages/117/default-team_a37dba089712b268a5d483e88d5f95a6.png" 
                       width={30}
                       height={30}
                       alt="" />
                    <p>{select.loginName}</p>
                </div>
                

                <li><UsersIcon className={styles.icon}/>Friend</li>
                <li><UserGroupIcon className={styles.icon}/>Groups</li>
                <li><ShoppingBagIcon className={styles.icon}/>Marketplace</li>
                <li><DesktopComputerIcon className={styles.icon}/>Watch</li>
                <li><CalendarIcon className={styles.icon}/>Events</li>
                <li><ClockIcon className={styles.icon}/>Memories</li>
                <li><ChevronDownIcon className={styles.icon}/>See More</li>
            </div>
        </>
    )
}

export default PageLeft