import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import ListContainer from './ListContainer';

import Container from './Container';
import { useState } from 'react';

function Home({ userState }) {
  const [user, setUser] = userState;
  const [userIsNew, setUserIsNew] = useState(false);

  const renderForm = () => {
    if (userIsNew) {
      return <SignupForm setUser={setUser} setUserIsNew={setUserIsNew} />
    } else {
      return <SigninForm setUser={setUser} setUserIsNew={setUserIsNew} />
    }
  }

  return (
    <Container>
      {user ? <ListContainer userState={userState}/> : renderForm()}
    </Container>
  )
}

export default Home;