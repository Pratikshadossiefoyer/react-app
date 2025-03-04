import React from "react";
import { Container, TextField, Button, Checkbox, FormControlLabel, Typography, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const Login2 = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 8, bgcolor: "#0d1117", color: "#fff", p: 3, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Sign In
      </Typography>
      <TextField fullWidth margin="normal" label="Email" variant="outlined" InputProps={{ style: { color: "white" } }} sx={{ input: { bgcolor: "#161b22", borderRadius: 1 } }} />
      <TextField fullWidth margin="normal" label="Password" type="password" variant="outlined" InputProps={{ style: { color: "white" } }} sx={{ input: { bgcolor: "#161b22", borderRadius: 1 } }} />
      <FormControlLabel control={<Checkbox sx={{ color: "white" }} />} label="Remember me" />
      <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: "white", color: "black" }}>
        Sign In
      </Button>
      <Typography variant="body2" align="center" sx={{ mt: 2, cursor: "pointer" }}>
        Forgot your password?
      </Typography>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        or
      </Typography>
      <Box display="flex" flexDirection="column" gap={1} mt={2}>
        <Button startIcon={<GoogleIcon />} fullWidth variant="outlined" sx={{ color: "white", borderColor: "gray" }}>
          Sign in with Google
        </Button>
        <Button startIcon={<FacebookIcon />} fullWidth variant="outlined" sx={{ color: "white", borderColor: "gray" }}>
          Sign in with Facebook
        </Button>
      </Box>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Don't have an account? <span style={{ color: "#1e90ff", cursor: "pointer" }}>Sign up</span>
      </Typography>
    </Container>
  );
};

export default Login2;
