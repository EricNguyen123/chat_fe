import classNames from 'classnames/bind';
import styles from './NavBarLeft.module.scss';
import Menu, { MenuItem } from '../../components/MenuItem';
import { itemNavBar } from '../../contains/ItemNavBar';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOtherUser, getUser, getUsers } from '../../redux/users/actions';
import config from '../../config';
import { useNavigate } from 'react-router-dom';


const cx = classNames.bind(styles);

const NavBarLeft = () => {
  const dispatch = useDispatch();
  const userSelector = useSelector(({ users } : any) => users);
  const items = itemNavBar();
  const data = JSON.parse(localStorage.data);
  const currentUser = data.id;

  const navigate = useNavigate();
  const handleRedirectPage = (path: string) => {
    navigate(path);
  };
  
  const users: any[] = useMemo(() => {
    if ( currentUser && Array.isArray(userSelector.usersInfo) && userSelector.usersInfo.length > 0) {
      const newUsers: any[] = [];
      userSelector.usersInfo.forEach((item: any) => {
         if (item.id !== currentUser) {
           newUsers.push(item);
         }
      })
      
      return [...newUsers];
    }
    return []
  }, [currentUser, userSelector.usersInfo]);

  useEffect(()=> {
    dispatch(getUsers())
  }, [])

  const handleUser = (user: any) => {
    const data = JSON.parse(localStorage.data);
    dispatch(getOtherUser({id: user.id, token: data.token}))
  }
  
  return (
    <aside className={cx('wrapper')}>
        <Menu>
            {items.map((item, index)=> (<MenuItem
                      key={index}
                      title={item.title}
                      to={item.path}
                      icon={<item.icon/>}
                      activeIcon={<item.activeIcon/>}
                      onClick={() => {dispatch(getUser())}} 
                  />))}

            {(users.length > 0) && (
                users.map((user, index) => (
                  <MenuItem 
                    icon={user.icon}  
                    title={user.name}
                    type={'footer'}
                    key={index} 
                    to={`/profiles/${user.id}`}
                    onClick={() => {handleUser(user)}} />
                ))
              )}
        </Menu>
        <div className={cx('footer')}>
            
        </div>
    </aside>
  );
};

export default NavBarLeft;