import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link
    const mailtoLink = `mailto:beatakonya@gmail.com?subject=Message from ${name} (${email})&body=${message}`;

    // Open the user's default email client with the pre-filled email details
    window.location.href = mailtoLink;

    // Clear form fields after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>Contact Me</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={message}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Contact;

