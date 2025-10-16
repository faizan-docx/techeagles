import React, { useEffect, useRef, useState } from 'react';
import './QRCodeGenerator.css';

const QRCodeGenerator = () => {
  const [selectedType, setSelectedType] = useState('URL');
  const [websiteUrl, setWebsiteUrl] = useState('https://example.com');
  const [qrCodeData, setQrCodeData] = useState(null);
  const [qrLibReady, setQrLibReady] = useState(false);
  const qrContainerRef = useRef(null);

  const qrTypes = [
    'URL', 'Text', 'Email',
    'Phone', 'SMS', 'WIFI',
    'vCard', 'Location', 'WhatsApp'
  ];

  const handleGenerateQRCode = () => {
    const qrData = {
      type: selectedType,
      content: selectedType === 'URL' ? websiteUrl : `Sample ${selectedType} data`,
      timestamp: new Date().toISOString()
    };
    setQrCodeData(qrData);

    // Render actual QR using qrcodejs when available
    if (qrLibReady && qrContainerRef.current) {
      qrContainerRef.current.innerHTML = '';
      // eslint-disable-next-line no-undef
      new window.QRCode(qrContainerRef.current, {
        text: qrData.content,
        width: 150,
        height: 150,
        colorDark: '#000000',
        colorLight: '#ffffff',
        // eslint-disable-next-line no-undef
        correctLevel: window.QRCode.CorrectLevel.M
      });
    }
  };

  const handleDownload = () => {
    if (!qrCodeData || !qrContainerRef.current) return;
    const canvas = qrContainerRef.current.querySelector('canvas');
    const img = qrContainerRef.current.querySelector('img');
    const dataUrl = canvas ? canvas.toDataURL('image/png') : (img && img.src ? img.src : null);
    if (!dataUrl) return;
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Load qrcodejs from CDN once
  useEffect(() => {
    if (window.QRCode) {
      setQrLibReady(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
    script.async = true;
    script.onload = () => setQrLibReady(true);
    script.onerror = () => setQrLibReady(false);
    document.body.appendChild(script);
    return () => {
      // keep the script loaded
    };
  }, []);

  return (
    <div className="qr-generator">
      <header className="header">
        <h1 className="logo"># QRCix</h1>
        <p className="subtitle">BY TECH EAGLES</p>
      </header>

      <section className="qr-type-section">
        <h2 className="section-title">Select QR Type</h2>
        <div className="qr-type-grid">
          {qrTypes.map((type) => (
            <button
              key={type}
              className={`qr-type-btn ${selectedType === type ? 'active' : ''}`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      <section className="input-section">
        {selectedType === 'URL' && (
          <div className="input-group">
            <label htmlFor="website-url">Website URL</label>
            <input
              id="website-url"
              type="text"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="https://example.com"
            />
          </div>
        )}
        {selectedType !== 'URL' && (
          <div className="input-group">
            <label>{selectedType} Content</label>
            <input
              type="text"
              placeholder={`Enter ${selectedType} content...`}
            />
          </div>
        )}
      </section>

      <div className="divider"></div>

      <section className="generate-section">
        <button className="generate-btn" onClick={handleGenerateQRCode}>
          GENERATE QR CODE
        </button>
      </section>

      <div className="divider"></div>

      <section className="qr-display-section">
        <div className="qr-display">
          {qrCodeData ? (
            <div className="qr-code-preview">
              <div className="qr-code-placeholder">
                <div ref={qrContainerRef} id="qrcode" />
              </div>
              <p className="qr-content">{qrCodeData.content}</p>
              <button className="download-btn" onClick={handleDownload}>
                DOWNLOAD QR CODE
              </button>
            </div>
          ) : (
            <div className="qr-placeholder">
              <p>Your QR Code Will Appear Here</p>
              <p className="placeholder-subtext">
                Select a type and generate your QR code
              </p>
              <button className="download-btn disabled" disabled>
                DOWNLOAD QR CODE
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default QRCodeGenerator;




