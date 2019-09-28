import React from 'react';

import { Button, ImageUpload } from 'modules/core/components';


const AddFaces = () => (
  <form>
    <ImageUpload />
    <br />
    <Button>Do Face Tricks</Button>
  </form>
);

AddFaces.propTypes = {};

AddFaces.defaultProps = {};


export default AddFaces;
