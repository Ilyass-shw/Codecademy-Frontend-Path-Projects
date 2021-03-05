import React from 'react'
import PropTypes from 'prop-types'
import { Icon, InlineIcon } from '@iconify/react';
import redditFill from '@iconify-icons/akar-icons/reddit-fill';
import bxMenu from '@iconify-icons/bx/bx-menu';
import homeIcon from '@iconify-icons/entypo/home';
import sharpLocalFireDepartment from '@iconify-icons/ic/sharp-local-fire-department';
import baselineSubscriptions from '@iconify-icons/ic/baseline-subscriptions';






const NavBar = props => {
    return (
        <nav>
            <ul>
                <li><Icon icon={redditFill} color="#FF0000" /></li>
                <li><Icon icon={bxMenu} /></li>
                <li><Icon icon={homeIcon} /></li>
                <li><Icon icon={sharpLocalFireDepartment} /></li>
                <li><Icon icon={baselineSubscriptions} /></li>
            </ul>
        </nav>
    )
}

NavBar.propTypes = {

}

export default NavBar
