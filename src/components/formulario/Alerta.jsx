import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Alerta = () => {
  return (
    <Stack sx={{ width: '100%', marginBottom: 3 }}>
      <Alert severity="error">Todos los campos son obligatorios</Alert>
    </Stack>
  )
}

export default Alerta
