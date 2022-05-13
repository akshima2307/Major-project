import React, {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Message from '../components/Message';
import { listUsers } from '../actions/userAction';

const UserListScreen = () => {
    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const {loading, error, users} = userList

    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch])

    return(
        <div>
            <h2>Users</h2>
            {loading ? <Message>Loading...</Message> : error ? <Message>{error}</Message> : (
                <table className='user_list'>
                    <tr className='user_list-header'>
                        <th>Artist ID</th>
                        <th>Artist Name</th>
                        <th>Artist Description</th>
                        <th></th>
                    </tr>
                    {users.map((user) => (
                        <tr className='user_list-data'>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>description...</td>
                            <td><button>Connect</button></td>
                        </tr>
                    ))}
                </table>
            )}
        </div>
    )
}

export default UserListScreen