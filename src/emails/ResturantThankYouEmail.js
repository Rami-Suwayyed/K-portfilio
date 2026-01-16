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
  
  export const ResturantThankYouEmail = ({ name, nameOfOwner, email }) => (
    <Html>
      <Head />
      <Preview>Thank you for contacting Kabseh, {nameOfOwner}!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Img
              src="https://media.licdn.com/dms/image/v2/D4E0BAQHvAL7d2ZoJZA/company-logo_200_200/B4EZeCxNSVG4AQ-/0/1750245627884/kabseh_jo_logo?e=1755734400&v=beta&t=TYR8ZrHcyUJwOsL_DYlzczA6SY79OMJ9MhBBblshXFc"
              alt="Kabseh Logo"
              style={logo}
            />
          </Section>
          
          <Section style={header}>
            <Heading style={h1}>Thank You for Contacting Us!</Heading>
            <Text style={subtitle}>We appreciate you reaching out to the Kabseh team</Text>
          </Section>
          
          <Section style={content}>
            <Text style={greeting}>Hello {nameOfOwner},</Text>
            
            <Text style={text}>
              Thank you for getting in touch with us! Your message has been successfully 
              received and our dedicated support team will respond within 24-48 hours.
            </Text>
            
            <Section style={messageContainer}>
              <Text style={messageLabel}>📋 Message Summary</Text>
              <Section style={messageDetails}>
                <Text style={messageSubject}>
                  <span style={labelText}>Name:</span> {name}
                  <span style={labelText}>Name of Owner:</span> {nameOfOwner}
                  <span style={labelText}>Email:</span> {email}
                </Text>
              </Section>
            </Section>
            
            <Section style={ctaSection}>
              <Text style={text}>
                Need immediate assistance? We&apos;re here to help!
              </Text>
              <Text style={contactInfo}>
                📞 Call us: +1 (555) 123-4567<br />
                ✉️ Email: support@kabseh.com
              </Text>
            </Section>
            
            <Text style={signatureText}>
              Warm regards,<br />
              <span style={teamName}>The Kabseh Support Team</span>
            </Text>
          </Section>
          
          <Section style={footer}>
            <Text style={footerText}>
              You received this email because you submitted a resturant registration form on kabseh.com
            </Text>
            <Text style={footerCopyright}>
              © 2024 Kabseh. All rights reserved.
            </Text>
            <Section style={socialSection}>
              <Text style={footerText}>
                Follow us for delicious updates and recipes!
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default ResturantThankYouEmail;
  
  const main = {
    backgroundColor: '#fff8f2',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    padding: '20px 0',
  };
  
  const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    maxWidth: '600px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(217, 4, 22, 0.1)',
  };
  
  const logoSection = {
    backgroundColor: '#D90416',
    padding: '32px 24px',
    textAlign: 'center',
  };
  
  const logo = {
    margin: '0 auto',
    display: 'block',
  };
  
  const header = {
    backgroundColor: 'linear-gradient(135deg, #D90416 0%, #4f8765 100%)',
    padding: '40px 24px 32px',
    textAlign: 'center',
    background: '#D90416',
  };
  
  const h1 = {
    color: '#ffffff',
    fontSize: '32px',
    fontWeight: '700',
    margin: '0 0 12px 0',
    letterSpacing: '-0.5px',
  };
  
  const subtitle = {
    color: '#ffffff',
    fontSize: '16px',
    margin: '0',
    opacity: '0.9',
    fontWeight: '400',
  };
  
  const content = {
    padding: '40px 32px',
  };
  
  const greeting = {
    color: '#D90416',
    fontSize: '20px',
    fontWeight: '600',
    margin: '0 0 24px 0',
  };
  
  const text = {
    color: '#333333',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '0 0 24px 0',
  };
  
  const messageContainer = {
    backgroundColor: '#fff8f2',
    border: '2px solid #D90416',
    borderRadius: '16px',
    padding: '24px',
    margin: '32px 0',
  };
  
  const messageLabel = {
    color: '#D90416',
    fontSize: '18px',
    fontWeight: '700',
    margin: '0 0 20px 0',
    textAlign: 'center',
  };
  
  const messageDetails = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid rgba(217, 4, 22, 0.1)',
  };
  
  const labelText = {
    color: '#4f8765',
    fontWeight: '600',
  };
  
  const messageSubject = {
    color: '#333333',
    fontSize: '15px',
    margin: '0 0 16px 0',
    lineHeight: '22px',
  };
  
  const messageText = {
    color: '#333333',
    fontSize: '15px',
    margin: '0 0 12px 0',
    lineHeight: '22px',
  };
  
  const messageContent = {
    backgroundColor: '#fff8f2',
    borderRadius: '8px',
    padding: '16px',
    border: '1px solid rgba(217, 4, 22, 0.1)',
  };
  
  const messageContentText = {
    color: '#333333',
    fontSize: '15px',
    lineHeight: '24px',
    margin: '0',
    wordWrap: 'break-word',
  };
  
  const ctaSection = {
    backgroundColor: '#fff8f2',
    borderRadius: '12px',
    padding: '24px',
    margin: '32px 0',
    textAlign: 'center',
  };
  
  const contactInfo = {
    color: '#4f8765',
    fontSize: '16px',
    fontWeight: '600',
    margin: '16px 0 0 0',
    lineHeight: '28px',
  };
  
  const signatureText = {
    color: '#333333',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '32px 0 0 0',
  };
  
  const teamName = {
    color: '#D90416',
    fontWeight: '600',
  };
  
  const footer = {
    backgroundColor: '#4f8765',
    padding: '32px 24px',
    textAlign: 'center',
  };
  
  const footerText = {
    color: '#ffffff',
    fontSize: '14px',
    lineHeight: '22px',
    margin: '0 0 12px 0',
    opacity: '0.9',
  };
  
  const footerCopyright = {
    color: '#ffffff',
    fontSize: '13px',
    margin: '20px 0 0 0',
    fontWeight: '600',
  };
  
  const socialSection = {
    margin: '24px 0 0 0',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  };