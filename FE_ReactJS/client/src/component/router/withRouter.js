import React from 'react';
import { useParams } from 'react-router-dom';

const withRouter = (Component) => {
  function WithRouterProp(props) {
    let params = useParams();
    return (
      <Component
        {...props}
        params={params}
      />
    );
  }

  return WithRouterProp;
};

export default withRouter;
