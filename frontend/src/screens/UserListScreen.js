import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import Message from '../components/Message';
import { listUsers } from '../actions/userAction';

const UserListScreen = () => {
    const dispatch = useDispatch()

    const [userId, setUserId] = useState("")

    const userList = useSelector(state => state.userList)
    const {loading, error, users} = userList

    const userLogin  = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin
    const followUser = ()=>{
        console.log(userId)
        fetch('/api/users/follow',{

            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${userInfo.token}`
            },
            body:
                JSON.stringify({followId: userId})
            
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            // dispatch({type:"UPDATE_FOLLOW",payload:{following:data.following,followers:data.followers}})
            //  localStorage.setItem("userInfo",JSON.stringify(data))
            //  setProfile((prevState)=>{
            //      return {
            //          ...prevState,
            //          user:{
            //              ...prevState.user,
            //              followers:[...prevState.user.followers,data._id]
            //             }
            //      }
            //  })
            //  setShowFollow(false)
        })
    }
    // const unfollowUser = ()=>{
    //     const {
    //         userLogin: { userInfo },
    //       } = getState();
    //     fetch('/unfollow',{
    //         method:"put",
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Authorization":`Bearer ${userInfo.token}`
    //         },
    //         body:JSON.stringify({
    //             unfollowId:userId
    //         })
    //     }).then(res=>res.json())
    //     .then(data=>{
            
    //         dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
    //          localStorage.setItem("user",JSON.stringify(data))
            
    //          setProfile((prevState)=>{
    //             const newFollower = prevState.user.followers.filter(item=>item != data._id )
    //              return {
    //                  ...prevState,
    //                  user:{
    //                      ...prevState.user,
    //                      followers:newFollower
    //                     }
    //              }
    //          })
    //          setShowFollow(true)
             
    //     })
    // }

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
                    {users.filter(user => user._id !== userInfo._id).map((user) => (
                        <tr className='user_list-data'>
                            <td>{user._id}</td>
                            <td style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}><img src={user.img} alt="img" style={{
                                width:'40px',
                                height: '40px',
                                borderRadius: '50%',
                                marginRight: '1rem'
                            }}/>{user.name}</td>
                            <td>description...</td>
                            {/* <td><button style={{marginBottom: '1rem'}} onClick={() => {setUserId(user._id); followUser()}}>Follow</button></td> */}
                            <td><Link to={`/userProfile/${user._id}`}>View Profile</Link></td>
                        </tr>
                    ))}
                </table>
            )}
        </div>
    )
}

export default UserListScreen