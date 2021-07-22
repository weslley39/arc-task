import Checkbox from '@material-ui/core/Checkbox';
import { Container, Card, Avatar, Name } from './home.styles'
import useController from './hooks/useController/useController';
import users from './index.data';


const HomePage = () => {
  const { state, setChecked } = useController({ users });

  return (
    <Container>
      {
        state.users.map((user) => (
          <Card isChecked={user.checked}>
            <Avatar src={user.imageUrl} alt="Avatar" />
            <Name>{user.name}</Name>
            <Checkbox
              inputProps={{ 'aria-label': 'user' }}
              checked={user.checked}
              onChange={(e, value) => setChecked(user.id)}
            />
          </Card>
        ))
      }
    </Container>
  )
};

export default HomePage;