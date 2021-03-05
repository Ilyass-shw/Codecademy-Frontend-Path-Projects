import React from 'react'
import PropTypes from 'prop-types'
import { Icon, InlineIcon } from '@iconify/react';
import redditFill from '@iconify-icons/akar-icons/reddit-fill';
import bxMenu from '@iconify-icons/bx/bx-menu';
import homeIcon from '@iconify-icons/entypo/home';
import sharpLocalFireDepartment from '@iconify-icons/ic/sharp-local-fire-department';
import baselineSubscriptions from '@iconify-icons/ic/baseline-subscriptions';

// npm install --save-dev @iconify/react @iconify-icons/whh
import alienshipIcon from '@iconify-icons/whh/alienship';

// npm install --save-dev @iconify/react @iconify-icons/bx
import { Icon, InlineIcon } from '@iconify/react';
import bxTrendingUp from '@iconify-icons/bx/bx-trending-up';

// npm install --save-dev @iconify/react @iconify-icons/foundation
import graphBar from '@iconify-icons/foundation/graph-bar';

// npm install --save-dev @iconify/react @iconify-icons/jam
import orderedList from '@iconify-icons/jam/ordered-list';

// npm install --save-dev @iconify/react @iconify-icons/majesticons
import videoCamera from '@iconify-icons/majesticons/video-camera';










const NavBar = props => {
    return (
        <nav>
            <ul>
                <li><Icon icon={redditFill} color="#FF0000" /></li>
                {/* <Icon icon={alienshipIcon} color="blue" /> */}
                <li><Icon icon={bxMenu} /></li>
                {/* <Icon icon={bxTrendingUp} /> */}
                <li><Icon icon={homeIcon} /></li>
                {/* <Icon icon={graphBar} /> */}
                <li><Icon icon={sharpLocalFireDepartment} /></li>
                {/* <li><Icon icon={orderedList} /></li> */}
                <li><Icon icon={baselineSubscriptions} /></li>
                {/* <li><Icon icon={baselineSubscriptions} /></li> */}
            </ul>
        </nav>
    )
}

NavBar.propTypes = {

}

export default NavBar
