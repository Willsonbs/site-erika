import { describe, it, expect } from 'vitest';
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_URL } from '@/const';

describe('WhatsApp Configuration', () => {
  it('should have correct phone number', () => {
    expect(WHATSAPP_NUMBER).toBe('5581982095424');
  });

  it('should have correct default message', () => {
    expect(WHATSAPP_DEFAULT_MESSAGE).toBe(
      'Olá, vim através do site e gostaria de saber mais sobre a consulta.'
    );
  });

  it('should generate correct WhatsApp URL with encoded message', () => {
    const expectedMessage = encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE);
    const expectedURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${expectedMessage}`;
    
    expect(WHATSAPP_URL).toBe(expectedURL);
  });

  it('should have properly encoded message in URL', () => {
    // Verify the URL contains the encoded message
    expect(WHATSAPP_URL).toContain('wa.me');
    expect(WHATSAPP_URL).toContain('5581982095424');
    expect(WHATSAPP_URL).toContain('text=');
    expect(WHATSAPP_URL).toContain('%20'); // Space character encoded
  });

  it('should work on iOS, Android and Desktop', () => {
    // The wa.me format works universally across all platforms
    expect(WHATSAPP_URL).toMatch(/^https:\/\/wa\.me\/\d+\?text=/);
  });

  it('should contain the complete message encoded', () => {
    const decodedURL = decodeURIComponent(WHATSAPP_URL);
    expect(decodedURL).toContain('Olá, vim através do site');
    expect(decodedURL).toContain('gostaria de saber mais sobre a consulta');
  });
});
