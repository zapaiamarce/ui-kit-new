import Input from '../components/test';

export default {
  component: Input,
  props: {
    text: 'Lorem ipsum',
    disabled: true,
    onChange: value => console.log(`Select: ${value}`)
  }
};