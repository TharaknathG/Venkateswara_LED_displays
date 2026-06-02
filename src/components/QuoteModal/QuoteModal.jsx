import React, { useEffect, useId, useRef, useState } from 'react';
import './QuoteModal.css';

const QUOTE_EMAIL =
  import.meta.env.VITE_QUOTE_FORM_EMAIL || 'jbnarayanan79@gmail.com';

const FormSubmitEndpoint = `https://formsubmit.co/ajax/${encodeURIComponent(QUOTE_EMAIL)}`;

function normalizeMobileDigits(raw) {
  let d = raw.replace(/[\s-]/g, '');
  if (d.startsWith('+91')) d = d.slice(3);
  else if (d.startsWith('91') && d.length === 12) d = d.slice(2);
  return d;
}

export default function QuoteModal({ isOpen, onClose }) {
  const titleId = useId();
  const firstFieldRef = useRef(null);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      window.clearTimeout(t);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const next = {};
    const trimmedName = name.trim();
    const digits = normalizeMobileDigits(mobile);
    if (!trimmedName) next.name = 'Name is mandatory.';
    if (!digits) next.mobile = 'Mobile number is mandatory.';
    else if (!/^\d{10}$/.test(digits)) next.mobile = 'Enter a valid 10-digit mobile number.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    if (!validate()) return;
    setStatus('sending');
    try {
      const digits = normalizeMobileDigits(mobile);
      const res = await fetch(FormSubmitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Quote request — Venkateswara LED Displays (website)',
          name: name.trim(),
          mobile: digits,
          message: `Quote request from website.\nName: ${name.trim()}\nMobile: ${digits}`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || 'Request failed');
      setStatus('success');
      setName('');
      setMobile('');
      window.setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2200);
    } catch {
      setStatus('idle');
      setSubmitError('Could not send just now. Please call or WhatsApp us instead.');
    }
  };

  return (
    <div
      className="quote-modal-root"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="quote-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="quote-modal-head">
          <div className="quote-modal-brand">
            <span className="quote-modal-logo" aria-hidden>
              V
            </span>
            <div>
              <p className="quote-modal-business">Venkateswara LED Displays</p>
              <p className="quote-modal-meta">Medavakkam, Chennai · Website enquiry</p>
            </div>
          </div>
          <button
            type="button"
            className="quote-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <h2 id={titleId} className="quote-modal-title">
          Request a quote
        </h2>
        <p className="quote-modal-lead">
          Tell us how to reach you. We will get back to you with details.
        </p>

        {status === 'success' ? (
          <p className="quote-modal-success" role="status">
            Thank you. We received your request and will contact you shortly.
          </p>
        ) : (
          <form className="quote-modal-form" onSubmit={handleSubmit} noValidate>
            <label className="quote-modal-label" htmlFor="quote-name">
              Name <span className="req">*</span>
            </label>
            <input
              ref={firstFieldRef}
              id="quote-name"
              name="name"
              type="text"
              className={`quote-modal-input ${errors.name ? 'invalid' : ''}`}
              value={name}
              onChange={(ev) => {
                setName(ev.target.value);
                if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
              }}
              autoComplete="name"
              placeholder="Enter your name"
            />
            {errors.name ? (
              <p className="quote-modal-error">{errors.name}</p>
            ) : null}

            <label className="quote-modal-label" htmlFor="quote-mobile">
              Mobile number <span className="req">*</span>
            </label>
            <input
              id="quote-mobile"
              name="mobile"
              type="tel"
              inputMode="numeric"
              className={`quote-modal-input ${errors.mobile ? 'invalid' : ''}`}
              value={mobile}
              onChange={(ev) => {
                setMobile(ev.target.value);
                if (errors.mobile) setErrors((p) => ({ ...p, mobile: undefined }));
              }}
              autoComplete="tel"
              placeholder="Enter your mobile number"
            />
            <p className="quote-modal-secure">
              Your number is used only to respond to this enquiry.
            </p>
            {errors.mobile ? (
              <p className="quote-modal-error">{errors.mobile}</p>
            ) : null}

            {submitError ? <p className="quote-modal-error">{submitError}</p> : null}

            <button
              type="submit"
              className="btn btn-primary quote-modal-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send enquiry'}
            </button>
          </form>
        )}

        <p className="quote-modal-terms">
          By sending a request, you agree we may contact you about this enquiry.
        </p>
      </div>
    </div>
  );
}
