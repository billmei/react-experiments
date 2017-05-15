import React from 'react';

const Debug = (obj) => (
  <pre>{JSON.stringify(obj, null, 2)}</pre>
)

export default Debug;
