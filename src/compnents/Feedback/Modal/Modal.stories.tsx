import React from 'react';
import Modal from './Modal.js';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Feedback/Modal',
  component: Modal,
} as Meta<typeof Modal>;

const Template: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Modal {...args} />;

// Default Modal
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  title: 'Modal Title',
  content: 'This is a modal content',
};

// Modal with different title and content
export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  isOpen: true,
  title: 'Custom Modal Title',
  content: 'Here is some custom content for this modal.',
};

// Modal with closed state
export const ClosedModal = Template.bind({});
ClosedModal.args = {
  isOpen: false,
  title: 'Closed Modal',
  content: 'This modal is not open.',
};

// Modal with long content
export const LongContentModal = Template.bind({});
LongContentModal.args = {
  isOpen: true,
  title: 'Long Content Modal',
  content: `This is a modal with a longer content to demonstrate how the modal handles more text. 
            You can see here that the content is longer than usual, which might cause the modal to grow in size, depending on the styling applied to it. 
            This can be useful for testing how modals behave with varying content lengths.`,
};

// Modal with a different title style
export const TitleOnlyModal = Template.bind({});
TitleOnlyModal.args = {
  isOpen: true,
  title: 'Only Title Modal',
  content: '',
};

// Modal with a close button
export const ModalWithCloseButton = Template.bind({});
ModalWithCloseButton.args = {
  isOpen: true,
  title: 'Modal with Close Button',
  content: 'This modal includes a close button that will allow you to close it.',
};
