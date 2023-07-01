import classNames from "classnames/bind";
import styles from './Sidebar.module.scss';
import SearchOutlined from '@ant-design/icons'
import Menu, {MenuItem} from './Menu';
const cx = classNames.bind(styles);

function Sidebar() {
    return ( 
        <div className={cx('wrapper')} >
        
        <aside >
            
            <Menu>
                <MenuItem  title= "Radar"  to={'/'} icon= {null}/>
                <MenuItem  title= "Launch" to={'/Launch'} icon= {null}/>
                <MenuItem  title= "Satellite" to={'/Satellite'} icon= {null}/>
            </Menu>

        </aside>
        </div>
     );
}

export default Sidebar;