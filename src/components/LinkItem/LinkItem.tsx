import React from 'react';
import styles from './LinkItem.module.css'

type Item = {
    icon: React.ReactNode;
    href: string
}

type Props = {
    item: Item;
}

const LinkItem: React.FunctionComponent<Props> = ({item}) => {

    const {icon, href} = item

    return (
            <a className={styles.linkItemContainer} href={href} target='_blank'>
                {icon}
            </a>
    );
};

export default LinkItem;