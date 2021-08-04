import Favorite from '@material-ui/icons/Favorite';
import React from 'react';
import Button from '../components/Buttons/Button';


export default {
  title: 'Library/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = () => (
  <Button variant="contained" color="primary" id="Button">
    Default
  </Button>
)

export const Secondary = () => (
  <Button variant="outlined" color="outlined">
    Default
  </Button>
)

export const Roud = () => (
  <Button justIcon round color="primary">
    <Favorite />
  </Button>
)

export const Small = () => (
  <Button color="primary" size="sm">
    Small
  </Button>
)

export const Regular = () => (
  <Button color="primary">
    Regular
  </Button>
)

export const Large = () => (
  <Button color="primary" size="lg">
    Large
  </Button>
)
