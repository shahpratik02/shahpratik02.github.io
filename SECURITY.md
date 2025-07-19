# Security Guidelines

## Overview
This document outlines security best practices for this React portfolio project.

## Implemented Security Measures

### 1. Security Headers
- **X-Frame-Options: DENY** - Prevents clickjacking attacks
- **X-XSS-Protection: 1; mode=block** - Enables XSS protection in older browsers
- **X-Content-Type-Options: nosniff** - Prevents MIME type sniffing
- **Referrer-Policy: strict-origin-when-cross-origin** - Controls referrer information
- **Content-Security-Policy** - Restricts resource loading to prevent XSS

### 2. Secure Navigation
- All internal links use React Router's `Link` component
- External links should include `rel="noopener noreferrer"` when needed

### 3. Input Sanitization
- Chart component validates and sanitizes configuration inputs
- CSS injection prevention in dynamic style generation

## Development Guidelines

### Safe Coding Practices
1. **Always validate external data** before using in components
2. **Use React Router `Link`** instead of anchor tags for internal navigation
3. **Sanitize dynamic CSS** when using `dangerouslySetInnerHTML`
4. **Avoid inline styles** from untrusted sources
5. **Use semantic design tokens** instead of raw color values

### Security Checklist for New Features
- [ ] Validate all external inputs
- [ ] Use React Router for navigation
- [ ] Sanitize any dynamic content
- [ ] Follow CSP guidelines for external resources
- [ ] Test with security headers enabled

### Reporting Security Issues
If you discover a security vulnerability, please report it responsibly by contacting the maintainer directly rather than opening a public issue.

## Dependencies
This project uses trusted, well-maintained dependencies:
- React Router for secure client-side routing
- Radix UI components for accessible, secure UI elements
- Tailwind CSS for styling without inline CSS vulnerabilities

## Regular Security Maintenance
- Keep dependencies updated
- Review security advisories for used packages
- Test with latest browser security features
- Monitor for new security best practices