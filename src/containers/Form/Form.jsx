import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Button, { BUTTON_TYPES } from '../../components/Button/Button';
import emailjs from 'emailjs-com';
import './Form.scss';

const Form = ({ onSuccess, onError }) => {
  const [sending, setSending] = useState(false);
  const form = useRef();

  const sendContact = useCallback(async (evt) => {
    evt.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        'service_6tgw3oc',
        'template_1mxanq8',
        form.current,
        'tQC2MQP8g-abLkhXt'
      );

      setSending(false);
      onSuccess();
    } catch (err) {
      setSending(false);
      onError(err);
    }
  }, [onSuccess, onError]);

  return (
    <form id="contact-form" ref={form} onSubmit={sendContact}>
      <label className="label" htmlFor="name">
        Full name
      </label>
      <input type="text" id="name" name="name" placeholder="Your Full Name" required />
      <label className="label" htmlFor="email">
        Email Address
      </label>
      <input type="email" id="email" name="email" placeholder="Your Email Address" required />
      <label className="label" htmlFor="message">
        Message
      </label>
      <textarea rows="6" placeholder="Your Message" id="message" name="message" required />
      <Button id="submit" type={BUTTON_TYPES.SUBMIT} disabled={sending}>
        {sending ? 'En cours' : 'Envoyer'}
      </Button>
    </form>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
};

Form.defaultProps = {
  onError: () => null,
  onSuccess: () => null,
};

export default Form;