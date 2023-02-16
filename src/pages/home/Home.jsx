import Adds from '../../components/adds/Adds'
import { Title } from './Home.styled'
import {
  useGetAllAddsQuery,
  useGetUsersQuery,
  useGetUserQuery,
} from '../../features/adds/addsApiSlice'
import { getAllAdds, getUsers } from '../../features/adds/addsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const Home = () => {
  const dispatch = useDispatch()
  const allAdds = useSelector((state) => state.adds?.allAdds)
  const searchValue = useSelector((state) => state.adds?.search)

  const {
    data: adds,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllAddsQuery()

  const { data: users } = useGetUsersQuery()
  const { data: user } = useGetUserQuery()

  console.log(user)

  useEffect(() => {
    dispatch(getUsers(users))
  }, [users, dispatch])

  useEffect(() => {
    if (isSuccess) {
      dispatch(getAllAdds(adds))
    }
  }, [dispatch, isSuccess, adds])

  let content

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = (
      <Adds
        adds={allAdds?.filter((add) =>
          searchValue.toLowerCase() === ''
            ? add
            : add.title.toLowerCase().includes(searchValue)
        )}
      />
    )
  } else if (isError) {
    content = { error }
  }

  return (
    <div>
      <Title>Объявления</Title>
      {content}
    </div>
  )
}

export default Home
