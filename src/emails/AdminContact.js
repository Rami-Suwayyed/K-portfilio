import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export const AdminContactNotificationEmail = ({ name, email, subject, message, ipAddress, submittedAt }) => (
  <Html>
    <Head />
    <Preview>New contact form submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Img
            src="https://media.licdn.com/dms/image/v2/D4E0BAQHvAL7d2ZoJZA/company-logo_200_200/B4EZeCxNSVG4AQ-/0/1750245627884/kabseh_jo_logo?e=1755734400&v=beta&t=TYR8ZrHcyUJwOsL_DYlzczA6SY79OMJ9MhBBblshXFc"
            alt="Kabseh Logo"
            style={logo}
          />
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Text style={alertBadge}>🔔 Requires Response</Text>
        </Section>

        <Section style={content}>
          <Section style={prioritySection}>
            <Text style={priorityText}>📋 Submission Details</Text>
            <Text style={timestampText}>Received: {submittedAt}</Text>
          </Section>

          <Section style={customerInfo}>
            <Text style={sectionTitle}>👤 Customer Information</Text>
            <Section style={infoGrid}>
              <Section style={infoItem}>
                <Text style={infoLabel}>Full Name</Text>
                <Text style={infoValue}>{name}</Text>
              </Section>
              <Section style={infoItem}>
                <Text style={infoLabel}>Email Address</Text>
                <Text style={infoValue}>{email}</Text>
              </Section>
            </Section>
          </Section>
          {subject && subject !== "" && message && message !== "" && (
            <Section style={inquirySection}>
              <Text style={sectionTitle}>💬 Inquiry Details</Text>
              <Section style={subjectContainer}>
                <Text style={infoLabel}>Subject</Text>
                <Text style={subjectText}>{subject}</Text>
              </Section>
              <Section style={messageContainer}>
                <Text style={infoLabel}>Message</Text>
                <Section style={messageContent}>
                  <Text style={messageText}>{message}</Text>
                </Section>
              </Section>
            </Section>
          )}
          <Section style={technicalInfo}>
            <Text style={sectionTitle}>🔧 Technical Information</Text>
            <Section style={techGrid}>
              <Text style={techItem}>
                <span style={techLabel}>IP Address:</span> {ipAddress}
              </Text>
              <Text style={techItem}>
                <span style={techLabel}>Platform:</span> Web Contact Form
              </Text>
            </Section>
          </Section>

          <Section style={actionSection}>
            <Text style={actionTitle}>⚡ Quick Actions</Text>
            <Text style={actionText}>
              • Reply directly to this email to respond to the customer<br />
              • Expected response time: 24-48 hours<br />
              • Priority level: Standard inquiry
            </Text>
          </Section>
        </Section>

        <Section style={footer}>
          <Text style={footerText}>
            This notification was generated automatically from the Kabseh contact form
          </Text>
          <Text style={footerText}>
            Admin Dashboard • Contact Management • Kabseh.com
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default AdminContactNotificationEmail;

const main = {
  backgroundColor: '#fff8f2',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  padding: '20px 0',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  maxWidth: '650px',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(79, 135, 101, 0.15)',
  border: '2px solid #4f8765',
};

const header = {
  backgroundColor: '#4f8765',
  padding: '32px 24px',
  textAlign: 'center',
};

const logo = {
  margin: '0 auto 20px auto',
  display: 'block',
};

const h1 = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: '700',
  margin: '0 0 16px 0',
  letterSpacing: '-0.5px',
};

const alertBadge = {
  backgroundColor: '#D90416',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  padding: '8px 16px',
  borderRadius: '20px',
  display: 'inline-block',
  margin: '0',
};

const content = {
  padding: '32px',
};

const prioritySection = {
  backgroundColor: '#fff8f2',
  borderRadius: '12px',
  padding: '20px',
  margin: '0 0 24px 0',
  border: '2px solid #D90416',
  textAlign: 'center',
};

const priorityText = {
  color: '#D90416',
  fontSize: '20px',
  fontWeight: '700',
  margin: '0 0 8px 0',
};

const timestampText = {
  color: '#4f8765',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
};

const sectionTitle = {
  color: '#4f8765',
  fontSize: '18px',
  fontWeight: '700',
  margin: '0 0 16px 0',
  borderBottom: '2px solid #D90416',
  paddingBottom: '8px',
};

const customerInfo = {
  backgroundColor: '#ffffff',
  border: '1px solid rgba(79, 135, 101, 0.2)',
  borderRadius: '12px',
  padding: '24px',
  margin: '0 0 24px 0',
};

const infoGrid = {
  display: 'block',
};

const infoItem = {
  margin: '0 0 16px 0',
};

const infoLabel = {
  color: '#4f8765',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 4px 0',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const infoValue = {
  color: '#333333',
  fontSize: '16px',
  fontWeight: '500',
  margin: '0',
  padding: '8px 12px',
  backgroundColor: '#fff8f2',
  borderRadius: '6px',
  border: '1px solid rgba(217, 4, 22, 0.1)',
};

const inquirySection = {
  backgroundColor: '#ffffff',
  border: '1px solid rgba(79, 135, 101, 0.2)',
  borderRadius: '12px',
  padding: '24px',
  margin: '0 0 24px 0',
};

const subjectContainer = {
  margin: '0 0 20px 0',
};

const subjectText = {
  color: '#333333',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0',
  padding: '12px 16px',
  backgroundColor: '#fff8f2',
  borderRadius: '8px',
  border: '2px solid #D90416',
};

const messageContainer = {
  margin: '0',
};

const messageContent = {
  backgroundColor: '#fff8f2',
  borderRadius: '8px',
  padding: '16px',
  border: '1px solid rgba(217, 4, 22, 0.2)',
  margin: '8px 0 0 0',
};

const messageText = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0',
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
};

const technicalInfo = {
  backgroundColor: '#f8f9fa',
  border: '1px solid rgba(79, 135, 101, 0.2)',
  borderRadius: '12px',
  padding: '20px',
  margin: '0 0 24px 0',
};

const techGrid = {
  margin: '0',
};

const techItem = {
  color: '#333333',
  fontSize: '14px',
  margin: '0 0 8px 0',
  fontFamily: 'Monaco, Consolas, "Courier New", monospace',
};

const techLabel = {
  color: '#4f8765',
  fontWeight: '600',
};

const actionSection = {
  backgroundColor: '#4f8765',
  borderRadius: '12px',
  padding: '24px',
  margin: '0',
};

const actionTitle = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '700',
  margin: '0 0 16px 0',
};

const actionText = {
  color: '#ffffff',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '0',
  opacity: '0.95',
};

const footer = {
  backgroundColor: '#333333',
  padding: '24px',
  textAlign: 'center',
};

const footerText = {
  color: '#ffffff',
  fontSize: '12px',
  lineHeight: '18px',
  margin: '0 0 8px 0',
  opacity: '0.8',
};