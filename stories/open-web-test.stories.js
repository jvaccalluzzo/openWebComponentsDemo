import { html } from 'lit';
import '../src/open-web-test.js';

export default {
  title: 'OpenWebTest',
  component: 'open-web-test',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <open-web-test
      style="--open-web-test-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </open-web-test>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
