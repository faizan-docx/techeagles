import React, { useState, useEffect, useRef } from 'react';
import './QRCodeGenerator.css';

const QRCodeGenerator = () => {
  const [currentType, setCurrentType] = useState('url');
  const [formData, setFormData] = useState({
    url: '',
    text: '',
    emailAddr: '',
    emailSubject: '',
    emailBody: '',
    phone: '',
    smsPhone: '',
    smsMessage: '',
    wifiSSID: '',
    wifiPassword: '',
    wifiSecurity: 'WPA',
    vcardName: '',
    vcardPhone: '',
    vcardEmail: '',
    vcardCompany: '',
    latitude: '',
    longitude: '',
    whatsappPhone: '',
    whatsappMessage: ''
  });
  const [qrCode, setQrCode] = useState(null);
  const [isQrGenerated, setIsQrGenerated] = useState(false);

  const inputSectionRef = useRef(null);
  const outputSectionRef = useRef(null);

  // Mouse tracking for glow effect
  useEffect(() => {
    const handleMouseMove = (e, section) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty('--mouse-x', x + '%');
      section.style.setProperty('--mouse-y', y + '%');
    };

    const sections = [inputSectionRef.current, outputSectionRef.current].filter(Boolean);
    
    sections.forEach(section => {
      const handler = (e) => handleMouseMove(e, section);
      section.addEventListener('mousemove', handler);
      
      return () => section.removeEventListener('mousemove', handler);
    });
  }, []);

  const handleTypeChange = (type) => {
    setCurrentType(type);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateQR = () => {
    let data = '';
    
    switch(currentType) {
      case 'url':
        data = formData.url;
        break;
      case 'text':
        data = formData.text;
        break;
      case 'email':
        const emailAddr = formData.emailAddr;
        const subject = formData.emailSubject;
        const body = formData.emailBody;
        data = `mailto:${emailAddr}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        break;
      case 'phone':
        data = `tel:${formData.phone}`;
        break;
      case 'sms':
        const smsPhone = formData.smsPhone;
        const smsMsg = formData.smsMessage;
        data = `sms:${smsPhone}?body=${encodeURIComponent(smsMsg)}`;
        break;
      case 'wifi':
        const ssid = formData.wifiSSID;
        const pass = formData.wifiPassword;
        const security = formData.wifiSecurity;
        data = `WIFI:T:${security};S:${ssid};P:${pass};;`;
        break;
      case 'vcard':
        const name = formData.vcardName;
        const phone = formData.vcardPhone;
        const email = formData.vcardEmail;
        const company = formData.vcardCompany;
        data = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL:${phone}\nEMAIL:${email}\nORG:${company}\nEND:VCARD`;
        break;
      case 'location':
        const lat = formData.latitude;
        const lon = formData.longitude;
        data = `geo:${lat},${lon}`;
        break;
      case 'whatsapp':
        const waPhone = formData.whatsappPhone.replace(/\+/g, '');
        const waMsg = formData.whatsappMessage;
        data = `https://wa.me/${waPhone}${waMsg ? '?text=' + encodeURIComponent(waMsg) : ''}`;
        break;
    }

    if (!data) {
      alert('Please fill in the required fields!');
      return;
    }

    // Clear previous QR code
    const wrapper = document.getElementById('qrcodeWrapper');
    if (wrapper) {
      wrapper.innerHTML = '<div class="qr-container"><div id="qrcode"></div></div>';
    }

    // Generate new QR code
    if (window.QRCode) {
      const newQrCode = new window.QRCode(document.getElementById('qrcode'), {
        text: data,
        width: 280,
        height: 280,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: window.QRCode.CorrectLevel.H
      });
      setQrCode(newQrCode);
      setIsQrGenerated(true);
    }
  };

  const downloadQR = () => {
    const canvas = document.querySelector('#qrcode canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `qrcix-${currentType}-${Date.now()}.png`;
      link.href = url;
      link.click();
    }
  };

  // Load QRCode library
  useEffect(() => {
    if (!window.QRCode) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const qrTypes = [
    { type: 'url', label: '🔗 URL' },
    { type: 'text', label: '📝 Text' },
    { type: 'email', label: '✉️ Email' },
    { type: 'phone', label: '📞 Phone' },
    { type: 'sms', label: '💬 SMS' },
    { type: 'wifi', label: '📶 WiFi' },
    { type: 'vcard', label: '👤 vCard' },
    { type: 'location', label: '📍 Location' },
    { type: 'whatsapp', label: '💚 WhatsApp' }
  ];

  return (
    <div className="qr-generator">
      <div className="header">
        <div className="logo">QRCix</div>
        <div className="tagline">by Tech Eagles</div>
      </div>

      <div className="container">
        <div className="main-grid">
          {/* Input Section */}
          <div className="input-section" ref={inputSectionRef}>
            <div className="section-title">Select QR Type</div>
            
            <div className="qr-types">
              {qrTypes.map(({ type, label }) => (
                <button
                  key={type}
                  className={`qr-type-btn ${currentType === type ? 'active' : ''}`}
                  onClick={() => handleTypeChange(type)}
                  data-type={type}
                >
                  {label}
                </button>
              ))}
            </div>

            <div id="inputFields">
              {/* URL */}
              <div className={`input-group ${currentType === 'url' ? 'active' : ''}`} data-type="url">
                <label>Website URL</label>
                <input 
                  type="url" 
                  value={formData.url}
                  onChange={(e) => handleInputChange('url', e.target.value)}
                  placeholder="https://example.com" 
                />
              </div>

              {/* Text */}
              <div className={`input-group ${currentType === 'text' ? 'active' : ''}`} data-type="text">
                <label>Your Text</label>
                <textarea 
                  value={formData.text}
                  onChange={(e) => handleInputChange('text', e.target.value)}
                  placeholder="Enter any text..."
                />
              </div>

              {/* Email */}
              <div className={`input-group ${currentType === 'email' ? 'active' : ''}`} data-type="email">
                <label>Email Address</label>
                <input 
                  type="email" 
                  value={formData.emailAddr}
                  onChange={(e) => handleInputChange('emailAddr', e.target.value)}
                  placeholder="email@example.com" 
                />
                <label style={{marginTop: '15px'}}>Subject (Optional)</label>
                <input 
                  type="text" 
                  value={formData.emailSubject}
                  onChange={(e) => handleInputChange('emailSubject', e.target.value)}
                  placeholder="Email subject" 
                />
                <label style={{marginTop: '15px'}}>Message (Optional)</label>
                <textarea 
                  value={formData.emailBody}
                  onChange={(e) => handleInputChange('emailBody', e.target.value)}
                  placeholder="Email message" 
                />
              </div>

              {/* Phone */}
              <div className={`input-group ${currentType === 'phone' ? 'active' : ''}`} data-type="phone">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+1234567890" 
                />
              </div>

              {/* SMS */}
              <div className={`input-group ${currentType === 'sms' ? 'active' : ''}`} data-type="sms">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.smsPhone}
                  onChange={(e) => handleInputChange('smsPhone', e.target.value)}
                  placeholder="+1234567890" 
                />
                <label style={{marginTop: '15px'}}>Message</label>
                <textarea 
                  value={formData.smsMessage}
                  onChange={(e) => handleInputChange('smsMessage', e.target.value)}
                  placeholder="SMS message" 
                />
              </div>

              {/* WiFi */}
              <div className={`input-group ${currentType === 'wifi' ? 'active' : ''}`} data-type="wifi">
                <label>Network Name (SSID)</label>
                <input 
                  type="text" 
                  value={formData.wifiSSID}
                  onChange={(e) => handleInputChange('wifiSSID', e.target.value)}
                  placeholder="MyWiFi" 
                />
                <label style={{marginTop: '15px'}}>Password</label>
                <input 
                  type="text" 
                  value={formData.wifiPassword}
                  onChange={(e) => handleInputChange('wifiPassword', e.target.value)}
                  placeholder="password123" 
                />
                <label style={{marginTop: '15px'}}>Security Type</label>
                <select 
                  value={formData.wifiSecurity}
                  onChange={(e) => handleInputChange('wifiSecurity', e.target.value)}
                >
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">No Password</option>
                </select>
              </div>

              {/* vCard */}
              <div className={`input-group ${currentType === 'vcard' ? 'active' : ''}`} data-type="vcard">
                <label>Full Name</label>
                <input 
                  type="text" 
                  value={formData.vcardName}
                  onChange={(e) => handleInputChange('vcardName', e.target.value)}
                  placeholder="John Doe" 
                />
                <label style={{marginTop: '15px'}}>Phone</label>
                <input 
                  type="tel" 
                  value={formData.vcardPhone}
                  onChange={(e) => handleInputChange('vcardPhone', e.target.value)}
                  placeholder="+1234567890" 
                />
                <label style={{marginTop: '15px'}}>Email</label>
                <input 
                  type="email" 
                  value={formData.vcardEmail}
                  onChange={(e) => handleInputChange('vcardEmail', e.target.value)}
                  placeholder="email@example.com" 
                />
                <label style={{marginTop: '15px'}}>Company</label>
                <input 
                  type="text" 
                  value={formData.vcardCompany}
                  onChange={(e) => handleInputChange('vcardCompany', e.target.value)}
                  placeholder="Company Name" 
                />
              </div>

              {/* Location */}
              <div className={`input-group ${currentType === 'location' ? 'active' : ''}`} data-type="location">
                <label>Latitude</label>
                <input 
                  type="text" 
                  value={formData.latitude}
                  onChange={(e) => handleInputChange('latitude', e.target.value)}
                  placeholder="28.6139" 
                />
                <label style={{marginTop: '15px'}}>Longitude</label>
                <input 
                  type="text" 
                  value={formData.longitude}
                  onChange={(e) => handleInputChange('longitude', e.target.value)}
                  placeholder="77.2090" 
                />
              </div>

              {/* WhatsApp */}
              <div className={`input-group ${currentType === 'whatsapp' ? 'active' : ''}`} data-type="whatsapp">
                <label>Phone Number (with country code)</label>
                <input 
                  type="tel" 
                  value={formData.whatsappPhone}
                  onChange={(e) => handleInputChange('whatsappPhone', e.target.value)}
                  placeholder="+1234567890" 
                />
                <label style={{marginTop: '15px'}}>Pre-filled Message (Optional)</label>
                <textarea 
                  value={formData.whatsappMessage}
                  onChange={(e) => handleInputChange('whatsappMessage', e.target.value)}
                  placeholder="Hello!" 
                />
              </div>
            </div>

            <button className="generate-btn" onClick={generateQR}>
              <span>Generate QR Code</span>
            </button>
          </div>

          {/* Output Section */}
          <div className="output-section" ref={outputSectionRef}>
            <div id="qrcodeWrapper">
              {!isQrGenerated ? (
                <div className="placeholder">
                  <div className="placeholder-icon">⬜</div>
                  <h3>Your QR Code Will Appear Here</h3>
                  <p style={{marginTop: '10px', fontSize: '0.9rem'}}>Select a type and generate your QR code</p>
                </div>
              ) : (
                <div className="qr-container">
                  <div id="qrcode"></div>
                </div>
              )}
            </div>
            <button 
              className="download-btn" 
              id="downloadBtn" 
              onClick={downloadQR} 
              disabled={!isQrGenerated}
            >
              <span>Download QR Code</span>
            </button>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-brand">QRCix</div>
        <div>A Product of Tech Eagles</div>
        <div style={{marginTop: '15px', fontSize: '0.85rem'}}>© 2025 MahaKumbrix Entrepreneurship. All rights reserved.</div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;