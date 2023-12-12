import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useShowToast from './useShowToast'

const useGetUserProfile = () => {
 const [user, setUser] = useState(null)
 const [loading, setLoding] = useState(true)
 const {username} = useParams()
 const showToast = useShowToast()
}

export default useGetUserProfile
