import { Button, Dialog } from '@cmsgov/design-system';
import { useState } from 'react';

function ModalDialogExample() {
  const [showExampleModal, setShowExampleModal] = useState(false);
  return (
    <>
      <h2>Modal Dialog Example</h2>
      <Button onClick={() => setShowExampleModal(true)} size="big" variation="solid">
        Click to show modal
      </Button>
      <Dialog
        onExit={() => setShowExampleModal(false)}
        heading="Dialog heading"
        actions={[
          <button className="ds-c-button ds-c-button--solid ds-u-margin-right--1" key="primary">
            Dialog action
          </button>,
          <button
            className="ds-c-button ds-c-button--transparent"
            key="cancel"
            onClick={() => setShowExampleModal(false)}
          >
            Cancel
          </button>,
        ]}
        isOpen={showExampleModal}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan diam vitae metus
        lacinia, eget tempor purus placerat.
      </Dialog>
    </>
  );
}

export default ModalDialogExample;
