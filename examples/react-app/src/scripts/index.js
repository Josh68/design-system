// Named import from main entry file. This example has been configured to use Webpack's tree shaking
// to only bundle imported components. Without this optimization, all components will be imported
// your build process.
import { Alert, Button, Drawer, UsaBanner, SingleInputDateField } from '@cmsgov/design-system';
import { useState } from 'react';
import ReactDOM from 'react-dom';

const Example = function () {
  const [open, setOpen] = useState(false);
  const [dateString, updateDate] = useState('');
  return (
    <div>
      <UsaBanner />
      <header className="ds-base--inverse ds-u-padding-y--3">
        <div className="ds-l-container">
          <span className="ds-text-heading--xl">ExampleWebsite.gov</span>
        </div>
      </header>

      <div className="ds-l-container ds-u-padding-top--2">
        <div className="ds-u-measure--base">
          <h1 className="ds-text-heading--3xl">React-app example</h1>
          <Alert heading="Hello world">
            <p className="ds-c-alert__text">You did it! You&rsquo;ve ran the example.</p>
            {open && (
              <Drawer
                footerTitle="Footer Title"
                footerBody={<p className="ds-text ds-u-margin--0">Footer content</p>}
                heading="Drawer Heading"
                onCloseClick={() => setOpen(false)}
                hasFocusTrap={true}
              >
                Test
              </Drawer>
            )}
            <Button onClick={() => setOpen(true)} className="ds-u-margin-top--2">
              Learn more
            </Button>
          </Alert>
          <SingleInputDateField
            hint="If you were born on a leap day, entering the date will either crash our servers or open a portal to an alternate dimension."
            label="Enter your date of birth."
            name="single-input-date-field"
            fromYear={2023}
            toYear={2023}
            value={dateString}
            onChange={updateDate}
          />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Example />, document.querySelector('#jsx-root'));
