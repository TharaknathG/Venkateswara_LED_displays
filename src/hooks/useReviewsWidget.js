import { useEffect, useRef, useState } from 'react';
import {
  ELFSIGHT_APP_ID,
  REVIEWS_WIDGET_PROVIDER,
  TRUSTINDEX_LOADER_URL,
  isReviewsWidgetConfigured,
} from '../config/reviewsWidget';

const ELFSIGHT_SCRIPT_ID = 'elfsight-platform-script';

function loadScriptInHead({ id, src, attributes = {} }) {
  if (id && document.getElementById(id)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    if (id) script.id = id;
    script.src = src;
    script.defer = true;
    script.async = true;
    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('WIDGET_SCRIPT_FAILED'));
    document.head.appendChild(script);
  });
}

/** Trustindex: inject loader script inside the host element (same as pasting embed code). */
export function useTrustindexWidget(hostRef) {
  const [status, setStatus] = useState(() =>
    isReviewsWidgetConfigured() ? 'loading' : 'unconfigured',
  );

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !TRUSTINDEX_LOADER_URL) {
      setStatus('unconfigured');
      return undefined;
    }

    host.innerHTML = '';
    const script = document.createElement('script');
    script.defer = true;
    script.async = true;
    script.src = TRUSTINDEX_LOADER_URL;
    script.onload = () => setStatus('ready');
    script.onerror = () => setStatus('error');
    host.appendChild(script);

    return () => {
      host.innerHTML = '';
    };
  }, [hostRef]);

  return status;
}

export function useElfsightWidget() {
  const [status, setStatus] = useState(() =>
    ELFSIGHT_APP_ID ? 'loading' : 'unconfigured',
  );

  useEffect(() => {
    if (!ELFSIGHT_APP_ID) {
      setStatus('unconfigured');
      return undefined;
    }

    let cancelled = false;

    loadScriptInHead({
      id: ELFSIGHT_SCRIPT_ID,
      src: 'https://static.elfsight.com/platform/platform.js',
      attributes: { 'data-use-service-core': '' },
    })
      .then(() => {
        if (!cancelled) setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return status;
}

export function useReviewsWidget() {
  const trustindexHostRef = useRef(null);
  const provider = REVIEWS_WIDGET_PROVIDER;
  const trustindexStatus = useTrustindexWidget(trustindexHostRef);
  const elfsightStatus = useElfsightWidget();

  const status =
    provider === 'elfsight'
      ? elfsightStatus
      : isReviewsWidgetConfigured()
        ? trustindexStatus
        : 'unconfigured';

  return {
    status,
    provider,
    elfsightAppId: ELFSIGHT_APP_ID,
    trustindexHostRef,
  };
}
