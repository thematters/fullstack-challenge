/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useHistory } from "react-router-dom";

const Back = () => {
  const history = useHistory();
  return (
    <a
      href="#"
      css={{ textDecoration: 'none' }}
      onClick={() => history.goBack()}
    >
      &lt; Back
    </a>
  )
}

export default Back
