import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import jsonRestClient from 'aor-json-rest-client';
import data from './data';

import { PostList, PostEdit } from './posts';


const restClient = jsonRestClient(data, true);

const App = () => (
  <Admin restClient={restClient}>
      <Resource name="posts" list={PostList} edit={PostEdit} />
  </Admin>
);

export default App;
