import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Model() {
  document.querySelector('body').style.backgroundColor = '#48575fff';
  let [question, setquestion] = useState('');
  let [response, setResponse] = useState('');

  const askqes = async () => {
    const payload = {
      contents: [
        {
          parts: [
            {
              text: question
            }
          ]
        }
      ]
    };
    try {
      let res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': 'AIzaSyBLtzETDUDBGUzXF8Y_WqJkITcMzhGVD1o' // Replace with your actual API key
        },
        body: JSON.stringify(payload)
      });
      let data = await res.json();
      setResponse(data.candidates[0].content.parts[0].text); // Store the response in the state
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div style={{ 
      textAlign: 'center', 
      alignContent: 'center', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <div style={{ 
        backgroundColor: '#0a0505ff', 
        color: 'white', 
        textAlign: 'center', 
        padding: '20px', 
        borderRadius: '10px', 
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' 
      }}>
        <h1 style={{ fontSize: '36px' }}><b>👨‍🚀🚀⛄ WELCOME TO LYSIUM-AI ⛄🚀👨‍🚀</b></h1>
      </div>
      <div style={{ 
        textAlign: 'center', 
        color: 'white', 
        marginTop: '50px', 
        backgroundColor: '#333333', 
        padding: '40px', 
        borderRadius: '20px', 
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.7)' 
      }}>
        <Box sx={{ width: 500, maxWidth: '100%' }}>
          <TextField 
            fullWidth 
            label="Ask Anything" 
            value={question} 
            onChange={(event) => setquestion(event.target.value)} 
            id="fullWidth" 
            InputLabelProps={{ style: { color: '#ffffff' } }} 
            inputProps={{ style: { color: '#ffffff' } }} 
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ffffff',
                },
                '&:hover fieldset': {
                  borderColor: '#ffffff',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ffffff',
                },
              },
            }}
          />
        </Box>
        <div style={{ marginTop: '20px' }}>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button 
              onClick={() => askqes()} 
              variant="contained" 
              sx={{ 
                backgroundColor: '#4CAF50', 
                '&:hover': {
                  backgroundColor: '#3e8e41',
                },
              }}
            >
              Send ➤
            </Button>
          </Stack>
        </div>
        <div style={{ marginTop: '20px', color: 'white', textAlign: 'left', padding: '20px', backgroundColor: '#444444', borderRadius: '10px' }}>
          <h3>Response:</h3>
          <p>{response}</p> {/* Display the response here */}
        </div>
      </div>
    </div>
  );
}


 