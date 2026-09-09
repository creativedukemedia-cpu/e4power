import { describe, expect, it } from 'vitest';
import { inquiryRouting, normalizeContactInquiry } from './cmsRoutes';

describe('contact inquiry routing', () => {
  const validInquiry = {
    name: 'Avery Smith',
    email: 'avery@example.org',
    inquiryTopic: 'Grants, Funding Opportunities & Proposal Support',
    organizationType: 'College / University / HBCU',
    message: 'We need proposal support for a January deadline.',
  };

  it('maps proposal support to the grants and research development routing lane', () => {
    const normalized = normalizeContactInquiry(validInquiry);
    expect('value' in normalized).toBe(true);
    if (!('value' in normalized)) return;
    expect(normalized.value.routingLane).toBe('Grants and Research Development');
    expect(normalized.value.routingReason).toBe('Funding opportunities, proposal support, and grant strategy');
    expect(normalized.value.status).toBe('new');
  });

  it('maps each published inquiry topic to a defined internal routing lane', () => {
    const topics = Object.keys(inquiryRouting);
    expect(topics).toHaveLength(11);
    topics.forEach((topic) => {
      const normalized = normalizeContactInquiry({ ...validInquiry, inquiryTopic: topic });
      expect('value' in normalized).toBe(true);
    });
  });

  it('rejects incomplete, invalid, and unsupported inquiry payloads', () => {
    expect(normalizeContactInquiry({ ...validInquiry, email: 'invalid-email' })).toEqual({
      error: 'Please enter a valid email address.',
    });
    expect(normalizeContactInquiry({ ...validInquiry, inquiryTopic: 'Unsupported topic' })).toEqual({
      error: 'Please select a listed inquiry topic and organization type.',
    });
    expect(normalizeContactInquiry({ ...validInquiry, message: ' ' })).toEqual({
      error: 'Please complete each inquiry field.',
    });
  });
});
